import axios from "axios";

const instance = axios.create({
  baseURL: "https://theweedoc.info/api/",
});

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function setAuthorizationHeader() {
  const token = getCookie("token");

  if (token) {
    instance.defaults.headers.common["Authorization"] = `Token ${token}`;
  } else {
    delete instance.defaults.headers.common["Authorization"];
  }
}

setAuthorizationHeader();

// instance.defaults.headers.common["Authorization"] = cookie
//   ? `Token ${cookie}`
//   : "";

// export const post = (url, data) => {
//   return instance.post(url, data);
// };

export const post = (url, data, customHeaders = {}) => {
  // Merge custom headers with default headers
  const headers = { ...instance.defaults.headers.common, ...customHeaders };

  return instance.post(url, data, { headers });
};

export const get = (url) => {
  return instance.get(url);
};
export const del = (url, data) => {
  return instance.delete(url);
};
export const put = (url, data) => {
  return instance.put(url, data);
};
export const patch = (url, data) => {
  return instance.patch(url, data);
};
