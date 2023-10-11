import {ThunkAction} from "redux-thunk";
import {StoreType} from "./store";
import {checkCredentials} from "../../common/utils/checkCredentials";
import {auth} from "../../data/auth";

const SET_AUTH = "SET_AUTH";

type AuthThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionAuthType>;

type ActionAuthType = ReturnType<typeof setAuth>

type InitialStateType = {
    isAuth: boolean
}

const initialState:InitialStateType = {
    isAuth: false
}
export const authReducer = (state:InitialStateType = initialState, action:ActionAuthType) => {
    switch (action.type){
        case SET_AUTH:{
            return {
                isAuth: action.isAuth
            }
        }
        default: {
            return state
        }
    }
}

export const setAuth = (isAuth: boolean)  => {
    return {
        type: SET_AUTH,
        isAuth
    } as const
};

export const loginTC = ():AuthThunkAction => (dispatch) => {
    const loginLocalStorage = localStorage.getItem("report-login")
    const passwordLocalStorage = localStorage.getItem("report-password")
    const loginSessionStorage = sessionStorage.getItem("report-login")
    const passwordSessionStorage = sessionStorage.getItem("report-password")

    if (loginLocalStorage && passwordLocalStorage) {
        dispatch(setAuth(checkCredentials(loginLocalStorage, passwordLocalStorage, auth)))
    } else if (loginSessionStorage && passwordSessionStorage) {
        dispatch(setAuth(checkCredentials(loginSessionStorage, passwordSessionStorage, auth)))
    } else dispatch(setAuth(false))
}

export const logout = ():AuthThunkAction => (dispatch) => {
    localStorage.removeItem("report-login")
    localStorage.removeItem("report-password")
    sessionStorage.removeItem("report-login")
    sessionStorage.removeItem("report-password")
    dispatch(setAuth(false))
}
