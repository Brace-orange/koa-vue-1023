import DataStore from './base/DataStore.js'
import FlyPig from './runtime/flyPig.js'


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
    this.counts = 4
    this.a = 1
    
  }



  run () {
    if (this.counts > 1000) {
      return
    }
    // this.count = 0
    // console.log('enter director function-run')
    this.imgwidth = Math.random()*20 + 50
    this.imgheight = this.imgwidth + 50
    this.width = this.imgwidth
    this.height = this.imgheight
    this.x = Math.random() * 300
    this.y = Math.random() * 100
    this.moveSpeed += 2
    this.obj = {
      imgwidth:this.imgwidth, imgheight: this.imgheight, width: this.width, height: this.height, x: this.x, y: this.y
  }
    if (this.dataStore.get('pigsTotal').length < 1) {
      console.log(this.obj,111111)
      const a = new FlyPig(this.obj)
      this.dataStore.get('pigsTotal').push(a)
    }
    this.ctx =  this.dataStore.ctx
    this.ctx.clearRect(0, 0, document.body.clientWidth,document.body.clientHeight)
      // const backgroundSprite = this.dataStore.get('background').draw()
      // this.dataStore.get('pigsTotal').push(new FlyPig(this.imgwidth, this.imgheight, this.width, this.height, this.x, this.y))
      // if (this.counts < 9) {
        // cancelAnimationFrame(timer)
        this.dataStore.get('pigsTotal').map((item) => {
          console.log(item.y,1090909)
          if (this.a !== 0) {
            
            item.y = item.y + 10
            item.draw()
          } else {
            // item.draw()
            console.log(item.y, 898989)
          }
        })
      // this.dataStore.get('pigsTotal')[this.count].draw()
      console.log(this.dataStore.get('pigsTotal'))
      const timer = window.requestAnimationFrame(() => {
        this.run()
      })
      // cancelAnimationFrame(timer)
      this.count++
      this.counts++

      this.a = 1
  }
}

export default Director