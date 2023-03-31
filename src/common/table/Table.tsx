import React from 'react';
import s from "./Table.module.scss"
import {OperatorsRatingData} from "../../data/data";

export const Table = () => {

    return (
        <div className={s.tableContainer}>
            <div className={s.tableHeader}>
                <div style={{width: "7.82%", borderRight: "1px solid white"}}>№</div>
                <div style={{width: "30.4%", borderRight: "1px solid white"}}>Оператор</div>
                <div style={{width: "8.82%", borderRight: "1px solid white"}}>Принял</div>
                <div style={{width: "10.2%", borderRight: "1px solid white"}}>Пропустил</div>
                <div style={{width: "14.7%", borderRight: "1px solid white"}}>Уровень обслуживания</div>
                <div style={{width: "11.76%", borderRight: "1px solid white"}}>Среднее время разговора</div>
                <div style={{width: "16.17%"}}>Загруженность</div>
            </div>
            <div className={s.tableContents}>
                {OperatorsRatingData.sort((a,b) => b.accept - a.accept)
                    .map( (op, index) => <div key={op.id + op.accept} className={s.tableContent}>
                    <div style={{width: "7.82%", borderRight: "1px solid white"}}>{index+1}</div>
                    <div style={{width: "30.4%", borderRight: "1px solid white"}}>{op.operatorName}</div>
                    <div style={{width: "8.82%", borderRight: "1px solid white"}}>{op.accept}</div>
                    <div style={{width: "10.2%", borderRight: "1px solid white"}}>{op.skip}</div>
                    <div style={{width: "14.7%", borderRight: "1px solid white"}}>{op.serviceLevel}</div>
                    <div style={{width: "11.76%", borderRight: "1px solid white"}}>{op.avgServiceTime}</div>
                    <div style={{width: "16.17%"}}>{op.workload}</div>
                </div>)}
            </div>
        </div>
    );
};

export default Table;