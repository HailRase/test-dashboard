import React, {ChangeEvent, useState} from 'react';
import s from './Login.module.scss'
import Form from "react-bootstrap/Form";
import {auth} from "../../data/auth";
import {checkCredentials} from "../../common/utils/checkCredentials";
import {loginTC} from "../../s1-main/m2-bll/auth-reducer";
import {useDispatch} from "react-redux";

const Login = () => {

    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [remember, setRemember] = useState<boolean>(false)
    const dispatch = useDispatch()

    const onChangeLoginHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setLogin(e.currentTarget.value)
    }
    const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const onChangeRememberHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRemember(e.currentTarget.checked)
    }
    const onEntryHandler = () => {
        const isValidCredentials = checkCredentials(login, password, auth);
        if (isValidCredentials && remember) {
            localStorage.setItem('report-login', login)
            localStorage.setItem('report-password', password)
            console.log("Записано в LocalStorage")
        } else if (isValidCredentials && !remember) {
            sessionStorage.setItem('report-login', login)
            sessionStorage.setItem('report-password', password)
            console.log("Записано в SessionStorage")
        }else if (!isValidCredentials) {
            console.log("Неврный логин или пароль!")
        }

        // @ts-ignore
        dispatch(loginTC())
    }
    return (
        <div className={s.loginWrapper}>
            <div className={s.loginContainer}>
                <div className={s.loginHeader}>
                    <span>Вход</span>
                </div>
                <div className={s.loginBody}>
                    <Form.Group style={{width: "90%"}}>
                        <Form.Label style={{fontWeight: "500", fontSize: "14px"}}>Логин</Form.Label>
                        <Form.Control value={login} onChange={(e) =>onChangeLoginHandler(e)} type="text"
                                      style={{height: "4vh"}}/>
                    </Form.Group>
                    <Form.Group style={{width: "90%"}}>
                        <Form.Label style={{fontWeight: "500", fontSize: "14px"}}>Пароль</Form.Label>
                        <Form.Control value={password} onChange={onChangePasswordHandler} type="password"
                                      style={{height: "4vh"}}/>
                    </Form.Group>
                    <Form.Group style={{width: "90%", display: "flex"}}>
                        <Form.Check checked={remember} onChange={onChangeRememberHandler}/>
                        <Form.Label style={{fontWeight: "500", fontSize: "14px", marginLeft: "5px"}}>
                            Запомнить меня
                        </Form.Label>
                    </Form.Group>
                    <div className={s.groupButton}>
                        <div className={`${s.button} ${s.entry}`} onClick={onEntryHandler}>Вход</div>
                        <div className={`${s.button} ${s.cancel}`}>Отмена</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;