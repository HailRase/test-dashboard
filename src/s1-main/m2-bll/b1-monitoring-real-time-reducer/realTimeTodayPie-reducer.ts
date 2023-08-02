import {ThunkAction} from "redux-thunk";
import {StoreType} from "../store";
import {monitoringCCRealTimeAPI} from "../../m3-dal/d2-api/monitoringCCRealTimeAPI";

const SET_REAL_TIME_TODAY_PIE_DATA = "SET_REAL_TIME_TODAY_PIE_DATA";
const SET_REAL_TIME_TODAY_PIE_TOTAL_DATA = "SET_REAL_TIME_TODAY_PIE_TOTAL_DATA";
const SET_REAL_TIME_TODAY_PIE_STATUS = "SET_REAL_TIME_TODAY_PIE_STATUS"
const SET_REAL_TIME_TODAY_PIE_ERROR = "SET_REAL_TIME_TODAY_PIE_ERROR"

type DataThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionDataType>;


type ActionDataType = ReturnType<typeof setRealTimeTodayPieTotalData> |ReturnType<typeof setRealTimeTodayPieData> | ReturnType<typeof setRealTimeTodayPieStatus>
    | ReturnType<typeof setError>

export type RealTimeTodayPieDataType = {
    name: string
    value: number
    fill: string
    index: number
}
export type RealTimeTodayPieTotalDataType = {
    name: string
    value: number
    fill: string
}
export type StatusType = "init" | "loading" | "loaded" | "error"
type InitState = {
    data: RealTimeTodayPieDataType[],
    totalData: RealTimeTodayPieTotalDataType[]
    status: StatusType,
    errorMessage: string,
}
const initialState:InitState = {
    data: [
        {name: 'НОД-6', value: 1/*totalCallReducer('Видеотерминалы')*/, fill: '', index: 8},
        {name: 'НОД-5', value: 1/*totalCallReducer('Видеотерминалы')*/, fill: '', index: 9},
        {name: 'НОД-4', value: 1/*totalCallReducer('Видеотерминалы')*/, fill: '', index: 10},
        {name: 'НОД-3', value: 1/*totalCallReducer('Видеотерминалы')*/, fill: '', index: 11},
        {name: 'НОД-2', value: 1/*totalCallReducer('Видеотерминалы')*/, fill: '', index: 12},
        {name: 'НОД-1', value: 1/*totalCallReducer('Видеотерминалы')*/, fill: '', index: 13},
        {name: 'Белтел Могилёвская', value: 151 /*totalCallReducer('GSM')*/, fill: '', index: 1},
        {name: 'Белтел Минская', value: 712 /*totalCallReducer('39-48-75')*/, fill: '', index: 2},
        {name: 'Белтел Гродненская', value: 134 /*totalCallReducer('39-25-47')*/, fill: '', index: 3},
        {name: 'Белтел Гомельская', value: 256 /*totalCallReducer('151 Other')*/, fill: '', index: 4},
        {name: 'Белтел Витебская', value: 183/*totalCallReducer('151 GSM')*/, fill: '', index: 5},
        {name: 'Белтел Брестская', value: 252/*totalCallReducer('151 Beltelecom')*/, fill: '', index: 6},
        {name: 'Repeat call', value: 76/*totalCallReducer('151 Beltelecom')*/, fill: '', index: 7},
        {name: 'MTC', value: 1309/*totalCallReducer('105 Other')*/, fill: '', index: 14},
        {name: 'Life', value: 163 /*totalCallReducer('105 GSM')*/, fill: '', index: 15},
        {name: 'International', value: 16/*totalCallReducer('105 Beltelecom')*/, fill: '', index: 16},
        {name: 'A1', value: 1107/*totalCallReducer('105 Beltelecom')*/, fill: '', index: 17},
    ],
    totalData: [{name: 'Пропущено', value: 511, fill: ''},
        {name: 'Принято', value: 3534, fill: ''},],
    status: 'init',
    errorMessage: ''
}
export const dataColors = [
    '#fd3101',
    '#489f48',
    '#7eb9f6',
    '#02bbd0',
    '#f1a492',
    '#7c84b8',
    '#76c5e7',
    '#b3b3d9',
    '#ef9288',
    '#c94322',
    '#6171c5',
    '#d4830e',
    '#50878d',
    '#64b280',
    '#7dbecf',
    '#ec977d',
    '#fcea87'
]
export const totalDataColor = ['#4bb253','#e70707']
export const realTimeTodayPieReducer = (state = initialState, action: ActionDataType) => {
    switch (action.type) {
        case SET_REAL_TIME_TODAY_PIE_DATA: {
            return {
                ...state,
                data: action.data
            }
        }
        case SET_REAL_TIME_TODAY_PIE_TOTAL_DATA: {
            return {
                ...state,
                totalData: action.totalData
            }
        }
        case SET_REAL_TIME_TODAY_PIE_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_REAL_TIME_TODAY_PIE_ERROR: {
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
const setRealTimeTodayPieData = (data: RealTimeTodayPieDataType[])  => {
    return {
        type: SET_REAL_TIME_TODAY_PIE_DATA,
        data
    } as const
};
const setRealTimeTodayPieTotalData = (totalData: RealTimeTodayPieTotalDataType[])  => {
    return {
        type: SET_REAL_TIME_TODAY_PIE_TOTAL_DATA,
        totalData
    } as const
};
const setRealTimeTodayPieStatus = (status:StatusType) => {
    return {
        type: SET_REAL_TIME_TODAY_PIE_STATUS,
        status
    } as const
}
const setError = (errorMessage:string) => {
    return {
        type: SET_REAL_TIME_TODAY_PIE_ERROR,
        errorMessage
    } as const
}
export const fetchRealTimeTodayPieData =  ():DataThunkAction => async(dispatch)  => {
    try {
        dispatch(setRealTimeTodayPieStatus("loading"))
        const innerData = await monitoringCCRealTimeAPI.getTodayRealTimeInnerPieData()
        const outerData = await monitoringCCRealTimeAPI.getTodayRealTimeOuterPieData()
        const changedInnerData = [...innerData.data.map((obj: RealTimeTodayPieTotalDataType, index: number) => {
            return {
                ...obj,
                fill: totalDataColor[index]
            }
        })]
        /*console.log("Внутренний кружок: " +JSON.stringify(changedInnerData))*/
        const changedOuterData = [...outerData.data.map((obj: RealTimeTodayPieDataType, index: number) => {
            return {
                ...obj,
                fill: dataColors[index]
            }
        })]
        /*console.log("Внешний кружок: " +JSON.stringify(changedOuterData))*/
        dispatch(setRealTimeTodayPieTotalData(changedInnerData))
        dispatch(setRealTimeTodayPieData(changedOuterData))
        dispatch(setRealTimeTodayPieStatus("loaded"))
    } catch (e: any) {
        dispatch(setRealTimeTodayPieStatus("error"))
        dispatch(setError(e.message))
    }
}