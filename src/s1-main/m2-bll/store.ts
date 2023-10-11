import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {authReducer} from "./auth-reducer";
import {operatorReportGeneralReducer} from "./b3-operator-report-general-reducer/operatorReportGeneral-reducer";
import {callReportReducer} from "./b6-call-report-reducer/callReport-reducer";
import {operatorReportReducer} from "./b7-operator-report-reducer/operatorReport-reducer";
import {realTimeHistogramReducer} from "./b1-monitoring-real-time-reducer/realTimeHistogram-reducer";
import {realTimeTodayPieReducer} from "./b1-monitoring-real-time-reducer/realTimeTodayPie-reducer";
import {realTimeMonthPieReducer} from "./b1-monitoring-real-time-reducer/realTimeMonthPie-reducer";
import {realTimeTableReducer} from "./b1-monitoring-real-time-reducer/realTimeTable-reducer";
import {pastHistogramReducer} from "./b2-monitoring-past-reducer/pastHistogram-reducer";
import {pastPieReducer} from "./b2-monitoring-past-reducer/pastPie-reducer";
import {pastTableReducer} from "./b2-monitoring-past-reducer/pastTable-reducer";
import {queueReportTableReducer} from "./b5-queue-report-reducer/queueReportTable-reducer";
import {queueReportHistogramReducer} from "./b5-queue-report-reducer/queueReportHistogram-reducer";
import {queueReportPieReducer} from "./b5-queue-report-reducer/queueReportPie-reducer";
import {operatorReportDetailedReducer} from "./b4-operator-report-detailed-reducer/operatorReportDetailed-reducer";
import {queueLabelReducer} from "./b1-monitoring-real-time-reducer/queueLabel-reducer/queueLabel-reducer";
import {realTimeReducer} from "./b1-monitoring-real-time-reducer/realTime-reducer";
import {pastReducer} from "./b2-monitoring-past-reducer/past-reducer";
import {queueReportReducer} from "./b5-queue-report-reducer/queueReport-reducer";
import {operatorReportReferencesReducer} from "./b7-operator-report-reducer/operatorReportReferences-reducer";


const rootReducer = combineReducers({
    pastTableData: pastTableReducer,
    pastHistogramData: pastHistogramReducer,
    pastPieData: pastPieReducer,
    realTimeData: realTimeReducer,
    queueReportData: queueReportReducer,
    pastData: pastReducer,
    queueLabelData: queueLabelReducer,
    operatorReportGeneralData: operatorReportGeneralReducer,
    operatorReportDetailedData: operatorReportDetailedReducer,
    queueReportTableData: queueReportTableReducer,
    queueReportHistogramData: queueReportHistogramReducer,
    queueReportPieData: queueReportPieReducer,
    operatorReportData: operatorReportReducer,
    operatorReportReferencesData:operatorReportReferencesReducer,
    callReportData: callReportReducer,
    auth: authReducer
})

const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store

export type StoreType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector


// @ts-ignore
window.store = store