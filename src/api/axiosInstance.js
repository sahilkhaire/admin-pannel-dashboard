/**
 * src/api/http.js
 */
import axios from "axios";
import qs from "qs";

const BASE_URL = process.env.URL || 'https://bb8a9469.ngrok.io';

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
  if (response.status === 200) {
    return response;
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
    return Promise.reject(error);
  }
);



export const http = instance;
