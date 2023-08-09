import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Favourite(props) {

    const arr_favourite = JSON.parse(localStorage.getItem("favourite")) || [];
    const item = props.state;    
    const loginData = useSelector((state) => state.loginReducer);

    function addToFavourite(id) {
        let arr = JSON.parse(localStorage.getItem("favourite")) || [];
        if (arr.includes(id)) {
            arr = arr.filter((item) => item !== id);
        } else {
            arr.push(id);
        }
        localStorage.setItem("favourite", JSON.stringify(arr));
    }

    return (
        <>
        {loginData.password ? 
        <>
        <button
            className="favourite"
             onClick={() => addToFavourite(item.id)}
         >
             {arr_favourite.includes(item.id) ? "★  " : "☆"}
         </button></>
         : 
        <>
        <Link to="/athorization" className="close">
            ★
         </Link></>}
        </>
    )
}
