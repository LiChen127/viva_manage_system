import { get, post, put, del } from '../index';

// 获取帖子列表
export const getPostsList = async (userId: string) => {
  return await get(`/admin/getPostsList/${userId}`, {});
}

// 获取某个人的帖子列表
export const getUserPostsList = async (userId: string) => {
  return await get(`/admin/getUserPosts/${userId}`, {});
}

// 获取帖子内容
export const getPostContentDetail = async (params: any) => {
  return await get('/admin/getCurrentPostDetail', params);
}

// 删除帖子
export const deletePost = async (data: any) => {
  return await del('/admin/deletePost', data);
}

// 获取评论列表
export const getCommentList = async (params: any) => {
  return await get('/admin/getCommentList', params);
}

// 获取当前用户的评论列表
export const getCurrentUserCommentList = async (userId: string) => {
  return await get(`/admin/getUserComments/${userId}`, {});
}

// 删除评论
export const deleteComment = async (data: any) => {
  return await del('/admin/deleteComment', data);
}

