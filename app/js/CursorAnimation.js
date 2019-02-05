import { Lerp } from "./Utils";

class CursorAnimation {
    constructor() {
        this.cursor = {
            x: 0, 
            y: 0, 
            width: 20, 
            widthHover: 0,
            scale: 1,
            scaleHover: 1.5, 
            color:{r: 0, g:0, b:0, a: 0}, 
            colorHover:{r: 133, g:30, b:62, a:0},
            colorBg: {r: 255, g:255, b:255, a: 1},
            colorBgHover: {r: 133, g:30, b:62, a: 1},
            target: 'canvas',
            element: document.getElementsByClassName('cursor')[0],
            elementOuter: document.getElementsByClassName('cursor__outer')[0],
            elementInner: document.getElementsByClassName('cursor__inner')[0]
        };

    }
    
    update(mouseX, mouseY) {

        this.cursor.x = Lerp(this.cursor.x, mouseX, 0.05);
        this.cursor.y = Lerp(this.cursor.y, mouseY, 0.07);
        this.cursor.scale = Lerp(this.cursor.scale, this.cursor.scaleHover, 0.1);
        
        this.cursor.color.r = Lerp(this.cursor.color.r, this.cursor.colorHover.r, 0.1);
        this.cursor.color.g = Lerp(this.cursor.color.g, this.cursor.colorHover.g, 0.1);
        this.cursor.color.b = Lerp(this.cursor.color.b, this.cursor.colorHover.b, 0.1);
        this.cursor.color.a = Lerp(this.cursor.color.a, this.cursor.colorHover.a, 0.1);

        this.cursor.colorBg.r = Lerp(this.cursor.colorBg.r, this.cursor.colorBgHover.r, 0.1);
        this.cursor.colorBg.g = Lerp(this.cursor.colorBg.g, this.cursor.colorBgHover.g, 0.1);
        this.cursor.colorBg.b = Lerp(this.cursor.colorBg.b, this.cursor.colorBgHover.b, 0.1);
        this.cursor.colorBg.a = Lerp(this.cursor.colorBg.a, this.cursor.colorBgHover.a, 0.1);

        this.cursor.element.style.borderColor = `rgba(${this.cursor.color.r}, ${this.cursor.color.g}, ${this.cursor.color.b}, ${this.cursor.color.a}`;
        this.cursor.element.style.backgroundColor = `rgba(${this.cursor.colorBg.r}, ${this.cursor.colorBg.g}, ${this.cursor.colorBg.b}, ${this.cursor.colorBg.a})`;
        
        const stylePosition = `translate(${Math.floor(this.cursor.x)}px, ${Math.floor(this.cursor.y)}px) scale(${this.cursor.scale})`;
        this.cursor.element.style.transform = stylePosition;
        this.cursor.element.style.webkitTransform = stylePosition;
        this.cursor.element.style.mozTransform = stylePosition;
        this.cursor.element.style.msTransform = stylePosition;
        this.cursor.element.style.oTransform = stylePosition;


        
        // cursor.x > canvas.width/2
        if(this.cursor.target == 'NotOnScreen') {
            this.cursor.scaleHover = 0;
        } else if(this.cursor.target != 'canvas') {
            this.cursor.scaleHover = 1;
            this.cursor.colorHover = {r: 0, g:30, b:62, a: 1};
            this.cursor.colorBgHover = {r: 255, g:255, b:255, a: 0.0};
        } else {
            this.cursor.scaleHover = 1;
            this.cursor.colorHover = {r: 255, g:255, b:255, a: 0.0};
            this.cursor.colorBgHover = {r: 255, g:255, b:255, a: 0.0};
        }

        
    }
}

export default CursorAnimation;