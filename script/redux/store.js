import { filmListReducer, pageListReducer, filterListReducer, filterUsedReducer, loginReducer, searchListReducer } from "./reduce";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

const rootState = combineReducers({
    fullFilm:filmListReducer,
    pagesList: pageListReducer,
    filterList: filterListReducer,
    filterUsed: filterUsedReducer,
    loginReducer,
    searchList: searchListReducer,

})

const store = createStore(rootState, composeWithDevTools());

export { store };
