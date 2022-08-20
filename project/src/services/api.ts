import axios, { AxiosInstance, AxiosRequestConfig,AxiosResponse, AxiosError } from 'axios';
import { getToken } from './token';
import StatusCodes from 'http-status-codes';
import {toast} from 'react-toastify';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const BACKAND_URL = 'https://10.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKAND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();
    if (token) {
      config.headers['X-Token'] = token;
    }
    return config;
  });
  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response && shouldDisplayError(error.response)) {
        toast.warn(error.response.data.error);
      }

      throw error;
    }
  );
  return api;
};
