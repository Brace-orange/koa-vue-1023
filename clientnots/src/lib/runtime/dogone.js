// 背景
import {Sprite} from "../base/Spite";
// import {DataStore} from "../base/DataStore.js";

export default class DogOne extends Sprite {
    constructor() {
        const image = Sprite.getImage('dog1');
        console.log('101010', image)
        super(image,
            0, 0,
            image.width, image.height,
            20, 100,
            80, 80);
    }
}