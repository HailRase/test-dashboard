import {ThunkAction} from "redux-thunk";
import {StoreType} from "../store";
import {monitoringCCPastAPI} from "../../m3-dal/d2-api/monitoringCCPastAPI";

const SET_PAST_PIE_DATA = "SET_PAST_PIE_DATA";
const SET_PAST_PIE_TOTAL_DATA = "SET_PAST_PIE_TOTAL_DATA";
const SET_PAST_PIE_STATUS = "SET_PAST_PIE_STATUS"
const SET_PAST_PIE_ERROR = "SET_PAST_PIE_ERROR"

type DataThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionDataType>;


type ActionDataType =
    ReturnType<typeof setPastPieTotalData>
    | ReturnType<typeof setPastPieData>
    | ReturnType<typeof setPastPieStatus>
    | ReturnType<typeof setError>

export type PastPieDataType = {
    name: string
    value: number
    fill: string
}
export type PastPieTotalDataType = {
    name: string
    value: number
    fill: string
}
export type StatusType = "init" | "loading" | "loaded" | "error"
type InitState = {
    data: PastPieDataType[],
    totalData: PastPieTotalDataType[]
    status: StatusType,
    errorMessage: string,
}
const initialState: InitState = {
    data: [
        {name: 'НОД-6', value: 1/*totalCallReducer('Видеотерминалы')*/, fill: ''},
        {name: 'НОД-5', value: 1/*totalCallReducer('Видеотерминалы')*/, fill: ''},
        {name: 'НОД-4', value: 1/*totalCallReducer('Видеотерминалы')*/, fill: ''},
        {name: 'НОД-3', value: 1/*totalCallReducer('Видеотерминалы')*/, fill: ''},
        {name: 'НОД-2', value: 1/*totalCallReducer('Видеотерминалы')*/, fill: ''},
        {name: 'НОД-1', value: 1/*totalCallReducer('Видеотерминалы')*/, fill: ''},
        {name: 'Белтел Могилёвская', value: 1 /*totalCallReducer('GSM')*/, fill: ''},
        {name: 'Белтел Минская', value: 1 /*totalCallReducer('39-48-75')*/, fill: ''},
        {name: 'Белтел Гродненская', value: 1 /*totalCallReducer('39-25-47')*/, fill: ''},
        {name: 'Белтел Гомельская', value: 1 /*totalCallReducer('151 Other')*/, fill: ''},
        {name: 'Белтел Витебская', value: 1/*totalCallReducer('151 GSM')*/, fill: ''},
        {name: 'Белтел Брестская', value: 1/*totalCallReducer('151 Beltelecom')*/, fill: ''},
        {name: 'Repeat call', value: 1/*totalCallReducer('151 Beltelecom')*/, fill: ''},
        {name: 'MTC', value: 1/*totalCallReducer('105 Other')*/, fill: ''},
        {name: 'Life', value: 1 /*totalCallReducer('105 GSM')*/, fill: ''},
        {name: 'International', value: 1/*totalCallReducer('105 Beltelecom')*/, fill: ''},
        {name: 'A1', value: 1/*totalCallReducer('105 Beltelecom')*/, fill: ''}
    ],
    totalData: [
        {name: 'Пропущено', value: 1, fill: ''},
        {name: 'Принято', value: 1, fill: ''}
    ],
    status: 'init',
    errorMessage: ''
}
const dataColors = ['#b3b3d9', '#ef9288', '#c94322', '#6171c5', '#d4830e', '#50878d', '#64b280', '#7dbecf', '#ec977d',
    '#fcea87', '#76c5e7', '#7c84b8', '#f1a492', '#02bbd0', '#489f48', '#7eb9f6', '#fd3101']
const totalDataColor = ['#e70707', '#4bb253']
export const pastPieReducer = (state = initialState, action: ActionDataType) => {
    switch (action.type) {
        case SET_PAST_PIE_DATA: {
            return {
                ...state,
                data: action.data
            }
        }
        case SET_PAST_PIE_TOTAL_DATA: {
            return {
                ...state,
                totalData: action.totalData
            }
        }
        case SET_PAST_PIE_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_PAST_PIE_ERROR: {
            return {
                ...state,
                errorMessage: action.errorMessage
            }
        }
        default: {
            return state
        }
    }
}
const setPastPieData = (data: PastPieDataType[]) => {
    return {
        type: SET_PAST_PIE_DATA,
        data
    } as const
};
const setPastPieTotalData = (totalData: PastPieTotalDataType[]) => {
    return {
        type: SET_PAST_PIE_TOTAL_DATA,
        totalData
    } as const
};
const setPastPieStatus = (status: StatusType) => {
    return {
        type: SET_PAST_PIE_STATUS,
        status
    } as const
}
const setError = (errorMessage: string) => {
    return {
        type: SET_PAST_PIE_ERROR,
        errorMessage
    } as const
}
export const fetchPastPieData = (dateStart: string, timeStart: string, dateEnd: string, timeEnd: string): DataThunkAction => async (dispatch) => {
    try {
        dispatch(setPastPieStatus("loading"))
        const innerData = await monitoringCCPastAPI.getPastInnerPieData(dateStart, timeStart, dateEnd, timeEnd)
        const outerData = await monitoringCCPastAPI.getPastOuterPieData(dateStart, timeStart, dateEnd, timeEnd)
        const changedInnerData = [...innerData.data.map((obj: PastPieTotalDataType, index: number) => {
            return {
                ...obj,
                fill: totalDataColor[index]
            }
        })]
        const changedOuterData = [...outerData.data.map((obj: PastPieDataType, index: number) => {
            return {
                ...obj,
                fill: dataColors[index]
            }
        })]
        dispatch(setPastPieTotalData(changedInnerData))
        dispatch(setPastPieData(changedOuterData))
        dispatch(setPastPieStatus("loaded"))
    } catch (e: any) {
        dispatch(setPastPieStatus("error"))
        dispatch(setError(e.message))
    }
}