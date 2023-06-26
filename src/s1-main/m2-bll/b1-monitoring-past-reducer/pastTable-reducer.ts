import {ThunkAction} from "redux-thunk";
import {StoreType} from "../store";
import {calcServiceLevel} from "../../../common/utils/calcServiceLevel";
import {monitoringCCPastAPI} from "../../m3-dal/d2-api/monitoringCCPastAPI";

const SET_PAST_TABLE_DATA = "SET_PAST_TABLE_DATA";
const SET_PAST_TABLE_STATUS = "SET_PAST_TABLE_STATUS"
const SET_PAST_TABLE_ERROR = "SET_PAST_TABLE_ERROR"

type DataThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionDataType>;


type ActionDataType = ReturnType<typeof setPastTableData> | ReturnType<typeof setPastTableStatus>
    | ReturnType<typeof setError>


export type PastTableDataType = {
    id: number
    ratingToday: number
    operatorName: string
    accept: number
    skip: number
    serviceLevel: string
    avgServiseTime: string
    workload: string
}
export type StatusType = "init" | "loading" | "loaded" | "error"
type InitState = {
    data: PastTableDataType[],
    status: StatusType,
    errorMessage: string,
}
const initialState: InitState = {
    data: [
        {
            id: 1,
            ratingToday: 0,
            operatorName: "Владимир Владимирович Заблоцкий",
            accept: 124,
            skip: 15,
            serviceLevel: "98%",
            avgServiseTime: "00:00:53",
            workload: "96%",
        },
        {
            id: 2,
            ratingToday: 0,
            operatorName: "Владимир Владимирович Заблоцкий",
            accept: 100,
            skip: 15,
            serviceLevel: "98%",
            avgServiseTime: "00:00:53",
            workload: "96%",

        },
        {
            id: 3,
            ratingToday: 0,
            operatorName: "Владимир Владимирович Заблоцкий",
            accept: 121,
            skip: 15,
            serviceLevel: "98%",
            avgServiseTime: "00:00:53",
            workload: "96%",
        },
        {
            id: 3,
            ratingToday: 0,
            operatorName: "Владимир Владимирович Заблоцкий",
            accept: 121,
            skip: 15,
            serviceLevel: "98%",
            avgServiseTime: "00:00:53",
            workload: "96%",
        }
    ],
    status: 'init',
    errorMessage: ''
}

export const pastTableReducer = (state = initialState, action: ActionDataType) => {
    switch (action.type) {
        case SET_PAST_TABLE_DATA: {
            return {
                ...state,
                data: action.data
            }
        }
        case SET_PAST_TABLE_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_PAST_TABLE_ERROR: {
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
const setPastTableData = (data: PastTableDataType[]) => {
    return {
        type: SET_PAST_TABLE_DATA,
        data
    } as const
};
const setPastTableStatus = (status: StatusType) => {
    return {
        type: SET_PAST_TABLE_STATUS,
        status
    } as const
}
const setError = (errorMessage: string) => {
    return {
        type: SET_PAST_TABLE_ERROR,
        errorMessage
    } as const
}
export const fetchPastTableData = (): DataThunkAction => async (dispatch) => {
    try {
        dispatch(setPastTableStatus("loading"))
        const data = await monitoringCCPastAPI.getPastTableData()
        const tableData: PastTableDataType[] = data.data.map((record: any) => {
            return {
                id: record.id,
                ratingToday: 0,
                operatorName: record.operatorName,
                accept: record.accept,
                skip: record.skip,
                serviceLevel: `${calcServiceLevel(record.accept, record.skip)}%`,
                avgServiseTime: record.avgServiseTime,
                workload: `${record.workload}%`,
            }
        })
        dispatch(setPastTableData(tableData.sort((a:any, b:any) => a.serviceLevel !== b.serviceLevel
            ? b.serviceLevel - a.serviceLevel
            : b.accept - a.accept)
            .map((item, index) => {
                return {
                    ...item,
                    ratingMonth: index + 1
                }
            })))
        dispatch(setPastTableStatus("loaded"))
    } catch (e: any) {
        dispatch(setPastTableStatus("error"))
        dispatch(setError(e.message))
    }
}