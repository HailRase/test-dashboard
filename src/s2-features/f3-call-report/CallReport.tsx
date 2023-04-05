import React from 'react';
import s from './CallReport.module.scss'
import CallReportTable from "./CallReportTable/CallReportTable";

const CallReport = () => {
    return (
        <div className={s.callReportWrapper}>
            <div className={s.callReportContainer}>
                <div className={s.callReportHeader}>
                    <span>Статистика по звонкам</span>
                </div>
                <CallReportTable/>
            </div>
        </div>
    );
};

export default CallReport;