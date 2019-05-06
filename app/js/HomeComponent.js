import React, {Component} from 'react';

class HomeComponent extends Component {

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

        this.state = {
            changeText: false
        };

        this.header = React.createRef();
        this.firstName = React.createRef();
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.props.onSetUpdate(this.update);
    }

    update(mouseX, mouseY, canvasWidth, canvasHeight) {

        // console.log(this.state)
        if(!this.props.loaded) return false;

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

        setTimeout(() => {
            this.state.changeText = true;
            // this.lastName.textContent = "H";
            setInterval(() => {
                this.firstName.current.innerHTML = this.font.hello[Math.floor(Math.random() * this.font.hello.length)];
            }, 1500);
        }, 15000);

        return (
            <div ref={this.header} className={`home ${(this.props.loaded) ? 'home--loaded' : 'home--not-loaded'} ${(this.props.loaded) ? 'show':'hide'}`}>
                <span ref={this.firstName} className="home__firstName">Hello</span>
                <span className="home__lastName">Im Sergio</span>
            </div>
        );
    }
}

export default HomeComponent;