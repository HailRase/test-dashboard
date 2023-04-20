import React, {useState} from 'react';
import s from './HomeAccordion.module.scss';

interface AccordionItem {
    title: string;
    body: string;
    clickOnBody: () => void;
}

interface AccordionProps {
    title: string
    items: AccordionItem[];
}

const HomeAccordion: React.FC<AccordionProps> = ({title,items}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onTitleClick = () => {
        setCollapsed(!collapsed)
    }

    return <div className={s.homeAccordionContainer}>
            <div className={s.homeAccordionTitle} onClick={onTitleClick}>{title}</div>
        {collapsed && items.map( item => <div className={s.accordionItem} onClick={item.clickOnBody}>
            <div className={s.accordionItemTitle}>{item.title}</div>
            <div className={s.accordionItemBody}>{item.body}</div>
        </div>)}

    </div>;
};

export default HomeAccordion;
