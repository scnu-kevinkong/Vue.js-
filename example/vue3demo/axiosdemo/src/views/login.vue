<template>
  <div class="login">
    <h1>This is an login page</h1>
    <h1>{{$store.state.auth.userinfo.username}}</h1>
    <button v-if="!isLogin" @click="login">登陆</button>
    <button v-else @click="logout">退出</button>
  </div>
</template>
<script>
export default {
  name: 'login',
  data: function () {
    return {
      isLogin: false
    }
  },
  methods: {
    logout () {
      localStorage.login = false // 登录状态
      this.$router.replace('/')
    },
    login () {
      localStorage.login = true // 登录状态
      // this.$route.params.redirect 是路由拦截是传过来的拦截页面的路由对象，看下文的路由拦截配置详情，有说明。
      if (this.$route.params.redirect) { // 判断是否有redirect参数
        this.$router.replace(this.$route.params.redirect) // 登录后跳回被的拦截
      } else {
        this.$router.replace('/')
      }
    }
  },
  mounted () {
    this.isLogin = localStorage.login ? JSON.parse(localStorage.login) : false
  }
}
</script>
