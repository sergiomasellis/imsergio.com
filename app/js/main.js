import '../scss/main.scss';
import HeaderAnimation from "./HeaderAnimation";
import CursorAnimation from "./CursorAnimation";
import { Lerp } from "./Utils";


class Main {
    constructor() {

        // define dom Elements
        this.canvas = document.getElementById('canvas');
        this.context = canvas.getContext('2d');
        this.lastName = document.getElementsByClassName('lastName');
        this.target = window;

        // Mouse related properties
        this.mouse = {x: 0, y: 0};

        // Home Page background
        this.background = {
            pallete: [{r: 5, g:30, b:62}, {r: 37, g:30, b:62}, {r: 69, g:30, b:62}, {r: 101, g:30, b:62}], 
            color: {r:  Math.floor(Math.random() * 256), g: Math.floor(Math.random() * 256), b: Math.floor(Math.random() * 256)}, 
            colorUpdate: {r:  Math.floor(Math.random() * 256), g: Math.floor(Math.random() * 256), b: Math.floor(Math.random() * 256)}
        };

        // init
        this.init();
        this.events();
    }

    init() {
        // Don't be rude say hi!
        console.log('Welcome to Imsergio.com');

        // Setup Canvas Default Size
        this.canvas.width = this.target.innerWidth;
        this.canvas.height = this.target.innerHeight;

        // Setup default background color
        this.context.fillStyle = 'rgb('+ this.background.color.r +','+ this.background.color.g +','+ this.background.color.b +')';
        this.context.fillRect(0,0,this.canvas.width, this.canvas.height);

        // Logo
        this.headerAnimationClass = new HeaderAnimation();
        // Cursor
        this.cursorAnimationClass = new CursorAnimation();

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
        const currentColor = this.background.pallete[Math.floor(Math.random()*this.background.pallete.length)];
        this.background.colorUpdate.r = currentColor.r;
        this.background.colorUpdate.g = currentColor.g;
        this.background.colorUpdate.b = currentColor.b;
        
        // Look at dom ID attrib to see whos being hovered
        this.cursorAnimationClass.cursor.target = target.className;

        // Set new deg for title rotation on mouse move
        this.headerAnimationClass.update(this.mouse.x, this.mouse.y, this.canvas.width, this.canvas.height);
        this.cursorAnimationClass.update(this.mouse.x, this.mouse.y, this.canvas.width, this.canvas.height);
    }

    cursorOut() {
        this.headerAnimationClass.rotate(0, 0);
        this.cursorAnimationClass.cursor.target = 'NotOnScreen';
    }

    update() {

        // Rotate Header based on deg from mouse move
        this.headerAnimationClass.update(this.mouse.x, this.mouse.y, this.canvas.width, this.canvas.height);
        
        this.background.color.r = Lerp(this.background.color.r, this.background.colorUpdate.r, 0.01);
        this.background.color.g = Lerp(this.background.color.g, this.background.colorUpdate.g, 0.01);
        this.background.color.b = Lerp(this.background.color.b, this.background.colorUpdate.b, 0.01);
        
        this.context.fillStyle = 'rgb('+ this.background.color.r +','+ this.background.color.g +','+ this.background.color.b +')';
        this.context.fillRect(0,0,canvas.width, canvas.height);

        this.cursorAnimationClass.update(this.mouse.x, this.mouse.y);
        
        this.target.requestAnimationFrame(this.update.bind(this));
    }
}


window.imsergio = new Main();