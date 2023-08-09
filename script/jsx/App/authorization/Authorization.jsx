import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LoginDispatch } from "../../../redux/action";


export function Authorization() {
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch()

    function Click() {
        const obj = {
            login: login, 
            password: password,
        }

        localStorage.setItem("login", login);
        localStorage.setItem("password", password);

        dispatch(LoginDispatch(obj));
    }

    function changeLogin(event) {
        setLogin(event.target.value);
    }

    function changePassword(event) {
        setPassword(event.target.value);
    }

    return (
        <div className="popup">
            <div className="popup_content">
                <div className="popup_head">
                    <h1 className="h1">Регистрация:</h1>
                    <Link to="/">
                        <button className="cross" />
                    </Link>
                </div>
                <form className="form_atho">
                    <label>
                        Логин:
                        <br />
                        <input
                            type="text"
                            className="input"
                            placeholder="Ваня1234"
                            onChange={(e) => {
                                changeLogin(e);
                            }}
                        />
                    </label>
                    <label>
                        Пароль:
                        <br />
                        <input
                            type="text"
                            className="input "
                            placeholder="1234567890"
                            onChange={(e) => {
                                changePassword(e);
                            }}
                        />
                    </label>
                    <Link to="/">
                        <button className="send" onClick={() => Click()}> отправить </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}
