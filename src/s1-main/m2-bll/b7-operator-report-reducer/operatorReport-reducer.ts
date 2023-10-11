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
    status: number
    duration: number
    reason: number
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
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },
        {
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },{
            id: 1,
            date: "21.05.2023",
            operator: "Ситько Эдуард Александрович",
            status: 2,
            duration: 125,
            reason: 3,
            comment: "Вышел"
        },
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
    duration: string,
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