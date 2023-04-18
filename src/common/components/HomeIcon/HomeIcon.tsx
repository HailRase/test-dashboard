import React from 'react';
import {ReactComponent as HomeIconComponent} from "../../../assets/home-icon.svg";
import s from './HomeIcon.module.scss'
type HomeIconPropType = {
    onClick: () => void
}
const HomeIcon = ({onClick}:HomeIconPropType) => {
    return <HomeIconComponent onClick={onClick} className={s.homeLogo}/>
};

export default HomeIcon;