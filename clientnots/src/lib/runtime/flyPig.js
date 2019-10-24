import {Sprite} from "../base/Spite";
// import {DataStore} from "../base/DataStore.js";

export default class FlyPig extends Sprite {
    constructor(obj) {
        console.log(obj,55555)
        const image = Sprite.getImage('pig1');
        super(image,
            0, 0,
            image.width, image.height,
            obj.x, obj.y,
            obj.width, obj.height);
            this.obj = obj
            this.width = obj.width
            this.height = obj.height
            this.image = image
            this.x = obj.x
            this.y = obj.y
    }
    draw() {
        this.obj.y = this.obj.y + Math.random()*1+0.5
        // this.obj.x = this.obj.x > 400 ? this.obj.x - Math.random()*2 : this.obj.x + Math.random()*2
        // this.obj.x = this.obj.x + 2
        // this.x = this.x + 20
        super.draw(this.image,
            0, 0,
            this.image.width, this.image.height,
            this.obj.x, this.obj.y,
            this.obj.width, this.obj.height);
    }
    static dataInit(imgwidth, imgheight, width, height) {
        this.imgwidth = imgwidth
        this.imgheight = imgheight
        this.width = width
        this.height = height
    }
}