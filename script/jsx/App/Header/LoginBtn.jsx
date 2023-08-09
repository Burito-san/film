import React from "react";
import { LoginDispatch } from "../../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
export function Login() {
    const loginData = useSelector((state) => state.loginReducer);
    const dispatch = useDispatch();

    return (
        <>
            {loginData.password ? (
                <button
                    className="login"
                    onClick={() => {
                        localStorage.clear();
                        dispatch(LoginDispatch({}));
                    }}
                >
                    log out
                </button>
            ) : (
                <Link to="/athorization">
                    <button className="login">log in</button>
                </Link>
            )}
        </>
    );
}
