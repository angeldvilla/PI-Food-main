import { PAGINATION } from "./action-types";

export const pagination = (pageNumber) => {
    return async (dispatch) => {
        dispatch({ 
            type: PAGINATION,
            payload: pageNumber
        });
    };
}