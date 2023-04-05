import React from 'react';
import s from './CallReportTable.module.scss'
import {callReportData, CallReportDataType} from "../../../data/callReportData";

const CallReportTable = () => {
    return (
        <div className={s.callReportTableContainer}>
            <div className={s.callReportTableHeaderContainer}>
                <div className={s.date}>
                    Дата
                </div>
                <div className={s.contactNumbers}>
                    Контактные номера
                </div>
                <div className={s.basicInformation}>Основная информация</div>
                <div className={s.time}>Время</div>
                <div className={s.contactTD}>Контакты в тд</div>
                <div className={s.dateItem}>
                    <div className={s.start}>Начало</div>
                    <div className={s.end}>Завершение</div>
                </div>
                <div className={s.contactNumbersItems}>
                    <div className={s.iniciator}>Инициатор</div>
                    <div className={s.resipient}>Получатель</div>
                </div>
                <div className={s.basicInformationItems}>
                    <div className={s.direction}>Направление</div>
                    <div className={s.status}>Статус</div>
                    <div className={s.type}>Тип</div>
                    <div className={s.queue}>Очередь</div>
                </div>
                <div className={s.timeItems}>
                    <div className={s.totalTime}>Общее время</div>
                    <div className={s.talkTime}>Время разговора</div>
                    <div className={s.timeConnection}>Время соединения</div>
                    <div className={s.holdTime}>Время на удержании</div>
                    <div className={s.queueTime}>Время в очереди</div>
                </div>
                <div className={s.contactTDItems}>
                    <div className={s.initiatorContact}>Контакт инициатора</div>
                    <div className={s.recipientContact}>Контакт получателя</div>
                    <div className={s.operator}>Оператор</div>
                </div>
            </div>
            <div className={s.callReportTableContent}>
                {callReportData.map((d: CallReportDataType) => <div className={s.callReportItem}>
                    <div style={{width: "8%"}}>{d.dateStart}</div>
                    <div style={{width: "130px"}}>{d.dateEnd}</div>
                    <div style={{width: "100px"}}>{d.initiator}</div>
                    <div>{d.recipient}</div>
                    <div style={d.direction === "Входящий"
                        ? {color: "#47932b", fontWeight: "600", width: "100px"}
                        : {color: "red", fontWeight: "600", width: "100px"}}>
                        {d.direction}
                    </div>
                    <div style={d.status === "Отвечен"
                        ? {color: "#47932b", fontWeight: "600", width: "100px"}
                        : {color: "red", fontWeight: "600", width: "100px"}}>
                        {d.status}
                    </div>
                    <div style={{width: "100px"}}>{d.type}</div>
                    <div style={{width: "100px"}}>{d.queue}</div>
                    <div style={{width: "100px"}}>{d.totalTime}</div>
                    <div style={{width: "100px"}}>{d.talkTime}</div>
                    <div style={{width: "100px"}}>{d.connectionTime}</div>
                    <div>{d.holdTime}</div>
                    <div>{d.queueTime}</div>
                    <div>{d.initiatorContact}</div>
                    <div>{d.recipientContact}</div>
                    <div>{d.operator}</div>
                </div>)}
            </div>
            <div className={s.callReportTableFooter}>

            </div>
        </div>
    );
};

export default CallReportTable;