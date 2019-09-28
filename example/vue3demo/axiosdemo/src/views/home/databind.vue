<template>
  <div>
    <h1>简单绑定</h1>
    <div>{{val}}</div>
    <h1>数值相加</h1>
    <div>{{val + 1}}</div>
    <h1>字符串拼接</h1>
    <div>{{'my name is ' + name}}</div>
    <h1>三元运算</h1>
    <div>{{val > 0 ? 'val大于0': 'val不大于0'}}</div>
    <h1>过滤器</h1>
    <div>{{name | Upper}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'databind',
  components: {
  },
  data () {
    return {
      val: 1,
      name: 'xxx',
      message: 'test'
    }
  },
  filters: {
    Upper (name) {
      return name.toUpperCase()
    }
  },
  beforeCreate () {
    console.log('调用了beforeCreate')
    console.log(this.message)
    console.log(this.$el)
  },
  created () {
    console.log('调用了created')
    console.log(this.message)
    console.log(this.$el)
  },
  beforeMount () {
    console.log('调用了beforeMount')
    console.log(this.message)
    console.log(this.$el)
  },
  mounted () {
    console.log('调用了mounted')
    console.log(this.message)
    console.log(this.$el)
  },
  beforeUpdate () {
    console.log('调用了beforeUpdate')
    console.log(this.message)
    console.log(this.$el)
  },
  updated () {
    console.log('调用了updated')
    console.log(this.message)
    console.log(this.$el)
  },
  beforeDestory () {
    console.log('调用了beforeDestory')
    console.log(this.message)
    console.log(this.$el)
  },
  destoryed () {
    console.log('调用了Destoryed')
    console.log(this.message)
    console.log(this.$el)
  }
}
</script>
