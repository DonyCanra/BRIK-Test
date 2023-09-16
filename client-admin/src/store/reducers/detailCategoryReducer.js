import { CATEGORIES_DETAIL_SUCCESS } from "../actions/actionTypes";

const inisialState = { category: "" };

function categoryDetailReducer(state = inisialState, action) {
  switch (action.type) {
    case CATEGORIES_DETAIL_SUCCESS:
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
}

export default categoryDetailReducer;
