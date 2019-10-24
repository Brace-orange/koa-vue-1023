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
        console.log(this.obj, 66666)
        console.log(this.obj.x, 88)
        this.obj.y = this.obj.y + 0.5
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