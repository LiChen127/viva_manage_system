import axios from 'axios';

// baseUrl
const baseUrl = 'http://localhost:3000/api/v1';

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
export const get = async (url: string, params: any) => {
  const res = await axios.get(url, { params });
  return res;
};

export const post = async (url: string, data: any) => {
  return await axios.post(url, data);
};

export const put = async (url: string, data: any) => {
  return await axios.put(url, data);
};

export const del = async (url: string, data: any) => {
  return await axios.delete(url, data);
};

export default axios;
