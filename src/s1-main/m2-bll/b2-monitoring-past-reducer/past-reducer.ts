import {ThunkAction} from "redux-thunk";
import {StoreType} from "../store";
import {
    PastTableDataType,
    RealTimeHistogramDataType,
    RealTimeMonthPieDataType,
    RealTimeMonthPieTotalDataType
} from "../b1-monitoring-real-time-reducer/types/realTimeReducerTypes";
import {monitoringCCRealTimeAPI} from "../../m3-dal/d2-api/monitoringCCRealTimeAPI";
import {updateRatingPeriod} from "../../../common/utils/updateRatingPeriod";
import {monitoringCCPastAPI} from "../../m3-dal/d2-api/monitoringCCPastAPI";

const SET_PAST_DATA = "SET_PAST_DATA";
const SET_PAST_DATA_STATUS = "SET_PAST_STATUS"
const SET_PAST_DATA_ERROR = "SET_PAST_ERROR"

type DataThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionDataType>;

type ActionDataType =
    ReturnType<typeof setPastData>
    | ReturnType<typeof setPastDataStatus>
    | ReturnType<typeof setPastDataStatusError>

export type StatusType = "init" | "loading" | "loaded" | "error"
type InitialStateDataType = {
    tableTotal: PastTableDataType[],
    schema: RealTimeHistogramDataType[],
    providersTotal: RealTimeMonthPieDataType[],
    total: RealTimeMonthPieTotalDataType[],
}


type InitState = {
    data: InitialStateDataType,
    status: StatusType,
    errorMessage: string,
}
const initialState: InitState = {
    data: {
        tableTotal: [],
        schema: [],
        providersTotal: [],
        total: [],
    },
    status: 'init',
    errorMessage: ''
}

export const pastReducer = (state = initialState, action: ActionDataType) => {
    switch (action.type) {
        case SET_PAST_DATA: {
            return {
                ...state,
                data: action.data
            }
        }
        case SET_PAST_DATA_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_PAST_DATA_ERROR: {
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
const setPastData = (data: InitialStateDataType) => {
    return {
        type: SET_PAST_DATA,
        data
    } as const
};

const setPastDataStatus = (status: StatusType) => {
    return {
        type: SET_PAST_DATA_STATUS,
        status
    } as const
}
const setPastDataStatusError = (errorMessage: string) => {
    return {
        type: SET_PAST_DATA_ERROR,
        errorMessage
    } as const
}

export const fetchPastData = (dateStart: string, timeStart: string, dateEnd: string, timeEnd: string): DataThunkAction => async (dispatch) => {
    try {
        dispatch(setPastDataStatus("loading"))
        const data = await monitoringCCPastAPI.getPastData(dateStart, timeStart, dateEnd, timeEnd)
        const newData: InitialStateDataType = {
            ...data.data,
            tableTotal: data.data.tableTotal.map((record: any) => {
                return {
                    ...record,
                    ratingToday: 0,
                    serviceLevel: `${record.serviceLevel}%`,
                    workload: `${record.workload}%`,
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
        dispatch(setPastData(updateRatingPeriod(newData)))
        dispatch(setPastDataStatus("loaded"))
    } catch (e: any) {
        dispatch(setPastDataStatus("error"))
        dispatch(setPastDataStatusError(e.message))
    }
}