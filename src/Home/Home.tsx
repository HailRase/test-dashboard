const XMLParser = require('react-xml-parser');
import React, {ChangeEvent, useState} from 'react';
import s from './Home.module.scss'
import {useDispatch} from "react-redux";
import {oktellAPI} from "../dal/oktell/oktell";

const Home = () => {

    const dispatch = useDispatch<any>()
    const [param, setParam] = useState<string>("")
    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParam(e.currentTarget.value)
    }
    const requestHandler = async () => {
        const xmlData = await oktellAPI.getData(param)
        const data = new XMLParser().parseFromString(xmlData)
        console.log(data)
    }

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