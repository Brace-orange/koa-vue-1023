<template>
  <div>
    <h1>This is an about page</h1>
    <input type="text"/>
    <button>搜索</button>
    <br/>
    <label for="name">名称</label><textarea name="name" v-model="names"></textarea>
    <br/>
    <label for="urls">链接</label><textarea name="urls" id="" cols="30" rows="10" v-model="url"></textarea>
    <!-- <button @click="save">添加</button> -->
    <el-button type="primary" @click="save">添加</el-button>
    <div>
      <button>这是一个按钮</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'save',
  data () {
    return {
      names: '一一一',
      url: 'https;//one'
    }
  },
  methods: {
    save() {
      const param = {
        names: this.names,
        url: this.url
      }
      this.$store.dispatch('saveUrl', param)
    }
  },
}
</script>
<style>
</style>