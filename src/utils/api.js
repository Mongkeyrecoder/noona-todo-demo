import axios from "axios";

const api = axios.create({
  baseURL: 'https://cute-empanada-b3588b.netlify.app/api',
  headers: {
    "Content-Type": "application/json",
  },
});
/**
 * console.log all requests and responses ssss
 */
api.interceptors.request.use(
  (request) => {
    console.log("Starting Request", request);
    return request;
  },
  function (error) {
    console.log("REQUEST ERROR", error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    return response;
  },
  function (error) {
    error = error.response.data;
    console.log("RESPONSE ERROR", error);
    return Promise.reject(error);
  }
);

export default api;
