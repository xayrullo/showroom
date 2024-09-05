import axios from "axios";

import JwtService from "./jwtService";

/**
 * @description service to call HTTP request via Axios
 */

const $axios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

$axios.interceptors.request.use(
  (config) => {
    if (JwtService.getToken() && JwtService.getToken() !== "undefined") {
      config.headers.setAuthorization("Bearer " + JwtService.getToken());
    }
    return config;
  },
  (error) => Promise.reject(error)
);

$axios.interceptors.response.use(
  (response) => {
    return Promise.resolve(response).then((res) => res);
  },
  (error) => {
    let errorType;
    console.log(error);
    console.log(error.response);
    if (error.response && error.response.status) {
      switch (error.response.status) {
        case 400:
          errorType = "Bad Request Error400";
          break;
        case 401:
          errorType = "Unauthorized Error401";
          // authStore.purgeAuth();
          break;
        case 403:
          errorType = "Forbidden Error403";
          break;
        case 404:
          errorType = "Not Found Error404";
          // authStore.purgeAuth();
          break;
        case 408:
          errorType = "Request Timeout Error408";
          break;
        case 500:
          errorType = "Internal Server Error500";
          break;
        case 502:
          errorType = "Bad Gateway Error502";
          break;
        case 504:
          errorType = "Gateway Timeout Error504";
          break;
        case 505:
          errorType = "HTTP Version Not Supported Error505";
          break;
        case 507:
          errorType = "Insufficient Storage Error507";
          break;
        case 508:
          errorType = "Loop Detected Error508";
          break;
        default:
          errorType = `Error${error.response.status}`;
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default $axios;
