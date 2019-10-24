<template>
  <div class="animations">
    <canvas id="myCanvas" :width="width" :height="height"></canvas>
  </div>
</template>
<script>
import Mains from '../lib/mains'
export default {
  data() {
    return {
      height: document.body.clientHeight,
      width: document.body.clientWidth
    }
  },
  mounted() { // created 还未创建dom
    const mains = new Mains()
  },
  methods: {
    disposeNull(originValue, defaultValue = '') {
      console.log(originValue)
      const a = ''
      console.log(!a)
      if (!originValue && originValue != 0 && originValue != '0' || originValue === 'null' || originValue === 'undefined') {
        return defaultValue
      } else {
        return originValue
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.animations {
  height: 100%;
  width: 100%;
  // background: url('../assets/image/bac1.jpg');
  background-size: 100%;
  background-color: #333;
  .spans {
    color: red;
  }
}

</style>