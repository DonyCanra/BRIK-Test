import {
  categoriesFetchSuccess,
  menusFetchSuccess,
  dashboardFetchSuccess,
  usersFetchSuccess,
  adminRegisterSuccess,
  postCategorySuccess,
  deleteCategorySuccess,
  usersLoginSuccess,
  deleteMenuSuccess,
  postMenuSuccess,
  detailCategorySuccess,
  detailMenuSuccess,
  updateCategoriesSuccess,
  updateMenuSuccess,
} from "./actionCreator";

const BASE_URL = "https://challenge-pt1-ph3.donycanra.online"

export function fetchDashbaord() {
  return (dispatch) => {
    fetch(`${BASE_URL}/admin/dashboard`, {
      method: "get",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw res.text();
        }

        return res.json();
      })
      .then((data) => dispatch(dashboardFetchSuccess(data)))
      .catch((err) => console.log(err));
  };
}
export function fetchCategory() {
  return (dispatch) => {
    fetch(`${BASE_URL}/admin/categories`, {
      method: "get",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw res.text();
        }

        return res.json();
      })
      .then((data) => dispatch(categoriesFetchSuccess(data)))
      .catch((err) => console.log(err));
  };
}
export function fetchMenu() {
  return (dispatch) => {
    fetch(`${BASE_URL}/admin/items`, {
      method: "get",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw res.text();
        }

        return res.json();
      })
      .then((data) => dispatch(menusFetchSuccess(data)))
      .catch((err) => console.log(err));
  };
}
export function fetchUser() {
  return (dispatch) => {
    fetch(`${BASE_URL}/admin/profile`, {
      method: "get",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw res.text();
        }

        return res.json();
      })
      .then((data) => dispatch(usersFetchSuccess(data)))
      .catch((err) => console.log(err));
  };
}
export function login(input) {
  return (dispatch) => {
    return fetch(`${BASE_URL}/auth/login`, {
      method: "post",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw res.text();
        }

        return res.json();
      })
      .then((data) => {
        localStorage.access_token = data.access_token;
        const Toast = Swal.mixin({
          toast: true,
          position: "top-right",
          iconColor: "white",
          customClass: {
            popup: "colored-toast",
          },
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "success",
          title: "Login Success",
        });
        return dispatch(usersLoginSuccess(data));
        
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Wrong Guys",
          text: `Login Failed`,
        });
        throw err;
      });
  };
}
export function registerAdmin(input) {
  return (dispatch) => {
    return fetch(`${BASE_URL}/admin/register`, {
      method: "post",
      headers: {
        access_token: localStorage.access_token,
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw res.text();
        }

        return res.json();
      })
      .then((data) => {
        dispatch(fetchDashbaord())
        const Toast = Swal.mixin({
          toast: true,
          position: "top-right",
          iconColor: "white",
          customClass: {
            popup: "colored-toast",
          },
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "success",
          title: "Register Admin Success",
        });
        return dispatch(adminRegisterSuccess(data));
      })
      .catch((err) => {
        console.log(err)
        Swal.fire({
          icon: "error",
          title: "Wrong Guys",
          text: `new admin failed to add`,
        });
        throw err
      });
  };
}
export function postCategory(input) {
  return (dispatch) => {
    fetch(`${BASE_URL}/admin/categories`, {
      method: "post",
      headers: {
        access_token: localStorage.access_token,
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw res.text();
        }

        return res.json();
      })
      .then((data) => {
        dispatch(fetchCategory())
        const Toast = Swal.mixin({
          toast: true,
          position: "top-right",
          iconColor: "white",
          customClass: {
            popup: "colored-toast",
          },
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "success",
          title: "New Category has been created",
        });
       return dispatch(postCategorySuccess(data))
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Wrong Guys",
          text: `new category failed to add`,
        });
        throw err;
      });
  };
}
export function postMenu(input) {
  return (dispatch) => {
   return fetch(`${BASE_URL}/admin/items`, {
      method: "post",
      headers: {
        access_token: localStorage.access_token,
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw res.text();
        }

        return res.json();
      })
      .then((data) => {
        dispatch(fetchMenu())
        const Toast = Swal.mixin({
          toast: true,
          position: "top-right",
          iconColor: "white",
          customClass: {
            popup: "colored-toast",
          },
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "success",
          title: "New Menu has been created",
        });
       return dispatch(postMenuSuccess(data))
      })
      .catch((err) => {
        console.log(err)
        Swal.fire({
          icon: "error",
          title: "Wrong Guys",
          text: `new item failed to add`,
        });
      });
  };
}
export function deleteCategory(id) {
  return (dispatch) => {
    return fetch(`${BASE_URL}/admin/categories/${id}`, {
      method: "delete",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw res.text();
        }

        return res.json();
      })
      .then((data) => {
        dispatch(fetchCategory());
        const Toast = Swal.mixin({
          toast: true,
          position: "top-right",
          iconColor: "white",
          customClass: {
            popup: "colored-toast",
          },
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "success",
          title: "Delete Category Success",
        });
        return dispatch(deleteCategorySuccess(data));
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };
}
export function deleteMenu(id) {
  return (dispatch) => {
    return fetch(`${BASE_URL}/admin/items/${id}`, {
      method: "delete",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw res.text();
        }

        return res.json();
      })
      .then((data) => {
        dispatch(fetchMenu());
        const Toast = Swal.mixin({
          toast: true,
          position: "top-right",
          iconColor: "white",
          customClass: {
            popup: "colored-toast",
          },
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "success",
          title: "Delete Menu Success",
        });
        return dispatch(deleteMenuSuccess(data));
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };
}

export const detailCategory = (id) => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/admin/categories/${id}`, {
      method: "get",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw res.text();
        }

        return res.json();
      })
      .then((data) => {
        dispatch(detailCategorySuccess(data));
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };
};
export const detailMenu = (id) => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/admin/items/${id}`, {
      method: "get",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw res.text();
        }

        return res.json();
      })
      .then((data) => {
        dispatch(detailMenuSuccess(data));
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };
};

export function updateCategory(data, id) {
  return (dispatch) => {
    return fetch(`${BASE_URL}/admin/categories/${id}`, {
      method: "put",
      headers: {
        access_token: localStorage.access_token,
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw res.text();
        }

        return res.json();
      })
      .then((data) => {
        dispatch(fetchCategory());
        const Toast = Swal.mixin({
          toast: true,
          position: "top-right",
          iconColor: "white",
          customClass: {
            popup: "colored-toast",
          },
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "success",
          title: "Category has been updated",
        });
        dispatch(fetchCategory())
        return dispatch(updateCategoriesSuccess(data));
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Wrong Guys",
          text: `category failed to update`,
        });
        throw err;
      });
  };
}

export function updateMenu(data, id) {
  return (dispatch) => {
    return fetch(`${BASE_URL}/admin/items/${id}`, {
      method: "put",
      headers: {
        access_token: localStorage.access_token,
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw res.text();
        }

        return res.json();
      })
      .then((data) => {
        dispatch(fetchMenu());
        const Toast = Swal.mixin({
          toast: true,
          position: "top-right",
          iconColor: "white",
          customClass: {
            popup: "colored-toast",
          },
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "success",
          title: "Item has been updated",
        });
        dispatch(fetchMenu())
        return dispatch(updateMenuSuccess(data));
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Wrong Guys",
          text: `product failed to update`,
        });
        throw err;
      });
  };
}
