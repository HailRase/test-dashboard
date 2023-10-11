import {ThunkAction} from "redux-thunk";
import {StoreType} from "../store";
import {
    QueueReportHistogramDataType,
    QueueReportPieDataType,
    QueueReportPieTotalDataType,
    QueueReportTableDataType
} from "./types/queueReportTypes";
import {queueReportAPI} from "../../m3-dal/d2-api/queueReportAPI";

const SET_QUEUE_REPORT_DATA = "SET_QUEUE_REPORT_DATA";
const SET_QUEUE_REPORT_DATA_STATUS = "SET_QUEUE_REPORT_STATUS"
const SET_QUEUE_REPORT_DATA_ERROR = "SET_QUEUE_REPORT_ERROR"

type DataThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionDataType>;

type ActionDataType =
    ReturnType<typeof setQueueReportData>
    | ReturnType<typeof setQueueReportDataStatus>
    | ReturnType<typeof setQueueReportDataStatusError>

export type StatusType = "init" | "loading" | "loaded" | "error"
type InitialStateDataType = {
    table: QueueReportTableDataType[],
    schema: QueueReportHistogramDataType[],
    providers: QueueReportPieDataType[],
    total: QueueReportPieTotalDataType[],
}


type InitState = {
    data: InitialStateDataType,
    status: StatusType,
    errorMessage: string,
}
const initialState: InitState = {
    data: {
        table: [],
        schema: [],
        providers: [],
        total: [],
    },
    status: 'init',
    errorMessage: ''
}

export const queueReportReducer = (state = initialState, action: ActionDataType) => {
    switch (action.type) {
        case SET_QUEUE_REPORT_DATA: {
            return {
                ...state,
                data: action.data
            }
        }
        case SET_QUEUE_REPORT_DATA_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_QUEUE_REPORT_DATA_ERROR: {
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
const setQueueReportData = (data: InitialStateDataType) => {
    return {
        type: SET_QUEUE_REPORT_DATA,
        data
    } as const
};

const setQueueReportDataStatus = (status: StatusType) => {
    return {
        type: SET_QUEUE_REPORT_DATA_STATUS,
        status
    } as const
}
const setQueueReportDataStatusError = (errorMessage: string) => {
    return {
        type: SET_QUEUE_REPORT_DATA_ERROR,
        errorMessage
    } as const
}

export const fetchQueueReportData = (dateStart: string, timeStart: string, dateEnd: string, timeEnd: string): DataThunkAction => async (dispatch) => {
    try {
        dispatch(setQueueReportDataStatus("loading"))
        const data = await queueReportAPI.getQueueReportData(dateStart, timeStart, dateEnd, timeEnd)
        const newData: InitialStateDataType = {
            ...data.data,
            table: data.data.table.map((record: any) => {
                return {
                    ...record,
                    serviceLevel: `${record.serviceLevel}%`,
                }
            }),
        }

        dispatch(setQueueReportData(newData))
        dispatch(setQueueReportDataStatus("loaded"))
    } catch (e: any) {
        dispatch(setQueueReportDataStatus("error"))
        dispatch(setQueueReportDataStatusError(e.message))
    }
}