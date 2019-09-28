<template>
  <div id="app">
    <div v-if="loadingShow" class="loading">
      <van-loading size="36px" vertical>加载中...</van-loading>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Vue from 'vue'
import { Loading } from 'vant'
Vue.use(Loading)
export default {
  computed: {
    ...mapState({
      // 箭头函数可使代码更简练
      loadingShow: state => state.global.loadingShow
    })
  },
  methods: {
  }
}
</script>
<style lang="less">
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.7);
  z-index: 999;
}
</style>
