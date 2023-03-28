import React, {ChangeEvent, useState} from 'react';
import s from './Home.module.scss'
import {oktellAPI} from "../dal/oktell/oktell";

const Home = () => {


    const [param, setParam] = useState<string>("")
    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParam(e.currentTarget.value)
    }
    const requestHandler = () => oktellAPI.getData(param)

    return (
        <div className={s.homeWrapper}>
            <div className={s.homeContainer}>
                <h3 style={{color: "white"}}>Введите текст:</h3>
                <input type="text"
                       className={s.emailInput}
                       onChange={onChangeEmailHandler}
                       placeholder=''
                       required
                />
                <div className={s.requestButton} onClick={requestHandler}>
                    <span>Send</span>
                </div>
            </div>
        </div>
    );
};

export default Home;