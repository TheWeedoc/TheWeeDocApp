import { get } from "./Mainclient";

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