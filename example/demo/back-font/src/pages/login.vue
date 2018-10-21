<template>
  <div>
    <el-container>
      <el-header>
        <div class="login_title">登陆</div>
      </el-header>
      <el-main>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="3">
            <div class="usernameTitle">账号</div>
          </el-col>
          <el-col :span="9">
            <el-input
              placeholder="请输入账号"
              v-model="username"
              clearable>
            </el-input>
          </el-col>
        </el-row>

        <el-row type="flex" justify="center" align="middle" class="passwordWrapper">
          <el-col :span="3">
            <div class="usernameTitle">密码</div>
          </el-col>
          <el-col :span="9">
            <el-input
              placeholder="请输入密码"
              type="password"
              v-model="password"
              clearable>
            </el-input>
          </el-col>
        </el-row>
        <el-row class="login_btn">
          <el-col :span="9" :offset="8">
            <el-button @click="login" type="primary" round>登陆</el-button>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { Container, Header, Main, Row, Col, Input, Button } from 'element-ui'
import { mapActions } from 'vuex'
import Vue from 'vue'
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Button)
export default {
  name: 'loginPage',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions({
      'loginSso': 'auth/login'
    }),
    async login () {
      let result = await this.loginSso({ username: this.username, password: this.password })
      if (result) {
        this.$router.replace('/')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header { text-align: center; font-size: 20px; font-weight: 600; margin-top: 200px; }
.usernameTitle { text-align: center; }
.passwordWrapper { margin-top: 20px; }
.login_btn { margin-top: 20px; }
.login_btn button { width: 100%; }
</style>
