import DataStore from './base/DataStore.js'
class Director {
  static getInstance () { // 初始化构造器函数
    console.log('enter Director getinstance')
    if (!Director.instance) {// 变量直接赋值
      Director.instance = new Director()
    }
    console.log(Director.instance, 'director instance')
    return Director.instance
  }

  constructor() {
    // console.log('构造器初始化')
    this.dataStore = DataStore.getInstance()
    this.moveSpeed = 2
  }



  run () {
    console.log('enter director function-run')
      // const backgroundSprite = this.dataStore.get('background').draw()
      const flyPig = this.dataStore.get('pig1').draw()
      // const timer = requestAnimationFrame(() => {
      //   this.run()
      // })
  }
}

export default Director