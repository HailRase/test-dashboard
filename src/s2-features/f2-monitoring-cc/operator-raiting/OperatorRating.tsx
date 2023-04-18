import React from 'react';
import s from './OperatorRating.module.scss'
import Table from "../../../common/components/Table/Table";
import {operatorsRatingData} from "../../../data/operatorsData";


const columns = [
    {
        Header: '№',
        accessor: 'ratingRecordId',
        width: 60
    },
    {
        Header: 'Оператор',
        accessor: 'operatorName',
        width: 200
    },
    {
        Header: 'Принял',
        accessor: 'accept',
        width: 70,
    },
    {
        Header: 'Пропустил',
        accessor: 'skip',
        width: 90
    },
    {
        Header: 'Уровень обслуживания',
        accessor: 'serviceLevel',
        width: 120
    },
    {
        Header: 'Среднее время разговора',
        accessor: 'avgServiceTime',
        width: 85
    },
    {
        Header: 'Загруженность',
        accessor: 'workload',
        width: 120
    }
]
const defaultColumn = {
    minWidth: 20,
    width: 100,
    maxWidth: 400,
}
export const OperatorRating = () => {
    return (
        <div className={s.operatorRatingWrapper}>
            <div className={s.operatorRatingContainer}>
                <div className={s.operatorRatingHeader}>
                    <span>Рейтинг операторов</span>
                </div>
                <Table data={operatorsRatingData} columns={columns} defaultColumn={defaultColumn} height={"40vh"}/>

            </div>
        </div>
    );
};

export default OperatorRating;