import {ThunkAction} from "redux-thunk";
import {StoreType} from "../store";
import {
    RealTimeHistogramDataType,
    RealTimeMonthPieDataType,
    RealTimeMonthPieTotalDataType,
    RealTimeTableDataType
} from "./types/realTimeReducerTypes";
import {monitoringCCRealTimeAPI} from "../../m3-dal/d2-api/monitoringCCRealTimeAPI";
import {updateRatingsTodayMonth} from "../../../common/utils/updateRatingsTodayMonth";

const SET_REAL_TIME_DATA = "SET_REAL_TIME_TODAY_PIE_DATA";
const SET_REAL_TIME_DATA_STATUS = "SET_REAL_TIME_TODAY_PIE_STATUS"
const SET_REAL_TIME_DATA_ERROR = "SET_REAL_TIME_TODAY_PIE_ERROR"

type DataThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionDataType>;

type ActionDataType =
    ReturnType<typeof setRealTimeData>
    | ReturnType<typeof setRealTimeDataStatus>
    | ReturnType<typeof setRealTimeDataStatusError>

export type StatusType = "init" | "loading" | "loaded" | "error"
type InitialStateDataType = {
    tableTotal: RealTimeTableDataType[],
    schema: RealTimeHistogramDataType[],
    schemaTotal: RealTimeHistogramDataType[],
    providers: RealTimeMonthPieDataType[],
    providersTotal: RealTimeMonthPieDataType[],
    totalDay: RealTimeMonthPieTotalDataType[],
    total: RealTimeMonthPieTotalDataType[],
}


type InitState = {
    data: InitialStateDataType,
    status: StatusType,
    errorMessage: string,
}

const initialState: InitState = {
    data: {
        tableTotal:[
            {
                id: "sadfsdf",
                ratingToday: 98,
                ratingMonth: 98,
                operatorName: "Зютько Алексей Владимирович",
                accept: 98,
                acceptMonth: 98,
                skip: 98,
                serviceLevel: "98%",
                avgServiceTime: "00:00:53",
                avgServiceTimeMonth: "00:01:23",
                monthRating: "455 (96)",
                workload: "96%",
                workloadMonth: "94%",
            },
            {
                id: "sadfsdf",
                ratingToday: 98,
                ratingMonth: 98,
                operatorName: "Зютько Алексей Владимирович",
                accept: 98,
                acceptMonth: 98,
                skip: 98,
                serviceLevel: "98%",
                avgServiceTime: "00:00:53",
                avgServiceTimeMonth: "00:01:23",
                monthRating: "455 (96)",
                workload: "96%",
                workloadMonth: "94%",
            },
            {
                id: "sadfsdf",
                ratingToday: 98,
                ratingMonth: 98,
                operatorName: "Зютько Алексей Владимирович",
                accept: 98,
                acceptMonth: 98,
                skip: 98,
                serviceLevel: "98%",
                avgServiceTime: "00:00:53",
                avgServiceTimeMonth: "00:01:23",
                monthRating: "455 (96)",
                workload: "96%",
                workloadMonth: "94%",
            },
            {
                id: "sadfsdf",
                ratingToday: 98,
                ratingMonth: 98,
                operatorName: "Зютько Алексей Владимирович",
                accept: 98,
                acceptMonth: 98,
                skip: 98,
                serviceLevel: "98%",
                avgServiceTime: "00:00:53",
                avgServiceTimeMonth: "00:01:23",
                monthRating: "455 (96)",
                workload: "96%",
                workloadMonth: "94%",
            },
            {
                id: "sadfsdf",
                ratingToday: 98,
                ratingMonth: 98,
                operatorName: "Зютько Алексей Владимирович",
                accept: 98,
                acceptMonth: 98,
                skip: 98,
                serviceLevel: "98%",
                avgServiceTime: "00:00:53",
                avgServiceTimeMonth: "00:01:23",
                monthRating: "455 (96)",
                workload: "96%",
                workloadMonth: "94%",
            },
            {
                id: "sadfsdf",
                ratingToday: 98,
                ratingMonth: 98,
                operatorName: "Зютько Алексей Владимирович",
                accept: 98,
                acceptMonth: 98,
                skip: 98,
                serviceLevel: "98%",
                avgServiceTime: "00:00:53",
                avgServiceTimeMonth: "00:01:23",
                monthRating: "455 (96)",
                workload: "96%",
                workloadMonth: "94%",
            },
            {
                id: "sadfsdf",
                ratingToday: 98,
                ratingMonth: 98,
                operatorName: "Зютько Алексей Владимирович",
                accept: 98,
                acceptMonth: 98,
                skip: 98,
                serviceLevel: "98%",
                avgServiceTime: "00:00:53",
                avgServiceTimeMonth: "00:01:23",
                monthRating: "455 (96)",
                workload: "96%",
                workloadMonth: "94%",
            },
            {
                id: "sadfsdf",
                ratingToday: 98,
                ratingMonth: 98,
                operatorName: "Зютько Алексей Владимирович",
                accept: 98,
                acceptMonth: 98,
                skip: 98,
                serviceLevel: "98%",
                avgServiceTime: "00:00:53",
                avgServiceTimeMonth: "00:01:23",
                monthRating: "455 (96)",
                workload: "96%",
                workloadMonth: "94%",
            },
        ],
        schema:[
            {
                name: '00:00',
                notAccept: 7,
                accept: 41,
                avgCalls: 1.3,
                maxSimultaneousCall: 12,
                oplnSys: 4,
                opActivity: 50,
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
                    notAccept: 5,
                    accept: 4,
                    avgCalls: 3,
                    maxSimultaneousCall: 2,
                    oplnSys: 1,
                    opActivity: 1
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
        schemaTotal: [],
        providers: [
            {name: 'НОД-6', value: 1, },
            {name: 'НОД-5', value: 1,  },
            {name: 'НОД-4', value: 1,  },
            {name: 'НОД-3', value: 1,  },
            {name: 'НОД-2', value: 1, },
            {name: 'НОД-1', value: 1,  },
            {name: 'Белтел Могилёвская', value: 1,},
            {name: 'Белтел Минская', value: 1, },
            {name: 'Белтел Гродненская', value: 1,  },
            {name: 'Белтел Гомельская', value: 1,  },
            {name: 'Белтел Витебская', value: 1,  },
            {name: 'Белтел Брестская', value: 1,  },
            {name: 'Repeat call', value: 1,  },
            {name: 'MTC', value: 1,  },
            {name: 'Life', value: 1 ,  },
            {name: 'International', value: 1,  },
            {name: 'A1', value: 1,  },
        ],
        providersTotal:[
            {name: 'НОД-6', value: 1, },
            {name: 'НОД-5', value: 1,  },
            {name: 'НОД-4', value: 1,  },
            {name: 'НОД-3', value: 1,  },
            {name: 'НОД-2', value: 1, },
            {name: 'НОД-1', value: 1,  },
            {name: 'Белтел Могилёвская', value: 1,},
            {name: 'Белтел Минская', value: 1, },
            {name: 'Белтел Гродненская', value: 1,  },
            {name: 'Белтел Гомельская', value: 1,  },
            {name: 'Белтел Витебская', value: 1,  },
            {name: 'Белтел Брестская', value: 1,  },
            {name: 'Repeat call', value: 1,  },
            {name: 'MTC', value: 1,  },
            {name: 'Life', value: 1 ,  },
            {name: 'International', value: 1,  },
            {name: 'A1', value: 1,  },
        ],
        totalDay:[{name: 'Пропущено', value: 1,},
            {name: 'Принято', value: 1,}],
        total:[{name: 'Пропущено', value: 1,},
            {name: 'Принято', value: 1,}]
    },
    status: 'init',
    errorMessage: ''
}

export const realTimeReducer = (state = initialState, action: ActionDataType) => {
    switch (action.type) {
        case SET_REAL_TIME_DATA: {
            return {
                ...state,
                data: action.data
            }
        }
        case SET_REAL_TIME_DATA_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_REAL_TIME_DATA_ERROR: {
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
export const setRealTimeData = (data: InitialStateDataType) => {
    return {
        type: SET_REAL_TIME_DATA,
        data
    } as const
};

const setRealTimeDataStatus = (status: StatusType) => {
    return {
        type: SET_REAL_TIME_DATA_STATUS,
        status
    } as const
}
const setRealTimeDataStatusError = (errorMessage: string) => {
    return {
        type: SET_REAL_TIME_DATA_ERROR,
        errorMessage
    } as const
}

export const fetchRealTimeData = (): DataThunkAction => async (dispatch) => {
    try {
        dispatch(setRealTimeDataStatus("loading"))
        const data = await monitoringCCRealTimeAPI.getRealTimeData()
        console.log(data)
        const newData: InitialStateDataType = {
            ...data.data,
            tableTotal: data.data.tableTotal.map((record: any) => {
                return {
                    id: record.id,
                    ratingToday: 0,
                    ratingMonth: 0,
                    operatorName: record.operatorName,
                    accept: record.accept,
                    acceptMonth: record.acceptMonth,
                    skip: record.skip,
                    serviceLevel: `${record.serviceLevel}%`,
                    avgServiceTime: record.avgServiceTime,
                    avgServiceTimeMonth: record.avgServiceTimeMonth,
                    monthRating: `${record.acceptMonth} (${record.monthRating})`,
                    workload: `${record.workload}%`,
                    workloadMonth: `${record.workloadMonth}%`
                }
            }),
        }
        /*const newData1: RealTimeTableDataType[] = data.data.map((record: any) => {
            return {

                id: record.id,
                ratingToday: 0,
                ratingMonth: 0,
                operatorName: record.operatorName,
                accept: record.accept,
                acceptMonth: record.acceptMonth,
                skip: record.skip,
                serviceLevel: `${calcServiceLevel(record.accept, record.skip)}%`,
                serviceLevelMonth: calcServiceLevel(record.acceptMonth, record.skippedMonth),
                skippedMonth: record.skippedMonth,
                avgServiceTime: record.avgServiceTime,
                avgServiceTimeMonth: record.avgServiceTimeMonth,
                monthRating: calcMonthRating(record),
                workload: `${record.workload}%`,
                workloadMonth: `${record.workloadMonth}%`
            }
        })*/
        console.log(newData)
        dispatch(setRealTimeData(updateRatingsTodayMonth(newData)))
        dispatch(setRealTimeDataStatus("loaded"))
    } catch (e: any) {
        dispatch(setRealTimeDataStatus("error"))
        dispatch(setRealTimeDataStatusError(e.message))
    }
}