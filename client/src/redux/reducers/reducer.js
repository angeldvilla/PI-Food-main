/* FUNCION PARA ESTRUCTURAR Y ORGANIZAR LOS REDUCERS */
import { combineReducers } from "redux";
/* ----------------- */

/*  REDUCERS */
import recipesReducer from "./recipesReducer";
import paginationReducer from "./paginationReducer";
import modalReducer from "./modalReducer";
/* ----------------- */

const rootReducer =  combineReducers({
    recipes: recipesReducer,
    pagination: paginationReducer,
    modal: modalReducer,
});
/* ----------------- */
export default rootReducer;