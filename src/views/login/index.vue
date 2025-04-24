<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-header">
        <img class="logo" src="@/assets/images/logo.png" alt="logo" />
        <h2 class="title">Grace Admin</h2>
      </div>

      <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" :placeholder="$t('login.username')" :prefix-icon="User" size="large" />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            :placeholder="$t('login.password')"
            :prefix-icon="Lock"
            size="large"
            show-password
          />
        </el-form-item>

        <el-form-item prop="remember">
          <el-checkbox class="is-remember" v-model="loginForm.remember"> 记住密码 </el-checkbox>
        </el-form-item>

        <el-button type="primary" size="large" class="login-btn" :loading="loading" @click="handleLogin">
          {{ $t('login.login') }}
        </el-button>
      </el-form>
    </div>

    <!-- 底部信息 -->
    <div class="footer">© 2024 公司名称 版权所有</div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { User, Lock } from '@element-plus/icons-vue'
import { useUserStore } from '@/store/modules/user'

const router = useRouter()
const userStore = useUserStore()

const loginForm = reactive({
  username: 'grace-admin',
  password: '123456',
  remember: false
})

const loginRules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
  ]
})

const loading = ref(false)
const loginFormRef = ref(null)

const handleLogin = () => {
  loginFormRef.value.validate(valid => {
    if (valid) {
      loading.value = true
      // 模拟登录请求
      setTimeout(() => {
        loading.value = false
        userStore.setToken('grace-token')
        ElMessage.success('登录成功')
        router.push('/')
      }, 1000)
    }
  })
}

// 记住密码功能
const initRemember = () => {
  const rememberData = localStorage.getItem('rememberData')
  if (rememberData) {
    Object.assign(loginForm, JSON.parse(rememberData))
  }
}
initRemember()
</script>

<style scoped>
.login-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, #272727, #4a4a4a, #6d6d6d, #909090, #b3b3b3, #d6d6d6, #f9f9f9);
}

.login-box {
  position: relative;
  width: 450px;
  padding: 40px;
  border: 1px solid rgb(255 255 255 / 18%);
  border-radius: 10px;
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
  backdrop-filter: blur(10px);
}

.login-header {
  margin-bottom: 30px;
  text-align: center;
}

.logo {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}

.title {
  margin: 0;
  font-size: 24px;
  color: #fff;
}

.is-remember {
  color: #000;
}

.login-btn {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #45b7d1;
  border: none;
  transition: all 0.3s;

  &:hover {
    background: #4ecdc4;
    box-shadow: 0 5px 15px rgb(0 0 0 / 20%);
    transform: translateY(-2px);
  }
}

.footer {
  position: absolute;
  bottom: 20px;
  width: 100%;
  font-size: 14px;
  color: #fff;
  text-align: center;
}

@media (width <= 768px) {
  .login-box {
    width: 90%;
    padding: 20px;
    margin-top: 100px;
  }
}
</style>
