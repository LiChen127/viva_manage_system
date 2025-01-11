import { get, post, put } from '../index';

// 获取用户信息
export const getOneUserProfile = (userId: string) => {
  return get(`/getOneUserProfile/${userId}`, {});
}

// 获取用户列表
export const getAllUserProfileList = (userId: string) => {
  return get(`/getAllUserProfileList/${userId}`, {});
}

// 禁用用户
export const banUser = (data: any) => {
  return post('/banUser', data);
}

// // 解禁用户
// @todo: 需要后端支持
// export const unbanUser = (data: any) => {
//   return post('/unbanUser', data);
// }

// 修改用户信息
export const updateUserProfile = (userId: string, data: any) => {
  return put(`/updateUserProfile/${userId}`, data);
}

// 设置用户信息
export const setUserProfile = (data: any) => {
  return post('/setUserProfile', data);
}

// 增加用户等级
export const incrementUserLevel = (data: any) => {
  return post('/incrementUserLevel', data);
}

// 增加用户经验
export const incrementUserExp = (data: any) => {
  return post('/incrementUserExp', data);
}

// 获取用户等级经验状态
export const getUserLevelAndExp = (params: any) => {
  return get('/getUserLevelAndExp', params);
}

