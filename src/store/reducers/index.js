import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import topTenReducer from "./topTenReducer";

export default combineReducers({
    categories: categoriesReducer,
    topTen: topTenReducer,
});
