import axios from 'axios';

const request = axios.create({
   baseURL: 'https://ap-blog-backend.up.railway.app/api/v1/',
   timeout: 1000,
});

request.interceptors.response.use(
   config => {
      return config;
   },
   error => {
      console.log(error.response.data, 'data');
      return Promise.reject(error);
   }
);

export default request;
