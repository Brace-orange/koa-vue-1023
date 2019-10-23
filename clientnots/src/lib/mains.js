import ResorcesLoader from './base/ResourceLoader.js'
import Director from './Director.js'
import Background from './runtime/Background.js'
// import Land from './js/runtime/Land.js'
import DataStore from './base/DataStore.js'
// import UpPencil from './js/runtime/UpPencil.js'
// import DownPencil from './js/runtime/DownPencil.js'
// import Birds from './js/player/Birds.js'
// import { StartButton } from './js/player/StartButto.js'
// import { Score } from './js/player/Score.js'

export default class Main{
  constructor() {
    this.canvas = document.getElementById('myCanvas')
    console.log(this.canvas)
    this.ctx = this.canvas.getContext('2d')
    this.dataSource = DataStore.getInstance()
    console.log('3333', this.dataSource)
    const loader = ResorcesLoader.create()
    this.director = new Director()
    loader.onImageLoad(map => this.onFirstResourceLoader(map))
  }

  onFirstResourceLoader(map) {
    console.log('enter firstresourceloader')
    this.dataSource.canvas = this.canvas
    this.dataSource.ctx = this.ctx
    this.dataSource.res = map
    this.init()
  }

  init () {
    console.log('enter main init')
    this.dataSource
    .put('background', Background)
    this.director.run()
  }
}