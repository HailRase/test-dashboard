import React from 'react';
import s from './DiagramCallRating.module.scss'

export const DiagramCallRating = () => {
    return (
        <div className={s.diagramCallRatingWrapper}>
            <div className={s.diagramCallRatingContainer}>
                <div className={s.diagramCallRatingHeader}>
                    <span>Звонков</span>
                </div>
            </div>
        </div>
    );
};

export default DiagramCallRating;