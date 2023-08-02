import {ThunkAction} from "redux-thunk";
import {StoreType} from "../../store";

const SET_QUEUE_LABEL_DAY_DATA = "SET_QUEUE_LABEL_DAY_DATA";
const SET_QUEUE_LABEL_MONTH_DATA = "SET_QUEUE_LABEL_MONTH_DATA";

type DataThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionDataType>;


type ActionDataType = ReturnType<typeof setQueueLabelDayData> | ReturnType<typeof setQueueLabelMonthData>

type InitState = {
    dayLabel: []
    monthLabel: []

}
const initialState: InitState = {
    dayLabel: [],
    monthLabel: []
}
export const queueLabelReducer = (state: InitState = initialState, action: ActionDataType) => {
    switch (action.type) {
        case SET_QUEUE_LABEL_DAY_DATA: {
            return {
                ...state,
                dayLabel: [...state.dayLabel, action.dayLabel]
            }
        }
        case SET_QUEUE_LABEL_MONTH_DATA: {
            return {
                ...state,
                monthLabel: [...state.monthLabel, action.monthLabel]
            }
        }
        default: {
            return state
        }
    }
}
export const setQueueLabelDayData = (dayLabel: { x: number, y: number}) => {
    return {
        type: SET_QUEUE_LABEL_DAY_DATA,
        dayLabel
    } as const
};
export const setQueueLabelMonthData = (monthLabel: { x: number, y: number}) => {
    return {
        type: SET_QUEUE_LABEL_MONTH_DATA,
        monthLabel
    } as const
};