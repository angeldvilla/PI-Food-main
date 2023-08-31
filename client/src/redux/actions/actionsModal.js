/* ACTIONS */
import { SHOW_MODAL, HIDE_MODAL } from "./action-types";
/* ------------------------------------------------------------- */ 

export const showModal = () => {
    return async (dispatch) => {
        dispatch({ 
            type: SHOW_MODAL
        });
    };
};

export const hideModal = () => {
    return async (dispatch) => {
        dispatch({ 
            type: HIDE_MODAL
        });
    };
};
/* ------------------------------------------------------------- */ 