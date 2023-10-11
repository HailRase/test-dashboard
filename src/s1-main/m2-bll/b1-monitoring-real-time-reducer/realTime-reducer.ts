import {ThunkAction} from "redux-thunk";
import {StoreType} from "../store";
import {
    RealTimeHistogramDataType,
    RealTimeMonthPieDataType,
    RealTimeMonthPieTotalDataType,
    RealTimeTableDataType
} from "./types/realTimeReducerTypes";
import {monitoringCCRealTimeAPI} from "../../m3-dal/d2-api/monitoringCCRealTimeAPI";
import {updateRatingsTodayMonth} from "../../../common/utils/updateRatingsTodayMonth";

const SET_REAL_TIME_DATA = "SET_REAL_TIME_TODAY_PIE_DATA";
const SET_REAL_TIME_DATA_STATUS = "SET_REAL_TIME_TODAY_PIE_STATUS"
const SET_REAL_TIME_DATA_ERROR = "SET_REAL_TIME_TODAY_PIE_ERROR"

type DataThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionDataType>;

type ActionDataType =
    ReturnType<typeof setRealTimeData>
    | ReturnType<typeof setRealTimeDataStatus>
    | ReturnType<typeof setRealTimeDataStatusError>

export type StatusType = "init" | "loading" | "loaded" | "error"
type InitialStateDataType = {
    tableTotal: RealTimeTableDataType[],
    schema: RealTimeHistogramDataType[],
    schemaTotal: RealTimeHistogramDataType[],
    providers: RealTimeMonthPieDataType[],
    providersTotal: RealTimeMonthPieDataType[],
    totalDay: RealTimeMonthPieTotalDataType[],
    total: RealTimeMonthPieTotalDataType[],
}


type InitState = {
    data: InitialStateDataType,
    status: StatusType,
    errorMessage: string,
}

const initialState: InitState = {
    data: {
        tableTotal:[],
        schema:[],
        schemaTotal: [],
        providers: [],
        providersTotal:[],
        totalDay:[],
        total:[]
    },
    status: 'init',
    errorMessage: ''
}

export const realTimeReducer = (state = initialState, action: ActionDataType) => {
    switch (action.type) {
        case SET_REAL_TIME_DATA: {
            return {
                ...state,
                data: action.data
            }
        }
        case SET_REAL_TIME_DATA_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_REAL_TIME_DATA_ERROR: {
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
export const setRealTimeData = (data: InitialStateDataType) => {
    return {
        type: SET_REAL_TIME_DATA,
        data
    } as const
};

const setRealTimeDataStatus = (status: StatusType) => {
    return {
        type: SET_REAL_TIME_DATA_STATUS,
        status
    } as const
}
const setRealTimeDataStatusError = (errorMessage: string) => {
    return {
        type: SET_REAL_TIME_DATA_ERROR,
        errorMessage
    } as const
}

export const fetchRealTimeData = (): DataThunkAction => async (dispatch) => {
    try {
        dispatch(setRealTimeDataStatus("loading"))
        const data = await monitoringCCRealTimeAPI.getRealTimeData()
        console.log(data)
        const newData: InitialStateDataType = {
            ...data.data,
            tableTotal: data.data.tableTotal.map((record: any) => {
                return {
                    id: record.id,
                    ratingToday: 0,
                    ratingMonth: 0,
                    operatorName: record.operatorName,
                    accept: record.accept,
                    acceptMonth: record.acceptMonth,
                    skip: record.skip,
                    serviceLevel: `${record.serviceLevel}%`,
                    avgServiceTime: record.avgServiceTime,
                    avgServiceTimeMonth: record.avgServiceTimeMonth,
                    monthRating: `${record.acceptMonth} (${record.monthRating})`,
                    workload: `${record.workload}%`,
                    workloadMonth: `${record.workloadMonth}%`
                }
            }),
        }
        /*const newData1: RealTimeTableDataType[] = data.data.map((record: any) => {
            return {

                id: record.id,
                ratingToday: 0,
                ratingMonth: 0,
                operatorName: record.operatorName,
                accept: record.accept,
                acceptMonth: record.acceptMonth,
                skip: record.skip,
                serviceLevel: `${calcServiceLevel(record.accept, record.skip)}%`,
                serviceLevelMonth: calcServiceLevel(record.acceptMonth, record.skippedMonth),
                skippedMonth: record.skippedMonth,
                avgServiceTime: record.avgServiceTime,
                avgServiceTimeMonth: record.avgServiceTimeMonth,
                monthRating: calcMonthRating(record),
                workload: `${record.workload}%`,
                workloadMonth: `${record.workloadMonth}%`
            }
        })*/
        console.log(newData)
        dispatch(setRealTimeData(updateRatingsTodayMonth(newData)))
        dispatch(setRealTimeDataStatus("loaded"))
    } catch (e: any) {
        dispatch(setRealTimeDataStatus("error"))
        dispatch(setRealTimeDataStatusError(e.message))
    }
}