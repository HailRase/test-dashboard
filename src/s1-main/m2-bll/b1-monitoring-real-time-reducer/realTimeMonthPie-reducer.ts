import {ThunkAction} from "redux-thunk";
import {StoreType} from "../store";
import {monitoringCCRealTimeAPI} from "../../m3-dal/d2-api/monitoringCCRealTimeAPI";

const SET_REAL_TIME_MONTH_PIE_DATA = "SET_REAL_TIME_MONTH_PIE_DATA";
const SET_REAL_TIME_MONTH_PIE_TOTAL_DATA = "SET_REAL_TIME_MONTH_PIE_TOTAL_DATA";
const SET_REAL_TIME_MONTH_PIE_STATUS = "SET_REAL_TIME_MONTH_PIE_STATUS"
const SET_REAL_TIME_MONTH_PIE_ERROR = "SET_REAL_TIME_MONTH_PIE_ERROR"

type DataThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionDataType>;


type ActionDataType = ReturnType<typeof setRealTimeMonthPieTotalData> |ReturnType<typeof setRealMonthTodayPieData>
    | ReturnType<typeof setRealTimeMonthPieStatus> | ReturnType<typeof setError>

export type RealTimeMonthPieDataType = {
    name: string
    value: number
    fill: string
    index: number
}
export type RealTimeMonthPieTotalDataType = {
    name: string
    value: number
    fill: string
}
type StatusType = "init" | "loading" | "loaded" | "error"
type InitState = {
    data: RealTimeMonthPieDataType[],
    totalData: RealTimeMonthPieTotalDataType[]
    status: StatusType,
    errorMessage: string,
}
const initialState:InitState = {
    data: [
        {name: 'НОД-6', value: 14, fill: '', index: 1},
        {name: 'НОД-5', value: 24, fill: '', index: 2},
        {name: 'НОД-4', value: 32, fill: '', index: 3},
        {name: 'НОД-3', value: 87, fill: '', index: 4},
        {name: 'НОД-2', value: 46, fill: '', index: 5},
        {name: 'НОД-1', value: 53, fill: '', index: 6},
        {name: 'Белтел Могилёвская', value: 258, fill: '', index: 7},
        {name: 'Белтел Минская', value: 65, fill: '', index: 8},
        {name: 'Белтел Гродненская', value: 48, fill: '', index: 9},
        {name: 'Белтел Гомельская', value: 70, fill: '', index: 10},
        {name: 'Белтел Витебская', value: 271, fill: '', index: 11},
        {name: 'Белтел Брестская', value: 75, fill: '', index: 12},
        {name: 'Repeat call', value: 65, fill: '', index: 13},
        {name: 'MTC', value: 123, fill: '', index: 14},
        {name: 'Life', value: 457 , fill: '', index: 15},
        {name: 'International', value: 153, fill: '', index: 16},
        {name: 'A1', value: 333, fill: '', index: 17},
    ],
    totalData: [{name: 'Пропущено', value: 511, fill: ''},
        {name: 'Принято', value: 3534, fill: ''}],
    status: 'init',
    errorMessage: ''
}
const dataColors = ['#b3b3d9','#ef9288','#c94322','#6171c5','#d4830e','#50878d','#64b280','#7dbecf','#ec977d',
    '#fcea87','#76c5e7','#7c84b8','#f1a492','#02bbd0','#489f48','#7eb9f6','#fd3101']
const totalDataColor = ['#e70707','#4bb253']
export const realTimeMonthPieReducer = (state = initialState, action: ActionDataType) => {
    switch (action.type) {
        case SET_REAL_TIME_MONTH_PIE_DATA: {
            return {
                ...state,
                data: action.data
            }
        }
        case SET_REAL_TIME_MONTH_PIE_TOTAL_DATA: {
            return {
                ...state,
                totalData: action.totalData
            }
        }
        case SET_REAL_TIME_MONTH_PIE_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_REAL_TIME_MONTH_PIE_ERROR: {
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
const setRealMonthTodayPieData = (data: RealTimeMonthPieDataType[])  => {
    return {
        type: SET_REAL_TIME_MONTH_PIE_DATA,
        data
    } as const
};
const setRealTimeMonthPieTotalData = (totalData: RealTimeMonthPieTotalDataType[])  => {
    return {
        type: SET_REAL_TIME_MONTH_PIE_TOTAL_DATA,
        totalData
    } as const
};
const setRealTimeMonthPieStatus = (status:StatusType) => {
    return {
        type: SET_REAL_TIME_MONTH_PIE_STATUS,
        status
    } as const
}
const setError = (errorMessage:string) => {
    return {
        type: SET_REAL_TIME_MONTH_PIE_ERROR,
        errorMessage
    } as const
}
export const fetchRealMonthTodayPieData =  ():DataThunkAction => async(dispatch)  => {
    try {
        dispatch(setRealTimeMonthPieStatus("loading"))
        const innerData = await monitoringCCRealTimeAPI.getMontRealTimeInnerPieData()
        const outerData = await monitoringCCRealTimeAPI.getMonthRealTimeOuterPieData()
        const changedInnerData = [...innerData.data.map((obj: RealTimeMonthPieTotalDataType, index: number) => {
            return {
                ...obj,
                fill: totalDataColor[index]
            }
        })]
        /*console.log("Внутренний кружок: " +JSON.stringify(changedInnerData))*/
        const changedOuterData = [...outerData.data.map((obj: RealTimeMonthPieDataType, index: number) => {
            return {
                ...obj,
                fill: dataColors[index]
            }
        })]
        /*console.log("Внешний кружок: " +JSON.stringify(changedOuterData))*/
        dispatch(setRealTimeMonthPieTotalData(changedInnerData))
        dispatch(setRealMonthTodayPieData(changedOuterData))
        dispatch(setRealTimeMonthPieStatus("loaded"))
    } catch (e: any) {
        dispatch(setRealTimeMonthPieStatus("error"))
        dispatch(setError(e.message))
    }
}