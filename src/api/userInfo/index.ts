/**
 * 用户管理接口
 */

import { get, post, put, del } from '../index';

// 注册
export const register = async (data: any) => {
  return await post('/register', data);
};

// 登录
export const login = async (data: any) => {
  return await post('/login', data);
};

// 获取用户信息
export const getUserInfo = async (userId: string) => {
  return await get(`/admin/getUserInfo/${userId}`, {});
}

// 重置密码
export const resetPassword = async (userId: string, data: any) => {
  return await post(`/admin/reset-password/${userId}`, data);
}

// 获取用户列表
export const getUserList = async (params: any) => {
  return await get('/admin/getUserList', params);
}

// 删除用户
export const deleteUser = async (userId: string) => {
  return await del(`/admin/deleteUser/${userId}`, {});
}

// 更新用户信息
export const updateUserInfo = async (userId: string, data: any) => {
  return await put(`/admin/updateUserInfo${userId}`, data);
}

// 用户登出
export const logout = async () => {
  return await post('/logout', {});
}