import { Lerp } from "./Utils";

class CursorAnimation {
    constructor(canvasCenterX, canvasCenterY) {
        this.cursor = {
            x: canvasCenterX, 
            y: canvasCenterY, 
            width: { default: 20, hover: 0 },
            scale: { default: 1, hover: 1.5},
            color: { default: {r: 0, g:0, b:0, a: 0}, hover: {r: 133, g:30, b:62, a:1}},
            bg: { default: {r: 255, g:255, b:255, a: 1}, hover: {r: 133, g:30, b:62, a: 1}},
            outerBg: { default: {r: 255, g:255, b:255, a: 1}, hover: {r: 133, g:30, b:62, a: 0}},
            target: 'canvas',
            element: document.getElementsByClassName('cursor')[0],
            elementOuter: document.getElementsByClassName('cursor__outer')[0],
            elementInner: document.getElementsByClassName('cursor__inner')[0]
        };
    }
    
    update(mouseX, mouseY) {

        this.cursor.x = Lerp(this.cursor.x, mouseX, 0.05);
        this.cursor.y = Lerp(this.cursor.y, mouseY, 0.07);
        this.cursor.scale.default = Lerp(this.cursor.scale.default, this.cursor.scale.hover, 0.01);
        
        this.cursor.color.default.r = Lerp(this.cursor.color.default.r, this.cursor.color.hover.r, 0.1);
        this.cursor.color.default.g = Lerp(this.cursor.color.default.g, this.cursor.color.hover.g, 0.1);
        this.cursor.color.default.b = Lerp(this.cursor.color.default.b, this.cursor.color.hover.b, 0.1);
        this.cursor.color.default.a = Lerp(this.cursor.color.default.a, this.cursor.color.hover.a, 0.1);

        this.cursor.bg.default.r = Lerp(this.cursor.bg.default.r, this.cursor.bg.hover.r, 0.1);
        this.cursor.bg.default.g = Lerp(this.cursor.bg.default.g, this.cursor.bg.hover.g, 0.1);
        this.cursor.bg.default.b = Lerp(this.cursor.bg.default.b, this.cursor.bg.hover.b, 0.1);
        this.cursor.bg.default.a = Lerp(this.cursor.bg.default.a, this.cursor.bg.hover.a, 0.1);
        
        this.cursor.outerBg.default.r = Lerp(this.cursor.outerBg.default.r, this.cursor.outerBg.hover.r, 0.1);
        this.cursor.outerBg.default.g = Lerp(this.cursor.outerBg.default.g, this.cursor.outerBg.hover.g, 0.1);
        this.cursor.outerBg.default.b = Lerp(this.cursor.outerBg.default.b, this.cursor.outerBg.hover.b, 0.1);
        this.cursor.outerBg.default.a = Lerp(this.cursor.outerBg.default.a, this.cursor.outerBg.hover.a, 0.1);

        this.cursor.elementInner.style.borderColor = `rgba(${this.cursor.color.default.r}, ${this.cursor.color.default.g}, ${this.cursor.color.default.b}, ${this.cursor.color.default.a}`;
        this.cursor.elementInner.style.backgroundColor = `rgba(${this.cursor.bg.default.r}, ${this.cursor.bg.default.g}, ${this.cursor.bg.default.b}, ${this.cursor.bg.default.a})`;
        this.cursor.elementOuter.style.borderColor = `rgba(${ this.cursor.outerBg.default.r}, ${ this.cursor.outerBg.default.g}, ${ this.cursor.outerBg.default.b}, ${ this.cursor.outerBg.default.a}`;
        
        const stylePosition = `translate(${Math.floor(this.cursor.x-20)}px, ${Math.floor(this.cursor.y-20)}px)`;
        this.cursor.element.style.transform = stylePosition;
        this.cursor.element.style.webkitTransform = stylePosition;
        this.cursor.element.style.mozTransform = stylePosition;
        this.cursor.element.style.msTransform = stylePosition;
        this.cursor.element.style.oTransform = stylePosition;
        
        const stylePosition2 = `scale(${this.cursor.scale.default})`;
        this.cursor.elementOuter.style.transform = stylePosition2;
        this.cursor.elementOuter.style.webkitTransform = stylePosition2;
        this.cursor.elementOuter.style.mozTransform = stylePosition2;
        this.cursor.elementOuter.style.msTransform = stylePosition2;
        this.cursor.elementOuter.style.oTransform = stylePosition2;
        
        // cursor.x > canvas.width/2
        // console.log(this.cursor.target)
        if(this.cursor.target == 'NotOnScreen') {
            this.cursor.scale.hover = 0.1;
            this.cursor.bg.hover = {r: 255, g:255, b:255, a:0};
        } else if(this.cursor.target != 'canvas' && this.cursor.target != 'navigation-modal') {
            this.cursor.scale.hover = 1;
            this.cursor.color.hover = {r: 0, g:30, b:62, a:0};
            this.cursor.bg.hover = {r: 0, g:255, b:255, a:1};
            this.cursor.outerBg.hover = {r: 12, g:233, b:193, a:0.99};
        } else {
            this.cursor.scale.hover = 0.1;
            this.cursor.color.hover = {r: 255, g:255, b:255, a:0.99};
            this.cursor.bg.hover = {r: 255, g:255, b:255, a:0.99};
            this.cursor.outerBg.hover = {r: 255, g:111, b:97, a:0};
        }
    }
}

export default CursorAnimation;