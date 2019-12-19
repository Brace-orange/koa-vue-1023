<template>
<div>
  <span ref="one" v-show="showOne" @click="changeCount">{{count}}</span>
  header
</div>
</template>
<script>
export default {
  data () {
    return {
      showOne: true,
      number: this.count
    }
  },
  props: {
    count: {
      type: Number,
      default: 0,
    }
  },
  methods: {
    changeCount () {
      this.$emit('changeCount', this.count)
    }
  }
}
</script>
<style>
</style>