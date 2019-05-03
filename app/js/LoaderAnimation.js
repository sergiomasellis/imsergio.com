import { Lerp } from "./Utils";

class LoaderAnimation {
    constructor(){
        this.welcome = document.getElementsByClassName('welcome')[0];
        this.loader = document.getElementsByClassName('loader')[0];
        
        this.rotateAmount = {default: 1, next: 1};
        this.gradientAmount = {default: 1, next: 1};
        this.loaded = false;
        this.loaderAnimationComplete = false;
        
        let loaderInterval = setInterval(function(){
            
            // this.rotateAmount.next += 90;

            // gradient
            this.gradientAmount.next += 25;
                    
            
            if(this.gradientAmount.default >= 100) {
                clearInterval(loaderInterval);
                this.loaded = true;
            }
        
        }.bind(this), 3000);
    }
    
    update(mouseX, mouseY) {
        if(!this.loaded){
            this.rotateAmount.default = Lerp(this.rotateAmount.default, this.rotateAmount.next, '0.1');
            this.gradientAmount.default = Lerp(this.gradientAmount.default, this.gradientAmount.next, '0.1');
            
            const stylePosition = `translate(-50%, -50%) rotate(${this.rotateAmount.default-1}deg)`;

            this.loader.style.transform = stylePosition;
            this.loader.style.webkitTransform = stylePosition;
            this.loader.style.mozTransform = stylePosition;
            this.loader.style.msTransform = stylePosition;
            this.loader.style.oTransform = stylePosition;

            
            this.loader.style.backgroundImage = `linear-gradient(to top, rgb(255, 255, 255) 0%, rgb(255, 255, 255) ${this.gradientAmount.default-1}%, #230046 ${this.gradientAmount.default-1}%, #230046 100%)`;
        } else if(this.loaded && !this.loaderAnimationComplete) {
            // this.loader.classList.add('fadeout');
            // this.loader.style.transition = '0.5s transform ease-in';
            const stylePosition = `translate(0px, 0px) scale(0.3)`;
            this.loader.style.left = 0;
            this.loader.style.top = 0;
            this.loader.style.transform = stylePosition;
            this.loader.style.webkitTransform = stylePosition;
            this.loader.style.mozTransform = stylePosition;
            this.loader.style.msTransform = stylePosition;
            this.loader.style.oTransform = stylePosition;
            this.loaderAnimationComplete = true;
            
            // CHANGE THIS TO A REACT COMPONENT SO I CAN PASS LOADED STATE TO PARENT
            this.welcome.classList.remove('not-loaded');
            this.welcome.classList.add('loaded');
        }
    }
}

export default LoaderAnimation;