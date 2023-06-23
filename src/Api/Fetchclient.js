import { get,post,put,del } from "./Mainclient";

export const getMycourse = async () => {
    const MyLearning = await get("enrolled/course/")
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        return error.response;
      });
    return MyLearning;
  };

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
        return resp.data;
      })
      .catch((error) => {
        return error.response;
      });
    return login;
  };