/* ACTIONS */
import { SHOW_MODAL, HIDE_MODAL } from "../actions/action-types";
/* ------------------------------------------------------------- */ 

const initialState = {
    isModalOpen: false,
  };
/* ------------------------------------------------------------- */
  const modalReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_MODAL:
        return { ...state, isModalOpen: true };
      case HIDE_MODAL:
        return { ...state, isModalOpen: false };
      default:
        return state;
    }
  };
/* ------------------------------------------------------------- */

export default modalReducer;
/* ------------------------------------------------------------- */