import axios from 'axios';
import Cookies from 'js-cookie';
import { TOKEN } from '../utils/constants';
const request = axios.create({
   baseURL: 'https://ap-blog-backend.up.railway.app/api/v1/',
   timeout: 1000,
});

request.interceptors.request.use(
   config => {
      const token = Cookies.get(TOKEN);

      config.headers.Authorization = `Bearer ${token}`;

      return config;
   },
   error => {
      // console.log(error.response.data, 'data');
      return Promise.reject(error);
   }
);

request.interceptors.response.use(
   config => {
      return config;
   },
   error => {
      // console.log(error.response.data, 'data');
      return Promise.reject(error);
   }
);

export default request;
