/* ACTIONS */
import { PAGINATION } from "../actions/action-types";
/* ------------------------------------------------------------- */ 

const initialState = {
    pageActual: 1,
    recipesPerPage: 3,
}
/* ------------------------------------------------------------- */ 


const paginationReducer = (state = initialState, action) => {
    
    switch(action.type){
        case PAGINATION: 
        return{
          ...state,
          pageActual: action.payload
        }
        
        default: 
        return {
            ...state
        };
    };
};
/* ------------------------------------------------------------- */ 

export default paginationReducer;
/* ------------------------------------------------------------- */ 