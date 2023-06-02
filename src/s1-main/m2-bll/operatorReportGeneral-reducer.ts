import {StoreType} from "./store";
import {ThunkAction} from "redux-thunk";

const SET_OPERATOR_REPORT_GENERAL_DATA = "SET_OPERATOR_REPORT_GENERAL_DATA";
const SET_STATUS = "SET_STATUS"

type DataThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionDataType>;


type ActionDataType = ReturnType<typeof setOperatorReportDetailedData> | ReturnType<typeof setStatus>


export type OperatorReportGeneralType = {
    id: number
    operator: string
    department: "Начальник ЛКЦ" | "Зам. Начальника ЛКЦ" | "Инженеры по подготовке кадров" | "Инженеры по ТО"
        | "Специалисты по контролю качества" | "Специалисты"
        | "Дежурные по выдаче справок (старшие)" | "Дежурные по выдаче справок" | "Ведущий специалист"
    loginTime: string
    logoutTime: string
    totalLoginTime: string
    incomingCallsCount: number
    outgoingCallsCount: number
    avgDurationIncoming: string
    avgDurationOutgoing : string
    totalTalkTime: string
    totalFreeTime: string
    totalNotReadyTime: string
    totalBusyTime: string
    totalIncomingCall: string
    totalOutgoingCall: string
    totalLogoutTime: string
}
type StatusType = "init" | "loading" | "loaded"
type InitialStateType = {
    data: OperatorReportGeneralType[]
    status: StatusType
}
const initialState:InitialStateType = {
    data: [
        {
            id: 1,
            operator: "Куценоко Лариса Николаевна",
            department: "Дежурные по выдаче справок",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "00:01:00",
            totalNotReadyTime: "00:00:59",
            totalBusyTime: "00:02:38",
            totalIncomingCall: "0:07:20",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        },
        {
            id: 2,
            operator: "Куценоко Лариса Николаевна",
            department: "Специалисты",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "00:01:00",
            totalNotReadyTime: "00:00:59",
            totalBusyTime: "00:02:38",
            totalIncomingCall: "0:07:20",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        },
        {
            id: 3,
            operator: "Куценоко Лариса Николаевна",
            department: "Начальник ЛКЦ",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "00:01:00",
            totalNotReadyTime: "00:00:59",
            totalBusyTime: "00:02:38",
            totalIncomingCall: "0:07:20",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        },
        {
            id: 4,
            operator: "Куценоко Лариса Николаевна",
            department: "Дежурные по выдаче справок",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "0:00:00",
            totalNotReadyTime: "00:00:59",
            totalBusyTime: "0:00:00",
            totalIncomingCall: "0:07:20",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        },
        {
            id: 5,
            operator: "Куценоко Лариса Николаевна",
            department: "Специалисты",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "0:00:00",
            totalNotReadyTime: "00:00:59",
            totalBusyTime: "00:02:38",
            totalIncomingCall: "0:07:20",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        },
        {
            id: 6,
            operator: "Куценоко Лариса Николаевна",
            department: "Дежурные по выдаче справок",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "00:01:00",
            totalNotReadyTime: "0:00:00",
            totalBusyTime: "0:00:00",
            totalIncomingCall: "0:00:00",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        },
        {
            id: 7,
            operator: "Куценоко Лариса Николаевна",
            department: "Дежурные по выдаче справок",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "00:01:00",
            totalNotReadyTime: "00:00:59",
            totalBusyTime: "00:02:38",
            totalIncomingCall: "0:00:00",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        },
        {
            id: 8,
            operator: "Куценоко Лариса Николаевна",
            department: "Специалисты",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "00:01:00",
            totalNotReadyTime: "00:00:59",
            totalBusyTime: "00:02:38",
            totalIncomingCall: "0:07:20",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        },
        {
            id: 9,
            operator: "Куценоко Лариса Николаевна",
            department: "Специалисты",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "00:01:00",
            totalNotReadyTime: "0:00:00",
            totalBusyTime: "0:00:00",
            totalIncomingCall: "0:07:20",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        },
        {
            id: 10,
            operator: "Куценоко Лариса Николаевна",
            department: "Дежурные по выдаче справок",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "0:00:00",
            totalNotReadyTime: "00:00:59",
            totalBusyTime: "00:02:38",
            totalIncomingCall: "0:00:00",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        },
        {
            id: 11,
            operator: "Куценоко Лариса Николаевна",
            department: "Дежурные по выдаче справок",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "00:01:00",
            totalNotReadyTime: "00:00:59",
            totalBusyTime: "0:00:00",
            totalIncomingCall: "0:00:00",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        },
        {
            id: 12,
            operator: "Куценоко Лариса Николаевна",
            department: "Дежурные по выдаче справок",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "00:01:00",
            totalNotReadyTime: "00:00:59",
            totalBusyTime: "0:00:00",
            totalIncomingCall: "0:00:00",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        },
        {
            id: 13,
            operator: "Куценоко Лариса Николаевна",
            department: "Дежурные по выдаче справок",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "0:00:00",
            totalNotReadyTime: "0:00:00",
            totalBusyTime: "0:00:00",
            totalIncomingCall: "0:07:20",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        },
        {
            id: 14,
            operator: "Куценоко Лариса Николаевна",
            department: "Дежурные по выдаче справок",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "0:00:00",
            totalNotReadyTime: "0:00:00",
            totalBusyTime: "00:02:38",
            totalIncomingCall: "0:07:20",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        },
        {
            id: 15,
            operator: "Куценоко Лариса Николаевна",
            department: "Дежурные по выдаче справок",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "0:00:00",
            totalFreeTime: "00:01:00",
            totalNotReadyTime: "00:00:59",
            totalBusyTime: "00:02:38",
            totalIncomingCall: "0:00:00",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "0:00:00"
        },
        {
            id: 16,
            operator: "Куценоко Лариса Николаевна",
            department: "Дежурные по выдаче справок",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "00:01:00",
            totalNotReadyTime: "00:00:59",
            totalBusyTime: "00:02:38",
            totalIncomingCall: "0:07:20",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        },
        {
            id: 17,
            operator: "Куценоко Лариса Николаевна",
            department: "Дежурные по выдаче справок",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "00:01:00",
            totalNotReadyTime: "00:00:59",
            totalBusyTime: "00:02:38",
            totalIncomingCall: "0:07:20",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        },
        {
            id: 18,
            operator: "Куценоко Лариса Николаевна",
            department: "Дежурные по выдаче справок",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "00:01:00",
            totalNotReadyTime: "00:00:59",
            totalBusyTime: "00:02:38",
            totalIncomingCall: "0:07:20",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        },
        {
            id: 19,
            operator: "Куценоко Лариса Николаевна",
            department: "Дежурные по выдаче справок",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "00:01:00",
            totalNotReadyTime: "00:00:59",
            totalBusyTime: "00:02:38",
            totalIncomingCall: "0:07:20",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        },
        {
            id: 20,
            operator: "Куценоко Лариса Николаевна",
            department: "Дежурные по выдаче справок",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "00:01:00",
            totalNotReadyTime: "00:00:59",
            totalBusyTime: "00:02:38",
            totalIncomingCall: "0:07:20",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        },
        {
            id: 21,
            operator: "Куценоко Лариса Николаевна",
            department: "Дежурные по выдаче справок",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "00:01:00",
            totalNotReadyTime: "00:00:59",
            totalBusyTime: "00:02:38",
            totalIncomingCall: "0:07:20",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        },
        {
            id: 22,
            operator: "Куценоко Лариса Николаевна",
            department: "Дежурные по выдаче справок",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "00:01:00",
            totalNotReadyTime: "00:00:59",
            totalBusyTime: "00:02:38",
            totalIncomingCall: "0:07:20",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        },
        {
            id: 23,
            operator: "Куценоко Лариса Николаевна",
            department: "Дежурные по выдаче справок",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "00:01:00",
            totalNotReadyTime: "00:00:59",
            totalBusyTime: "00:02:38",
            totalIncomingCall: "0:07:20",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        },
        {
            id: 24,
            operator: "Куценоко Лариса Николаевна",
            department: "Дежурные по выдаче справок",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "00:01:00",
            totalNotReadyTime: "00:00:59",
            totalBusyTime: "00:02:38",
            totalIncomingCall: "0:07:20",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        },
        {
            id: 25,
            operator: "Куценоко Лариса Николаевна",
            department: "Дежурные по выдаче справок",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "00:01:00",
            totalNotReadyTime: "00:00:59",
            totalBusyTime: "00:02:38",
            totalIncomingCall: "0:07:20",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        },
        {
            id: 26,
            operator: "Куценоко Лариса Николаевна",
            department: "Дежурные по выдаче справок",
            loginTime: "2023-04-19 11:01:21",
            logoutTime: "2023-04-20 00:00:00",
            totalLoginTime: "12:58:28",
            incomingCallsCount: 78,
            outgoingCallsCount: 0,
            avgDurationIncoming: "0:01:44",
            avgDurationOutgoing: "0:00:00",
            totalTalkTime: "12:46:37",
            totalFreeTime: "00:01:00",
            totalNotReadyTime: "00:00:59",
            totalBusyTime: "00:02:38",
            totalIncomingCall: "0:07:20",
            totalOutgoingCall: "0:00:00",
            totalLogoutTime: "11:01:21"
        }
    ],
    status: "init"
}

export const operatorReportGeneralReducer = (state:InitialStateType = initialState, action:ActionDataType ):InitialStateType => {
    switch (action.type){
        case "SET_OPERATOR_REPORT_GENERAL_DATA":{
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

export const setOperatorReportDetailedData = (data: OperatorReportGeneralType[])  => {
    return {
        type: SET_OPERATOR_REPORT_GENERAL_DATA,
        data
    } as const;
};
export const setStatus = (status:StatusType) => {
    return {
        type: SET_STATUS,
        status
    } as const
}