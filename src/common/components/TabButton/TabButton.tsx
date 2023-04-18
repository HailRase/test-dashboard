import React, {CSSProperties} from 'react';
import s from './TabButton.module.scss'
type TabButtonType = {
    name: string
    onClick: () => void
    style?: CSSProperties
}
const TabButton = ({name, onClick, style}:TabButtonType) => {
    return <button style={style} className={s.sendButton} onClick={onClick}>{name}</button>

};

export default TabButton;