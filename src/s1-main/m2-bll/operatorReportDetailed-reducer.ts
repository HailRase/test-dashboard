import {StoreType} from "./store";
import {ThunkAction} from "redux-thunk";

const SET_OPERATOR_REPORT_DETAILED_DATA = "SET_OPERATOR_REPORT_DETAILED_DATA";
const SET_STATUS = "SET_STATUS"

type DataThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionDataType>;


type ActionDataType = ReturnType<typeof setOperatorReportDetailedData> | ReturnType<typeof setStatus>


export type OperatorReportDetailedType = {
    id: number
    startPeriod: string
    endPeriod: string
    operator: string
    number: number
    department: "Начальник ЛКЦ" | "Зам. Начальника ЛКЦ" | "Инженеры по подготовке кадров" | "Инженеры по ТО"
        | "Специалисты по контролю качества" | "Специалисты"
        | "Дежурные по выдаче справок (старшие)" | "Дежурные по выдаче справок" | "Ведущий специалист"
    percentUnanswered: number
    percentAnswered: number
    serviceLevelUpTo5Sec: number
    serviceLevelUpTo10Sec: number
    accept: number
    acceptLess5: number
    acceptLess10: number
    acceptLess15: number
    acceptMore15: number
    canceled: number
    skipped: number
    received: number
    outgoingCallHandlingTotal: number
    outgoingCallHandlingAnswered: number
    outgoingCallHandlingNotAnswered: number
    outgoingCallHandlingCanceled: number
    outgoingCallHandlingBusy: number
    outgoingCallHandlingNotAvailable: number
    handlingInternalCallsTotal: number
    handlingInternalCallsAnswered: number
    handlingInternalCallsNotAnswered: number
    handlingInternalCallsCanceled: number
    handlingInternalCallsBusy: number
    handlingInternalCallsNotAvailable: number
    incomingCallsAvgTalkTime: string
    incomingCallsAvgHoldTime: string
    incomingCallsAvgCallingTime: string
    outgoingCallsAvgTalkTime: string
    outgoingCallsAvgHoldTime: string
    outgoingCallsAvgCallingTime: string
    internalCallsAvgTalkTime: string
    internalCallsAvgHoldTime: string
    internalCallsAvgCallingTime: string
}
type StatusType = "init" | "loading" | "loaded"
type InitialStateType = {
    data: OperatorReportDetailedType[]
    status: StatusType
}
const initialState:InitialStateType = {
    data: [
        {
            id: 1,
            startPeriod: "16.04.23 13:35:02",
            endPeriod: "17.04.23 13:35:02",
            operator: "Жарикова Наталья Анатольевна",
            number: 420,
            department:  "Дежурные по выдаче справок",
            percentUnanswered: 0,
            percentAnswered: 0,
            serviceLevelUpTo5Sec: 5,
            serviceLevelUpTo10Sec: 10,
            accept: 25,
            acceptLess5: 0,
            acceptLess10: 3,
            acceptLess15: 0,
            acceptMore15: 0,
            canceled: 0,
            skipped: 0,
            received: 25,
            outgoingCallHandlingTotal: 0,
            outgoingCallHandlingAnswered: 3,
            outgoingCallHandlingNotAnswered: 0,
            outgoingCallHandlingCanceled: 50,
            outgoingCallHandlingBusy: 0,
            outgoingCallHandlingNotAvailable: 0,
            handlingInternalCallsTotal: 0,
            handlingInternalCallsAnswered: 3,
            handlingInternalCallsNotAnswered: 2,
            handlingInternalCallsCanceled: 1,
            handlingInternalCallsBusy: 2,
            handlingInternalCallsNotAvailable: 0,
            incomingCallsAvgTalkTime: "0:00:00",
            incomingCallsAvgHoldTime: "0:22:00",
            incomingCallsAvgCallingTime: "0:00:00",
            outgoingCallsAvgTalkTime: "0:01:00",
            outgoingCallsAvgHoldTime: "0:00:00",
            outgoingCallsAvgCallingTime: "0:10:00",
            internalCallsAvgTalkTime: "0:00:00",
            internalCallsAvgHoldTime: "0:02:00",
            internalCallsAvgCallingTime: "0:45:00"
        },
        {
            id: 2,
            startPeriod: "16.04.23 13:35:00",
            endPeriod: "17.04.23 13:35:00",
            operator: "Жарикова Наталья Анатольевна",
            number: 420,
            department:  "Дежурные по выдаче справок",
            percentUnanswered: 0,
            percentAnswered: 80,
            serviceLevelUpTo5Sec: 5,
            serviceLevelUpTo10Sec: 10,
            accept: 25,
            acceptLess5: 0,
            acceptLess10: 3,
            acceptLess15: 0,
            acceptMore15: 5,
            canceled: 0,
            skipped: 0,
            received: 25,
            outgoingCallHandlingTotal: 0,
            outgoingCallHandlingAnswered: 3,
            outgoingCallHandlingNotAnswered: 0,
            outgoingCallHandlingCanceled: 4,
            outgoingCallHandlingBusy: 0,
            outgoingCallHandlingNotAvailable: 5,
            handlingInternalCallsTotal: 0,
            handlingInternalCallsAnswered: 3,
            handlingInternalCallsNotAnswered: 2,
            handlingInternalCallsCanceled: 1,
            handlingInternalCallsBusy: 2,
            handlingInternalCallsNotAvailable: 0,
            incomingCallsAvgTalkTime: "0:02:00",
            incomingCallsAvgHoldTime: "0:03:00",
            incomingCallsAvgCallingTime: "0:50:00",
            outgoingCallsAvgTalkTime: "0:33:00",
            outgoingCallsAvgHoldTime: "0:45:00",
            outgoingCallsAvgCallingTime: "0:55:00",
            internalCallsAvgTalkTime: "0:32:00",
            internalCallsAvgHoldTime: "0:27:00",
            internalCallsAvgCallingTime: "0:28:00"
        },
        {
            id: 3,
            startPeriod: "16.04.23 13:35:00",
            endPeriod: "17.04.23 13:35:00",
            operator: "Жарикова Наталья Анатольевна",
            number: 420,
            department:  "Начальник ЛКЦ",
            percentUnanswered: 0,
            percentAnswered: 70,
            serviceLevelUpTo5Sec: 5,
            serviceLevelUpTo10Sec: 0,
            accept: 25,
            acceptLess5: 15,
            acceptLess10: 0,
            acceptLess15: 2,
            acceptMore15: 0,
            canceled: 4,
            skipped: 3,
            received: 25,
            outgoingCallHandlingTotal: 0,
            outgoingCallHandlingAnswered: 1,
            outgoingCallHandlingNotAnswered: 2,
            outgoingCallHandlingCanceled: 0,
            outgoingCallHandlingBusy: 30,
            outgoingCallHandlingNotAvailable: 0,
            handlingInternalCallsTotal: 0,
            handlingInternalCallsAnswered: 3,
            handlingInternalCallsNotAnswered: 2,
            handlingInternalCallsCanceled: 1,
            handlingInternalCallsBusy: 2,
            handlingInternalCallsNotAvailable: 0,
            incomingCallsAvgTalkTime: "0:01:00",
            incomingCallsAvgHoldTime: "0:00:56",
            incomingCallsAvgCallingTime: "0:00:30",
            outgoingCallsAvgTalkTime: "0:00:00",
            outgoingCallsAvgHoldTime: "0:00:30",
            outgoingCallsAvgCallingTime: "0:02:00",
            internalCallsAvgTalkTime: "0:02:00",
            internalCallsAvgHoldTime: "0:05:00",
            internalCallsAvgCallingTime: "0:00:00"
        },
        {
            id: 4,
            startPeriod: "16.04.23 13:35:00",
            endPeriod: "17.04.23 13:35:00",
            operator: "Жарикова Наталья Анатольевна",
            number: 420,
            department:  "Ведущий специалист",
            percentUnanswered: 0,
            percentAnswered: 100,
            serviceLevelUpTo5Sec: 5,
            serviceLevelUpTo10Sec: 10,
            accept: 25,
            acceptLess5: 15,
            acceptLess10: 0,
            acceptLess15:0,
            acceptMore15: 0,
            canceled: 1,
            skipped: 2,
            received: 25,
            outgoingCallHandlingTotal: 0,
            outgoingCallHandlingAnswered: 0,
            outgoingCallHandlingNotAnswered: 0,
            outgoingCallHandlingCanceled: 2,
            outgoingCallHandlingBusy: 0,
            outgoingCallHandlingNotAvailable: 4,
            handlingInternalCallsTotal: 0,
            handlingInternalCallsAnswered: 3,
            handlingInternalCallsNotAnswered: 2,
            handlingInternalCallsCanceled: 1,
            handlingInternalCallsBusy: 2,
            handlingInternalCallsNotAvailable: 0,
            incomingCallsAvgTalkTime: "12:00:00",
            incomingCallsAvgHoldTime: "0:03:00",
            incomingCallsAvgCallingTime: "0:25:00",
            outgoingCallsAvgTalkTime: "0:32:00",
            outgoingCallsAvgHoldTime: "0:02:00",
            outgoingCallsAvgCallingTime: "0:04:00",
            internalCallsAvgTalkTime: "0:06:00",
            internalCallsAvgHoldTime: "0:04:00",
            internalCallsAvgCallingTime: "0:00:00"
        },
        {
            id: 5,
            startPeriod: "16.04.23 13:35:00",
            endPeriod: "17.04.23 13:35:00",
            operator: "Жарикова Наталья Анатольевна",
            number: 420,
            department:  "Инженеры по ТО",
            percentUnanswered: 0,
            percentAnswered: 100,
            serviceLevelUpTo5Sec: 5,
            serviceLevelUpTo10Sec: 0,
            accept: 25,
            acceptLess5: 15,
            acceptLess10: 0,
            acceptLess15: 0,
            acceptMore15: 5,
            canceled: 2,
            skipped: 0,
            received: 25,
            outgoingCallHandlingTotal: 7,
            outgoingCallHandlingAnswered: 0,
            outgoingCallHandlingNotAnswered: 3,
            outgoingCallHandlingCanceled: 4,
            outgoingCallHandlingBusy: 4,
            outgoingCallHandlingNotAvailable: 0,
            handlingInternalCallsTotal: 0,
            handlingInternalCallsAnswered: 3,
            handlingInternalCallsNotAnswered: 2,
            handlingInternalCallsCanceled: 1,
            handlingInternalCallsBusy: 2,
            handlingInternalCallsNotAvailable: 0,
            incomingCallsAvgTalkTime: "23:59:59",
            incomingCallsAvgHoldTime: "0:34:00",
            incomingCallsAvgCallingTime: "0:00:00",
            outgoingCallsAvgTalkTime: "0:00:10",
            outgoingCallsAvgHoldTime: "0:00:20",
            outgoingCallsAvgCallingTime: "0:00:00",
            internalCallsAvgTalkTime: "0:04:00",
            internalCallsAvgHoldTime: "0:05:00",
            internalCallsAvgCallingTime: "0:00:00"
        },
        {
            id: 6,
            startPeriod: "16.04.23 13:35:00",
            endPeriod: "17.04.23 13:35:00",
            operator: "Жарикова Наталья Анатольевна",
            number: 420,
            department:  "Дежурные по выдаче справок (старшие)",
            percentUnanswered: 20,
            percentAnswered: 80,
            serviceLevelUpTo5Sec: 5,
            serviceLevelUpTo10Sec: 0,
            accept: 25,
            acceptLess5: 15,
            acceptLess10: 3,
            acceptLess15: 2,
            acceptMore15: 5,
            canceled: 0,
            skipped: 0,
            received: 25,
            outgoingCallHandlingTotal: 4,
            outgoingCallHandlingAnswered: 0,
            outgoingCallHandlingNotAnswered: 5,
            outgoingCallHandlingCanceled: 0,
            outgoingCallHandlingBusy: 0,
            outgoingCallHandlingNotAvailable: 6,
            handlingInternalCallsTotal: 0,
            handlingInternalCallsAnswered: 3,
            handlingInternalCallsNotAnswered: 2,
            handlingInternalCallsCanceled: 1,
            handlingInternalCallsBusy: 2,
            handlingInternalCallsNotAvailable: 0,
            incomingCallsAvgTalkTime: "23:59:59",
            incomingCallsAvgHoldTime: "0:02:00",
            incomingCallsAvgCallingTime: "0:30:00",
            outgoingCallsAvgTalkTime: "0:00:00",
            outgoingCallsAvgHoldTime: "0:00:00",
            outgoingCallsAvgCallingTime: "0:40:00",
            internalCallsAvgTalkTime: "0:05:00",
            internalCallsAvgHoldTime: "0:02:00",
            internalCallsAvgCallingTime: "0:10:00"
        },
        {
            id: 7,
            startPeriod: "16.04.23 13:35:00",
            endPeriod: "17.04.23 13:35:00",
            operator: "Жарикова Наталья Анатольевна",
            number: 420,
            department:  "Специалисты по контролю качества",
            percentUnanswered: 50,
            percentAnswered: 50,
            serviceLevelUpTo5Sec: 5,
            serviceLevelUpTo10Sec: 0,
            accept: 25,
            acceptLess5: 0,
            acceptLess10: 3,
            acceptLess15: 2,
            acceptMore15: 5,
            canceled: 0,
            skipped: 0,
            received: 25,
            outgoingCallHandlingTotal: 0,
            outgoingCallHandlingAnswered: 0,
            outgoingCallHandlingNotAnswered: 0,
            outgoingCallHandlingCanceled: 0,
            outgoingCallHandlingBusy: 0,
            outgoingCallHandlingNotAvailable: 0,
            handlingInternalCallsTotal: 0,
            handlingInternalCallsAnswered: 3,
            handlingInternalCallsNotAnswered: 2,
            handlingInternalCallsCanceled: 1,
            handlingInternalCallsBusy: 2,
            handlingInternalCallsNotAvailable: 0,
            incomingCallsAvgTalkTime: "23:59:59",
            incomingCallsAvgHoldTime: "0:00:00",
            incomingCallsAvgCallingTime: "0:00:00",
            outgoingCallsAvgTalkTime: "0:00:00",
            outgoingCallsAvgHoldTime: "0:00:00",
            outgoingCallsAvgCallingTime: "0:00:00",
            internalCallsAvgTalkTime: "0:00:00",
            internalCallsAvgHoldTime: "0:00:00",
            internalCallsAvgCallingTime: "0:00:00"
        },
        {
            id: 8,
            startPeriod: "16.04.23 13:35:00",
            endPeriod: "17.04.23 13:35:00",
            operator: "Жарикова Наталья Анатольевна",
            number: 420,
            department:  "Инженеры по ТО",
            percentUnanswered: 0,
            percentAnswered: 100,
            serviceLevelUpTo5Sec: 5,
            serviceLevelUpTo10Sec: 10,
            accept: 25,
            acceptLess5: 15,
            acceptLess10: 3,
            acceptLess15: 2,
            acceptMore15: 5,
            canceled: 0,
            skipped: 0,
            received: 25,
            outgoingCallHandlingTotal: 0,
            outgoingCallHandlingAnswered: 0,
            outgoingCallHandlingNotAnswered: 0,
            outgoingCallHandlingCanceled: 0,
            outgoingCallHandlingBusy: 0,
            outgoingCallHandlingNotAvailable: 0,
            handlingInternalCallsTotal: 0,
            handlingInternalCallsAnswered: 3,
            handlingInternalCallsNotAnswered: 2,
            handlingInternalCallsCanceled: 1,
            handlingInternalCallsBusy: 2,
            handlingInternalCallsNotAvailable: 0,
            incomingCallsAvgTalkTime: "23:59:59",
            incomingCallsAvgHoldTime: "0:00:00",
            incomingCallsAvgCallingTime: "0:00:00",
            outgoingCallsAvgTalkTime: "0:01:00",
            outgoingCallsAvgHoldTime: "0:00:00",
            outgoingCallsAvgCallingTime: "0:00:00",
            internalCallsAvgTalkTime: "0:00:00",
            internalCallsAvgHoldTime: "0:04:00",
            internalCallsAvgCallingTime: "0:00:00"
        },
        {
            id: 9,
            startPeriod: "16.04.23 13:35:00",
            endPeriod: "17.04.23 13:35:00",
            operator: "Жарикова Наталья Анатольевна",
            number: 420,
            department:  "Специалисты",
            percentUnanswered: 0,
            percentAnswered: 100,
            serviceLevelUpTo5Sec: 5,
            serviceLevelUpTo10Sec: 10,
            accept: 25,
            acceptLess5: 15,
            acceptLess10: 3,
            acceptLess15: 2,
            acceptMore15: 5,
            canceled: 0,
            skipped: 0,
            received: 25,
            outgoingCallHandlingTotal: 0,
            outgoingCallHandlingAnswered: 0,
            outgoingCallHandlingNotAnswered: 0,
            outgoingCallHandlingCanceled: 0,
            outgoingCallHandlingBusy: 0,
            outgoingCallHandlingNotAvailable: 0,
            handlingInternalCallsTotal: 0,
            handlingInternalCallsAnswered: 3,
            handlingInternalCallsNotAnswered: 2,
            handlingInternalCallsCanceled: 1,
            handlingInternalCallsBusy: 2,
            handlingInternalCallsNotAvailable: 0,
            incomingCallsAvgTalkTime: "23:59:59",
            incomingCallsAvgHoldTime: "0:00:00",
            incomingCallsAvgCallingTime: "0:03:00",
            outgoingCallsAvgTalkTime: "0:00:00",
            outgoingCallsAvgHoldTime: "0:00:00",
            outgoingCallsAvgCallingTime: "0:04:00",
            internalCallsAvgTalkTime: "0:00:00",
            internalCallsAvgHoldTime: "0:00:00",
            internalCallsAvgCallingTime: "0:00:00"
        },
        {
            id: 10,
            startPeriod: "16.04.23 13:35:00",
            endPeriod: "17.04.23 13:35:00",
            operator: "Жарикова Наталья Анатольевна",
            number: 420,
            department:  "Дежурные по выдаче справок",
            percentUnanswered: 0,
            percentAnswered: 100,
            serviceLevelUpTo5Sec: 5,
            serviceLevelUpTo10Sec: 10,
            accept: 25,
            acceptLess5: 15,
            acceptLess10: 3,
            acceptLess15: 2,
            acceptMore15: 5,
            canceled: 0,
            skipped: 0,
            received: 25,
            outgoingCallHandlingTotal: 0,
            outgoingCallHandlingAnswered: 0,
            outgoingCallHandlingNotAnswered: 0,
            outgoingCallHandlingCanceled: 0,
            outgoingCallHandlingBusy: 0,
            outgoingCallHandlingNotAvailable: 0,
            handlingInternalCallsTotal: 0,
            handlingInternalCallsAnswered: 3,
            handlingInternalCallsNotAnswered: 2,
            handlingInternalCallsCanceled: 1,
            handlingInternalCallsBusy: 2,
            handlingInternalCallsNotAvailable: 0,
            incomingCallsAvgTalkTime: "23:59:59",
            incomingCallsAvgHoldTime: "0:20:00",
            incomingCallsAvgCallingTime: "0:04:00",
            outgoingCallsAvgTalkTime: "0:00:53",
            outgoingCallsAvgHoldTime: "0:00:00",
            outgoingCallsAvgCallingTime: "0:34:00",
            internalCallsAvgTalkTime: "0:00:00",
            internalCallsAvgHoldTime: "0:00:00",
            internalCallsAvgCallingTime: "0:43:00"
        },
        {
            id: 11,
            startPeriod: "16.04.23 13:35:00",
            endPeriod: "17.04.23 13:35:00",
            operator: "Жарикова Наталья Анатольевна",
            number: 420,
            department:  "Дежурные по выдаче справок",
            percentUnanswered: 0,
            percentAnswered: 100,
            serviceLevelUpTo5Sec: 5,
            serviceLevelUpTo10Sec: 10,
            accept: 25,
            acceptLess5: 15,
            acceptLess10: 3,
            acceptLess15: 2,
            acceptMore15: 5,
            canceled: 0,
            skipped: 0,
            received: 25,
            outgoingCallHandlingTotal: 0,
            outgoingCallHandlingAnswered: 0,
            outgoingCallHandlingNotAnswered: 0,
            outgoingCallHandlingCanceled: 0,
            outgoingCallHandlingBusy: 0,
            outgoingCallHandlingNotAvailable: 0,
            handlingInternalCallsTotal: 0,
            handlingInternalCallsAnswered: 3,
            handlingInternalCallsNotAnswered: 2,
            handlingInternalCallsCanceled: 1,
            handlingInternalCallsBusy: 2,
            handlingInternalCallsNotAvailable: 0,
            incomingCallsAvgTalkTime: "23:59:59",
            incomingCallsAvgHoldTime: "0:00:00",
            incomingCallsAvgCallingTime: "0:00:00",
            outgoingCallsAvgTalkTime: "0:00:00",
            outgoingCallsAvgHoldTime: "0:03:00",
            outgoingCallsAvgCallingTime: "0:08:00",
            internalCallsAvgTalkTime: "0:04:00",
            internalCallsAvgHoldTime: "0:00:00",
            internalCallsAvgCallingTime: "0:00:00"
        },
        {
            id: 12,
            startPeriod: "16.04.23 13:35:00",
            endPeriod: "17.04.23 13:35:00",
            operator: "Жарикова Наталья Анатольевна",
            number: 420,
            department:  "Дежурные по выдаче справок (старшие)",
            percentUnanswered: 0,
            percentAnswered: 100,
            serviceLevelUpTo5Sec: 5,
            serviceLevelUpTo10Sec: 10,
            accept: 25,
            acceptLess5: 15,
            acceptLess10: 3,
            acceptLess15: 2,
            acceptMore15: 5,
            canceled: 0,
            skipped: 0,
            received: 25,
            outgoingCallHandlingTotal: 0,
            outgoingCallHandlingAnswered: 0,
            outgoingCallHandlingNotAnswered: 0,
            outgoingCallHandlingCanceled: 0,
            outgoingCallHandlingBusy: 0,
            outgoingCallHandlingNotAvailable: 0,
            handlingInternalCallsTotal: 0,
            handlingInternalCallsAnswered: 3,
            handlingInternalCallsNotAnswered: 2,
            handlingInternalCallsCanceled: 1,
            handlingInternalCallsBusy: 2,
            handlingInternalCallsNotAvailable: 0,
            incomingCallsAvgTalkTime: "23:59:59",
            incomingCallsAvgHoldTime: "0:00:00",
            incomingCallsAvgCallingTime: "0:00:00",
            outgoingCallsAvgTalkTime: "0:00:00",
            outgoingCallsAvgHoldTime: "0:00:00",
            outgoingCallsAvgCallingTime: "0:00:00",
            internalCallsAvgTalkTime: "0:00:00",
            internalCallsAvgHoldTime: "0:00:00",
            internalCallsAvgCallingTime: "0:00:00"
        },
        {
            id: 13,
            startPeriod: "16.04.23 13:35:00",
            endPeriod: "17.04.23 13:35:00",
            operator: "Жарикова Наталья Анатольевна",
            number: 420,
            department:  "Дежурные по выдаче справок",
            percentUnanswered: 0,
            percentAnswered: 100,
            serviceLevelUpTo5Sec: 5,
            serviceLevelUpTo10Sec: 10,
            accept: 25,
            acceptLess5: 15,
            acceptLess10: 3,
            acceptLess15: 2,
            acceptMore15: 5,
            canceled: 0,
            skipped: 0,
            received: 25,
            outgoingCallHandlingTotal: 0,
            outgoingCallHandlingAnswered: 0,
            outgoingCallHandlingNotAnswered: 0,
            outgoingCallHandlingCanceled: 0,
            outgoingCallHandlingBusy: 0,
            outgoingCallHandlingNotAvailable: 0,
            handlingInternalCallsTotal: 0,
            handlingInternalCallsAnswered: 3,
            handlingInternalCallsNotAnswered: 2,
            handlingInternalCallsCanceled: 1,
            handlingInternalCallsBusy: 2,
            handlingInternalCallsNotAvailable: 0,
            incomingCallsAvgTalkTime: "80:59:59",
            incomingCallsAvgHoldTime: "0:04:00",
            incomingCallsAvgCallingTime: "0:00:00",
            outgoingCallsAvgTalkTime: "0:00:00",
            outgoingCallsAvgHoldTime: "0:02:00",
            outgoingCallsAvgCallingTime: "0:00:00",
            internalCallsAvgTalkTime: "0:00:00",
            internalCallsAvgHoldTime: "0:50:00",
            internalCallsAvgCallingTime: "0:00:00"
        },
        {
            id: 14,
            startPeriod: "16.04.23 13:35:00",
            endPeriod: "17.04.23 13:35:00",
            operator: "Жарикова Наталья Анатольевна",
            number: 420,
            department:  "Инженеры по подготовке кадров",
            percentUnanswered: 0,
            percentAnswered: 100,
            serviceLevelUpTo5Sec: 5,
            serviceLevelUpTo10Sec: 10,
            accept: 25,
            acceptLess5: 15,
            acceptLess10: 3,
            acceptLess15: 2,
            acceptMore15: 5,
            canceled: 0,
            skipped: 0,
            received: 25,
            outgoingCallHandlingTotal: 0,
            outgoingCallHandlingAnswered: 0,
            outgoingCallHandlingNotAnswered: 0,
            outgoingCallHandlingCanceled: 0,
            outgoingCallHandlingBusy: 0,
            outgoingCallHandlingNotAvailable: 0,
            handlingInternalCallsTotal: 0,
            handlingInternalCallsAnswered: 3,
            handlingInternalCallsNotAnswered: 2,
            handlingInternalCallsCanceled: 1,
            handlingInternalCallsBusy: 2,
            handlingInternalCallsNotAvailable: 0,
            incomingCallsAvgTalkTime: "0:50:00",
            incomingCallsAvgHoldTime: "0:03:00",
            incomingCallsAvgCallingTime: "0:00:00",
            outgoingCallsAvgTalkTime: "0:00:00",
            outgoingCallsAvgHoldTime: "0:00:00",
            outgoingCallsAvgCallingTime: "0:40:00",
            internalCallsAvgTalkTime: "0:00:00",
            internalCallsAvgHoldTime: "0:00:00",
            internalCallsAvgCallingTime: "0:00:00"
        },
        {
            id: 15,
            startPeriod: "16.04.23 13:35:00",
            endPeriod: "17.04.23 13:35:00",
            operator: "Жарикова Наталья Анатольевна",
            number: 420,
            department:  "Специалисты",
            percentUnanswered: 0,
            percentAnswered: 100,
            serviceLevelUpTo5Sec: 5,
            serviceLevelUpTo10Sec: 10,
            accept: 25,
            acceptLess5: 15,
            acceptLess10: 3,
            acceptLess15: 2,
            acceptMore15: 5,
            canceled: 0,
            skipped: 0,
            received: 25,
            outgoingCallHandlingTotal: 0,
            outgoingCallHandlingAnswered: 0,
            outgoingCallHandlingNotAnswered: 0,
            outgoingCallHandlingCanceled: 0,
            outgoingCallHandlingBusy: 0,
            outgoingCallHandlingNotAvailable: 0,
            handlingInternalCallsTotal: 0,
            handlingInternalCallsAnswered: 3,
            handlingInternalCallsNotAnswered: 2,
            handlingInternalCallsCanceled: 1,
            handlingInternalCallsBusy: 2,
            handlingInternalCallsNotAvailable: 0,
            incomingCallsAvgTalkTime: "0:00:00",
            incomingCallsAvgHoldTime: "0:00:00",
            incomingCallsAvgCallingTime: "0:30:00",
            outgoingCallsAvgTalkTime: "0:04:50",
            outgoingCallsAvgHoldTime: "0:03:06",
            outgoingCallsAvgCallingTime: "0:06:30",
            internalCallsAvgTalkTime: "0:00:00",
            internalCallsAvgHoldTime: "0:00:00",
            internalCallsAvgCallingTime: "0:00:00"
        },
        {
            id: 16,
            startPeriod: "16.04.23 13:35:00",
            endPeriod: "17.04.23 13:35:00",
            operator: "Жарикова Наталья Анатольевна",
            number: 420,
            department:  "Начальник ЛКЦ",
            percentUnanswered: 0,
            percentAnswered: 100,
            serviceLevelUpTo5Sec: 5,
            serviceLevelUpTo10Sec: 10,
            accept: 25,
            acceptLess5: 15,
            acceptLess10: 3,
            acceptLess15: 2,
            acceptMore15: 5,
            canceled: 0,
            skipped: 0,
            received: 25,
            outgoingCallHandlingTotal: 0,
            outgoingCallHandlingAnswered: 0,
            outgoingCallHandlingNotAnswered: 0,
            outgoingCallHandlingCanceled: 0,
            outgoingCallHandlingBusy: 0,
            outgoingCallHandlingNotAvailable: 0,
            handlingInternalCallsTotal: 0,
            handlingInternalCallsAnswered: 3,
            handlingInternalCallsNotAnswered: 2,
            handlingInternalCallsCanceled: 1,
            handlingInternalCallsBusy: 2,
            handlingInternalCallsNotAvailable: 0,
            incomingCallsAvgTalkTime: "0:04:00",
            incomingCallsAvgHoldTime: "0:00:00",
            incomingCallsAvgCallingTime: "0:30:00",
            outgoingCallsAvgTalkTime: "0:00:00",
            outgoingCallsAvgHoldTime: "0:40:00",
            outgoingCallsAvgCallingTime: "0:50:00",
            internalCallsAvgTalkTime: "0:03:00",
            internalCallsAvgHoldTime: "0:00:00",
            internalCallsAvgCallingTime: "0:00:00"
        },
        {
            id: 17,
            startPeriod: "16.04.23 13:35:00",
            endPeriod: "17.04.23 13:35:00",
            operator: "Жарикова Наталья Анатольевна",
            number: 420,
            department:  "Начальник ЛКЦ",
            percentUnanswered: 0,
            percentAnswered: 100,
            serviceLevelUpTo5Sec: 5,
            serviceLevelUpTo10Sec: 10,
            accept: 25,
            acceptLess5: 15,
            acceptLess10: 3,
            acceptLess15: 2,
            acceptMore15: 5,
            canceled: 0,
            skipped: 0,
            received: 25,
            outgoingCallHandlingTotal: 0,
            outgoingCallHandlingAnswered: 0,
            outgoingCallHandlingNotAnswered: 0,
            outgoingCallHandlingCanceled: 0,
            outgoingCallHandlingBusy: 0,
            outgoingCallHandlingNotAvailable: 0,
            handlingInternalCallsTotal: 0,
            handlingInternalCallsAnswered: 3,
            handlingInternalCallsNotAnswered: 2,
            handlingInternalCallsCanceled: 1,
            handlingInternalCallsBusy: 2,
            handlingInternalCallsNotAvailable: 0,
            incomingCallsAvgTalkTime: "0:00:00",
            incomingCallsAvgHoldTime: "0:40:00",
            incomingCallsAvgCallingTime: "0:05:00",
            outgoingCallsAvgTalkTime: "0:06:00",
            outgoingCallsAvgHoldTime: "0:05:00",
            outgoingCallsAvgCallingTime: "0:08:00",
            internalCallsAvgTalkTime: "0:03:00",
            internalCallsAvgHoldTime: "0:03:00",
            internalCallsAvgCallingTime: "0:02:00"
        },
        {
            id: 18,
            startPeriod: "16.04.23 13:35:00",
            endPeriod: "17.04.23 13:35:00",
            operator: "Жарикова Наталья Анатольевна",
            number: 420,
            department:  "Зам. Начальника ЛКЦ",
            percentUnanswered: 0,
            percentAnswered: 0,
            serviceLevelUpTo5Sec: 5,
            serviceLevelUpTo10Sec: 10,
            accept: 25,
            acceptLess5: 0,
            acceptLess10: 3,
            acceptLess15: 0,
            acceptMore15: 5,
            canceled: 0,
            skipped: 0,
            received: 25,
            outgoingCallHandlingTotal: 0,
            outgoingCallHandlingAnswered: 0,
            outgoingCallHandlingNotAnswered: 0,
            outgoingCallHandlingCanceled: 0,
            outgoingCallHandlingBusy: 0,
            outgoingCallHandlingNotAvailable: 0,
            handlingInternalCallsTotal: 0,
            handlingInternalCallsAnswered: 3,
            handlingInternalCallsNotAnswered: 2,
            handlingInternalCallsCanceled: 1,
            handlingInternalCallsBusy: 2,
            handlingInternalCallsNotAvailable: 0,
            incomingCallsAvgTalkTime: "0:00:00",
            incomingCallsAvgHoldTime: "0:00:00",
            incomingCallsAvgCallingTime: "0:00:00",
            outgoingCallsAvgTalkTime: "0:00:00",
            outgoingCallsAvgHoldTime: "0:00:00",
            outgoingCallsAvgCallingTime: "0:00:00",
            internalCallsAvgTalkTime: "0:00:00",
            internalCallsAvgHoldTime: "0:00:00",
            internalCallsAvgCallingTime: "0:00:00"
        },
        {
            id: 19,
            startPeriod: "16.04.23 13:35:00",
            endPeriod: "17.04.23 13:35:00",
            operator: "Жарикова Наталья Анатольевна",
            number: 420,
            department:  "Инженеры по подготовке кадров",
            percentUnanswered: 0,
            percentAnswered: 56,
            serviceLevelUpTo5Sec: 5,
            serviceLevelUpTo10Sec: 10,
            accept: 0,
            acceptLess5: 15,
            acceptLess10: 0,
            acceptLess15: 2,
            acceptMore15: 5,
            canceled: 0,
            skipped: 0,
            received: 25,
            outgoingCallHandlingTotal: 0,
            outgoingCallHandlingAnswered: 3,
            outgoingCallHandlingNotAnswered: 0,
            outgoingCallHandlingCanceled: 2,
            outgoingCallHandlingBusy: 0,
            outgoingCallHandlingNotAvailable: 4,
            handlingInternalCallsTotal: 0,
            handlingInternalCallsAnswered: 3,
            handlingInternalCallsNotAnswered: 2,
            handlingInternalCallsCanceled: 1,
            handlingInternalCallsBusy: 2,
            handlingInternalCallsNotAvailable: 0,
            incomingCallsAvgTalkTime: "0:01:00",
            incomingCallsAvgHoldTime: "0:03:00",
            incomingCallsAvgCallingTime: "0:00:00",
            outgoingCallsAvgTalkTime: "0:04:00",
            outgoingCallsAvgHoldTime: "0:00:54",
            outgoingCallsAvgCallingTime: "0:00:00",
            internalCallsAvgTalkTime: "0:12:03",
            internalCallsAvgHoldTime: "0:00:00",
            internalCallsAvgCallingTime: "0:00:00"
        }
    ],
    status: "init"
}

export const operatorReportDetailedReducer = (state:InitialStateType = initialState, action:ActionDataType ):InitialStateType => {
    switch (action.type){
        case "SET_OPERATOR_REPORT_DETAILED_DATA":{
            return {
                ...state,
                data: action.data
            }
        }
        case "SET_STATUS":{
            return {
                ...state,
                status: action.status
            }
        }
        default: {
            return state
        }
    }
}

export const setOperatorReportDetailedData = (data: OperatorReportDetailedType[])  => {
    return {
        type: SET_OPERATOR_REPORT_DETAILED_DATA,
        data
    } as const;
};
export const setStatus = (status:StatusType) => {
    return {
        type: SET_STATUS,
        status
    } as const
}