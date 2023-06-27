import {ThunkAction} from "redux-thunk";
import {StoreType} from "../store";
import {monitoringCCPastAPI} from "../../m3-dal/d2-api/monitoringCCPastAPI";

const SET_PAST_HISTOGRAM_DATA = "SET_PAST_HISTOGRAM_DATA";
const SET_PAST_HISTOGRAM_STATUS = "SET_PAST_HISTOGRAM_STATUS"
const SET_PAST_HISTOGRAM_ERROR = "SET_PAST_HISTOGRAM_ERROR"

type DataThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionDataType>;


type ActionDataType = ReturnType<typeof setPastHistogramData> | ReturnType<typeof setStatus>
    | ReturnType<typeof setError>

export type PastHistogramDataType = {
    name: string
    notAccept: number
    accept: number
    avgCalls: number
    maxSimultaneousCall: number
    oplnSys: number
    opActivity: number
}
type StatusType = "init" | "loading" | "loaded" | "error"
type InitState = {
    data: PastHistogramDataType[],
    status: StatusType,
    errorMessage: string,
}
const initialState: InitState = {
    data: [
        {
            name: '00:00',
            notAccept: 7,
            accept: 41,
            avgCalls: 1.3,
            maxSimultaneousCall: 12,
            oplnSys: 4,
            opActivity: 1,
        },
        {
            name: '01:00',
            notAccept: 320,
            accept: 335,
            avgCalls: 1.2,
            maxSimultaneousCall: 3,
            oplnSys: 4,
            opActivity: 3
        },
        {
            name: '02:00',
            notAccept: 0,
            accept: 14,
            avgCalls: 1,
            maxSimultaneousCall: 3,
            oplnSys: 3,
            opActivity: 1
        },
        {
            name: '03:00',
            notAccept: 0,
            accept: 5,
            avgCalls: 0.9,
            maxSimultaneousCall: 2,
            oplnSys: 3,
            opActivity: 2
        },
        {
            name: '04:00',
            notAccept: 0,
            accept: 12,
            avgCalls: 1.2,
            maxSimultaneousCall: 4,
            oplnSys: 3,
            opActivity: 3
        },
        {
            name: '05:00',
            notAccept: 0,
            accept: 21,
            avgCalls: 1.4,
            maxSimultaneousCall: 4,
            oplnSys: 4,
            opActivity: 5
        },
        {
            name: '06:00',
            notAccept: 36,
            accept: 128,
            avgCalls: 1.0,
            maxSimultaneousCall: 13,
            oplnSys: 9,
            opActivity: 11
        },
        {
            name: '07:00',
            notAccept: 1,
            accept: 82,
            avgCalls: 0.8,
            maxSimultaneousCall: 6,
            oplnSys: 9,
            opActivity: 11
        },
        {
            name: '08:00',
            notAccept: 1,
            accept: 137,
            avgCalls: 1.1,
            maxSimultaneousCall: 13,
            oplnSys: 11,
            opActivity: 15
        },
        {
            name: '09:00',
            notAccept: 1,
            accept: 220,
            avgCalls: 1.5,
            maxSimultaneousCall: 19,
            oplnSys: 14,
            opActivity: 16
        },
        {
            name: '10:00',
            notAccept: 0,
            accept: 233,
            avgCalls: 1.2,
            maxSimultaneousCall: 12,
            oplnSys: 15,
            opActivity: 20
        },
        {
            name: '11:00',
            notAccept: 1,
            accept: 246,
            avgCalls: 1.4,
            maxSimultaneousCall: 15,
            oplnSys: 15,
            opActivity: 17
        },
        {
            name: '12:00',
            notAccept: 0,
            accept: 199,
            avgCalls: 1.3,
            maxSimultaneousCall: 14,
            oplnSys: 15,
            opActivity: 16

        },
        {
            name: '13:00',
            notAccept: 0,
            accept: 181,
            avgCalls: 1.5,
            maxSimultaneousCall: 12,
            oplnSys: 15,
            opActivity: 16
        },
        {
            name: '14:00',
            notAccept: 0,
            accept: 84,
            avgCalls: 1.4,
            maxSimultaneousCall: 15,
            oplnSys: 13,
            opActivity: 14
        },
        {
            name: '15:00',
            notAccept: 0,
            accept: 0,
            avgCalls: 0,
            maxSimultaneousCall: 0,
            oplnSys: 0,
            opActivity: 0
        },
        {
            name: '16:00',
            notAccept: 0,
            accept: 0,
            avgCalls: 0,
            maxSimultaneousCall: 0,
            oplnSys: 0,
            opActivity: 0
        },
        {
            name: '17:00',
            notAccept: 0,
            accept: 0,
            avgCalls: 0,
            maxSimultaneousCall: 0,
            oplnSys: 0,
            opActivity: 0
        },
        {
            name: '18:00',
            notAccept: 0,
            accept: 0,
            avgCalls: 0,
            maxSimultaneousCall: 0,
            oplnSys: 0,
            opActivity: 0
        },
        {
            name: '19:00',
            notAccept: 0,
            accept: 0,
            avgCalls: 0,
            maxSimultaneousCall: 0,
            oplnSys: 0,
            opActivity: 0
        },
        {
            name: '20:00',
            notAccept: 0,
            accept: 0,
            avgCalls: 0,
            maxSimultaneousCall: 0,
            oplnSys: 0,
            opActivity: 0
        },
        {
            name: '21:00',
            notAccept: 0,
            accept: 0,
            avgCalls: 0,
            maxSimultaneousCall: 0,
            oplnSys: 0,
            opActivity: 0
        },
        {
            name: '22:00',
            notAccept: 0,
            accept: 0,
            avgCalls: 0,
            maxSimultaneousCall: 0,
            oplnSys: 0,
            opActivity: 0
        },
        {
            name: '23:00',
            notAccept: 0,
            accept: 0,
            avgCalls: 0,
            maxSimultaneousCall: 0,
            oplnSys: 0,
            opActivity: 0
        }
    ],
    status: 'init',
    errorMessage: ''
}
export const pastHistogramReducer = (state = initialState, action: ActionDataType) => {
    switch (action.type) {
        case SET_PAST_HISTOGRAM_DATA: {
            return {
                ...state,
                data: action.data
            }
        }
        case SET_PAST_HISTOGRAM_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_PAST_HISTOGRAM_ERROR: {
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
const setPastHistogramData = (data: PastHistogramDataType[]) => {
    return {
        type: SET_PAST_HISTOGRAM_DATA,
        data
    } as const
};
const setStatus = (status: StatusType) => {
    return {
        type: SET_PAST_HISTOGRAM_STATUS,
        status
    } as const
}
const setError = (errorMessage: string) => {
    return {
        type: SET_PAST_HISTOGRAM_ERROR,
        errorMessage
    } as const
}
export const fetchPastHistogramData = (dateStart: string, timeStart: string, dateEnd: string, timeEnd: string): DataThunkAction => async (dispatch) => {
    try {
        dispatch(setStatus("loading"))
        const data = await monitoringCCPastAPI.getPastHistogramData(dateStart, timeStart, dateEnd, timeEnd)
        dispatch(setPastHistogramData(data.data))
        dispatch(setStatus("loaded"))
    } catch (e: any) {
        dispatch(setStatus("error"))
        dispatch(setError(e.message))
    }
}