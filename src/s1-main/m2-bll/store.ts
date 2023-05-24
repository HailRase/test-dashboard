import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {dataReducer} from "./data-reducer";
import {authReducer} from "./auth-reducer";





const rootReducer = combineReducers({
    data: dataReducer,
    auth: authReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store

export type StoreType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector


// @ts-ignore
window.store = store