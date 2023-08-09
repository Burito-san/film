import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterUsedDispatch } from "../../../redux/action";
import { defaultFilterUsed } from "../../../redux/reduce";
export default function Filters() {
    const filterList = useSelector((state) => state.filterList);
    let filterUsed = useSelector((state) => state.filterUsed);
    const dispatch = useDispatch();

    function sortBy(event) {
        const sorting = event;
        filterUsed.sort_by = sorting;

        switch (sorting) {
            case "популярные по убыванию":
                filterUsed.currentList.sort((a, b) => {
                    return b.popularity - a.popularity;
                });
                dispatch(filterUsedDispatch(filterUsed));
                break;
            case "популярные по возрастанию":
                filterUsed.currentList.sort((a, b) => {
                    return a.popularity - b.popularity;
                });
                dispatch(filterUsedDispatch(filterUsed));
                break;
            case "рейтинг по убыванию":
                filterUsed.currentList.sort((a, b) => {
                    return b.vote_average - a.vote_average;
                });
                dispatch(filterUsedDispatch(filterUsed));
                break;
            case "рейтинг по возрастанию":
                filterUsed.currentList.sort((a, b) => {
                    return a.vote_average - b.vote_average;
                });
                dispatch(filterUsedDispatch(filterUsed));
                break;
            case "избранное":
                filterUsed.currentList = favouriteList();
                filterUsed.release_date = "";
                dispatch(filterUsedDispatch(filterUsed));
                break;
            case "смотреть позже":
                const arr =
                    JSON.parse(localStorage.getItem("watch_later")) || [];
                const filmList = filterUsed.initList.filter((item) =>
                    arr.includes(item.id)
                );
                filterUsed.currentList = filmList;
                dispatch(filterUsedDispatch(filterUsed));
                break;
            default:
                filterUsed.currentList.sort((a, b) => {
                    return b.popularity - a.popularity;
                });
                dispatch(filterUsedDispatch(filterUsed));
                break;
        }
    }

    function releaseDate(year) {
        filterUsed.release_date = year;
        filterUsed.currentList = filterUsed.initList;
        sortBy(filterUsed.sort_by);
        filterUsed.currentList = filterUsed.currentList.filter(
            (item) => item.release_date.slice(0, 4) === year
        );
        dispatch(filterUsedDispatch(filterUsed));
    }

    function genres(e) {
        const filmId = Number(e.currentTarget.getAttribute("value"));
        filterUsed.currentList = filterUsed.initList;

        releaseDate(filterUsed.release_date);
        sortBy(filterUsed.sort_by);

        if (filterUsed.genres.includes(filmId)) {
            filterUsed.genres = filterUsed.genres.filter(
                (item) => item !== filmId
            );
        } else {
            filterUsed.genres.push(filmId);
        }

        filterUsed.currentList = filterUsed.currentList.filter((item) =>
            filterUsed.genres.length != 0
                ? item.genre_ids.some((id) => filterUsed.genres.includes(id))
                : item
        );
        dispatch(filterUsedDispatch(filterUsed));
    }

    function reset() {
        filterUsed = defaultFilterUsed;
        dispatch(filterUsedDispatch(filterUsed));
    }

    function favouriteList() {
        const arr = JSON.parse(localStorage.getItem("favourite")) || [];
        const filmList = filterUsed.initList.filter((item) =>
            arr.includes(item.id)
        );
        return filmList;
    }

    return (
        <>
            <button className="btn-filter" onClick={reset}>
                сбросить все фильтры
            </button>
            <div className="filterList">
                <div>сортировать по:</div>
                <select
                    placeholder="популярные по убыванию"
                    onClick={(e) => sortBy(e.target.value)}
                >
                    <option>популярные по убыванию</option>
                    <option>популярные по возрастанию</option>
                    <option>рейтинг по убыванию</option>
                    <option>рейтинг по возрастанию</option>
                    <option>избранное</option>
                    <option>смотреть позже</option>
                </select>

                <div>год выпуска: </div>
                <select
                    placeholder="2020"
                    className="selectYears"
                    onClick={(e) => releaseDate(e.target.value)}
                >
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                </select>

                <br />
                {filterList.map((item) => {
                    return (
                        <label
                            key={item.id}
                            value={item.id}
                            className="checkbox style-b"
                            onChange={(e) => genres(e)}
                        >
                            <input type="checkbox" />
                            <div className="checkbox__checkmark"></div>
                            <div className="checkbox__body">{item.name}</div>
                        </label>
                    );
                })}
            </div>
        </>
    );
}
