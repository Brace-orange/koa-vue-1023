<template>
  <div>
    <m-header></m-header>
    <div is="mHeader" ref="parent" :count="total" @changeCount="getCount">{{total}}</div>
  </div>
</template>
<script>
import mHeader from '../components/header'
export default {
  data () {
    return {
      total: 5,
    }
  },
  components: {
    mHeader
  },
  created() {

  },
  mounted() {
    // console.log('son', this.$refs.one)
    console.log('parent', this.$refs.parent.$refs.one.innerHTML)
  },
  methods: {
    getCount(value) {
      console.log('getCount', value)
    }
  }
}
</script>
<style>
</style>