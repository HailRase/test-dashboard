import React, {useState} from 'react';
import s from './MonitoringCC.module.scss'
import DiagramCallRating from "../f2-monitoring-cc/diagram-call-rating/DiagramCallRating";
import OperatorRating from "../f2-monitoring-cc/operator-raiting/OperatorRating";
import Histogram from "../f2-monitoring-cc/histogram/Histogram";

import {useNavigate} from "react-router-dom";
import {Sidebar} from "../../common/Sidebar/Sidebar";
import {PATH} from "../../common/routes/routes";
import CustomTabs from "../../common/CustomTabs/CustomTabs";
import ArrowLeftIcon from "../../common/ArrowLeftIcon/ArrowLeftIcon";
import OptionIcon from "../../common/OptionIcon/OptionIcon";
import HomeIcon from "../../common/HomeIcon/HomeIcon";


const MonitoringCc = () => {


    const [isActive, setIsActive] = useState<boolean>(false)
    const navigate = useNavigate()

    const onHomeHandler = () => {
        navigate(`${PATH.HOME}`)
    }
    const onOpenSidebar = () => {
        setIsActive(true)
    }
    const onCloseSidebar = () => {
        setIsActive(false)
    }

    return (
        <div className={s.monitoringCCWrapper}>
            <Sidebar isActive={isActive}>
                <div className={s.optionContainer}>
                    <div className={s.optionHeader}>
                        <ArrowLeftIcon onClick={onCloseSidebar}/>
                        <span>Параметры отбора</span>
                    </div>
                    <div className={s.optionContent}>
                        <CustomTabs/>
                    </div>
                </div>
            </Sidebar>
            <div className={s.monitoringCCContainer}>
                <div className={s.monitoringCCHeader}>
                    <HomeIcon onClick={onHomeHandler}/>
                    <OptionIcon onClick={onOpenSidebar}/>
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