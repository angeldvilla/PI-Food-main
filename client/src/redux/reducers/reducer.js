/* FUNCION PARA ESTRUCTURAR Y ORGANIZAR LOS REDUCERS */
import { combineReducers } from "redux";
/* ----------------- */

/*  REDUCERS */
import recipesReducer from "./recipesReducer";
import paginationReducer from "./paginationReducer";
/* ----------------- */

const rootReducer =  combineReducers({
    recipes: recipesReducer,
    pagination: paginationReducer,
});
/* ----------------- */
export default rootReducer;