import '../scss/main.scss';
import HeaderAnimation from "./HeaderAnimation";
import CursorAnimation from "./CursorAnimation";
// import Loading from "./LoadingIntro";
import HomeAnimation from "./HomeAnimation";
import LoaderAnimation from './LoaderAnimation';


class Main {
    constructor() {

        // define dom Elements
        this.canvas = document.getElementById('canvas');
        this.context = canvas.getContext('2d');
        this.target = window;

        // Mouse related properties
        this.mouse = {x: this.canvas.width/2, y: this.canvas.height/2};

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
        
        // Loader
        this.loaderAnimationClass = new LoaderAnimation();
        
        // Background
        // this.homeAnimationClass = new HomeAnimation();

        // Logo
        this.headerAnimationClass = new HeaderAnimation();

        // Cursor
        this.cursorAnimationClass = new CursorAnimation(this.canvas.width/2, this.canvas.height/2);

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
        // this.homeAnimationClass.update();

        
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
        
        // update loader position
        this.loaderAnimationClass.update(this.mouse.x, this.mouse.y);

        // Rotate Header based on deg from mouse move
        this.headerAnimationClass.update(this.mouse.x, this.mouse.y, this.canvas.width, this.canvas.height);

        // draw changes to BG
        // this.homeAnimationClass.draw(this.canvas, this.context);

        // Cursor animation raf
        this.cursorAnimationClass.update(this.mouse.x, this.mouse.y);
        
        this.target.requestAnimationFrame(this.update.bind(this));
    }
}


window.imsergio = new Main();