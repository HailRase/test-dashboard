import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {authReducer} from "./auth-reducer";
import {operatorReportDetailedReducer} from "./operatorReportDetailed-reducer";
import {operatorReportGeneralReducer} from "./b3-operator-report-general-reducer/operatorReportGeneral-reducer";
import {callReportReducer} from "./call-report-reducer";
import {operatorReportReducer} from "./b7-operator-report-reducer/operatorReport-reducer";
import {realTimeHistogramReducer} from "./b2-monitoring-real-time-reducer/realTimeHistogram-reducer";
import {realTimeTodayPieReducer} from "./b2-monitoring-real-time-reducer/realTimeTodayPie-reducer";
import {realTimeMonthPieReducer} from "./b2-monitoring-real-time-reducer/realTimeMonthPie-reducer";
import {realTimeTableReducer} from "./b2-monitoring-real-time-reducer/realTimeTable-reducer";
import {pastHistogramReducer} from "./b1-monitoring-past-reducer/pastHistogram-reducer";
import {pastPieReducer} from "./b1-monitoring-past-reducer/pastPie-reducer";
import {pastTableReducer} from "./b1-monitoring-past-reducer/pastTable-reducer";
import {queueReportTableReducer} from "./b5-queue-report-reducer/queueReportTable-reducer";
import {queueReportHistogramReducer} from "./b5-queue-report-reducer/queueReportHistogram-reducer";


const rootReducer = combineReducers({
    pastTableData: pastTableReducer,
    pastHistogramData: pastHistogramReducer,
    pastPieData: pastPieReducer,
    realTimeTableData: realTimeTableReducer,
    realTimeHistogramData: realTimeHistogramReducer,
    realTimeTodayPieData: realTimeTodayPieReducer,
    realTimeMonthPieData: realTimeMonthPieReducer,
    operatorReportGeneralData: operatorReportGeneralReducer,
    operatorReportDetailedData: operatorReportDetailedReducer,
    queueReportTableData: queueReportTableReducer,
    queueReportHistogramData: queueReportHistogramReducer,
    operatorReportData: operatorReportReducer,
    callReportData: callReportReducer,
    auth: authReducer
})

const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store

export type StoreType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector


// @ts-ignore
window.store = store