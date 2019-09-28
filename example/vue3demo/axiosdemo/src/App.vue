<template>
  <div id="app">
    <div v-if="loadingShow">
      <van-loading size="24px" vertical>加载中...</van-loading>
      <van-overlay
        :show="loadingShow"
        class-name="overlay"
      />
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Vue from 'vue'
import { Loading, Overlay } from 'vant'
Vue.use(Loading)
Vue.use(Overlay)
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
</style>
