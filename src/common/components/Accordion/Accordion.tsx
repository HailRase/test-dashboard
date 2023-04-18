import React, { useState } from 'react';
import s from './Accordion.module.scss';
type AccordionType = {
    title: string
    children: React.ReactNode
}
const Accordion = ({ title, children }:AccordionType) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={s.accordion}>
            <div className={s.header} onClick={handleAccordion}>
                <span className={s.title}>{title}</span>
                <span className={s.icon}>{isOpen ? '-' : '+'}</span>
            </div>
            <div className={`${s.body} ${isOpen ? s.open : ''}`}>
                <div className={s.content}>{children}</div>
            </div>
        </div>
    );
};

export default Accordion;