import React from 'react';
import s from './TabButton.module.scss'
type TabButtonType = {
    name: string
}
const TabButton = ({name}:TabButtonType) => {
    return <button className={s.sendButton}>{name}</button>

};

export default TabButton;