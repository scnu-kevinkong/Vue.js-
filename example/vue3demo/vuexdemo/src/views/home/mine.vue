<template>
  <div>
    <h1>This is an mine page</h1>
    <van-button type="default" @click="mutationAdd">mutation 增加</van-button>
    <van-button type="default" @click="mutationReset">mutation 重置</van-button>
    <van-button type="default" @click="actionsAdd">actions 增加</van-button>
    <van-button type="default" @click="actionsReset">actions 重置</van-button>
    <h1>{{counter}}</h1>
  </div>
</template>
<script>
import Vue from 'vue'
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from 'vuex'
import { Button } from 'vant'
Vue.use(Button)
// @ is an alias to /src
export default {
  name: 'mine',
  components: {
  },
  computed: {
    ...mapState({
      // 箭头函数可使代码更简练
      counter: state => state.auth.counter,
      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState (state) {
        return state.auth.counter + this.localCount
      }
    })
  },
  data () {
    return {
      localCount: 0
    }
  },
  methods: {
    mutationAdd () {
      this.$store.commit('auth/increase')
    },
    mutationReset () {
      this.$store.commit('auth/reset')
    },
    actionsAdd () {
      this.$store.dispatch('auth/increase')
    },
    actionsReset () {
      this.$store.dispatch('auth/reset')
    }
  }
}
</script>
