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

  export const signup = async () => {
    const MyLearning = await get("register/")
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        return error.response;
      });
    return MyLearning;
  };
