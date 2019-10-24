import {Sprite} from "../base/Spite";
// import {DataStore} from "../base/DataStore.js";

export default class BackGround extends Sprite {
    constructor() {
        const image = Sprite.getImage('pig1');
        console.log('101010', image)
        const random = Math.random()*100+10
        super(image,
            0, 0,
            image.width, image.height,
            0, 0,
            random, random + 5);
    }
}