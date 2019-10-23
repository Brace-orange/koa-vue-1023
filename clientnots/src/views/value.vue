<template>
  <div class="animations">
    <div>
      <p>展示为：''</p>
      <p class="spans" v-for="(item, index) in abnormalValue" :key="index">{{item === '' ? '空字符串' : item + ''}}:{{disposeNull(item, '默认')}}</p>
    </div>
    <div>
      <p>展示为：0</p>
      <p class="spans" v-for="(item, index) in abnormalValue" :key="index">{{item === '' ? '空字符串' : item + ''}}:{{disposeNull(item, 0)}}</p>
    </div>
  </div>
</template>
<script>
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
  methods: {
    disposeNull(originValue, defaultValue = '') {
      if (!originValue && originValue !== 0 && originValue !== '0' || originValue === 'null' || originValue === 'undefined') {
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