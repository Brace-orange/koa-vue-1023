<template>
  <div>
    <div class="select">各类样式：</div>
    <!-- <div>before</div> -->
    <div class="container">
      <span v-for="n in 9" :key="n" :class="[`item-${n}`, `item-action-${n}-${count}`]">{{n}}</span>
    </div>
    <!-- <div>after</div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      color: 'black',
      count: 0,
      classname: `item-action-${this.count}`
    }
  },
  mounted() {
    setInterval(() => {
      if (this.count >= 10) {
        return
      }
      if(this.count++ > 9) {
        this.count = 0
      }
    }, 1000)
  }
}
</script>
<style scoped lang="scss">
$cellwidth: rem(200);
$cellwidth2: rem(100);
$add: rem(100);
@for $i from 0 to 11 {
  .item-#{$i} {
    background: hsla(random(360), 100%, 50%, 1);
    // align-items: center;
    text-align: center;
    border-radius: 50%;
    // justify-self: stretch;
    // align-self: stretch;
    // font-size: rem(30);
    @if $i == 1 {
      // font-size: rem(35);
    }
  }
  .item-action-1-#{$i} {
    @if $i + 1 > 9 {
      // grid-area: 1 / 1 / 4 / 4;
      // grid-column: 1 / span 3;
      // grid-column-start: 1;
      // grid-column-end: span 3;
      // grid-row: 1 / span 3;
    } @else if $i + 1 > 6 {
      grid-row-start: 3;
      grid-column-start: $i - 5;
      transform: rotate(180deg);
    } @else if $i + 1 > 3 {
      grid-row-start: 2;
      grid-column-start: $i - 2;
    } @else if $i + 1 <= 3 {
      grid-column-start: $i + 1;
    }
    // grid-column-end: $i + 1;
  }
}
.select {
  font-size: rem(20);
}
.container {
  // border: 10px solid red;
  width: 100%;
  // height: rem(600);
  display: grid;
  grid-template-columns: repeat(3, $cellwidth);
  grid-template-rows: repeat(3, $cellwidth);
  // grid-template-columns: repeat(auto-fill, $cellwidth);
  // grid-template-columns: 1fr 2fr 1fr minmax(1fr, 100px);
  // grid-template-columns: 1fr 1fr minmax(1fr, 2fr);
  grid-gap: rem(20) rem(50);
  grid-template-areas: 'a b c';
  grid-auto-flow: row dense;
  // grid-auto-flow: column;
  align-content: center;
  overflow: hidden;
}
// .item-1 {
//   grid-column-start: 2;
//   grid-column-end: 2;
//   grid-row-start: 1;
//   grid-row-end: 1;
//   // grid-column: 1 / span 2;
// }
</style>