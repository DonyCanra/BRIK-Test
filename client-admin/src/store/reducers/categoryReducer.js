import { CATEGORIES_FETCH_SUCCESS } from "../actions/actionTypes";

const inisialState = { categories: [] };

function categoryReducer(state = inisialState, action) {
  switch (action.type) {
    case CATEGORIES_FETCH_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
}

export default categoryReducer;
