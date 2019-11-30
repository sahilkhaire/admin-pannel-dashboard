/**
 * src/api/http.js
 */
import axios from "axios";
import qs from "qs";

const BASE_URL = 'http://35.200.135.117';

/**
 *
 * parse error response
 */

function parseError(messages) {
  // error
  if (messages) {
    if (messages instanceof Array) {
      return Promise.reject({ messages });
    }
    return Promise.reject({ messages: [messages] });
  }
  return Promise.reject({ messages: ["got errors"] });
}

/**
 * parse response
 */
function parseBody(response) {
  //  if (response.status === 200 && response.data.status.code === 200) { // - if use custom status code
  if (response.status === 200) {
    return response;
  } else if (response.status === 401) {
    getNewAccessToken();
  } else {
    return this.parseError(response.data.messages);
  }
}

/**
 * axios instance
 */
const instance = axios.create({
  baseURL: `${BASE_URL}`,
  paramsSerializer(params) {
    return qs.stringify(params, { indices: false });
  }
});

// request header
instance.interceptors.request.use(
  config => {
    config.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    };
    return config;
  },
  error => Promise.reject(error)
);


// response parse
instance.interceptors.response.use(
  response => parseBody(response),
  error => {
    console.log("Error status", error.response);
    // return Promise.reject(error)
    if (error.response) {
      if (error.response.status == 401) {
        // getNewAccessToken();
        localStorage.removeItem('token');
        localStorage.removeItem('refreshtkn');
        window.location.reload();
      }
      return parseError(error.response.data);
    }
    return Promise.reject(error);
  }
);

function getNewAccessToken() {
  instance
    .post(`${BASE_URL}/todo-app-backend/login/`, {
      refreshToken: localStorage.getItem('refreshtkn')
    }).then((res) => {
      if (res.data.hasOwnProperty('status') && res.data.status) {
        localStorage.setItem('token', res.data.access_token);
        localStorage.setItem('refreshtkn', res.data.refresh_token);
        window.location.reload();
      } else {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshtkn');
        window.location.reload();
      }
    }).catch((err) => {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshtkn');
      window.location.reload();
    });
}


export const http = instance;
