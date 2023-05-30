import React, {useEffect} from 'react';
import s from './Home.module.scss'
import {PATH} from "../../common/routes/routes";
import {useNavigate} from 'react-router-dom';
import HomeAccordion from "../../common/components/HomeAccordion/HomeAccordion";
import Login from "../f10-login/Login";
import {useAppSelector} from "../../s1-main/m2-bll/store";
import {loginTC, logout} from "../../s1-main/m2-bll/auth-reducer";
import {useDispatch} from "react-redux";
import DropDown from "../../common/components/DropDown/DropDown";


const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isAuth = useAppSelector<boolean>(state => state.auth.isAuth)

    useEffect(() => {
        // @ts-ignore
        dispatch(loginTC())
    }, [])
    if (isAuth) {
        console.log("Залогинен")
    } else {
        console.log("Не залогинен")
    }
    const toMonitoringHandler = () => {
        navigate(PATH.MONITORING)
    }
    const toPastMonitoringHandler = () => {
        navigate(PATH.PAST_MONITORING)
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
    const toTopOperatorReportHandler = () => {
        navigate(PATH.TOP_OPERATOR_REPORT)
    }
    const toOperatorStatusReportHandler = () => {
        navigate(PATH.OPERATOR_STATUS_REPORT)
    }
    const toOperatorsReportGeneralHandler = () => {
        navigate(PATH.OPERATORS_REPORT_GENERAL)
    }
    const toOperatorsReportDetailedHandler = () => {
        navigate(PATH.OPERATORS_REPORT_DETAILED)
    }
    const onLogoutHandler = () => {
        // @ts-ignore
        dispatch(logout())
    }
    const monitoringAccordion = [
        {
            title: "Мониторинг Контакт-центра",
            body: "Оперативная информация по контактному центру, рейтинг операторов, нагрузка контактного центра по часам",
            clickOnBody: toMonitoringHandler
        },
        {
            title: "Мониторинг Контакт-центра (Past)",
            body: "Информация по контактному центру, рейтинг операторов, нагрузка контактного центра за выбранный промежуток времени",
            clickOnBody: toPastMonitoringHandler
        },
    ]
    const operatorReportAccordion = [
        /*{
            title: "Отчёт по операторам",
            body: "Отражает информация по операторам в табличном виде за период времени с шагом в час, день, месяц.",
            clickOnBody: toTopOperatorReportHandler
        },*/
        {
            title: "Отчёт по операторам (общий)",
            body: "Отражает общую информацию по операторам в табличном виде за период.",
            clickOnBody: toOperatorsReportGeneralHandler
        },
        {
            title: "Отчёт по операторам (детальный)",
            body: "Отражает детальную информация по очередям в виде таблицы за период времени с шагом в день, час, минута.",
            clickOnBody: toOperatorsReportDetailedHandler
        },
        /*{
            title: "Отчёт по статусам оператора",
            body: "Отражает информацию по статусам в которых находился оператор",
            clickOnBody: toOperatorStatusReportHandler
        },
        {
            title: "Отчёт по операторам (пропущенные)",
            body: " Отражает статистику по пропущенным звонкам всех или отдельного оператора",
            clickOnBody: () => {
            }
        },*/
    ]
    const queueReportAccordion = [
        {
            title: "Отчёт по очередям",
            body: "Отображает информация по очередям в виде графиков и таблицы за период времени с шагом в час, день, месяц.",
            clickOnBody: toQueueReportHandler
        },
        /*{
            title: "Детальный отчёт по пропущенным с очередей", body: "", clickOnBody: () => {
            }
        },*/
    ]
    const statisticsAccordion = [
        {
            title: "Статистика по звонкам",
            body: "Детальная статистика звонков.",
            clickOnBody: toCallReportHandler
        },
        {
            title: "Статистика по операторам",
            body: "Детальная статистика по статусам в которых находились операторы.",
            clickOnBody: toOperatorReportHandler
        },
    ]

    const getNameSupervisor = () => {
        if (localStorage.getItem('report-login')) {
            return localStorage.getItem('report-login')
        } else {
            return sessionStorage.getItem('report-login')
        }
    }

    return (
        <div className={s.homeWrapper}>
            <div className={s.homeTitle}><span style={{color: "white"}}>Отчеты</span>
                {isAuth && <div className={s.profileContainer}>
                    <DropDown options={[{id: 1, text: "Выход", onClick: onLogoutHandler}]}
                              title={`Супервизор (${getNameSupervisor()})`}/>
                    {/*Супервизор({getNameSupervisor()})
                    Выход*/}
                </div>}
            </div>
            {isAuth && <div className={s.homeContent}>
                <div className={s.homeContentTitle}>
                    <span>Наименование отчёта</span>
                    <span>Описание</span>
                </div>
                <div className={s.homeContentBody}>
                    <HomeAccordion title={"Мониторинг"} items={monitoringAccordion}/>
                    <HomeAccordion title={"Отчёты по операторам"} items={operatorReportAccordion}/>
                    <HomeAccordion title={"Отчёты по очередям"} items={queueReportAccordion}/>
                    <HomeAccordion title={"Статистика"} items={statisticsAccordion}/>
                </div>
            </div>}
            {!isAuth && <Login/>}
        </div>
    );
};

export default Home;