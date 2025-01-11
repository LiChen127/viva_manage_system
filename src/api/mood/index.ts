import { get, post, put, del } from '../index';

// 获取用户情绪列表
export const getUserMoodList = async (params: any) => {
  return await get('/admin/getUserMoodList', params);
}

// 获取报告详情
export const getMoodRecordDetail = async (params: any) => {
  return await get('/admin/getMoodRecordDetail', params);
}

