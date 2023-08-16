import { get, post, put, del } from "./Mainclient";

const token = localStorage.getItem("token");
console.log("Token value", token);

const config = {
  headers: {
    Authorization: `Token 06d6b0947b4c1c81f09507da17ff60eb97d19fea`,
    "Content-Type": "multipart/form-data",
  },
};

export const signup = async (data) => {
  const signup = await post("register/", data)
    .then((resp) => {
      return resp.data;
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
  const login = await post("password-reset/", data).then((resp) => {
    return resp.data;
  });

  return login;
};

export const AddProduct = async (data) => {
  const config = {
    headers: {
      Authorization: `04b0e7a7a26ee29285360df0e148110148c3ec32`,
      "Content-Type": "multipart/form-data",
    },
  };
  const add = await post("/products/create/", data, config)
    .then((resp) => {
      return resp.data;
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
    throw Error(err.response.data.message);
  }
};
