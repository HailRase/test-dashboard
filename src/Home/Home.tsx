import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Home.module.scss'
import {useDispatch} from "react-redux";
import {fetchData} from "../bll/data-reducer";
import {useAppSelector} from "../bll/store";

const Home = () => {

    const dispatch = useDispatch<any>()
    const data = useAppSelector<string>(state => state.data?.data)
    const [dataVisible, setDataVisible] = useState<boolean>(false)
    const [param, setParam] = useState<string>("")

    useEffect(() => {
        setDataVisible(true)
    }, [data])


    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParam(e.currentTarget.value)
    }
    const requestHandler =  (param1: string) => {
        dispatch(fetchData(param1))
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
                <div className={s.requestButton} onClick={() => requestHandler(param)}>
                    <span>Send</span>
                </div>
            </div>
            {dataVisible && <div className={s.popup}>
                    <h2>{data}</h2>
                <button onClick={() => setDataVisible (false)}>close</button>
            </div>}
        </div>
    );
};

export default Home;