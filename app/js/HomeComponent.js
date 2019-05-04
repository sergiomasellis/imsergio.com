import React from 'react';

class HomeComponent extends React.Component {

    constructor(props){
        super(props);

        this.font = {
            x: 0,
            y: 0,
            origin: {
                x: -90,
                y: -90
            },
            hello: ['Hello', 'Hola', 'Bonjour', '&#20320;&#22909;', 'Hallo', 'Moi', 'Aluu', '&#12371;&#12435;&#12395;&#12385;&#12399;', 'Olá', 'Chào', 'Buon giorno']
        };

        
        // this.header = document.getElementById('logo');
        // this.firstName = document.getElementsByClassName('welcome__firstName')[0];
        // this.lastName = document.getElementsByClassName('welcome__lastName')[0];

        this.state = {
            homeLoaded: false,
            changeText: false
        };

        this.header = React.createRef();
        this.firstName = React.createRef();
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.props.onSetUpdate(this.update);

        // setTimeout(() => {
        //     this.state.changeText = true;
        //     // this.lastName.textContent = "H";
        //     setInterval(() => {
        //         this.firstName.current.innerHTML = this.font.hello[Math.floor(Math.random() * this.font.hello.length)];
        //     }, 1500);
        // }, 15000);
    }

    update(mouseX, mouseY, canvasWidth, canvasHeight) {
        
        this.font.y = this.calculateRotation(mouseX, 0, canvasWidth, -30, 30);
        this.font.x = this.calculateRotation(mouseY, 0, canvasHeight, -30, 30);

        // Rotate Header based on deg from mouse move
        var style = "translate(-50%, -50%) rotateX(" + this.font.x + "deg) rotateY(" + this.font.y + "deg)";
        

        this.header.current.style.transform = style;
        this.header.current.style.webkitTransform = style;
        this.header.current.style.mozTransform = style;
        this.header.current.style.msTransform = style;
        this.header.current.style.oTransform = style;        
    }

    rotate(x, y) {
        this.font.x = x;
        this.font.y = y;
    }

    calculateRotation(x, in_min, in_max, out_min, out_max) {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    render() {
        return (
            <div ref={this.header} id="logo" className={`welcome ${(this.props.loaded) ? 'loaded' : 'not-loaded'} ${(this.props.loaded) ? 'show':'hide'}`}>
                <span ref={this.firstName} className="welcome__firstName example-one">Hello</span>
                <span className="welcome__lastName">Im Sergio</span>
            </div>
        );
    }
}

export default HomeComponent;