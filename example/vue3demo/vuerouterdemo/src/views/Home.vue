<template>
  <div>
    <van-button type="default">默认按钮</van-button>
    <router-view></router-view>
    <div>home</div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'vant'
Vue.use(Button)
// @ is an alias to /src
export default {
  name: 'home',
  components: {
  }
}
</script>
