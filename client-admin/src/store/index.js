import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import categoryReducer from "./reducers/categoryReducer";
import menuReducer from "./reducers/menuReducer";
import userReducer from "./reducers/userReducer";
import dashboardReducer from "./reducers/dasboardReducer";
import detailCategoryReducer from "./reducers/detailCategoryReducer"
import detailMenuReducer from "./reducers/detailMenuReducer"

const rootReducer = combineReducers({
  menus: menuReducer,
  categories: categoryReducer,
  users: userReducer,
  dashboard: dashboardReducer,
  category: detailCategoryReducer,
  menu: detailMenuReducer
});

// middleware logger
const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

let store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
