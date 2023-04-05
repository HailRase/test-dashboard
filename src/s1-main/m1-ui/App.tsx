import React from 'react';
import './App.css';
import MonitoringCc from "../../s2-features/f2-monitoring-cc/MonitoringCC";
import {Route, Routes} from 'react-router-dom';
import {PATH} from "../../common/routes/routes";
import Home from "../../s2-features/f1-home/Home";
import CallReport from "../../s2-features/f3-call-report/CallReport";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={PATH.HOME} element={<Home/>}/>
                <Route path={PATH.MONITORING} element={<MonitoringCc/>}/>
                <Route path={PATH.CALL_REPORT} element={<CallReport/>}/>
            </Routes>
        </div>
    );
}

export default App;
