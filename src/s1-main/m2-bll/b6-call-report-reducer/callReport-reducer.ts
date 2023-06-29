import {StoreType} from "../store";
import {ThunkAction} from "redux-thunk";
import {queueReportAPI} from "../../m3-dal/d2-api/queueReportAPI";
import {callReportAPI} from "../../m3-dal/d2-api/callReportAPI";

const SET_CALL_REPORT_DATA = "SET_CALL_REPORT_DATA";
const SET_STATUS = "SET_STATUS"
const SET_ERROR = "SET_ERROR"

type DataThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionDataType>;


type ActionDataType = ReturnType<typeof setCallReportData> | ReturnType<typeof setStatus> | ReturnType<typeof setError>
export type CallReportDataType = {
    id: number
    dateStart: string
    dateEnd: string
    initiator: string
    recipient: number
    direction: string
    status: string
    type: string
    queue: string
    totalTime: string
    talkTime: string
    connectionTime: string
    holdTime: string
    queueTime: string
    initiatorContact: string
    recipientContact: string
    operator: string
    wasOnQueue: number
    wasOnOperators: number
}
type StatusType = "init" | "loading" | "loaded" | "error"

interface InitialStateType {
    data: CallReportDataType[]
    status: StatusType
    errorMessage: string
}

const initialState: InitialStateType = {
    data: [{
        id: 1,
        dateStart: "04.03.23 14:48:03",
        dateEnd: "04.03.23 14:50:01",
        initiator: "8033143362",
        recipient: 105,
        direction: "Входящий",
        status: "Отвечен",
        type: "Липкость",
        queue: "105 GSM",
        totalTime: "0:01:57",
        talkTime: "0:01:42",
        connectionTime: "0:00:01",
        holdTime: "0:00:00",
        queueTime: "0:00:00",
        initiatorContact: "Лида",
        recipientContact: "",
        operator: "Ковшун Виолетта Константиновна",
        wasOnQueue: 1,
        wasOnOperators: 0
    },
        {
            id: 2,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80441245661",
            recipient: 106,
            direction: "Входящий",
            status: "Не отвечен",
            type: "Липкость",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Вай Инна Владимировна",
            wasOnQueue: 1,
            wasOnOperators: 0
        },
        {
            id: 3,
            dateStart: "04.03.23 15:48:03",
            dateEnd: "04.03.23 15:50:01",
            initiator: "80333445999",
            recipient: 105,
            direction: "Исходящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        },
        {
            id: 4,
            dateStart: "05.03.23 14:48:03",
            dateEnd: "05.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 5,
            dateStart: "06.03.23 01:48:03",
            dateEnd: "06.03.23 01:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 6,
            dateStart: "07.03.23 14:48:03",
            dateEnd: "07.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 7,
            dateStart: "04.03.23 21:48:03",
            dateEnd: "04.03.23 21:50:01",
            initiator: "80293745562",
            recipient: 106,
            direction: "Исходящий",
            status: "Отвечен",
            type: "Липкость",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 8,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745562",
            recipient: 105,
            direction: "Входящий",
            status: "Не отвечен",
            type: "Обычный",
            queue: "105 Beltelecom",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 9,
            dateStart: "04.03.23 03:48:03",
            dateEnd: "04.03.23 03:50:01",
            initiator: "80293745562",
            recipient: 105,
            direction: "Исходящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 10,
            dateStart: "04.03.23 08:48:03",
            dateEnd: "04.03.23 08:50:01",
            initiator: "80293745562",
            recipient: 105,
            direction: "Входящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 11,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 12,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Не отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 13,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 14,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Исходящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 15,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 16,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 17,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 18,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Не отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 19,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 20,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 21,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Не отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 22,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 23,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 24,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 25,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Не отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 26,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 27,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 28,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 29,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 30,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 31,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 32,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 33,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        }, {
            id: 34,
            dateStart: "04.03.23 14:48:03",
            dateEnd: "04.03.23 14:50:01",
            initiator: "80293745561",
            recipient: 105,
            direction: "Входящий",
            status: "Отвечен",
            type: "Обычный",
            queue: "105 GSM",
            totalTime: "0:01:57",
            talkTime: "0:01:42",
            connectionTime: "0:00:01",
            holdTime: "0:00:00",
            queueTime: "0:00:00",
            initiatorContact: "Лида",
            recipientContact: "",
            operator: "Ковшун Виолетта Константиновна",
            wasOnQueue: 1,
            wasOnOperators: 0
        },
    ],
    status: "init",
    errorMessage: ""
}

export const callReportReducer = (state: InitialStateType = initialState, action: ActionDataType) => {
    switch (action.type) {
        case SET_CALL_REPORT_DATA:
            return {
                ...state,
                data: action.data
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_ERROR:
            return {
                ...state,
                errorMessage: action.errorMessage
            }
        default:
            return state
    }
}

export const setCallReportData = (data: CallReportDataType[]) => {
    return {
        type: SET_CALL_REPORT_DATA,
        data
    } as const;
};
export const setStatus = (status: StatusType) => {
    return {
        type: SET_STATUS,
        status
    } as const
}
export const setError = (errorMessage: string) => {
    return {
        type: SET_ERROR,
        errorMessage
    } as const
}

export const fetchCallReportTableData = (
    dateStart: string,
    timeStart: string,
    dateEnd: string,
    timeEnd: string
): DataThunkAction =>
    async (dispatch) => {
        try {
            dispatch(setStatus("loading"))
            const data = await callReportAPI.getCallReportData(dateStart, timeStart, dateEnd, timeEnd)
            dispatch(setCallReportData(data.data))
            dispatch(setStatus("loaded"))
        } catch (e: any) {
            dispatch(setStatus("error"))
            dispatch(setError(e.message))
        }
    }