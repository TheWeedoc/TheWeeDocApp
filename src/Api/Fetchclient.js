import { get, post, put, del } from "./Mainclient";

export const signup = async (data) => {
  const signup = await post("register/", data)
    .then((resp) => {
      return resp;
    })
    .catch((error) => {
      return error.response;
    });

  return signup;
};

export const getlogin = async (data) => {
  const login = await post("login/", data)
    .then((resp) => {
      return resp;
    })
    .catch((error) => {
      return error.response;
    });
  return login;
};

export const resetpassword = async (data) => {
  const login = await post("password-reset/", data)
    .then((resp) => {
      return resp.data;
    })
    .catch((error) => {
      return error.response;
    });

  return login;
};

export const resetUpdatePassword = async (data) => {
  console.log(data);
  const login = await post("password-reset-confirm/", data)
    .then((resp) => {
      return resp.response;
    })
    .catch((error) => {
      return error.response;
    });

  return login;
};

export const AddProduct = async (data) => {
  // const customHeaders = {
  //   "content-type":
  // }

  console.log("first API", data);
  const add = await post("products/create/", data)
    .then((resp) => {
      return resp;
    })
    .catch((error) => {
      return error.response;
    });
  return add;
};

// Get All products
export const GetProduct = async () => {
  try {
    const products = await get("products/");
    return products.data;
  } catch (err) {
    throw Error(err.response.data);
  }
};

// Get All Genres

export const GetGenres = async () => {
  try {
    const genres = await get("geners/");
    return genres.data;
  } catch (err) {
    throw Error(err.response.data);
  }
};

// Get search Film Results

export const GetSearchFilms = async (query, signal) => {
  try {
    let url = (query) => {
      if (query.genre === "") {
        return `products/?search=${query.searchKey}`;
      } else if (query.genre !== "" && query.searchKey !== "") {
        return `products/?genere=${query.genre}&search=${query.searchKey}`;
      }
    };

    let updatedUrl = url(query);
    // console.log(updatedUrl, query);
    const results = await get(updatedUrl, { signal });
    return results.data;
  } catch (err) {
    throw Error(err.response.data);
  }
};

// Get Search Users results

export const GetSearchUsers = async (searchKey, signal) => {
  try {
    const results = await get(`user/search/?search=${searchKey}`, { signal });
    return results.data;
  } catch (err) {
    throw Error(err.response.data);
  }
};
