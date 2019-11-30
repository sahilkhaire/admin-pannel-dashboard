import querystring from "query-string";
import { http } from "./axiosInstance";

const API_ENDPOINT = 'http://35.200.135.117';

function request(props) {
  const { url, init, query, option } = props;
  let strQuery = query ? `?${querystring.stringify(query)}` : "",
    fetchUrl = `${API_ENDPOINT}/${url}${strQuery}`;
  if (init.method === "POST") {
    return http.post(fetchUrl, option);
  } else if (init.method === "PATCH") {
    return http.patch(fetchUrl, option);
  } else if (init.method === "DELETE") {
    return http.delete(fetchUrl, option);
  } else if (init.method === "PUT") {
    return http.put(fetchUrl, option);
  }
  return http.get(fetchUrl, { params: option });
}

const api = {
  get: (url, option) =>
    request({
      url,
      init: {
        method: "GET"
      },
      option
    }),

  delete: (url, option) =>
    request({
      url,
      init: {
        method: "DELETE"
      },
      option
    }),

  post: (url, option) =>
    request({
      url,
      init: {
        method: "POST"
      },
      option
    }),
  put: (url, option) =>
    request({
      url,
      init: {
        method: "PUT"
      },
      option
    }),
  patch: (url, option) =>
    request({
      url,
      init: {
        method: "PATCH"
      },
      option
    })
};

export default api;
