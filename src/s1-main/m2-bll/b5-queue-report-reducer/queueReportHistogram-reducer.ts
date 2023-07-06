import {ThunkAction} from "redux-thunk";
import {StoreType} from "../store";
import {monitoringCCPastAPI} from "../../m3-dal/d2-api/monitoringCCPastAPI";
import {queueReportAPI} from "../../m3-dal/d2-api/queueReportAPI";
import {calcServiceLevel} from "../../../common/utils/calcServiceLevel";

const SET_QUEUE_REPORT_HISTOGRAM_DATA = "SET_QUEUE_REPORT_HISTOGRAM_DATA";
const SET_QUEUE_REPORT_HISTOGRAM_STATUS = "SET_QUEUE_REPORT_HISTOGRAM_STATUS"
const SET_QUEUE_REPORT_HISTOGRAM_ERROR = "SET_QUEUE_REPORT_HISTOGRAM_ERROR"

type DataThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionDataType>;


type ActionDataType = ReturnType<typeof setQueueReportHistogramData> | ReturnType<typeof setStatus>
    | ReturnType<typeof setError>

export type QueueReportHistogramDataType = {
    name: number
    date: string
    serviceLevel: number
    skipped: number
    accept: number
}
type StatusType = "init" | "loading" | "loaded" | "error"
type InitState = {
    data: QueueReportHistogramDataType[],
    status: StatusType,
    errorMessage: string,
}
const initialState: InitState = {
    data: [
        {name: 11, date: "04.03", serviceLevel: 88, skipped: 37, accept: 1491},
    ],
    status: 'init',
    errorMessage: ''
}
export const queueReportHistogramReducer = (state = initialState, action: ActionDataType) => {
    switch (action.type) {
        case SET_QUEUE_REPORT_HISTOGRAM_DATA: {
            return {
                ...state,
                data: action.data
            }
        }
        case SET_QUEUE_REPORT_HISTOGRAM_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_QUEUE_REPORT_HISTOGRAM_ERROR: {
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
const setQueueReportHistogramData = (data: QueueReportHistogramDataType[]) => {
    return {
        type: SET_QUEUE_REPORT_HISTOGRAM_DATA,
        data
    } as const
};
const setStatus = (status: StatusType) => {
    return {
        type: SET_QUEUE_REPORT_HISTOGRAM_STATUS,
        status
    } as const
}
const setError = (errorMessage: string) => {
    return {
        type: SET_QUEUE_REPORT_HISTOGRAM_ERROR,
        errorMessage
    } as const
}
export const fetchQueueReportHistogramData = (
    dateStart: string,
    timeStart: string,
    dateEnd: string,
    timeEnd: string
): DataThunkAction => async (dispatch) => {
    try {
        dispatch(setStatus("loading"))
        const data = await queueReportAPI.getQueueReportHistogramData(dateStart, timeStart, dateEnd, timeEnd)
        dispatch(setQueueReportHistogramData(data.data.map((item:QueueReportHistogramDataType) => {
            return {
                ...item,
                serviceLevel: calcServiceLevel(item.accept, item.skipped)
            }
        })))
        dispatch(setStatus("loaded"))
    } catch (e: any) {
        dispatch(setStatus("error"))
        dispatch(setError(e.message))
    }
}