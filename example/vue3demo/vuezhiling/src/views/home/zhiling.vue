<template>
  <div>
    <div v-on:click="toast">点击我</div>
    <div @click="toast">点击我@</div>
    <div v-text="htmlData"></div>
    <div v-html="htmlData"></div>
    <a href="http://www.baidu.com">静态网址</a>
    <a :href="href">动态网址</a>
    <div @click="log('外面')">
      <div @click.stop="log('里面')">打印值</div>
    </div>
    <input v-model="inputValue" placeholder="测试动态input"/>
    <ul>
      <li v-for="(val, key) in arr" :key="key">值为:{{val}}, 索引为{{key}}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'zhiling',
  components: {
  },
  data () {
    return {
      message: 'hello world',
      htmlData: '<h1>heloo world</h1>',
      href: 'http://www.qq.com',
      inputValue: '',
      arr: ['这是数据测试aaa', '这是数据测试bbb', '这是数据测试ccc', '这是数据测试ddd']
    }
  },
  methods: {
    log (log) {
      console.log(log)
      console.log('inputValue', this.inputValue)
    },
    toast () {
      this.fun()
    },
    fun () {
      alert(this.message)
    }
  },
  mounted () {
    this.fun()
  }
}
</script>
