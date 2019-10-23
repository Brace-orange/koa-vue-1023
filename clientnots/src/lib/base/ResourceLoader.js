import Resources from './Resources.js'

export default class ResourcesLoader {
  constructor() {
    this.map = new Map(Resources)
    for (let [key, value] of this.map) {
      const image = new Image()
      image.src = value
      this.map.set(key, image)
    }
  }

  onImageLoad (callback) {
    console.log('enter imageLoader')
    // console.log(this.map)
    let loadCount = 0
    // callback(this.map)
    for (let value of this.map.values()) {
      console.log(value)
      
      value.onload = () => { // this
        loadCount++ 
        console.log('enter onload')
        if (loadCount >= this.map.size) {
          console.log('enter callback')
          callback(this.map)
        }
      }
    }
  }

  static create() {
    return new ResourcesLoader()
  }
}