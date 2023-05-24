import React, {useState} from "react";
import s from "./DropDown.module.scss";
import {ReactComponent as ArrowDown} from "../../../assets/arrow-down.svg";

interface OptionType {
    id: number
    text: string
    onClick: () => void
}

interface DropDownType {
    title: string
    options: OptionType[]
}

const DropDown: React.FC<DropDownType> = ({options, title}) => {
    const [isOpen, setIsOpen] = useState(false);

    const onToggleHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={s.dropdownContainer}>
            <div className={s.dropDown} onClick={onToggleHandler}>
                {title} <ArrowDown height={15} width={15} className={`${s.arrow} ${isOpen ? s.arrowUp : s.arrowDown}`}/>
            </div>
            {isOpen && <div className={s.optionsContainer}>
                {options.map(op => <div className={s.option} key={op.id} onClick={op.onClick}>
                    <span>{op.text}</span>
                </div>)}
            </div>}

        </div>
    );
};

export default DropDown;