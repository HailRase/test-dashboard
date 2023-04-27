import React from 'react';
import './App.scss';
import MonitoringCCPast from "../../s2-features/f2-monitoring-cc/past/MonitoringCCPast";
import {Route, Routes} from 'react-router-dom';
import {PATH} from "../../common/routes/routes";
import Home from "../../s2-features/f1-home/Home";
import CallReport from "../../s2-features/f3-call-report/CallReport";
import 'bootstrap/dist/css/bootstrap.min.css';
import OperatorReport from "../../s2-features/f4-operator-report/OperatorReport";
import QueueReport from "../../s2-features/f5-queue-report/QueueReport";
import TopOperatorReport from "../../s2-features/f6-top-operator-report/TopOperatorReport";
import MonitoringCCRealTime from "../../s2-features/f2-monitoring-cc/realTime/MonitoringCCRealTime";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={PATH.HOME} element={<Home/>}/>
                <Route path={PATH.MONITORING} element={<MonitoringCCRealTime/>}/>
                <Route path={PATH.PAST_MONITORING} element={<MonitoringCCPast/>}/>
                <Route path={PATH.CALL_REPORT} element={<CallReport/>}/>
                <Route path={PATH.OPERATOR_REPORT} element={<OperatorReport/>}/>
                <Route path={PATH.QUEUE_REPORT} element={<QueueReport/>}/>
                <Route path={PATH.TOP_OPERATOR_REPORT} element={<TopOperatorReport/>}/>
            </Routes>
        </div>
    );
}

export default App;
