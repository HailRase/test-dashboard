import React from 'react';
import './App.css';
import MonitoringCc from "../../c1-monitoring-cc/MonitoringCC";
import {Route, Routes} from 'react-router-dom';
import {PATH} from "../m2-routes/routes";
import Home from "../../Home/Home";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={PATH.HOME} element={<Home/>}/>
                <Route path={PATH.MONITORING} element={<MonitoringCc/>}/>
            </Routes>
        </div>
    );
}

export default App;
