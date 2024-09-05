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
  (error) => Promise.reject(error),
);

$axios.interceptors.response.use(
  (response) => {
    return Promise.resolve(response).then((res) => res);
  },
  (error) => {
    if (error.response && error.response.status) {
      switch (error.response.status) {
        case 400:
          break;
        case 401:
          // authStore.purgeAuth();
          break;
        case 403:
          break;
        case 404:
          // authStore.purgeAuth();
          break;
        case 408:
          break;
        case 500:
          break;
        case 502:
          break;
        case 504:
          break;
        case 505:
          break;
        case 507:
          break;
        case 508:
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  },
);

export default $axios;
