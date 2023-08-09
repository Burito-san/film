import { filmListDispatch, pageListDispatch, filterListDispatch, filterUsedDispatch, LoginDispatch, SearchListDispatch, SEARCH_LIST, } from "./action";
import { data } from "../src/data/fullfilmList";
import { filterList } from "../src/data/filterList";
import { NUM_PAGES, FILM_LIST, FILTER_LIST, FILTER_USED, LOGIN, } from "./action";

// DEFAULT STATES

const defaultPageList = {
    page_now: 0,
    num_element: 12,
    num_pages: Math.ceil(data.length / 12),
    list: data,
};

export const defaultFilterUsed = {
    initList: data,
    currentList: data
        .sort((a, b) => {
            return b.popularity - a.popularity;
        })
        .filter((item) => item.release_date.slice(0, 4) === "2020"),

    sort_by: "популярные по убыванию",
    release_date: "2020",
    genres: [],
};

export const defaultLogin = {
    login: localStorage.getItem("login"),
    password: localStorage.getItem("password"),
    favouriteList: localStorage.getItem('favouriteList'),
    watchLaterList: localStorage.getItem('watch_later'),
}

const defaultSearchList = {
    genre: 28,
    rateing: 'высокая оценка',
    fame: 'популярный',
    
    movie_num: 0,
    item:{},

    currentList: [],
    initList: data,
}

// REDUCERS

export const filmListReducer = (state = data, action = filmListDispatch) => {
    switch (action.type) {
        case FILM_LIST:
            return action.data;
        default:
            return state;
    }
};

export const filterListReducer = (
    state = filterList,
    action = filterListDispatch
) => {
    switch (action.type) {
        case FILTER_LIST:
            return action.data;
        default:
            return state;
    }
};

export const pageListReducer = (
    state = defaultPageList,
    action = pageListDispatch
) => {
    switch (action.type) {
        case NUM_PAGES:
            return {
                page_now: action.payload.page_now,
                num_element: action.payload.num_element,
                num_pages: Math.ceil(data.length / 12),
                list: action.payload.list,
            };
        default:
            return state;
    }
};

export const filterUsedReducer = (
    state = defaultFilterUsed,
    action = filterUsedDispatch
) => {
    switch (action.type) {
        case FILTER_USED:
            return {
                initList: data,
                currentList: action.payload.currentList,

                sort_by: action.payload.sort_by,
                release_date: action.payload.release_date,
                genres: action.payload.genres,
            };
        default:
            return state;
    }
};

export const loginReducer = (state = defaultLogin, action = LoginDispatch) => {
    switch (action.type) {
        case LOGIN:
            return {
                login: action.payload.login,
                password: action.payload.password,
                favouriteList: action.payload.favuoriteList,
                watchLaterList: action.payload.watchLaterList,

            };
            default:
                return state;
    }
};

export const searchListReducer = (state = defaultSearchList, action = SearchListDispatch) => {
    switch (action.type) {
        case SEARCH_LIST:
            // fame -  известность
            return {
                genre: action.payload.genre,
                rating: action.payload.rating,
                fame: action.payload.fame,

                movie_num: action.payload.movie_num,
                item: action.payload.item,

                currentList: action.payload.currentList,
                initList: data
            }

        default:
           return state
    }
}
