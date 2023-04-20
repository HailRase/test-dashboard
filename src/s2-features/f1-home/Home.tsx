import React from 'react';
import s from './Home.module.scss'
import {PATH} from "../../common/routes/routes";
import {useNavigate} from 'react-router-dom';
import HomeAccordion from "../../common/components/HomeAccordion/HomeAccordion";


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
    const toTopOperatorReportHandler = () => {
        navigate(PATH.TOP_OPERATOR_REPORT)
    }

    const monitoringAccordion = [
        {
            title: "Мониторинг Контакт-центра",
            body: "Оперативная информация по контактному центру, рейтинг операторов, нагрузка контактного центра по часам",
            clickOnBody: () => {
            }
        },
        {title: "Мониторинг Контакт-центра (Past)", body: "", clickOnBody: toMonitoringHandler},
    ]
    const operatorReportAccordion = [
        {
            title: "Отчёт по операторам",
            body: "Отражает информация по операторам в табличном виде за период времени с шагом в час, день, месяц.",
            clickOnBody: () => toTopOperatorReportHandler
        },
        {
            title: "Отчёт по операторам (общий)",
            body: "Отражает общую информацию по операторам в табличном виде за период.",
            clickOnBody: () => {
            }
        },
        {
            title: "Отчёт по операторам (детальный)",
            body: "Отражает детальную информация по очередям в виде таблицы за период времени с шагом в час, день, месяц.",
            clickOnBody: () => {
            }
        },
        {
            title: "Отчёт по статусам оператора",
            body: "Отражает информацию по статусам в которых находился оператор",
            clickOnBody: () => {
            }
        },
        {
            title: "Отчёт по операторам (пропущенные)",
            body: " Отражает статистику по пропущенным звонкам всех или отдельного оператора",
            clickOnBody: () => {
            }
        },
    ]
    const queueReportAccordion = [
        {
            title: "Отчёт по очередям",
            body: "Отображает информация по очередям в виде графиков и таблицы за период времени с шагом в час, день, месяц.",
            clickOnBody: toQueueReportHandler
        },
        {
            title: "Детальный отчёт по пропущенным с очередей", body: "", clickOnBody: () => {
            }
        },
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

    return (
        <div className={s.homeWrapper}>
            <div className={s.homeTitle}><span style={{color: "white"}}>Отчеты</span></div>
            <div className={s.homeContent}>
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
            </div>
        </div>
    );
};

export default Home;