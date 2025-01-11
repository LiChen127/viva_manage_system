import { get, post, put, del } from '../index';

// 获取用户情绪列表
export const getUserMoodList = (params: any) => {
  return get('/getUserMoodList', params);
}

// 获取报告详情
export const getMoodRecordDetail = (params: any) => {
  return get('/getMoodRecordDetail', params);
}

