import {oktellAPI} from "../m3-dal/oktell/oktell";
import {StoreType} from "./store";
import {ThunkAction} from "redux-thunk";

const SET_DATA = "SET_DATA";

type DataThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionDataType>;


type ActionDataType = ReturnType<typeof setData>


type InitialStateType = {
    data: any
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

export const setData = (data: any)  => {
    return {
        type: SET_DATA,
        data
    } as const;
};

export const fetchData =  ():DataThunkAction => async(dispatch)  => {
    try {
        /*const data = await oktellAPI.getOperatorReportGeneralData()*/
        // dispatch(setData(data.data))
    } catch (e: any) {
    }
}
