import {ThunkAction} from "redux-thunk";
import {StoreType} from "../../store";

const SET_QUEUE_LABEL_DATA = "SET_QUEUE_LABEL_DATA";

type DataThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionDataType>;


type ActionDataType = ReturnType<typeof setQueueLabelData>

type InitState = {
    data: { x: number, y: number, name: string }[]

}
const initialState: InitState = {
    data: []
}
export const queueLabelReducer = (state: InitState = initialState, action: ActionDataType) => {
    switch (action.type) {
        case SET_QUEUE_LABEL_DATA: {
            return {
                ...state,
                data: [...state.data, action.data]
            }
        }
        default: {
            return state
        }
    }
}
export const setQueueLabelData = (data: { x: number, y: number, name: string }) => {
    return {
        type: SET_QUEUE_LABEL_DATA,
        data
    } as const
};