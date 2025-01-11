<script setup lang="ts">
import { ref } from 'vue';
import { register, login, getUserInfo } from '@/api/userInfo/index';
import { Role } from '@/types/userInfo';
import { useUserInfoStore } from '@/store/userInfo';
import { message } from 'ant-design-vue';

// 用户表单接口信息
interface userForm {
  userId?: string;
  username: string;
  nickname: string;
  password: string;
  role: Role;
}
// 用户表单内容
const userForm = ref<userForm>({
  userId: '',
  username: '',
  nickname: '',
  password: '',
  role: Role.admin || Role.superAdmin,
});

const handleRegister = async () => {
  const bodyParams = {
    username: userForm.value.username,
    nickname: userForm.value.nickname,
    password: userForm.value.password,
    role: userForm.value.role,
  };
  try {
    const res = await register(bodyParams);
    const { code, data } = res.data;
    if (code === 201) {
      message.success('注册成功');
    }
    if (code === 400) {
      message.error('注册失败');
    }
    const { userId } = data;
    await getUserInfoAndPatchToStore(userId);
  } catch (error) {
    message.error('注册失败, 服务端错误');
    console.log(error);
  }
}

const getUserInfoAndPatchToStore = async (userId: string) => {
  const userInfo = await getUserInfo(userId);
  const userInfoStore = useUserInfoStore();
  userInfoStore.setUserInfo(userInfo.data.data);
}

const handleLogin = async () => {
  const params = {
    userId: userForm.value.userId,
    username: userForm.value.username,
    password: userForm.value.password,
  };
  try {
    const res = await login(params);
    const { code } = res.data;
    if (code === 200) {
      message.success('登录成功');
    }
    if (code === 400) {
      message.error('登录失败');
    }
  } catch (error) {
    message.error('登录失败, 服务端错误');
    console.log(error);
  }
}

// 表单规则
const rules = {
  username: [
    { required: true, message: '请输入正确的用户名', trigger: 'blur', regex: /^1[3-9][0-9]{9}$/ },
  ],
  nickname: [
    { required: true, message: '请输入正确的昵称', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入正确的密码', trigger: 'blur', regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ },
  ],
};
</script>

<template>
  <div>
    <h1>Admin</h1>
  </div>
</template>

<style scoped>

</style>