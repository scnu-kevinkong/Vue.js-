<template>
  <div>
    <el-button type="text" @click="open">点击打开 Message Box</el-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { MessageBox, Message, Button } from 'element-ui'
import { mapGetters } from 'vuex'
Vue.use(Button)
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
export default {
  name: 'noticeTip',
  data () {
    return {
    }
  },
  methods: {
    open () {
      this.$confirm(`你的用户名是${this.username}`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: '点击了确定!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '点击了取消'
        })
      })
    }
  },
  computed: {
    ...mapGetters({
      'username': 'auth/getUserName',
      'token': 'auth/getToken'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
