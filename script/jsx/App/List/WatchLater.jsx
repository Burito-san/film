import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function WatchLater(props) {
    
    const arr_watch_later = JSON.parse(localStorage.getItem("watch_later")) || [];
    const loginData = useSelector((state) => state.loginReducer);
    const item = props.state;

    function addToWatchLater(id) {
        let arr = JSON.parse(localStorage.getItem("watch_later")) || [];
        if (arr.includes(id)) {
            arr = arr.filter((item) => item !== id);
        } else {
            arr.push(id);
        }
        localStorage.setItem("watch_later", JSON.stringify(arr));
    }


    return (
        <>
            {loginData.password ? (
                arr_watch_later.includes(item.id) ? (
                    <img
                        className="later"
                        src="../../../../icon/after.png"
                        onClick={() => addToWatchLater(item.id)}
                    />
                ) : (
                    <img
                        className="later"
                        src="../../../../icon/later.png"
                        onClick={() => addToWatchLater(item.id)}
                    />
                )
            ) : (
                <Link to="/athorization">
                    <img className="later" src="../../../../icon/after.png" />
                </Link>
            )}
        </>
    );
}
