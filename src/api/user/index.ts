/**
 * 用户管理接口
 */

import { get, post, put, del } from '../index';

// 注册
export const register = (data: any) => {
  return post('/register', data);
};

// 登录
export const login = (data: any) => {
  return post('/login', data);
};

// 获取用户信息
export const getUserInfo = (userId: string) => {
  return get(`/getUserInfo/${userId}`, {});
}

// 重置密码
export const resetPassword = (userId: string, data: any) => {
  return post(`/reset-password/${userId}`, data);
}

// 获取用户列表
export const getUserList = (params: any) => {
  return get('/getUserList', params);
}

// 删除用户
export const deleteUser = (userId: string) => {
  return del(`/deleteUser/${userId}`, {});
}

// 更新用户信息
export const updateUserInfo = (userId: string, data: any) => {
  return put(`/updateUserInfo${userId}`, data);
}

// 用户登出
export const logout = () => {
  return post('/logout', {});
}