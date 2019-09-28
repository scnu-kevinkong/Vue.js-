<template>
  <div>
    <div><router-link to="/home">主页</router-link></div>
    <div><router-link to="/home/mine">我的</router-link></div>
    <div><router-link to="/home/data">数据绑定</router-link></div>
    <div><router-link to="/login">登陆</router-link></div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'nologinhome',
  components: {
  }
}
</script>
