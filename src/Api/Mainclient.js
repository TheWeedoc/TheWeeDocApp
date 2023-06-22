import axios from "axios";

  
  const  instance = axios.create({ 
      baseURL: "http://139.59.35.43/api/"
    })
  
 const getHeader=()=> {
    return {
      headers: {
        Authorization: `jwt ${JSON.parse(window.localStorage.getItem('user_data'))?.access_token}`
      }
    }
    
  }
 
//   if(JSON.parse(window.localStorage.getItem('user_data'))?.access_token){

//   const userData=JSON.parse(window.localStorage.getItem('user_data'))
// const {access_token,refresh_token} =JSON.parse(window.localStorage.getItem('user_data'))
// // check if the access token is expired or not 
   
//     instance.interceptors.request.use(
//       (config) => {
//         const token = access_token
//         if (token) {
//           // config.headers["x-access-token"] = token;
//         }
//         return config;
//       },
//       (error) => {
//         return Promise.reject(error);
//       }
//     );
// //response
//         instance.interceptors.response.use(
//           (res) => {
//             return res;
//           },
//           async (err) => {
//             const originalConfig = err.config;
//             if (err.response) {
//               // Access Token was expired
//               if (err.response.status === 401 && !originalConfig._retry) {
//                 originalConfig._retry = true;
//                 try {
//                   const rs = await refreshToken();
//                   const { access } = rs.data;
//                   window.localStorage.setItem("user_data", {...userData,access_token:access});
//                   instance.defaults.headers.common["x-access-token"] = access;
//                   return instance(originalConfig);
//                 } catch (_error) {
//                   if (_error.response && _error.response.data) {
//                     console.log('Expired Token');
//                     return Promise.reject(_error.response.data);
//                   }
//                   return Promise.reject(_error);
//                 }
//               }
//               if (err.response.status === 403 && err.response.data) {
//                 return Promise.reject(err.response.data);
//               }
//             }
//             return Promise.reject(err);
//           }
//         );

//         // refresh the access key 
//         function refreshToken() {
//           return instance.post("/users/token/refresh/", {
//             refresh: refresh_token,
//           });
//         }
//       }
     
 export const post=(url, data)=> {
    return instance.post(url, data)
 }
  export const get=(url)=> {
    return instance.get(url)
  }
 export const  del=(url, data)=> {
    return instance.delete(url)
  }
 export const put=(url, data) =>{
    return instance.put(url, data)
  }
 export const patch=(url, data)=> {
    return instance.patch(url, data)

  }


