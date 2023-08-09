import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterList } from "../../../src/data/filterList";
import { SearchListDispatch } from "../../../redux/action";

export function Filters() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.searchList);

    function genre(event) {
        const genreName = event.target.value;
        const item = filterList.filter((item) => item.name == genreName);
        data.genre = item[0].id;
        dispatch(SearchListDispatch(data));
    }

    function rating(event) {
        data.rating = event.target.value;
        dispatch(SearchListDispatch(data));
    }

    function fame(event) {
        data.fame = event.target.value;
        dispatch(SearchListDispatch(data));
    }

    function sortList() {
        data.currentList = data.initList;
        data.movie_num = 0
        //sort by genre
        data.currentList = data.currentList.filter((item) =>
            item.genre_ids.includes(data.genre)
        );

        //sort by vote_average
        if (data.rating == "высокая оценка") {
            data.currentList = data.currentList.filter(
                (item) => item.vote_average > 5
            );
        } else if (data.rating == "низкая оценка") {
            data.currentList = data.currentList.filter(
                (item) => item.vote_average < 5
            );
        }

        //sort by fame
        if (data.fame == "популярный") {
            data.currentList = data.currentList.filter(
                (item) => item.vote_count > 200 && item.popularity > 100
            );
        } else {
            data.currentList = data.currentList.filter(
                (item) => item.vote_count < 200 && item.popularity < 100
            );
        }
        data.item = data.currentList[data.movie_num];
        dispatch(SearchListDispatch(data));
    }

    return (
        <>
            <select onChange={(e) => genre(e)}>
                {filterList.map((item) => {
                    return <option key={item.id}>{item.name}</option>;
                })}
            </select>

            <select onChange={(e) => rating(e)}>
                <option>высокая оценка</option>
                <option>низкая оценка</option>
            </select>

            <select onChange={(e) => fame(e)}>
                <option>популярный</option>
                <option>неизвестный</option>
            </select>
            <button className="btn_search" onClick={() => sortList()}>
                искать
            </button>
        </>
    );
}
