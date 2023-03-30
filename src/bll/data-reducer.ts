import {oktellAPI} from "../dal/oktell/oktell";
import {StoreType} from "./store";
import {ThunkAction} from "redux-thunk";

const SET_DATA = "SET_DATA";

type DataThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionDataType>;


type ActionDataType = ReturnType<typeof setData>


type InitialStateType = {
    data: string
}

const initialState:InitialStateType = {
    data: ''
}

export const dataReducer = (state:InitialStateType = initialState, action:ActionDataType ) => {
    switch (action.type){
        case "SET_DATA":{
            return {
                data: action.data
            }
        }
        default: {
            return state
        }
    }
}

export const setData = (data: string)  => {
    return {
        type: SET_DATA,
        data
    } as const;
};

export const fetchData =  (param1: string):DataThunkAction => async(dispatch)  => {
    try {
        const data = await oktellAPI.getData(param1)
        dispatch(setData(data.data))
    } catch (e: any) {
    }
}
