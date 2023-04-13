import React from 'react';
import s from './TabButton.module.scss'
type TabButtonType = {
    name: string
    onClick: () => void
}
const TabButton = ({name, onClick}:TabButtonType) => {
    return <button className={s.sendButton} onClick={onClick}>{name}</button>

};

export default TabButton;