import React from 'react';
import s from './MonitoringCC.module.scss'
import DiagramCallRating from "../common/diagram-call-rating/DiagramCallRating";
import OperatorRating from "../common/operator-raiting/OperatorRating";
import Histogram from "../common/histogram/Histogram";

const MonitoringCc = () => {
    return (
        <div className={s.monitoringCCWrapper}>
            <div className={s.monitoringCCContainer}>
                <div className={s.monitoringCCHeader}><span>Мониторинг Контакт-центра (Past)</span></div>
                <div className={s.callAndOperatorRating}>
                    <DiagramCallRating/>
                    <OperatorRating/>
                </div>
                <div>
                    <Histogram/>
                </div>
            </div>
        </div>
    );
};

export default MonitoringCc;