// 背景
import {Sprite} from "../base/Spite";
// import {DataStore} from "../base/DataStore.js";

export default class BackGround extends Sprite {
    constructor() {
        const image = Sprite.getImage('background');
        console.log('101010', image)
        super(image,
            0, 0,
            image.width, image.height,
            0, 0,
            image.width, image.height);
    }
}