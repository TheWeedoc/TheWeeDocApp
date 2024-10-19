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

export const sendOTP = async (email) => {
  const sendResult = await post("otp/send/", email)
    .then((resp) => {
      return resp;
    })
    .catch((error) => {
      return error.response;
    });

  return sendResult;
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

  const add = await post("products/create/upload/", data)
    .then((resp) => {
      return resp;
    })
    .catch((error) => {
      return error.response;
    });
  return add;
};

// Get All products
export const GetProduct = async (page = 1, page_size = 20) => {
  try {
    // Pass the page and page_size as query parameters to the API
    const products = await get(`products/?page=${page}&page_size=${page_size}`);
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

// Get Search Users results

export const GetMyProfileSearch = async (searchKey, signal) => {
  try {
    const results = await get(`reviews/given/?search=${searchKey}`, { signal });
    // if (Array.isArray(results.data))
    //   return results.data.length > 0 ? results.data[0] : null;
    // else if (typeof results === "object" && results !== null) {
    //   return results.data;
    // } else {
    //   return null;
    // }
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

export const GetProductCustomer = async (name) => {
  try {
    const customerDetails = await get(`user/search/?search=${name}`);
    console.log(customerDetails, "cust");

    if (customerDetails?.data.count > 1) {
      const result = customerDetails?.data?.results.find(
        (user) => user.username === name
      );
      // console.log(result, "Result Cust");
      return result;
    }

    if (customerDetails?.data.count === 1) {
      const result = customerDetails?.data?.results[0];
      return result;
    }
    return "";
  } catch (err) {
    throw Error(err.response.data);
  }
};

// Get User Saved Films

export const GetProductCustomerSaved = async (id) => {
  try {
    const savedFilms = await get(`movies/list/saved/`);

    const result = { isSaved: false };

    if (savedFilms.data?.length > 0) {
      const isSaved = savedFilms.data?.some((obj) => obj?.movie?.id === id);
      result.isSaved = isSaved;
    }

    return result;
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

// Follow and Unfollow User

export const FollowUser = async (id) => {
  try {
    console.log(id);
    const result = await post(`follow/`, { username: id });
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

// Add Cast

export const AddCast = async (id, data) => {
  try {
    const result = await post(`products/cast/add/${id}/`, data);
    return result;
  } catch (err) {
    throw Error(err.response.data);
  }
};

// get User

export const GetUser = async () => {
  try {
    const result = await get(`user/profile/`);
    return result?.data;
  } catch (err) {
    throw Error(err.response.data);
  }
};

// Get All Reviews Given

export const GetAllReviews = async () => {
  try {
    const result = await get(`reviews/given/`);
    return result.data;
  } catch (err) {
    throw Error(err.response.data);
  }
};

// Get Movie Review List

export const GetMovieReviews = async (id) => {
  try {
    const result = await get(`reviews/${id}/`);
    return result.data;
  } catch (err) {
    throw Error(err.response.data);
  }
};

// Get All Saved Films

export const GetAllSavedFilms = async () => {
  try {
    const result = await get(`movies/list/saved/`);
    return result.data;
  } catch (err) {
    throw Error(err.response.data);
  }
};

// User Update

export const UpdateUser = async (data) => {
  try {
    const result = await put(`user/update/`, data);
    return result;
  } catch (err) {
    console.log(" errrrrrrrrrr", err);
    throw Error(err.response.data);
  }
};

// Other User Profile Get
export const OtherUserProfile = async (id) => {
  try {
    const result = await get(`user/${id}/`);
    return result.data;
  } catch (err) {
    throw Error(err.response.data);
  }
};

// Uploads page

// Approved
export const UploadsAprroved = async () => {
  try {
    const result = await get(`user/products/?search=approved`);
    return result.data;
  } catch (err) {
    throw Error(err.response.data);
  }
};

// Pending
export const UploadsVerification = async () => {
  try {
    const result = await get(`user/products/?search=pending`);
    return result.data;
  } catch (err) {
    throw Error(err.response.data);
  }
};

// Rejected
export const UploadsRejected = async () => {
  try {
    const result = await get(`user/products/?search=rejected`);
    return result.data;
  } catch (err) {
    throw Error(err.response.data);
  }
};

// Uploads Page End

// OTP Verify
export const VerifyOTP = async (otp) => {
  try {
    const result = await get(`otp/verify/?otp=${otp}`);
    return result.data;
  } catch (err) {
    throw Error(err.response.data);
  }
};


// api/notifications/ 

export const Notifications = async () => {
  try {
    const result = await get(`notifications/`);
    return result.data;
  } catch (err) {
    throw Error(err.response.data);
  }
};


export const GetLanuages = async()=>{
  try {
      const lanuage = await get('all/languages/list/')
      return lanuage?.data
  } catch (error) {
    throw Error(error.response.data);
    
  }
}

export const preferedLanguages = async (data) => {
  const lang = await post("/select/preffered/languages/", data)
    .then((resp) => {
      return resp.data;
    })
    .catch((error) => {
      return error.response;
    });

  return lang;
};

export const AddViewsCount = async (id) => {
  try {
    const result = await post(`/fetch/update/views-count/`, { product_id: id, count:1});
    return result;
  } catch (err) {
    throw Error(err.response.data);
  }
};


// update notification

export const UpdateNotification = async (data) => {
  try {
    const result = await put(`/update/notification/status/`, data);
    return result;
  } catch (err) {
    console.log(" err", err);
    throw Error(err.response.data);
  }
};


// banner listing Api

export const BannerListing = async() =>{
    try {
      const response = await get('/products/banners/')
      return response;
  
    } catch (err) {
      console.log(err,'err');
      throw Error(err.response.data);
    }
  }
   