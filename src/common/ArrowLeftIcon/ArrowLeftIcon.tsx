import React from 'react';
import s from './ArrowLeftIcon.module.scss'
import {ReactComponent as ArrowLeftIconComponent} from "../../assets/arrow-left.svg";
type ArrowLeftPropType = {
    onClick: () => void
}
const ArrowLeftIcon = ({onClick}:ArrowLeftPropType) => {
    return  <ArrowLeftIconComponent onClick={onClick} className={s.arrowLeft}/>;
};

export default ArrowLeftIcon;