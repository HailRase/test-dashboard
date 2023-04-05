import React from 'react';
import s from './Home.module.scss'
import {ReactComponent as Logo} from '../assets/Logo.svg'
import {ReactComponent as Monitoring} from '../assets/monitoring-icon.svg'
import {PATH} from "../s1-main/m2-routes/routes";
import {Navigate, useNavigate} from 'react-router-dom';



const Home = () => {
    const navigate = useNavigate()
   const toMonitoringHandler = () => {
        navigate(PATH.MONITORING)
    }

    return (
        <div className={s.homeWrapper}>
            <div className={s.homeContainer}>
                <div className={s.homeHeader}>
                    <Logo className={s.logo} height={60} width={110}/>
                </div>
                <div className={s.homeContent}>
                    <div className={s.monitoringContainer} onClick={toMonitoringHandler}>
                        <Monitoring className={s.monitoring} width={60} height={60}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;