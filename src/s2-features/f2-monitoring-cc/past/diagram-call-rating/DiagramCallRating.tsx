import React from 'react';
import s from './DiagramCallRating.module.scss'
import PieDoughnut from "../doughnut/PieDoughnut";

export const DiagramCallRating = () => {
    return (
        <div className={s.diagramCallRatingWrapper}>
            <div className={s.diagramCallRatingContainer}>
                <div className={s.diagramCallRatingHeader}>
                    <span>Звонков</span>
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <PieDoughnut/>
                </div>
            </div>
        </div>
    );
};

export default DiagramCallRating;