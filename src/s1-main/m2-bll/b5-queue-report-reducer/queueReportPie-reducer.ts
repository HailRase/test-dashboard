import {ThunkAction} from "redux-thunk";
import {StoreType} from "../store";
import {monitoringCCPastAPI} from "../../m3-dal/d2-api/monitoringCCPastAPI";
import {queueReportAPI} from "../../m3-dal/d2-api/queueReportAPI";

const SET_QUEUE_REPORT_PIE_DATA = "SET_QUEUE_REPORT_PIE_DATA";
const SET_QUEUE_REPORT_PIE_TOTAL_DATA = "SET_QUEUE_REPORT_PIE_TOTAL_DATA";
const SET_QUEUE_REPORT_PIE_STATUS = "SET_QUEUE_REPORT_PIE_STATUS"
const SET_QUEUE_REPORT_PIE_ERROR = "SET_QUEUE_REPORT_PIE_ERROR"

type DataThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionDataType>;


type ActionDataType =
    ReturnType<typeof setQueueReportPieTotalData>
    | ReturnType<typeof setQueueReportPieData>
    | ReturnType<typeof setQueueReportPieStatus>
    | ReturnType<typeof setError>

export type QueueReportPieDataType = {
    name: string
    value: number
    fill: string
}
export type QueueReportPieTotalDataType = {
    name: string
    value: number
    fill: string
}
export type StatusType = "init" | "loading" | "loaded" | "error"
type InitState = {
    data: QueueReportPieDataType[],
    totalData: QueueReportPieTotalDataType[]
    status: StatusType,
    errorMessage: string,
}
const initialState: InitState = {
    data: [
        {name: '105 Beltelecom', value: 72, fill: '#d34758'},
        {name: '105 GSM', value: 76, fill: '#fdc6c8'},
        {name: '105 Other', value: 7, fill: '#fd9a4c'},
        {name: '151 Beltelecom', value: 10, fill: '#bbadff'},
        {name: '151 GSM', value: 52, fill: '#76c5e7'},
        {name: '151 Other', value: 34, fill: '#a2bab1'},
        {name: 'GSM', value: 1, fill: '#64e5d9'},
        {name: 'Видеотерминалы', value: 48, fill: '#e8ec6d'},
        {name: 'Проблемные и VIP', value: 166, fill: '#489f48'},
        {name: '39-25-47', value: 18, fill: '#ff81db'},
        {name: '39-48-75', value: 39, fill: '#008dfe'},
        {name: '39-20-30', value: 21, fill: '#65d97e'},
    ],
    totalData: [
        {name: 'Пропущено', value: 37, fill: '#e70707'},
        {name: 'Принято', value: 1491, fill: '#4bb253'},
    ],
    status: 'init',
    errorMessage: ''
}
const dataColors = ['#d34758', '#fdc6c8', '#fd9a4c', '#bbadff', '#76c5e7', '#a2bab1', '#64e5d9', '#e8ec6d', '#489f48',
    '#ff81db', '#008dfe', '#65d97e']
const totalDataColor = ['#e70707', '#4bb253']
export const queueReportPieReducer = (state = initialState, action: ActionDataType) => {
    switch (action.type) {
        case SET_QUEUE_REPORT_PIE_DATA: {
            return {
                ...state,
                data: action.data
            }
        }
        case SET_QUEUE_REPORT_PIE_TOTAL_DATA: {
            return {
                ...state,
                totalData: action.totalData
            }
        }
        case SET_QUEUE_REPORT_PIE_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_QUEUE_REPORT_PIE_ERROR: {
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
const setQueueReportPieData = (data: QueueReportPieDataType[]) => {
    return {
        type: SET_QUEUE_REPORT_PIE_DATA,
        data
    } as const
};
const setQueueReportPieTotalData = (totalData: QueueReportPieTotalDataType[]) => {
    return {
        type: SET_QUEUE_REPORT_PIE_TOTAL_DATA,
        totalData
    } as const
};
const setQueueReportPieStatus = (status: StatusType) => {
    return {
        type: SET_QUEUE_REPORT_PIE_STATUS,
        status
    } as const
}
const setError = (errorMessage: string) => {
    return {
        type: SET_QUEUE_REPORT_PIE_ERROR,
        errorMessage
    } as const
}
export const fetchQueueReportPieData = (dateStart: string, timeStart: string, dateEnd: string, timeEnd: string): DataThunkAction => async (dispatch) => {
    try {
        dispatch(setQueueReportPieStatus("loading"))
        /*const innerData = await queueReportAPI.getQueueReportInnerPieData(dateStart, timeStart, dateEnd, timeEnd)
        const outerData = await queueReportAPI.getQueueReportOuterPieData(dateStart, timeStart, dateEnd, timeEnd)
        const changedInnerData = [...innerData.data.map((obj: QueueReportPieTotalDataType, index: number) => {
            return {
                ...obj,
                fill: totalDataColor[index]
            }
        })]
        const changedOuterData = [...outerData.data.map((obj: QueueReportPieDataType, index: number) => {
            return {
                ...obj,
                fill: dataColors[index]
            }
        })]
        dispatch(setQueueReportPieTotalData(changedInnerData))
        dispatch(setQueueReportPieData(changedOuterData))*/
        dispatch(setQueueReportPieStatus("loaded"))
    } catch (e: any) {
        dispatch(setQueueReportPieStatus("error"))
        dispatch(setError(e.message))
    }
}