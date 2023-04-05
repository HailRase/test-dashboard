import React from 'react';
import s from './OperatorRating.module.scss'
import Table from "../table/Table";

export const OperatorRating = () => {
    return (
        <div className={s.operatorRatingWrapper}>
            <div className={s.operatorRatingContainer}>
                <div className={s.operatorRatingHeader}>
                    <span>Рейтинг операторов</span>
                </div>
                <Table/>
            </div>
        </div>
    );
};

export default OperatorRating;