import React from 'react';
import s from './Home.module.scss'
import {ReactComponent as Logo} from '../../assets/Logo.svg'
import {ReactComponent as Monitoring} from '../../assets/monitoring-icon.svg'
import {ReactComponent as CallReportIcon} from '../../assets/call-report-icon.svg'
import {ReactComponent as CallIcon} from '../../assets/call-icon.svg'
import {ReactComponent as OperatorIcon} from "../../assets/operator-icon.svg";
import {ReactComponent as QueueIcon} from "../../assets/queue-icon.svg";
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
    const toOperatorReportHandler = () => {
        navigate(PATH.OPERATOR_REPORT)
    }
    const toQueueReportHandler = () => {
        navigate(PATH.QUEUE_REPORT)
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
                        <div className={s.itemName}>Мониторинг</div>
                    </div>
                    <div className={s.monitoringContainer} onClick={toCallReportHandler} style={{marginLeft: "50px"}}>
                        <div className={s.monitoringContent}>
                            <CallReportIcon className={s.monitoring} width={60} height={60}/>
                            <CallIcon className={s.call} width={30} height={30}/>
                        </div>
                        <div className={s.itemName}>Отчёт по звонкам</div>
                    </div>
                    <div className={s.monitoringContainer} onClick={toOperatorReportHandler} style={{marginLeft: "20px"}}>
                        <div className={s.monitoringContent}>
                            <CallReportIcon className={s.monitoring} width={60} height={60}/>
                            <OperatorIcon className={s.call} width={30} height={30}/>
                        </div>
                        <div className={s.itemName}>Отчёт по операторам</div>
                    </div>
                    <div className={s.monitoringContainer} onClick={toQueueReportHandler} style={{marginLeft: "20px"}}>
                        <div className={s.monitoringContent}>
                            <CallReportIcon className={s.monitoring} width={60} height={60}/>
                            <QueueIcon className={s.call} width={30} height={30}/>
                        </div>
                        <div className={s.itemName}>Отчёт по очередям</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;