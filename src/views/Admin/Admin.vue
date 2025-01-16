<script setup lang="ts">
import { ref } from 'vue';
import { register, login, getUserInfo } from '@/api/userInfo/index';
import { Role } from '@/types/userInfo';
import { useUserInfoStore } from '@/stores/userInfo';
import { message, Form, Input, Button } from 'ant-design-vue';
import type { RuleObject } from 'ant-design-vue/es/form/interface';
import { useRouter } from 'vue-router';

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
  role: Role.superAdmin,
});
// 是否注册
const isRegister = ref(false);

// pinia状态
const userInfoStore = useUserInfoStore();
const userInfo = userInfoStore.userInfo;

const router = useRouter();

const getRegister = () => {
  isRegister.value = true;
  userForm.value = {
    userId: '',
    username: '',
    nickname: '',
    password: '',
    role: Role.superAdmin,
  };
}

const handleRegister = async () => {
  try {
    const bodyParams = {
      username: userForm.value.username,
      nickname: userForm.value.nickname,
      password: userForm.value.password,
      role: userForm.value.role,
    };
    const res = await register(bodyParams);
    const { code, data } = res.data;
    if (code === 201) {
      message.success('注册成功');
      isRegister.value = false;
      userForm.value = {
        userId: '',
        username: '',
        nickname: '',
        password: '',
        role: Role.superAdmin,
      };
    }
    if (code === 400) {
      message.error('注册失败');
    }
    const { userId } = data;
    await getUserInfoAndPatchToStore(userId);
  } catch (error) {
    console.log('表单校验失败', error);
  }
}

const getUserInfoAndPatchToStore = async (userId: string) => {
  const userInfo = await getUserInfo(userId);
  const userInfoStore = useUserInfoStore();
  userInfoStore.setUserInfo(userInfo.data.data);
}

const handleLogin = async () => {
  try {
    const params = {
      userId: userForm.value.userId,
      username: userForm.value.username,
      password: userForm.value.password,
    };
    const res = await login(params);
    const { code } = res.data;
    if (code === 200) {
      message.success('登录成功');
      router.push('/');
    }
    if (code === 400) {
      message.error('登录失败');
    }
  } catch (error) {
    console.log('表单校验失败', error);
  }
}

// 表单规则
const rules: Record<string, RuleObject[]> = {
  username: [
    { required: true, message: '请输入手机号', validateTrigger: ['change', 'blur'] },
    { pattern: /^1[3-9][0-9]{9}$/, message: '请输入正确的手机号格式', validateTrigger: ['change', 'blur'] }
  ],
  password: [
    { required: true, message: '请输入密码', validateTrigger: ['change', 'blur'] },
    { 
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
      message: '密码必须包含大小写字母、数字和特殊字符，且长度不少于8位',
      validateTrigger: ['change', 'blur']
    }
  ],
  nickname: [
    { required: true, message: '请输入昵称', validateTrigger: ['change', 'blur'] },
    { min: 2, max: 20, message: '昵称长度在2-20个字符之间', validateTrigger: ['change', 'blur'] }
  ]
};
</script>

<template>
  <div class="admin-container">
    <div class="admin-container-left">
      <h1 class="admin-container-left-title">viva管理系统后台</h1>
    </div>
    <div class="admin-container-right">
    <a-form 
      class="login-form" 
      v-if="!isRegister" 
      name="login-form"
      ref="loginFormRef"
      :model="userForm"
      :rules="rules"
      @finish="handleLogin"
    >
      <a-form-item label="手机号" name="username">
        <a-input v-model:value="userForm.username" placeholder="请输入手机号" />
      </a-form-item>
      <a-form-item label="密码" name="password">
        <a-input-password v-model:value="userForm.password" placeholder="请输入密码" />
      </a-form-item>
      <div>目前没有账号, 请先
        <a href="javascript:void(0)" @click="getRegister">注册</a>
      </div>
      <Button type="primary" @click="handleLogin" class="admin-container-right-form-button" style="margin-top: 20px;">登录</Button>
    </a-form>
    <a-form 
      v-else
      class="register-form" 
      name="register-form"
      ref="registerFormRef"
      :model="userForm"
      :rules="rules"
      @finish="handleRegister"
    >
      <a-form-item label="手机号" name="username">
        <a-input v-model:value="userForm.username" placeholder="请输入手机号" />
      </a-form-item>
      <a-form-item label="密码" name="password">
        <a-input-password v-model:value="userForm.password" placeholder="请输入密码" />
      </a-form-item>
      <a-form-item label="昵称" name="nickname">
        <a-input v-model:value="userForm.nickname" placeholder="请输入管理员用户名" />
      </a-form-item>
      <div>
        <Button type="link" @click="isRegister = false">返回登录</Button>
        <Button type="primary" @click="handleRegister" class="admin-container-right-form-button" style="margin-top: 20px;">注册</Button>
      </div>
    </a-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.admin-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  &-left {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-title {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
    }
  }

  &-right {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .login-form, .register-form {
      padding: 40px 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

      :deep(.ant-form-item) {
        width: 350px;
        margin-bottom: 24px;
        display: flex;
        
        .ant-form-item-label {
          width: 70px;
          text-align: right;
        }

        .ant-form-item-control {
          flex: 1;

          .ant-input,
          .ant-input-password,
          .ant-input-affix-wrapper {
            width: 250px !important;
          }
        }
      }
    }
  }
}
</style>