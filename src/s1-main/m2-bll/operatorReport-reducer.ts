import {StoreType} from "./store";
import {ThunkAction} from "redux-thunk";

const SET_OPERATOR_REPORT_DATA = "SET_OPERATOR_REPORT_DATA";
const SET_STATUS = "SET_STATUS"

type DataThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionDataType>;


type ActionDataType = ReturnType<typeof setOperatorReportData> | ReturnType<typeof setStatus>

type OperatorReportDataType = {
    id: number
    date: string
    operator: string
    status: "Готов" | "Входящий дозвон" | "Говорит" | "Занят" | "Не готов" | "Исходящий дозвон"
        | "Не залогинен в систему"
    duration: string
    reason: string
    comment: string
}
type StatusType = "init" | "loading" | "loaded"
type InitialStateType = {
    data: OperatorReportDataType[]
    status: StatusType
}
const initialState:InitialStateType = {
    data: [
        {
            id: 1,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "Перерыв",
            comment: ""
        },
        {
            id: 2,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "Перерыв",
            comment: ""
        },
        {
            id: 3,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Занят",
            duration: "0:00:02",
            reason: "Проблема со связью",
            comment: ""
        },
        {
            id: 4,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Занят",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 5,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Входящий дозвон",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 6,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Говорит",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 7,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Говорит",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 8,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 9,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 10,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Занят",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 11,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 12,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Входящий дозвон",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 13,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 14,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 15,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 16,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 17,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 18,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 19,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 20,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 21,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 22,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 23,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 24,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 25,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 26,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 27,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 28,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 29,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 30,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 31,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 32,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 33,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 34,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Готов",
            duration: "0:00:02",
            reason: "",
            comment: ""
        }

    ],
    status: "init"
}
export const operatorReportReducer = (state: InitialStateType = initialState, action: ActionDataType) => {
    switch (action.type) {
        case SET_OPERATOR_REPORT_DATA:
            return {
                ...state,
                data: action.data
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const setOperatorReportData = (data: OperatorReportDataType[]) => {
    return {
        type: SET_OPERATOR_REPORT_DATA,
        data
    } as const;
};
export const setStatus = (status: StatusType) => {
    return {
        type: SET_STATUS,
        status
    } as const
}