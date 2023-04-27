import React, {CSSProperties} from 'react';
import {ReactComponent as HomeIconComponent} from "../../../assets/home-icon.svg";
import s from './HomeIcon.module.scss'
type HomeIconPropType = {
    onClick: () => void
    style?: CSSProperties
}
const HomeIcon = ({onClick, style}:HomeIconPropType) => {
    return <HomeIconComponent style={style} onClick={onClick} className={s.homeLogo}/>
};

export default HomeIcon;