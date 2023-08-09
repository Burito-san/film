import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Favourite } from "./Favourite";
import { WatchLater } from "./WatchLater";

export default function List() {
    const list = useSelector((state) => state.pagesList);
    const filmList = list.list[list.page_now -1];

    if (filmList === undefined) {
        return <div className="none">Нет подходящих результатов</div>;
    }

    return filmList.map((item) => {
        const imgURL = `https://image.tmdb.org/t/p/w500${item.poster_path || item.backdrop_path}`;

        return (
            <div key={item.id} className="film-box">
                <img className="afisha" src={imgURL}></img>
                <div className="right">
                    <div className="right-up">
                        <div className="rating">
                            {" "}
                            Рейтинг: {item.vote_average}{" "}
                        </div>
                        <Favourite state={item}/>
                        <WatchLater state={item}/>
                    </div>
                    <div className="title">{item.title}</div>
                    <Link to="/about" state={item} className="details-btn">Детали</Link>
                </div>
            </div>
        );
    });
}