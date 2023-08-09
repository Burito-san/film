import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pageListDispatch } from "../../../redux/action";

export default function SwitchPages() {

    const movies = useSelector((state) => state.filterUsed);
    const list = movies.currentList;
    const dispatch = useDispatch();

    let pageNow = 1;
    let pagesData = Object(pageNow, list);

    function Object(pageNow) {
        const num_element = 12;
        const pagesList = [];
        const num_pages = Math.ceil(list.length / num_element);
        for (let i = 0; num_pages > i; i++) {
            pagesList.push(
                list.slice(i * num_element, num_element + i * num_element)
            );
        }
        const OBJECT = {
            page_now: pageNow,
            num_element: num_element,
            num_pages: num_pages,
            list: pagesList,
        };
        dispatch(pageListDispatch(OBJECT));

        return OBJECT;
    }

    function Click(e, symbol) {
        const arrow = e.currentTarget;
        arrow.style.color = "white";

        switch (symbol) {
            case "-":
                if (pageNow <= 1) {
                    arrow.style.color = "rgb(60,60,60)";
                    break;
                } else {
                    pageNow -= 1;
                    Object(pageNow, list);
                    break;
                }
            case "+":
                if (pageNow > 20) {
                    arrow.style.color = "rgb(60,60,60)";
                    pageNow = 20;
                    Object(pageNow, list);
                    break;
                } else {
                    pageNow += 1;
                    Object(pageNow, list);
                    break;
                }
            default:
                return pageNow;
        }
    }

    return (
        <div className="pages-switch">
            <div className="arrow-left arrow " onClick={(e) => Click(e, "-")}>
                〈
            </div>
            <div className="pages">
                {pageNow}...{pagesData.num_pages}
            </div>
            <div className="arrow-right arrow" onClick={(e) => Click(e, "+")}>
                〉
            </div>
        </div>
    );
}
