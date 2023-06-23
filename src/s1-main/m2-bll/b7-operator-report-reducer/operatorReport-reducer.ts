import {ThunkAction} from "redux-thunk";
import {StoreType} from "../store";
import {operatorReportAPI} from "../../m3-dal/d2-api/operatorReportAPI";

const SET_OPERATOR_REPORT_DATA = "SET_OPERATOR_REPORT_DATA";
const SET_OPERATOR_REPORT_STATUS = "SET_OPERATOR_REPORT_STATUS"
const SET_OPERATOR_REPORT_ERROR = "SET_OPERATOR_REPORT_ERROR"





type DataThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionDataType>;
type ActionDataType = ReturnType<typeof setOperatorReportData>
    |ReturnType<typeof setOperatorReportStatus> | ReturnType<typeof setError>
type OperatorReportDataType = {
    id: number
    date: string
    operator: string
    status: string
    duration: string
    reason: string
    comment: string
}
export type StatusType = "init" | "loading" | "loaded" | "error"
type InitState = {
    data: OperatorReportDataType[],
    department: string[]
    status: StatusType,
    errorMessage: string,
}
const initialState: InitState = {
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
            status: "Разговор с абонентом",
            duration: "0:00:02",
            reason: "Проблема со связью",
            comment: ""
        },
        {
            id: 4,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Разговор с абонентом",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 5,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Разговор с абонентом",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 6,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Разговор с абонентом",
            duration: "0:00:02",
            reason: "",
            comment: ""
        },
        {
            id: 7,
            date: "04.03.23 00:00:57",
            operator: "Маханькова Мария Викторовна",
            status: "Разговор с абонентом",
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
            status: "Разговор с абонентом",
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
            status: "Разговор с абонентом",
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
    department: [],
    status: 'init',
    errorMessage: ''
}

export const operatorReportReducer = (state = initialState, action: ActionDataType) => {
    switch (action.type) {
        case SET_OPERATOR_REPORT_DATA: {
            return {
                ...state,
                data: action.data
            }
        }
        case SET_OPERATOR_REPORT_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_OPERATOR_REPORT_ERROR: {
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
const setOperatorReportData = (data: OperatorReportDataType[]) => {
    return {
        type: SET_OPERATOR_REPORT_DATA,
        data
    } as const
};

const setOperatorReportStatus = (status: StatusType) => {
    return {
        type: SET_OPERATOR_REPORT_STATUS,
        status
    } as const
}
const setError = (errorMessage: string) => {
    return {
        type: SET_OPERATOR_REPORT_ERROR,
        errorMessage
    } as const
}

export const fetchOperatorReportData = (
    dateStart: string,
    timeStart: string,
    dateEnd: string,
    timeEnd: string,
    status: string,
    duration: number,
    operatorName: string,
    reason: string,
    comment: string
): DataThunkAction => async (dispatch) => {
    try {
        dispatch(setOperatorReportStatus("loading"))
        const data = await operatorReportAPI.getOperatorReportData(
            dateStart,
            timeStart,
            dateEnd,
            timeEnd,
            status,
            duration,
            operatorName,
            reason,
            comment
        )
        dispatch(setOperatorReportData(data.data))
        dispatch(setOperatorReportStatus("loaded"))
    } catch (e: any) {
        dispatch(setOperatorReportStatus("error"))
        dispatch(setError(e.message))
    }
}