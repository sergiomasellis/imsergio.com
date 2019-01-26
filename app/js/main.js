import '../scss/main.scss';
import HeaderAnimation from "./HeaderAnimation";
import { Lerp } from "./Utils";


class Main {
    constructor() {

        // define dom Elements
        this.canvas = document.getElementById('canvas');
        this.context = canvas.getContext('2d');
        this.header = document.getElementById('logo');
        this.lastName = document.getElementsByClassName('lastName');
        this.target = window;

        // Mouse related properties
        this.mouse = {x: 0, y: 0};
        this.cursor = {
            x: this.canvas.width/2, 
            y: this.canvas.height/2, 
            width: 20, 
            widthHover: 0, 
            color:{r: 0, g:0, b:0}, 
            colorHover:{r: 133, g:30, b:62},
            cursorTarget: 'canvas'
        };

        // Home Page background
        this.background = {
            pallete: [{r: 5, g:30, b:62}, {r: 37, g:30, b:62}, {r: 69, g:30, b:62}, {r: 101, g:30, b:62}], 
            color: {r:  Math.floor(Math.random() * 256), g: Math.floor(Math.random() * 256), b: Math.floor(Math.random() * 256)}, 
            colorUpdate: {r:  Math.floor(Math.random() * 256), g: Math.floor(Math.random() * 256), b: Math.floor(Math.random() * 256)}
        };


        // init
        this.init();
        // this.events();

    }

    init() {
        // Don't be rude say hi!
        console.log('Welcome to Imsergio.com');

        // Setup default background color
        this.context.fillStyle = 'rgb('+ this.background.color.r +','+ this.background.color.g +','+ this.background.color.b +')';
        this.context.fillRect(0,0,this.canvas.width, this.canvas.height);

        this.context.beginPath();
        this.context.arc(this.cursor.x, this.cursor.y, this.cursor.width, 0, 2 * Math.PI);
        this.context.strokeStyle = '#ffffff';
        this.context.stroke();

        this.HeaderAnimation = new HeaderAnimation();

        // Update Main Scene
        this.update();
    }

    events() {
        this.target.addEventListener('resize', this.resizeCanvas.bind(this), false);
        this.target.addEventListener('mousemove', this.cursorMoved.bind(this), false);
        this.target.addEventListener('mouseout', this.cursorOut.bind(this), false);
    }

    resizeCanvas()  {
        this.canvas.width = this.target.innerWidth;
        this.canvas.height = this.target.innerHeight;
    }

    cursorMoved({clientX, clientY, target}) {

        // Set Mouse position on mouse move
        this.mouse.x = clientX;
        this.mouse.y = clientY;
        
        // Update to random color on mouse move
        const currentColor = background.pallete[Math.floor(Math.random()*background.pallete.length)];
        background.colorUpdate.r = currentColor.r;
        background.colorUpdate.g = currentColor.g;
        background.colorUpdate.b = currentColor.b;
        
        // Look at dom ID attrib to see whos being hovered
        this.cursor.cursorTarget = target.id;

        // Set new deg for title rotation on mouse move
        this.HeaderAnimation.update(this.mouse.x, this.mouse.y, this.canvas.width, this.canvas.height);
    }

    cursorOut() {
        this.HeaderAnimation.font.x = 0;
        this.HeaderAnimation.font.y = 0;
        this.cursor.cursorTarget = 'NotOnScreen'
    }

    update() {

        // Rotate Header based on deg from mouse move
        var style = "translate(-50%, -50%) rotateX(" + this.HeaderAnimation.font.x + "deg) rotateY(" + this.HeaderAnimation.font.y + "deg)";
        this.header.style.transform = style;
        this.header.style.webkitTransform = style;
        this.header.style.mozTransform = style;
        this.header.style.msTransform = style;
        this.header.style.oTransform = style;
        
        this.background.color.r = Lerp(this.background.color.r, this.background.colorUpdate.r, 0.01);
        this.background.color.g = Lerp(this.background.color.g, this.background.colorUpdate.g, 0.01);
        this.background.color.b = Lerp(this.background.color.b, this.background.colorUpdate.b, 0.01);
        
        this.context.fillStyle = 'rgb('+ this.background.color.r +','+ this.background.color.g +','+ this.background.color.b +')';
        this.context.fillRect(0,0,canvas.width, canvas.height);
            
        this.context.beginPath();
        
        this.cursor.x = Lerp(this.cursor.x, this.mouse.x, 0.05);
        this.cursor.y = Lerp(this.cursor.y, this.mouse.y, 0.07);
        this.cursor.width = Lerp(this.cursor.width, this.cursor.widthHover, 0.1);
        
        this.cursor.color.r = Lerp(this.cursor.color.r, this.cursor.colorHover.r, 0.1);
        this.cursor.color.g = Lerp(this.cursor.color.g, this.cursor.colorHover.g, 0.1);
        this.cursor.color.b = Lerp(this.cursor.color.b, this.cursor.colorHover.b, 0.1);
        
        this.context.arc(this.cursor.x, this.cursor.y, this.cursor.width, 0, 2 * Math.PI);
        this.context.strokeStyle = 'rgb('+ this.cursor.color.r +','+ this.cursor.color.g +','+ this.cursor.color.b +')';
        // this.context.fillStyle = 'rgb('+ this.cursor.color.r +','+ this.cursor.color.g +','+ this.cursor.color.b +')';
        // this.context.fill();
        this.context.stroke();
        
        
        // cursor.x > canvas.width/2
        if(this.cursor.cursorTarget == 'NotOnScreen') {
            this.cursor.widthHover = 0;
        } else if(this.cursor.cursorTarget != 'canvas') {
            this.cursor.widthHover = 50;
            this.cursor.colorHover = {r: 255, g:255, b:255};
        } else {
            this.cursor.widthHover = 20;
            this.cursor.colorHover = {r: 133, g:30, b:62};
        }
        
        this.target.requestAnimationFrame(this.update);
    }
}


window.imsergio = new Main();