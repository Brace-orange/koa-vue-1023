<template>
  <div class="animations">
    <!-- <img src="../assets/image/dog.jpg"/> -->
    <div>
      <p>展示为：''</p>
      <p class="spans" v-for="(item, index) in abnormalValue" :key="index">{{item + ''}}:{{disposeNull(item, '默认')}}</p>
    </div>
    <div>
      <p>展示为：0</p>
      <p class="spans" v-for="(item, index) in abnormalValue" :key="index">{{item + ''}}:{{disposeNull(item, 0)}}</p>
    </div>
    <canvas id="myCanvas" width="500" height="500"></canvas>
  </div>
</template>
<script>
import Mains from '../lib/mains'
export default {
  data() {
    return {
      abnormalValue: [
        null,
        undefined,
        'null',
        'undefined',
        '',
        0,
        '0',
        -1,
        'aa',
        1,
      ]
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
  .spans {
    color: red;
  }
}

</style>