<template>
<div>
  <span ref="one" v-show="showOne" @click="changeCount">{{count}}</span>
  <slot v-bind:user="user">{{user.name}}</slot>
  <slot name="slottwo">slottwo</slot>
  <slot v-bind:user="user">{{user.age}}</slot>
</div>
</template>
<script>
export default {
  data () {
    return {
      showOne: true,
      number: this.count,
      user: {
        name: 'slot-name',
        age: 18
      }
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