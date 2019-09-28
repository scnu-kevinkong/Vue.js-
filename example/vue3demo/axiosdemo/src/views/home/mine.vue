<template>
  <div>
    <h1>This is an mine page</h1>
    <van-button type="default" @click="mutationAdd">mutation 增加</van-button>
    <van-button type="default" @click="mutationReset">mutation 重置</van-button>
    <van-button type="default" @click="actionsAdd">actions 增加</van-button>
    <van-button type="default" @click="actionsReset">actions 重置</van-button>
    <van-button type="default" @click="urlSheet">axios测试</van-button>
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
    async urlSheet () {
      try {
        // 定义参数对象
        let params = {
          type: 'zc'
        }
        this.$store.commit('global/setLoading', { flag: true, title: '登录中' })
        let res = await this.$api.user.user(params)
        console.log('​getMatches -> res', res)
        this.$store.commit('global/setLoading', { flag: false })
      } catch (error) {
        this.$store.commit('global/setLoading', { flag: false })
        console.log('​catch -> e', error)
        const { code, msg } = error
        this.$dialog.alert({
          title: `错误代码: ${code}`,
          message: msg
        })
      }
    },
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
