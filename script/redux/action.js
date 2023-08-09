
// ACTION GENERATOR
//          |
//         \_/

export function filmListDispatch(data) {
    return {
        type: FILM_LIST,
        data
    };
}

export function filterListDispatch(data) {
    return {
        type: FILTER_LIST,
        data
    };
}

export function pageListDispatch(data) {
    return {
        type: NUM_PAGES,
        payload: data
    };
}

export function filterUsedDispatch(data) {
    return {
        type: FILTER_USED,
        payload: data
    }
}

export function LoginDispatch(data) {
    return {
        type: LOGIN,
        payload: data
    }
}

export function SearchListDispatch(data) {
    return {
        type: SEARCH_LIST,
        payload: data
    }
}

export const NUM_PAGES = "NUM_PAGES";
export const FILM_LIST = "FILM_LIST";
export const FILTER_LIST = "FILTER_LIST";
export const FILTER_USED = "FILTER_USED"; 
export const LOGIN = "LOGIN";
export const SEARCH_LIST = "SEARCH_LIST"; 
