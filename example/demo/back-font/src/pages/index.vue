<template>
  <div>
    <noticetip></noticetip>
  </div>
</template>

<script>
import NoticeTip from '../components/noticeTip.vue'
export default {
  name: 'indexPage',
  data () {
    return {
    }
  },
  components: {
    noticetip: NoticeTip
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
