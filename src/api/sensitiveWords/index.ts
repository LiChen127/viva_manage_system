import { get, post, del } from '../index';

// 获取敏感词列表
export const getSensitiveWordList = async (params: any) => {
  return await get('/admin/getSensitiveWordList', params);
}

// 添加敏感词
export const putWordInSensitive = async (data: any) => {
  return await post('/admin/putWordInSensitive', data);
}

// 删除敏感词
export const deleteSensitiveWord = async (data: any) => {
  return await del('/admin/deleteWord', data);
}

