import { get, post, put, del } from '../index';

// 获取帖子列表
export const getPostsList = (userId: string) => {
  return get(`/getPostsList/${userId}`, {});
}

// 获取某个人的帖子列表
export const getUserPostsList = (userId: string) => {
  return get(`/getUserPosts/${userId}`, {});
}

// 获取帖子内容
export const getPostContentDetail = (params: any) => {
  return get('/getCurrentPostDetail', params);
}

// 删除帖子
export const deletePost = (data: any) => {
  return del('/deletePost', data);
}

// 获取评论列表
export const getCommentList = (params: any) => {
  return get('/getCommentList', params);
}

// 获取当前用户的评论列表
export const getCurrentUserCommentList = (userId: string) => {
  return get(`/getUserComments/${userId}`, {});
}

// 删除评论
export const deleteComment = (data: any) => {
  return del('/deleteComment', data);
}

