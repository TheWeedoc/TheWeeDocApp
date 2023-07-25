import { get,post,put,del } from "./Mainclient";


  export const signup = async (data) => {
    const signup = await post("register/",data)
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        return error.response;
      });
    return signup;
  };

  export const getlogin = async (data) => {
    const login = await post("login/",data)
      .then((resp) => {
        return resp;
      })
      .catch((error) => {
        return error.response;
      });
    return login;
  };


  export const resetpassword = async (data) => {
    const login = await post("password-reset/",data)
      .then((resp) => {
        return resp.data;
      })
     
    return login;
  };



  export const AddProduct = async(data) => {
     const add = await post("/products/create/",data)
     .then((resp)=>{
        return resp.data
     }).catch((error) => {
      return error.response;
    });
    return add
  }