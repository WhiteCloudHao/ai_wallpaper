import axios, {AxiosRequestConfig} from 'axios';
import configEnv from 'react-native-config';

const intance = axios.create({
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
  });
  intance.interceptors.request.use(
    async request => {
        request.headers.setContentType("application/json");
      return request;
    },
  );

  intance.interceptors.request.use(request => {
    console.log('Starting Request', JSON.stringify(request, null, 2))
    return request
  })
  

  export const API_CORE = {
    post: function(url, body, config= {}) {
         return intance.post(url, body, {
            ...config,
            // baseURL: 'http://192.168.98.186:7860',
          });
    },
    get: function(url, config= {}) {
        return intance.get(url, {
           ...config,
           // baseURL: 'http://192.168.98.186:7860',
         });
   }
  }