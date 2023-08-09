import React from "react";
import { useLocation } from "react-router-dom";


export function FilmAbout() {
   
    const location = useLocation();
    const item = location.state; 
    const imgURL = `https://image.tmdb.org/t/p/w500${item.poster_path || item.backdrop_path}`;
    
    return(
        <div className="container">
            <div className="top">
                <img src={imgURL} className="picture"/>
                <div className="information_about_film">
                    <h1>{item.title}</h1>
                    <p>Рейтинг: {item.vote_average}</p>
                    <p>{item.overview}</p>
                </div>
            </div>
            <div className="bottom">
                    <span>Оригинальное название : {item.original_title}</span>
                    <br/>
                    <span>Дата выхода : {item.release_date}</span>
                    <br/>
                    <span>Оригинальный язык : {item.original_language}</span>
            </div>
        </div>
    );
}