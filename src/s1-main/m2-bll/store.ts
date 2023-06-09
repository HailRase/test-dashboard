import {applyMiddleware, combineReducers, createStore, legacy_createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {authReducer} from "./auth-reducer";
import {operatorReportDetailedReducer} from "./operatorReportDetailed-reducer";
import {operatorReportGeneralReducer} from "./operatorReportGeneral-reducer";
import {callReportReducer} from "./call-report-reducer";
import {operatorReportReducer} from "./operatorReport-reducer";
import {realTimeHistogramReducer} from "./b2-monitoring-real-time-reducer/realTimeHistogram-reducer";
import {realTimeTodayPieReducer} from "./b2-monitoring-real-time-reducer/realTimeTodayPie-reducer";


const rootReducer = combineReducers({
    realTimeHistogramData: realTimeHistogramReducer,
    realTimeTodayPieData:realTimeTodayPieReducer,
    callReportData: callReportReducer,
    operatorReportData: operatorReportReducer,
    operatorReportGeneralData: operatorReportGeneralReducer,
    operatorReportDetailedData: operatorReportDetailedReducer,
    auth: authReducer
})

const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store

export type StoreType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector


// @ts-ignore
window.store = store