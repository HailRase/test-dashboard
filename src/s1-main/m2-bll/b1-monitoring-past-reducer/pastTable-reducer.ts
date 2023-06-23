import {ThunkAction} from "redux-thunk";
import {StoreType} from "../store";
import {calcServiceLevel} from "../../../common/utils/calcServiceLevel";
import {updateRatings} from "../../../common/utils/updateRatings";
import {monitoringCCPastAPI} from "../../m3-dal/d2-api/monitoringCCPastAPI";
import {sortServiceLevelMonthRatings} from "../../../common/utils/sortServiceLevelMonthRatings";

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
            ratingMonth: 0,
            operatorName: "Владимир Владимирович Заблоцкий",
            accept: 124,
            acceptMonth: 415,
            skip: 15,
            skippedMonth: 34,
            serviceLevel: "98%",
            serviceLevelMonth: 91,
            avgServiseTime: "00:00:53",
            avgServiceTimeMonth: "00:01:23",
            monthRating: "455 (96)",
            workload: "96%",
            workloadMonth: "94%"
        },
        {
            id: 2,
            ratingToday: 0,
            ratingMonth: 0,
            operatorName: "Владимир Владимирович Заблоцкий",
            accept: 100,
            acceptMonth: 355,
            skip: 15,
            skippedMonth: 34,
            serviceLevel: "98%",
            serviceLevelMonth: 99,
            avgServiseTime: "00:00:53",
            avgServiceTimeMonth: "00:01:23",
            monthRating: "455 (96)",
            workload: "96%",
            workloadMonth: "94%"
        },
        {
            id: 3,
            ratingToday: 0,
            ratingMonth: 0,
            operatorName: "Владимир Владимирович Заблоцкий",
            accept: 121,
            acceptMonth: 255,
            skip: 15,
            skippedMonth: 34,
            serviceLevel: "98%",
            serviceLevelMonth: 94,
            avgServiseTime: "00:00:53",
            avgServiceTimeMonth: "00:01:23",
            monthRating: "455 (96)",
            workload: "96%",
            workloadMonth: "94%"
        },
        {
            id: 3,
            ratingToday: 0,
            ratingMonth: 0,
            operatorName: "Владимир Владимирович Заблоцкий",
            accept: 121,
            acceptMonth: 255,
            skip: 15,
            skippedMonth: 34,
            serviceLevel: "98%",
            serviceLevelMonth: 74,
            avgServiseTime: "00:00:53",
            avgServiceTimeMonth: "00:01:23",
            monthRating: "455 (96)",
            workload: "96%",
            workloadMonth: "94%"
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
        dispatch(setPastTableData(tableData.sort(sortServiceLevelMonthRatings).map((item, index) => {
            return {
                ...item,
                ratingMonth: index+1
            }
        })))
        dispatch(setPastTableStatus("loaded"))
    } catch (e: any) {
        dispatch(setPastTableStatus("error"))
        dispatch(setError(e.message))
    }
}