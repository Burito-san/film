import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SearchListDispatch } from "../../../redux/action";
import { Filters } from "./filters";

export function Search() {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.searchList);
    const imgURL = `https://image.tmdb.org/t/p/w500${data.item.poster_path || data.item.backdrop_path}` || '../../../../icon/basic.png';
    
    function next() {
        data.movie_num += 1;
        data.item = data.currentList[data.movie_num]
        dispatch(SearchListDispatch(data));
    }
    
    return (
        <div className="container_search">
            <div className="filter_search">
                <Filters/>
                <span className="btns_fit">
                    <Link  to='/about' state={data.item} className="btn_fit">подходит</Link>
                    <button className="btn_no_fit" onClick={() => next()}>не подходит</button>
                </span>
            </div>
            <div className="bottom_search">
                <div className="film-box_search">
                    <img className="afisha_search" src={imgURL}/>
                    <div className="right_search">
                        <div className="rating"> Рейтинг: {data.item.vote_average || '----'} </div>
                        <div className="title_search">{data.item.title || "какое-то название"}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
