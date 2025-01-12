/**
 * user store
 */
import { defineStore } from 'pinia';
import type { UserInfo } from '@/types/userInfo';

export const useUserInfoStore = defineStore('userInfo', {
  state: () => ({
    userInfo: {} as UserInfo
  }),
  actions: {
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo;
    }
  }
});

