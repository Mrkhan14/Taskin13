import axios from 'axios';
import Cookies from 'js-cookie';
import { ENDPOINT, TOKEN } from '../utils/constants';
import { message } from 'antd';

const request = axios.create({
   baseURL: ENDPOINT,
   timeout: 10000,
});

request.interceptors.request.use(
   config => {
      const token = Cookies.get(TOKEN);

      if (token) {
         config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
   },
   error => {
      return Promise.reject(error);
   }
);

request.interceptors.response.use(
   response => {
      return response;
   },
   error => {
      if (error.response && error.response.data) {
         message.error(error.response.data)
      }
      return Promise.reject(error);
   }
);

export default request;