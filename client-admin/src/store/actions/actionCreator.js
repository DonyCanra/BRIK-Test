import { 
  DASHBOARD_FETCH_SUCCESS, 
  MENUS_FETCH_SUCCESS, 
  CATEGORIES_FETCH_SUCCESS, 
  USER_FETCH_SUCCESSS, 
  USER_LOGIN_SUCCESSS, 
  ADMIN_REGISTER_SUCCESS, 
  CATEGORIES_POST_SUCCESS,
  CATEGORIES_DELETE_SUCCESS,
  MENUS_DELETE_SUCCESS,
  MENUS_POST_SUCCESS,
  CATEGORIES_DETAIL_SUCCESS,
  MENUS_DETAIL_SUCCESS,
  CATEGORIES_UPDATE_SUCCESS,
  MENUS_UPDATE_SUCCESS
} from "./actionTypes";

export const usersLoginSuccess = (data) => {
  return {
    type: USER_LOGIN_SUCCESSS,
    payload: data,
  };
};
export const adminRegisterSuccess = (data) => {
  return {
    type: ADMIN_REGISTER_SUCCESS,
    payload: data,
  };
};
export const dashboardFetchSuccess = (data) => {
  return {
    type: DASHBOARD_FETCH_SUCCESS,
    payload: data,
  };
};
export const menusFetchSuccess = (data) => {
  return {
    type: MENUS_FETCH_SUCCESS,
    payload: data,
  };
};
export const categoriesFetchSuccess = (data) => {
  return {
    type: CATEGORIES_FETCH_SUCCESS,
    payload: data,
  };
};
export const usersFetchSuccess = (data) => {
  return {
    type: USER_FETCH_SUCCESSS,
    payload: data,
  };
};
export const postCategorySuccess = (data) => {
  return {
    type: CATEGORIES_POST_SUCCESS,
    payload: data,
  };
};
export const deleteCategorySuccess = (data) => {
  return {
    type: CATEGORIES_DELETE_SUCCESS,
    payload: data,
  };
};
export const deleteMenuSuccess = (data) => {
  return {
    type: MENUS_DELETE_SUCCESS,
    payload: data,
  };
};
export const postMenuSuccess = (data) => {
  return {
    type: MENUS_POST_SUCCESS,
    payload: data,
  };
};
export const detailCategorySuccess = (data) => {
  return {
    type: CATEGORIES_DETAIL_SUCCESS,
    payload: data,
  };
};
export const detailMenuSuccess = (data) => {
  return {
    type: MENUS_DETAIL_SUCCESS,
    payload: data,
  };
};
export const updateCategoriesSuccess = (data) => {
  return {
    type: CATEGORIES_UPDATE_SUCCESS,
    payload: data,
  };
};
export const updateMenuSuccess = (data) => {
  return {
    type: MENUS_UPDATE_SUCCESS,
    payload: data,
  };
};

