import React from 'react';
import s from './ErrorWindow.module.scss'
import {ReactComponent as ErrorIcon} from "../../../assets/error-message.svg";

type ErrorWindowType = {
    errorMessage: string
}
const ErrorWindow:React.FC<ErrorWindowType> = ({errorMessage}) => {
    return (
        <div className={s.errorWindowContainer}>
            <div className={s.errorWindowHeader}>
                <ErrorIcon width={25} height={25}/>
                    <span className={s.errorWindowHeaderTitle}>Ошибка</span>
            </div>
            <div className={s.errorWindowBody}>
                <span>{errorMessage}</span>
            </div>

        </div>
    );
};

export default ErrorWindow;