import { Lerp } from "./Utils";


import React from 'react';

class LoaderComponent extends React.Component {

    constructor(props){
        super(props);
        this.loader = React.createRef();
        
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
                this.props.onLoaded();
            }
        
        }.bind(this), 3000);

        this.update = this.update.bind(this);
    }

    
    componentDidMount() {
        this.props.onSetUpdate(this.update);
    }
    
    update() {
        if(!this.loaded){
            this.rotateAmount.default = Lerp(this.rotateAmount.default, this.rotateAmount.next, '0.1');
            this.gradientAmount.default = Lerp(this.gradientAmount.default, this.gradientAmount.next, '0.1');
            
            const stylePosition = `translate(-50%, -50%) rotate(${this.rotateAmount.default-1}deg)`;

            this.loader.current.style.transform = stylePosition;
            this.loader.current.style.webkitTransform = stylePosition;
            this.loader.current.style.mozTransform = stylePosition;
            this.loader.current.style.msTransform = stylePosition;
            this.loader.current.style.oTransform = stylePosition;

            
            this.loader.current.style.backgroundImage = `linear-gradient(to top, rgb(255, 255, 255) 0%, rgb(255, 255, 255) ${this.gradientAmount.default-1}%, #230046 ${this.gradientAmount.default-1}%, #230046 100%)`;
        } else if(this.loaded && !this.loaderAnimationComplete) {
            // this.loader.current.classList.add('fadeout');
            // this.loader.current.style.transition = '0.5s transform ease-in';
            const stylePosition = `translate(0px, 0px) scale(0.3)`;
            this.loader.current.style.left = 0;
            this.loader.current.style.top = 0;
            this.loader.current.style.transform = stylePosition;
            this.loader.current.style.webkitTransform = stylePosition;
            this.loader.current.style.mozTransform = stylePosition;
            this.loader.current.style.msTransform = stylePosition;
            this.loader.current.style.oTransform = stylePosition;
            this.loaderAnimationComplete = true;
        }
    }

    render() {
        return (
            <div ref={this.loader} className="loader">
                <span className="loader__text">SM</span>
            </div>
        )
    }
}

export default LoaderComponent;