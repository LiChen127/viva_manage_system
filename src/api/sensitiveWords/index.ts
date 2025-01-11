import { get, post, del } from '../index';

// 获取敏感词列表
export const getSensitiveWordList = (params: any) => {
  return get('/getSensitiveWordList', params);
}

// 添加敏感词
export const putWordInSensitive = (data: any) => {
  return post('/putWordInSensitive', data);
}

// 删除敏感词
export const deleteSensitiveWord = (data: any) => {
  return del('/deleteWord', data);
}

