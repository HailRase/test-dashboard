import {ThunkAction} from "redux-thunk";
import {StoreType} from "../store";
import {monitoringCCRealTimeAPI} from "../../m3-dal/d2-api/monitoringCCRealTimeAPI";
import {calcServiceLevel} from "../../../common/utils/calcServiceLevel";
import {updateRatingsTodayMonth} from "../../../common/utils/updateRatingsTodayMonth";
import {calcMonthRating} from "../../../common/utils/calcMonthRating";

const SET_REAL_TIME_TABLE_DATA = "SET_REAL_TIME_TABLE_DATA";
const SET_REAL_TIME_TABLE_STATUS = "SET_REAL_TIME_TABLE_STATUS"
const SET_REAL_TIME_TABLE_ERROR = "SET_REAL_TIME_TABLE_ERROR"

type DataThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionDataType>;


type ActionDataType = ReturnType<typeof setRealTimeTableData> | ReturnType<typeof setRealTimeTableStatus>
    | ReturnType<typeof setError>


export type RealTimeTableDataType = {
    id: number
    ratingToday: number
    ratingMonth: number
    operatorName: string
    accept: number
    acceptMonth: number
    skip: number
    skippedMonth: number
    serviceLevel: string
    serviceLevelMonth: number
    avgServiseTime: string
    avgServiceTimeMonth: string
    monthRating: string
    workload: string
    workloadMonth: string
}
export type StatusType = "init" | "loading" | "loaded" | "error"
type InitState = {
    data: RealTimeTableDataType[],
    status: StatusType,
    errorMessage: string,
}
const initialState: InitState = {
    data: [
        {
            id: 1,
            ratingToday: 0,
            ratingMonth: 0,
            operatorName: "Владимир Владимирович Заблоцкий",
            accept: 124,
            acceptMonth: 415,
            skip: 15,
            skippedMonth: 34,
            serviceLevel: "98%",
            serviceLevelMonth: 91,
            avgServiseTime: "00:00:53",
            avgServiceTimeMonth: "00:01:23",
            monthRating: "455 (96)",
            workload: "96%",
            workloadMonth: "94%"
        },
        {
            id: 2,
            ratingToday: 0,
            ratingMonth: 0,
            operatorName: "Владимир Владимирович Заблоцкий",
            accept: 100,
            acceptMonth: 355,
            skip: 15,
            skippedMonth: 34,
            serviceLevel: "98%",
            serviceLevelMonth: 99,
            avgServiseTime: "00:00:53",
            avgServiceTimeMonth: "00:01:23",
            monthRating: "455 (96)",
            workload: "96%",
            workloadMonth: "94%"
        },
        {
            id: 3,
            ratingToday: 0,
            ratingMonth: 0,
            operatorName: "Владимир Владимирович Заблоцкий",
            accept: 121,
            acceptMonth: 255,
            skip: 15,
            skippedMonth: 34,
            serviceLevel: "98%",
            serviceLevelMonth: 94,
            avgServiseTime: "00:00:53",
            avgServiceTimeMonth: "00:01:23",
            monthRating: "455 (96)",
            workload: "96%",
            workloadMonth: "94%"
        },
        {
            id: 3,
            ratingToday: 0,
            ratingMonth: 0,
            operatorName: "Владимир Владимирович Заблоцкий",
            accept: 121,
            acceptMonth: 255,
            skip: 15,
            skippedMonth: 34,
            serviceLevel: "98%",
            serviceLevelMonth: 74,
            avgServiseTime: "00:00:53",
            avgServiceTimeMonth: "00:01:23",
            monthRating: "455 (96)",
            workload: "96%",
            workloadMonth: "94%"
        }
    ],
    status: 'init',
    errorMessage: ''
}

export const realTimeTableReducer = (state = initialState, action: ActionDataType) => {
    switch (action.type) {
        case SET_REAL_TIME_TABLE_DATA: {
            return {
                ...state,
                data: action.data
            }
        }
        case SET_REAL_TIME_TABLE_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_REAL_TIME_TABLE_ERROR: {
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
const setRealTimeTableData = (data: RealTimeTableDataType[]) => {
    return {
        type: SET_REAL_TIME_TABLE_DATA,
        data
    } as const
};
const setRealTimeTableStatus = (status: StatusType) => {
    return {
        type: SET_REAL_TIME_TABLE_STATUS,
        status
    } as const
}
const setError = (errorMessage: string) => {
    return {
        type: SET_REAL_TIME_TABLE_ERROR,
        errorMessage
    } as const
}
export const fetchRealTimeTableData = (): DataThunkAction => async (dispatch) => {
    try {
        dispatch(setRealTimeTableStatus("loading"))
        const data = await monitoringCCRealTimeAPI.getRealTimeTableData()
        const tableData: RealTimeTableDataType[] = data.data.map((record: any) => {
            return {
                id: record.id,
                ratingToday: 0,
                ratingMonth: 0,
                operatorName: record.operatorName,
                accept: record.accept,
                acceptMonth: record.acceptMonth,
                skip: record.skip,
                serviceLevel: `${calcServiceLevel(record.accept, record.skip)}%`,
                serviceLevelMonth: calcServiceLevel(record.accept, record.skip),
                skippedMonth: record.skippedMonth,
                avgServiseTime: record.avgServiseTime,
                avgServiceTimeMonth: record.avgServiceTimeMonth,
                monthRating: calcMonthRating(record),
                workload: `${record.workload}%`,
                workloadMonth: `${record.workloadMonth}%`
            }
        })
        dispatch(setRealTimeTableData(updateRatingsTodayMonth(tableData)))
        dispatch(setRealTimeTableStatus("loaded"))
    } catch (e: any) {
        dispatch(setRealTimeTableStatus("error"))
        dispatch(setError(e.message))
    }
}