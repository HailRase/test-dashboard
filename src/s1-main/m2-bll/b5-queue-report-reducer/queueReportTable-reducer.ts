import {StoreType} from "../store";
import {ThunkAction} from "redux-thunk";
import {operatorReportGeneralAPI} from "../../m3-dal/d2-api/operatorReportGeneralAPI";
import {operatorReportDetailedAPI} from "../../m3-dal/d2-api/opertaorReportDetailedAPI";
import {queueReportAPI} from "../../m3-dal/d2-api/queueReportAPI";

const SET_QUEUE_REPORT_DATA = "SET_QUEUE_REPORT_DATA";
const SET_STATUS = "SET_STATUS"
const SET_ERROR = "SET_ERROR"

type DataThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionDataType>;


type ActionDataType = ReturnType<typeof setQueueReportData> | ReturnType<typeof setStatus>
    | ReturnType<typeof setError>


export type QueueReportTableDataType = {
    id: number
    startPeriod: string
    endPeriod: string
    queue: string
    totalCall: number
    percentageReceivedCalls: number
    serviceLevel: number
    totalSkipped: number
    skippedLess5s: number
    skippedLess10s: number
    skippedLess20s: number
    skippedLess30s: number
    skippedLess1m: number
    skippedLess2m: number
    skippedMore2m: number
    totalAccept: number
    acceptLess5s: number
    acceptLess10s: number
    acceptLess20s: number
    acceptLess30s: number
    acceptLess1m: number
    acceptLess2m: number
    acceptMore2m: number
    avgCallDuration: string
    maxCallDuration: string
    avgWaitingTimeLostCall: string
    maxWaitingTimeLostCall: string
    avgWaitingTimeReceivedCall: string
    maxWaitingTimeReceivedCall: string
    avgTalkTime: string
    maxTalkTime: string
}
type StatusType = "init" | "loading" | "loaded" | "error"
type InitialStateType = {
    data: QueueReportTableDataType[]
    department: { departmentName: string }[]
    status: StatusType
    errorMessage: string
}
const initialState: InitialStateType = {
    data: [
        {
            id: 1,
            startPeriod: "04.03.23 00:00",
            endPeriod: "05.03.23 00:00",
            queue: "105 GSM",
            totalCall: 200,
            percentageReceivedCalls: 96,
            serviceLevel: 92,
            totalSkipped: 10,
            skippedLess5s: 5,
            skippedLess10s: 0,
            skippedLess20s: 0,
            skippedLess30s: 1,
            skippedLess1m: 0,
            skippedLess2m: 1,
            skippedMore2m: 1,
            totalAccept: 572,
            acceptLess5s: 521,
            acceptLess10s: 0,
            acceptLess20s: 0,
            acceptLess30s: 0,
            acceptLess1m: 0,
            acceptLess2m: 9,
            acceptMore2m: 9,
            avgCallDuration: "10:02:11",
            maxCallDuration: "00:01:00",
            avgWaitingTimeLostCall: "00:00:00",
            maxWaitingTimeLostCall: "00:01:00",
            avgWaitingTimeReceivedCall: "00:20:00",
            maxWaitingTimeReceivedCall: "00:03:00",
            avgTalkTime: "00:00:00",
            maxTalkTime: "00:03:00",
        },
        {
            id: 2,
            startPeriod: "04.03.23 00:00",
            endPeriod: "05.03.23 00:00",
            queue: "105 Beltelecom",
            totalCall: 584,
            percentageReceivedCalls: 98,
            serviceLevel: 92,
            totalSkipped: 12,
            skippedLess5s: 5,
            skippedLess10s: 0,
            skippedLess20s: 1,
            skippedLess30s: 1,
            skippedLess1m: 2,
            skippedLess2m: 2,
            skippedMore2m: 1,
            totalAccept: 572,
            acceptLess5s: 521,
            acceptLess10s: 0,
            acceptLess20s: 9,
            acceptLess30s: 9,
            acceptLess1m: 9,
            acceptLess2m: 9,
            acceptMore2m: 0,
            avgCallDuration: "00:02:00",
            maxCallDuration: "00:01:00",
            avgWaitingTimeLostCall: "00:00:00",
            maxWaitingTimeLostCall: "00:01:00",
            avgWaitingTimeReceivedCall: "00:20:00",
            maxWaitingTimeReceivedCall: "00:03:00",
            avgTalkTime: "00:00:00",
            maxTalkTime: "00:03:00",
        },
        {
            id: 3,
            startPeriod: "04.03.23 00:00",
            endPeriod: "05.03.23 00:00",
            queue: "39-25-47",
            totalCall: 214,
            percentageReceivedCalls: 98,
            serviceLevel: 97,
            totalSkipped: 5,
            skippedLess5s: 1,
            skippedLess10s: 0,
            skippedLess20s: 0,
            skippedLess30s: 0,
            skippedLess1m: 2,
            skippedLess2m: 2,
            skippedMore2m: 0,
            totalAccept: 572,
            acceptLess5s: 521,
            acceptLess10s: 9,
            acceptLess20s: 0,
            acceptLess30s: 9,
            acceptLess1m: 0,
            acceptLess2m: 0,
            acceptMore2m: 9,
            avgCallDuration: "00:02:00",
            maxCallDuration: "00:01:00",
            avgWaitingTimeLostCall: "00:00:00",
            maxWaitingTimeLostCall: "00:01:00",
            avgWaitingTimeReceivedCall: "00:20:00",
            maxWaitingTimeReceivedCall: "00:03:00",
            avgTalkTime: "00:00:00",
            maxTalkTime: "00:03:00",
        },
        {
            id: 4,
            startPeriod: "04.03.23 00:00",
            endPeriod: "05.03.23 00:00",
            queue: "105 GSM",
            totalCall: 584,
            percentageReceivedCalls: 98,
            serviceLevel: 92,
            totalSkipped: 0,
            skippedLess5s: 0,
            skippedLess10s: 0,
            skippedLess20s: 0,
            skippedLess30s: 0,
            skippedLess1m: 0,
            skippedLess2m: 0,
            skippedMore2m: 0,
            totalAccept: 572,
            acceptLess5s: 521,
            acceptLess10s: 9,
            acceptLess20s: 0,
            acceptLess30s: 9,
            acceptLess1m: 9,
            acceptLess2m: 0,
            acceptMore2m: 9,
            avgCallDuration: "00:02:00",
            maxCallDuration: "00:01:00",
            avgWaitingTimeLostCall: "00:00:00",
            maxWaitingTimeLostCall: "00:01:00",
            avgWaitingTimeReceivedCall: "00:20:00",
            maxWaitingTimeReceivedCall: "00:03:00",
            avgTalkTime: "00:00:00",
            maxTalkTime: "00:03:00",
        },
        {
            id: 5,
            startPeriod: "04.03.23 00:00",
            endPeriod: "05.03.23 00:00",
            queue: "Видеотерминалы",
            totalCall: 292,
            percentageReceivedCalls: 98,
            serviceLevel: 92,
            totalSkipped: 9,
            skippedLess5s: 5,
            skippedLess10s: 0,
            skippedLess20s: 0,
            skippedLess30s: 1,
            skippedLess1m: 2,
            skippedLess2m: 0,
            skippedMore2m: 1,
            totalAccept: 572,
            acceptLess5s: 521,
            acceptLess10s: 0,
            acceptLess20s: 9,
            acceptLess30s: 9,
            acceptLess1m: 0,
            acceptLess2m: 0,
            acceptMore2m: 9,
            avgCallDuration: "00:02:00",
            maxCallDuration: "00:01:00",
            avgWaitingTimeLostCall: "00:00:00",
            maxWaitingTimeLostCall: "00:01:00",
            avgWaitingTimeReceivedCall: "00:20:00",
            maxWaitingTimeReceivedCall: "00:03:00",
            avgTalkTime: "00:00:00",
            maxTalkTime: "00:03:00",
        },
        {
            id: 6,
            startPeriod: "04.03.23 00:00",
            endPeriod: "05.03.23 00:00",
            queue: "39-48-75",
            totalCall: 120,
            percentageReceivedCalls: 98,
            serviceLevel: 92,
            totalSkipped: 2,
            skippedLess5s: 0,
            skippedLess10s: 0,
            skippedLess20s: 0,
            skippedLess30s: 0,
            skippedLess1m: 0,
            skippedLess2m: 3,
            skippedMore2m: 0,
            totalAccept: 572,
            acceptLess5s: 521,
            acceptLess10s: 0,
            acceptLess20s: 0,
            acceptLess30s: 0,
            acceptLess1m: 9,
            acceptLess2m: 9,
            acceptMore2m: 9,
            avgCallDuration: "00:02:00",
            maxCallDuration: "00:01:00",
            avgWaitingTimeLostCall: "00:00:00",
            maxWaitingTimeLostCall: "00:01:00",
            avgWaitingTimeReceivedCall: "00:20:00",
            maxWaitingTimeReceivedCall: "00:03:00",
            avgTalkTime: "00:00:00",
            maxTalkTime: "00:03:00",
        },
        {
            id: 7,
            startPeriod: "04.03.23 00:00",
            endPeriod: "05.03.23 00:00",
            queue: "GSM",
            totalCall: 584,
            percentageReceivedCalls: 98,
            serviceLevel: 92,
            totalSkipped: 12,
            skippedLess5s: 5,
            skippedLess10s: 0,
            skippedLess20s: 1,
            skippedLess30s: 1,
            skippedLess1m: 2,
            skippedLess2m: 2,
            skippedMore2m: 1,
            totalAccept: 572,
            acceptLess5s: 521,
            acceptLess10s: 0,
            acceptLess20s: 9,
            acceptLess30s: 9,
            acceptLess1m: 9,
            acceptLess2m: 0,
            acceptMore2m: 0,
            avgCallDuration: "00:02:00",
            maxCallDuration: "00:01:00",
            avgWaitingTimeLostCall: "00:00:00",
            maxWaitingTimeLostCall: "00:01:00",
            avgWaitingTimeReceivedCall: "00:20:00",
            maxWaitingTimeReceivedCall: "00:03:00",
            avgTalkTime: "00:00:00",
            maxTalkTime: "00:03:00",
        },
        {
            id: 8,
            startPeriod: "04.03.23 00:00",
            endPeriod: "05.03.23 00:00",
            queue: "151 Beltelecom",
            totalCall: 584,
            percentageReceivedCalls: 98,
            serviceLevel: 92,
            totalSkipped: 12,
            skippedLess5s: 5,
            skippedLess10s: 0,
            skippedLess20s: 1,
            skippedLess30s: 1,
            skippedLess1m: 2,
            skippedLess2m: 2,
            skippedMore2m: 1,
            totalAccept: 572,
            acceptLess5s: 521,
            acceptLess10s: 9,
            acceptLess20s: 0,
            acceptLess30s: 0,
            acceptLess1m: 0,
            acceptLess2m: 9,
            acceptMore2m: 9,
            avgCallDuration: "00:02:00",
            maxCallDuration: "00:01:00",
            avgWaitingTimeLostCall: "00:00:00",
            maxWaitingTimeLostCall: "00:01:00",
            avgWaitingTimeReceivedCall: "00:20:00",
            maxWaitingTimeReceivedCall: "00:03:00",
            avgTalkTime: "00:00:00",
            maxTalkTime: "00:03:00",
        },
        {
            id: 9,
            startPeriod: "04.03.23 00:00",
            endPeriod: "05.03.23 00:00",
            queue: "151 Other",
            totalCall: 584,
            percentageReceivedCalls: 98,
            serviceLevel: 92,
            totalSkipped: 12,
            skippedLess5s: 5,
            skippedLess10s: 0,
            skippedLess20s: 1,
            skippedLess30s: 0,
            skippedLess1m: 2,
            skippedLess2m: 0,
            skippedMore2m: 1,
            totalAccept: 572,
            acceptLess5s: 521,
            acceptLess10s: 0,
            acceptLess20s: 0,
            acceptLess30s: 9,
            acceptLess1m: 9,
            acceptLess2m: 9,
            acceptMore2m: 0,
            avgCallDuration: "00:02:00",
            maxCallDuration: "00:01:00",
            avgWaitingTimeLostCall: "00:00:00",
            maxWaitingTimeLostCall: "00:01:00",
            avgWaitingTimeReceivedCall: "00:20:00",
            maxWaitingTimeReceivedCall: "00:03:00",
            avgTalkTime: "00:00:00",
            maxTalkTime: "00:03:00",
        },
        {
            id: 10,
            startPeriod: "04.03.23 00:00",
            endPeriod: "05.03.23 00:00",
            queue: "105 GSM",
            totalCall: 584,
            percentageReceivedCalls: 98,
            serviceLevel: 92,
            totalSkipped: 12,
            skippedLess5s: 5,
            skippedLess10s: 0,
            skippedLess20s: 0,
            skippedLess30s: 0,
            skippedLess1m: 0,
            skippedLess2m: 0,
            skippedMore2m: 1,
            totalAccept: 572,
            acceptLess5s: 521,
            acceptLess10s: 0,
            acceptLess20s: 9,
            acceptLess30s: 0,
            acceptLess1m: 9,
            acceptLess2m: 0,
            acceptMore2m: 9,
            avgCallDuration: "00:02:00",
            maxCallDuration: "00:01:00",
            avgWaitingTimeLostCall: "00:00:00",
            maxWaitingTimeLostCall: "00:01:00",
            avgWaitingTimeReceivedCall: "00:20:00",
            maxWaitingTimeReceivedCall: "00:03:00",
            avgTalkTime: "00:00:00",
            maxTalkTime: "00:03:00",
        },
        {
            id: 11,
            startPeriod: "04.03.23 00:00",
            endPeriod: "05.03.23 00:00",
            queue: "105 Other",
            totalCall: 584,
            percentageReceivedCalls: 98,
            serviceLevel: 92,
            totalSkipped: 2,
            skippedLess5s: 0,
            skippedLess10s: 0,
            skippedLess20s: 0,
            skippedLess30s: 0,
            skippedLess1m: 0,
            skippedLess2m: 2,
            skippedMore2m: 0,
            totalAccept: 572,
            acceptLess5s: 521,
            acceptLess10s: 9,
            acceptLess20s: 0,
            acceptLess30s: 2,
            acceptLess1m: 0,
            acceptLess2m: 0,
            acceptMore2m: 9,
            avgCallDuration: "00:02:00",
            maxCallDuration: "00:01:00",
            avgWaitingTimeLostCall: "00:00:00",
            maxWaitingTimeLostCall: "00:01:00",
            avgWaitingTimeReceivedCall: "00:20:00",
            maxWaitingTimeReceivedCall: "00:03:00",
            avgTalkTime: "00:00:00",
            maxTalkTime: "00:03:00",
        },
        {
            id: 12,
            startPeriod: "04.03.23 00:00",
            endPeriod: "05.03.23 00:00",
            queue: "105 Beltelecom",
            totalCall: 584,
            percentageReceivedCalls: 98,
            serviceLevel: 92,
            totalSkipped: 12,
            skippedLess5s: 0,
            skippedLess10s: 0,
            skippedLess20s: 1,
            skippedLess30s: 0,
            skippedLess1m: 0,
            skippedLess2m: 2,
            skippedMore2m: 1,
            totalAccept: 572,
            acceptLess5s: 521,
            acceptLess10s: 0,
            acceptLess20s: 9,
            acceptLess30s: 0,
            acceptLess1m: 0,
            acceptLess2m: 0,
            acceptMore2m: 9,
            avgCallDuration: "00:02:00",
            maxCallDuration: "00:01:00",
            avgWaitingTimeLostCall: "00:00:00",
            maxWaitingTimeLostCall: "00:01:00",
            avgWaitingTimeReceivedCall: "00:20:00",
            maxWaitingTimeReceivedCall: "00:03:00",
            avgTalkTime: "00:00:00",
            maxTalkTime: "00:03:00",
        },
        {
            id: 13,
            startPeriod: "04.03.23 00:00",
            endPeriod: "05.03.23 00:00",
            queue: "151 GSM",
            totalCall: 584,
            percentageReceivedCalls: 98,
            serviceLevel: 92,
            totalSkipped: 12,
            skippedLess5s: 5,
            skippedLess10s: 0,
            skippedLess20s: 0,
            skippedLess30s: 0,
            skippedLess1m: 0,
            skippedLess2m: 2,
            skippedMore2m: 1,
            totalAccept: 572,
            acceptLess5s: 521,
            acceptLess10s: 0,
            acceptLess20s: 9,
            acceptLess30s: 0,
            acceptLess1m: 9,
            acceptLess2m: 0,
            acceptMore2m: 9,
            avgCallDuration: "00:02:00",
            maxCallDuration: "00:01:00",
            avgWaitingTimeLostCall: "00:00:00",
            maxWaitingTimeLostCall: "00:01:00",
            avgWaitingTimeReceivedCall: "00:20:00",
            maxWaitingTimeReceivedCall: "00:03:00",
            avgTalkTime: "00:00:00",
            maxTalkTime: "00:03:00",
        },
        {
            id: 14,
            startPeriod: "04.03.23 00:00",
            endPeriod: "05.03.23 00:00",
            queue: "151 Other",
            totalCall: 224,
            percentageReceivedCalls: 98,
            serviceLevel: 92,
            totalSkipped: 8,
            skippedLess5s: 5,
            skippedLess10s: 0,
            skippedLess20s: 1,
            skippedLess30s: 1,
            skippedLess1m: 2,
            skippedLess2m: 2,
            skippedMore2m: 1,
            totalAccept: 572,
            acceptLess5s: 521,
            acceptLess10s: 9,
            acceptLess20s: 9,
            acceptLess30s: 0,
            acceptLess1m: 0,
            acceptLess2m: 9,
            acceptMore2m: 0,
            avgCallDuration: "00:02:00",
            maxCallDuration: "00:01:00",
            avgWaitingTimeLostCall: "00:00:00",
            maxWaitingTimeLostCall: "00:01:00",
            avgWaitingTimeReceivedCall: "00:20:00",
            maxWaitingTimeReceivedCall: "00:03:00",
            avgTalkTime: "00:00:00",
            maxTalkTime: "00:03:00",
        },
        {
            id: 15,
            startPeriod: "04.03.23 00:00",
            endPeriod: "05.03.23 00:00",
            queue: "105 GSM",
            totalCall: 501,
            percentageReceivedCalls: 98,
            serviceLevel: 92,
            totalSkipped: 12,
            skippedLess5s: 0,
            skippedLess10s: 1,
            skippedLess20s: 1,
            skippedLess30s: 3,
            skippedLess1m: 2,
            skippedLess2m: 0,
            skippedMore2m: 0,
            totalAccept: 572,
            acceptLess5s: 521,
            acceptLess10s: 9,
            acceptLess20s: 0,
            acceptLess30s: 0,
            acceptLess1m: 9,
            acceptLess2m: 9,
            acceptMore2m: 0,
            avgCallDuration: "00:02:00",
            maxCallDuration: "00:01:00",
            avgWaitingTimeLostCall: "00:00:00",
            maxWaitingTimeLostCall: "00:01:00",
            avgWaitingTimeReceivedCall: "00:20:00",
            maxWaitingTimeReceivedCall: "00:03:00",
            avgTalkTime: "00:00:00",
            maxTalkTime: "00:03:00",
        },
        {
            id: 16,
            startPeriod: "04.03.23 00:00",
            endPeriod: "05.03.23 00:00",
            queue: "105 GSM",
            totalCall: 584,
            percentageReceivedCalls: 98,
            serviceLevel: 92,
            totalSkipped: 12,
            skippedLess5s: 5,
            skippedLess10s: 2,
            skippedLess20s: 1,
            skippedLess30s: 0,
            skippedLess1m: 2,
            skippedLess2m: 0,
            skippedMore2m: 1,
            totalAccept: 562,
            acceptLess5s: 560,
            acceptLess10s: 2,
            acceptLess20s: 0,
            acceptLess30s: 9,
            acceptLess1m: 0,
            acceptLess2m: 0,
            acceptMore2m: 9,
            avgCallDuration: "00:02:00",
            maxCallDuration: "00:01:00",
            avgWaitingTimeLostCall: "00:00:00",
            maxWaitingTimeLostCall: "00:01:00",
            avgWaitingTimeReceivedCall: "00:20:00",
            maxWaitingTimeReceivedCall: "00:03:00",
            avgTalkTime: "00:00:00",
            maxTalkTime: "00:03:00",
        }
    ],
    department: [],
    status: "init",
    errorMessage: ''
}

export const queueReportTableReducer = (state: any = initialState, action: ActionDataType): any => {
    switch (action.type) {
        case SET_QUEUE_REPORT_DATA: {
            return {
                ...state,
                data: action.data
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_ERROR: {
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

const setQueueReportData = (data: any) => {
    return {
        type: SET_QUEUE_REPORT_DATA,
        data
    } as const;
};
const setStatus = (status: StatusType) => {
    return {
        type: SET_STATUS,
        status
    } as const
}
const setError = (errorMessage: string) => {
    return {
        type: SET_ERROR,
        errorMessage
    } as const
}
export const fetchQueueReportTableData = (
    dateStart: string,
    timeStart: string,
    dateEnd: string,
    timeEnd: string
): DataThunkAction =>
    async (dispatch) => {
        try {
            dispatch(setStatus("loading"))
            const data = await queueReportAPI.getQueueReportTableData(dateStart, timeStart, dateEnd, timeEnd)
            dispatch(setQueueReportData(data.data))
            dispatch(setStatus("loaded"))
        } catch (e: any) {
            dispatch(setStatus("error"))
            dispatch(setError(e.message))
        }
    }