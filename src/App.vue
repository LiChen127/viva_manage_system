<script setup lang='ts'>
import { useUserInfoStore } from '@/stores/userInfo';
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const userInfoStore = useUserInfoStore();
const userInfo = userInfoStore.userInfo;

if (!userInfo.userId) {
  message.warning('请先登录');
  router.push('/admin');
} else {
  router.push('/');
}
</script>

<template>
  <router-view />
</template>

<style lang='scss' scoped>

</style>