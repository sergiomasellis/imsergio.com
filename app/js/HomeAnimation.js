class HomeAnimation {
    constructor() {

        // Home Page background
        this.background = {
            pallete: [{r: 74, g:72, b:67}, {r: 113, g:106, b:77}, {r: 24, g:74, b:69}], 
            color: {r: 43, g:0, b:89},
            colorUpdate: {r:  0, g: 0, b: 0}
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
        
        // this.background.color.r = Lerp(this.background.color.r, this.background.colorUpdate.r, 0.01);
        // this.background.color.g = Lerp(this.background.color.g, this.background.colorUpdate.g, 0.01);
        // this.background.color.b = Lerp(this.background.color.b, this.background.colorUpdate.b, 0.01);
        
        context.fillStyle = 'rgb('+ this.background.color.r +','+ this.background.color.g +','+ this.background.color.b +')';
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
}


export default HomeAnimation;