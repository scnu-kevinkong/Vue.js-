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
  },
  data () {
    return {
      message: 'home'
    }
  },
  beforeCreate () {
    console.log('调用了HOME beforeCreate')
    console.log(this.message)
    console.log(this.$el)
  },
  created () {
    console.log('调用了HOME created')
    console.log(this.message)
    console.log(this.$el)
  },
  beforeMount () {
    console.log('调用了HOME beforeMount')
    console.log(this.message)
    console.log(this.$el)
  },
  mounted () {
    console.log('调用了HOME mounted')
    console.log(this.message)
    console.log(this.$el)
  },
  beforeUpdate () {
    console.log('调用了HOME beforeUpdate')
    console.log(this.message)
    console.log(this.$el)
  },
  updated () {
    console.log('调用了HOME updated')
    console.log(this.message)
    console.log(this.$el)
  },
  beforeDestory () {
    console.log('调用了HOME beforeDestory')
    console.log(this.message)
    console.log(this.$el)
  },
  destoryed () {
    console.log('调用了HOME Destoryed')
    console.log(this.message)
    console.log(this.$el)
  }
}
</script>
