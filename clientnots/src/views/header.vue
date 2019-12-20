<template>
  <div>
    <m-header @click.native="nativeFunc">
      <template v-slot:default="slotone">{{slotone.user.name}}</template>
      <template v-slot:slottwo="slottwo">1</template>
    </m-header>
    <!-- <div is="mHeader" ref="parent" :count="total" @changeCount="getCount">{{total}}</div> -->
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
    // console.log('parent', this.$refs.parent.$refs.one.innerHTML)
  },
  methods: {
    nativeFunc() {
      console.log(12)
    },
    getCount(value) {
      console.log('getCount', value)
    }
  }
}
</script>
<style>
</style>