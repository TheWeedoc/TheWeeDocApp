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

// Get Product Details

export const GetProductDetails = async (id) => {
  try {
    const products = await get(`products/${id}/`);
    return products.data;
  } catch (err) {
    throw Error(err.response.data);
  }
};

// Get User Details for the Product details

export const GetProductCustomer = async (name, id) => {
  try {
    const customerDetails = await get(`user/search/?search=${name}`);

    const savedFilms = await get(`movies/list/saved/`);

    if (customerDetails?.data.count > 0) {
      const result = customerDetails?.data?.results.find(
        (user) => user.username === name
      );
      result.isSaved = false;

      if (savedFilms.data?.length > 0) {
        const isSaved = savedFilms.data?.some((obj) => obj?.movie?.id === id);
        result.isSaved = isSaved;
      }

      return result;
    }
  } catch (err) {
    throw Error(err.response.data);
  }
};

// Save and Unsave Films

export const SaveFilm = async (id) => {
  try {
    const result = await post(`movies/save/${id}/`);
    return result.data;
  } catch (err) {
    throw Error(err.response.data);
  }
};

// Like and unLike films

export const LikeFilm = async (id) => {
  try {
    const result = await post(`product/${id}/like/`);
    return result.data;
  } catch (err) {
    throw Error(err.response.data);
  }
};

// DisLike and Remove DisLike Films

export const DisikeFilm = async (id) => {
  try {
    const result = await post(`product/${id}/dislike/`);
    return result.data;
  } catch (err) {
    throw Error(err.response.data);
  }
};

// Add Reviews

export const AddReview = async (id, review) => {
  try {
    const result = await post(`reviews/add/${id}/`, { review_content: review });
    return result;
  } catch (err) {
    throw Error(err.response.data);
  }
};
