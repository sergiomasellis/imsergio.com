
import { Lerp } from "./Utils";


class HomeAnimation {
    constructor() {

        // Home Page background
        this.background = {
            pallete: [{r: 5, g:30, b:62}, {r: 37, g:30, b:62}, {r: 69, g:30, b:62}, {r: 101, g:30, b:62}], 
            color: {r:  Math.floor(Math.random() * 256), g: Math.floor(Math.random() * 256), b: Math.floor(Math.random() * 256)}, 
            colorUpdate: {r:  Math.floor(Math.random() * 256), g: Math.floor(Math.random() * 256), b: Math.floor(Math.random() * 256)}
        };
    }

    init() {

        // Setup default background color
        this.context.fillStyle = 'rgb('+ this.background.color.r +','+ this.background.color.g +','+ this.background.color.b +')';
        this.context.fillRect(0,0,this.canvas.width, this.canvas.height);
    }


    update() {
        const currentColor = this.background.pallete[Math.floor(Math.random()*this.background.pallete.length)]
        this.background.colorUpdate.r = currentColor.r;
        this.background.colorUpdate.g = currentColor.g;
        this.background.colorUpdate.b = currentColor.b;
    }

    draw(canvas, context) {
        
        this.background.color.r = Lerp(this.background.color.r, this.background.colorUpdate.r, 0.01);
        this.background.color.g = Lerp(this.background.color.g, this.background.colorUpdate.g, 0.01);
        this.background.color.b = Lerp(this.background.color.b, this.background.colorUpdate.b, 0.01);
        
        context.fillStyle = 'rgb('+ this.background.color.r +','+ this.background.color.g +','+ this.background.color.b +')';
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
}


export default HomeAnimation;