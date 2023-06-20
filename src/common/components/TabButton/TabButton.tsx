import React, {CSSProperties} from 'react';
import s from './TabButton.module.scss'

type TabButtonType = {
    name: string
    onClick: () => void
    style?: CSSProperties
    disabled?: boolean
}
const TabButton = ({name, onClick, style, disabled}: TabButtonType) => {
    return <button disabled={disabled} style={style}
                   className={disabled ? `${s.sendButton} ${s.disabled}` : s.sendButton}
                   onClick={onClick}>{name}</button>

};

export default TabButton;