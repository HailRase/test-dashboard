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
        table: [
            {
                id: 1,
                startPeriod: "12.08.2023",
                endPeriod: "13.08.2023",
                queue: "GSM",
                totalCall: 128,
                percentageReceivedCalls: 12,
                serviceLevel: "98%",
                totalSkipped: 12,
                skippedLess5s: 12,
                skippedLess10s: 12,
                skippedLess20s: 12,
                skippedLess30s: 12,
                skippedLess1m: 12,
                skippedLess2m: 12,
                skippedMore2m: 12,
                totalAccept: 12,
                acceptLess5s: 12,
                acceptLess10s: 12,
                acceptLess20s: 12,
                acceptLess30s: 12,
                acceptLess1m: 12,
                acceptLess2m: 12,
                acceptMore2m: 12,
                avgCallDuration: "00:01:12",
                maxCallDuration: "00:01:54",
                avgWaitingTimeLostCall: "00:00:54",
                maxWaitingTimeLostCall: "00:00:32",
                avgWaitingTimeReceivedCall: "00:00:34",
                maxWaitingTimeReceivedCall: "00:01:00",
                avgTalkTime: "00:01:12",
                maxTalkTime: "00:01:12",
        },
            {
                id: 1,
                startPeriod: "12.08.2023",
                endPeriod: "13.08.2023",
                queue: "GSM",
                totalCall: 128,
                percentageReceivedCalls: 12,
                serviceLevel: "98%",
                totalSkipped: 12,
                skippedLess5s: 12,
                skippedLess10s: 12,
                skippedLess20s: 12,
                skippedLess30s: 12,
                skippedLess1m: 12,
                skippedLess2m: 12,
                skippedMore2m: 12,
                totalAccept: 12,
                acceptLess5s: 12,
                acceptLess10s: 12,
                acceptLess20s: 12,
                acceptLess30s: 12,
                acceptLess1m: 12,
                acceptLess2m: 12,
                acceptMore2m: 12,
                avgCallDuration: "00:01:12",
                maxCallDuration: "00:01:54",
                avgWaitingTimeLostCall: "00:00:54",
                maxWaitingTimeLostCall: "00:00:32",
                avgWaitingTimeReceivedCall: "00:00:34",
                maxWaitingTimeReceivedCall: "00:01:00",
                avgTalkTime: "00:01:12",
                maxTalkTime: "00:01:12",
            },
            {
                id: 1,
                startPeriod: "12.08.2023",
                endPeriod: "13.08.2023",
                queue: "GSM",
                totalCall: 128,
                percentageReceivedCalls: 12,
                serviceLevel: "98%",
                totalSkipped: 12,
                skippedLess5s: 12,
                skippedLess10s: 12,
                skippedLess20s: 12,
                skippedLess30s: 12,
                skippedLess1m: 12,
                skippedLess2m: 12,
                skippedMore2m: 12,
                totalAccept: 12,
                acceptLess5s: 12,
                acceptLess10s: 12,
                acceptLess20s: 12,
                acceptLess30s: 12,
                acceptLess1m: 12,
                acceptLess2m: 12,
                acceptMore2m: 12,
                avgCallDuration: "00:01:12",
                maxCallDuration: "00:01:54",
                avgWaitingTimeLostCall: "00:00:54",
                maxWaitingTimeLostCall: "00:00:32",
                avgWaitingTimeReceivedCall: "00:00:34",
                maxWaitingTimeReceivedCall: "00:01:00",
                avgTalkTime: "00:01:12",
                maxTalkTime: "00:01:12",
            },
            {
                id: 1,
                startPeriod: "12.08.2023",
                endPeriod: "13.08.2023",
                queue: "GSM",
                totalCall: 128,
                percentageReceivedCalls: 12,
                serviceLevel: "98%",
                totalSkipped: 12,
                skippedLess5s: 12,
                skippedLess10s: 12,
                skippedLess20s: 12,
                skippedLess30s: 12,
                skippedLess1m: 12,
                skippedLess2m: 12,
                skippedMore2m: 12,
                totalAccept: 12,
                acceptLess5s: 12,
                acceptLess10s: 12,
                acceptLess20s: 12,
                acceptLess30s: 12,
                acceptLess1m: 12,
                acceptLess2m: 12,
                acceptMore2m: 12,
                avgCallDuration: "00:01:12",
                maxCallDuration: "00:01:54",
                avgWaitingTimeLostCall: "00:00:54",
                maxWaitingTimeLostCall: "00:00:32",
                avgWaitingTimeReceivedCall: "00:00:34",
                maxWaitingTimeReceivedCall: "00:01:00",
                avgTalkTime: "00:01:12",
                maxTalkTime: "00:01:12",
            },
            {
                id: 1,
                startPeriod: "12.08.2023",
                endPeriod: "13.08.2023",
                queue: "GSM",
                totalCall: 128,
                percentageReceivedCalls: 12,
                serviceLevel: "98%",
                totalSkipped: 12,
                skippedLess5s: 12,
                skippedLess10s: 12,
                skippedLess20s: 12,
                skippedLess30s: 12,
                skippedLess1m: 12,
                skippedLess2m: 12,
                skippedMore2m: 12,
                totalAccept: 12,
                acceptLess5s: 12,
                acceptLess10s: 12,
                acceptLess20s: 12,
                acceptLess30s: 12,
                acceptLess1m: 12,
                acceptLess2m: 12,
                acceptMore2m: 12,
                avgCallDuration: "00:01:12",
                maxCallDuration: "00:01:54",
                avgWaitingTimeLostCall: "00:00:54",
                maxWaitingTimeLostCall: "00:00:32",
                avgWaitingTimeReceivedCall: "00:00:34",
                maxWaitingTimeReceivedCall: "00:01:00",
                avgTalkTime: "00:01:12",
                maxTalkTime: "00:01:12",
            },
            {
                id: 1,
                startPeriod: "12.08.2023",
                endPeriod: "13.08.2023",
                queue: "GSM",
                totalCall: 128,
                percentageReceivedCalls: 12,
                serviceLevel: "98%",
                totalSkipped: 12,
                skippedLess5s: 12,
                skippedLess10s: 12,
                skippedLess20s: 12,
                skippedLess30s: 12,
                skippedLess1m: 12,
                skippedLess2m: 12,
                skippedMore2m: 12,
                totalAccept: 12,
                acceptLess5s: 12,
                acceptLess10s: 12,
                acceptLess20s: 12,
                acceptLess30s: 12,
                acceptLess1m: 12,
                acceptLess2m: 12,
                acceptMore2m: 12,
                avgCallDuration: "00:01:12",
                maxCallDuration: "00:01:54",
                avgWaitingTimeLostCall: "00:00:54",
                maxWaitingTimeLostCall: "00:00:32",
                avgWaitingTimeReceivedCall: "00:00:34",
                maxWaitingTimeReceivedCall: "00:01:00",
                avgTalkTime: "00:01:12",
                maxTalkTime: "00:01:12",
            },
            {
                id: 1,
                startPeriod: "12.08.2023",
                endPeriod: "13.08.2023",
                queue: "GSM",
                totalCall: 128,
                percentageReceivedCalls: 12,
                serviceLevel: "98%",
                totalSkipped: 12,
                skippedLess5s: 12,
                skippedLess10s: 12,
                skippedLess20s: 12,
                skippedLess30s: 12,
                skippedLess1m: 12,
                skippedLess2m: 12,
                skippedMore2m: 12,
                totalAccept: 12,
                acceptLess5s: 12,
                acceptLess10s: 12,
                acceptLess20s: 12,
                acceptLess30s: 12,
                acceptLess1m: 12,
                acceptLess2m: 12,
                acceptMore2m: 12,
                avgCallDuration: "00:01:12",
                maxCallDuration: "00:01:54",
                avgWaitingTimeLostCall: "00:00:54",
                maxWaitingTimeLostCall: "00:00:32",
                avgWaitingTimeReceivedCall: "00:00:34",
                maxWaitingTimeReceivedCall: "00:01:00",
                avgTalkTime: "00:01:12",
                maxTalkTime: "00:01:12",
            },
            {
                id: 1,
                startPeriod: "12.08.2023",
                endPeriod: "13.08.2023",
                queue: "GSM",
                totalCall: 128,
                percentageReceivedCalls: 12,
                serviceLevel: "98%",
                totalSkipped: 12,
                skippedLess5s: 12,
                skippedLess10s: 12,
                skippedLess20s: 12,
                skippedLess30s: 12,
                skippedLess1m: 12,
                skippedLess2m: 12,
                skippedMore2m: 12,
                totalAccept: 12,
                acceptLess5s: 12,
                acceptLess10s: 12,
                acceptLess20s: 12,
                acceptLess30s: 12,
                acceptLess1m: 12,
                acceptLess2m: 12,
                acceptMore2m: 12,
                avgCallDuration: "00:01:12",
                maxCallDuration: "00:01:54",
                avgWaitingTimeLostCall: "00:00:54",
                maxWaitingTimeLostCall: "00:00:32",
                avgWaitingTimeReceivedCall: "00:00:34",
                maxWaitingTimeReceivedCall: "00:01:00",
                avgTalkTime: "00:01:12",
                maxTalkTime: "00:01:12",
            },
            {
                id: 1,
                startPeriod: "12.08.2023",
                endPeriod: "13.08.2023",
                queue: "GSM",
                totalCall: 128,
                percentageReceivedCalls: 12,
                serviceLevel: "98%",
                totalSkipped: 12,
                skippedLess5s: 12,
                skippedLess10s: 12,
                skippedLess20s: 12,
                skippedLess30s: 12,
                skippedLess1m: 12,
                skippedLess2m: 12,
                skippedMore2m: 12,
                totalAccept: 12,
                acceptLess5s: 12,
                acceptLess10s: 12,
                acceptLess20s: 12,
                acceptLess30s: 12,
                acceptLess1m: 12,
                acceptLess2m: 12,
                acceptMore2m: 12,
                avgCallDuration: "00:01:12",
                maxCallDuration: "00:01:54",
                avgWaitingTimeLostCall: "00:00:54",
                maxWaitingTimeLostCall: "00:00:32",
                avgWaitingTimeReceivedCall: "00:00:34",
                maxWaitingTimeReceivedCall: "00:01:00",
                avgTalkTime: "00:01:12",
                maxTalkTime: "00:01:12",
            },
            {
                id: 1,
                startPeriod: "12.08.2023",
                endPeriod: "13.08.2023",
                queue: "GSM",
                totalCall: 128,
                percentageReceivedCalls: 12,
                serviceLevel: "98%",
                totalSkipped: 12,
                skippedLess5s: 12,
                skippedLess10s: 12,
                skippedLess20s: 12,
                skippedLess30s: 12,
                skippedLess1m: 12,
                skippedLess2m: 12,
                skippedMore2m: 12,
                totalAccept: 12,
                acceptLess5s: 12,
                acceptLess10s: 12,
                acceptLess20s: 12,
                acceptLess30s: 12,
                acceptLess1m: 12,
                acceptLess2m: 12,
                acceptMore2m: 12,
                avgCallDuration: "00:01:12",
                maxCallDuration: "00:01:54",
                avgWaitingTimeLostCall: "00:00:54",
                maxWaitingTimeLostCall: "00:00:32",
                avgWaitingTimeReceivedCall: "00:00:34",
                maxWaitingTimeReceivedCall: "00:01:00",
                avgTalkTime: "00:01:12",
                maxTalkTime: "00:01:12",
            },
        ],
        schema: [{
            name: 1,
            date: "24.04.2023",
            serviceLevel: 98,
            skipped: 15,
            accept: 258,
        }],
        providers: [
            {
                name: "105 GSM",
                value: 9,
                fill: ''
            },
            {
                name: "115 GSM",
                value: 11,
                fill: ''
            },
            {
                name: "Белтел 105",
                value: 32,
                fill: ''
            },
            {
                name: "Белтел 115",
                value: 4,
                fill: ''
            },
            {
                name: "34-15-79",
                value: 1,
                fill: ''
            },
            {
                name: "45-11-01",
                value: 10,
                fill: ''
            },

            ],
        total: [{
            name: "Принято",
            value: 15,
            fill: ''
        },{
            name: "Пропущено",
            value: 10,
            fill: ''
        }
        ],
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