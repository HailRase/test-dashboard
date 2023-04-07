import React from 'react';
import s from './MonitoringCC.module.scss'
import DiagramCallRating from "../f2-monitoring-cc/diagram-call-rating/DiagramCallRating";
import OperatorRating from "../f2-monitoring-cc/operator-raiting/OperatorRating";
import Histogram from "../f2-monitoring-cc/histogram/Histogram";
import {ReactComponent as Home} from "../../assets/home-icon.svg";
import {useNavigate} from "react-router-dom";




const MonitoringCc = () => {

    const navigate = useNavigate()

    const onHomeHandler = () => {
        navigate('/')
    }

    return (
        <div className={s.monitoringCCWrapper}>
            <div className={s.monitoringCCContainer}>
                <div className={s.monitoringCCHeader}>
                    <Home className={s.homeLogo} onClick={onHomeHandler}/>
                    <span>Мониторинг Контакт-центра (Past)</span>
                </div>
                <div className={s.callAndOperatorRating}>
                    <DiagramCallRating/>
                    <OperatorRating/>
                </div>
                <div className={s.histogram}>
                    <Histogram/>
                </div>
            </div>
        </div>
    );
};

export default MonitoringCc;