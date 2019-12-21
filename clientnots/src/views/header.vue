<template>
  <div>
    <m-header @click.native="nativeFunc">
      <template v-slot:default="slotone">{{slotone.user.name}}</template>
      <template v-slot:slottwo="slottwo">1</template>
    </m-header>
    <div>
      <component :is="type">1212121</component>
    </div>
    <transition
      type="transition"
      :duration="{enter: 1000, leave: 1000 }"
      enter-active-class="animated tada active v-enter-active"
      appear
      appear-active-class="animated bounce active"
      @before-enter="beforeEnter"
      mode="out-in"
    >
      <div v-if="show" :key="1">这是一个过渡</div>
      <div v-if="!show" :key="2">121212</div>
      <!-- <component></component> -->
    </transition>
    <transition-group name="group" tag="div"
      appear
      enter-active-class="animated tada active"
      leave-active-class="animated tada leave"
    >
      <p v-for="(item) in numbers" :key="item">{{item}}</p>
    </transition-group>
    <button @click="toClick">点击</button>
    <button @click="addNum">添加</button>
    <button @click="removeNum">减少</button>
    <button @click="shuffleNum">移动</button>
    <!-- <div is="mHeader" ref="parent" :count="total" @changeCount="getCount">{{total}}</div> -->
  </div>
</template>
<script>
import mHeader from '../components/header'
import Velocity from 'velocity-animate'
import _ from 'loadsh'
export default {
  data () {
    return {
      total: 5,
      type: 'mHeader',
      show: true,
      numbers: [1,2,3,4,5,6,7],
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
    shuffleNum() {
     this.numbers = _.shuffle(this.numbers)
    },
    removeNum() {
     this.numbers.splice(Math.random() * (this.numbers.length - 1), 1)
    },
    addNum() {
      // this.numbers++
      this.numbers.splice(2, 0, Math.max(...this.numbers) + 1)
      console.log(this.numbers)
      // this.numbers = _.shuffle(this.numbers)
    },
    beforeEnter(el) {
      console.log('before enter')
      Velocity(el, {
        opacity: 1,
      }, {
        duration: 1000
      })
    },
    toClick() {
      this.show = !this.show
    },
    nativeFunc() {
      console.log(12)
    },
    getCount(value) {
      console.log('getCount', value)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';
.leave-leave-active {
  // position: absolute;
}
.leave-leave-to {
  opacity: 0;
  // transform: translateY(30px);
}
.group-move {
  transition: transform 2s;
}
.active {
  color: red;
  transform-origin: left center;
  // transform: tran
}
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 3s;
  animation: bounce 3s;
  transform-origin: left center;,
}
.v-enter-to {
  opacity: 1;
}
.v-leave {
  opacity: 1;
  font-size: rem(10);
  color: red;
}
.v-leave-to {
  opacity: 0.1;
  font-size: rem(20);
  color: yellow;
  transform-origin: left center;
  animation: bounce 3s reverse;
}
.v-leave-active {
  transition: opacity 3s, font-size 3s, color 3s;
  /* transition: font-size 3s; */
}
@keyframes bounce {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>