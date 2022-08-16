import axios, { AxiosInstance } from 'axios';

const BACKAND_URL = 'https://10.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKAND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
