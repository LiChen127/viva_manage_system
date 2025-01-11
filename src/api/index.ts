import axios from 'axios';

// baseUrl
const baseUrl = 'http://localhost:3000/api/v1/admin';

// 请求拦截器
axios.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.reject(error);
});

// RESTFUL API
export const get = (url: string, params: any) => {
  return axios.get(url, { params });
};

export const post = (url: string, data: any) => {
  return axios.post(url, data);
};

export const put = (url: string, data: any) => {
  return axios.put(url, data);
};

export const del = (url: string, data: any) => {
  return axios.delete(url, data);
};

export default axios;
