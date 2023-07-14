import { combineReducers } from "redux";
import recipesReducer from "./recipesReducer";
import paginationReducer from "./paginationReducer";

const rootReducer =  combineReducers({
    recipes: recipesReducer,
    pagination: paginationReducer,
})


export default rootReducer;