import React from 'react';
import {ReactComponent as OptionIconComponent} from "../../../assets/option-icon.svg";
import s from './OptionIcon.module.scss'
type OptionIconPropType = {
    onClick: () => void
}
const OptionIcon = ({onClick}:OptionIconPropType) => {
    return <OptionIconComponent className={s.optionIcon} onClick={onClick}/>
};

export default OptionIcon;