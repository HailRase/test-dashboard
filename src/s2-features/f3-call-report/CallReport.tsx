import React from 'react';
import s from './CallReport.module.scss'
import CallReportTable from "./CallReportTable/CallReportTable";
import {ReactComponent as Home} from "../../assets/home-icon.svg";
import {useNavigate} from "react-router-dom";

const CallReport = () => {

    const navigate = useNavigate()

    const onHomeHandler = () => {
        navigate('/')
    }

    return (
        <div className={s.callReportWrapper}>
            <div className={s.callReportContainer}>
                <div className={s.callReportHeader}>
                    <Home className={s.homeLogo} onClick={onHomeHandler}/>
                    <span>Статистика по звонкам</span>
                </div>
                <CallReportTable/>
            </div>
        </div>
    );
};

export default CallReport;