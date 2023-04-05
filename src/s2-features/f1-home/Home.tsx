import React from 'react';
import s from './Home.module.scss'
import {ReactComponent as Logo} from '../../assets/Logo.svg'
import {ReactComponent as Monitoring} from '../../assets/monitoring-icon.svg'
import {ReactComponent as CallReportIcon} from '../../assets/call-report-icon.svg'
import {PATH} from "../../common/routes/routes";
import {useNavigate} from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate()
    const toMonitoringHandler = () => {
        navigate(PATH.MONITORING)
    }
    const toCallReportHandler = () => {
        navigate(PATH.CALL_REPORT)
    }

    return (
        <div className={s.homeWrapper}>
            <div className={s.homeContainer}>
                <div className={s.homeHeader}>
                    <Logo className={s.logo} height={60} width={110}/>
                </div>
                <div className={s.homeContent}>
                    <div className={s.monitoringContainer} onClick={toMonitoringHandler}>
                        <div className={s.monitoringContent}>
                            <Monitoring className={s.monitoring} width={60} height={60}/>
                        </div>
                        <span className={s.itemName}>Мониторинг</span>
                    </div>
                    <div className={s.monitoringContainer} onClick={toCallReportHandler}>
                        <div className={s.monitoringContent}>
                            <CallReportIcon className={s.monitoring} width={60} height={60}/>
                        </div>
                        <span className={s.itemName}>Отчёт по звонкам</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;