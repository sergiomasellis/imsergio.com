class HeaderAnimation {

    constructor(){

        this.font = {
            x: 0,
            y: 0,
            origin: {
                x: -90,
                y: -90
            },
            hello: ['Hello', 'Hola', 'Bonjour', '&#20320;&#22909;', 'Hallo', 'Moi', 'Aluu', '&#12371;&#12435;&#12395;&#12385;&#12399;', 'Olá', 'Živijo', 'Chào', 'Buon giorno']
        };

        this.header = document.getElementById('logo');
        this.firstName = document.getElementsByClassName('welcome__firstName')[0];
        this.lastName = document.getElementsByClassName('welcome__lastName')[0];
        
        this.changeText = false;
        
        setTimeout(() => {
            this.changeText = true;
            // this.lastName.textContent = "H";
            setInterval(() => {
                this.firstName.innerHTML = this.font.hello[Math.floor(Math.random() * this.font.hello.length)];
            }, 1500);
        }, 15000);
    }

    update(mouseX, mouseY, canvasWidth, canvasHeight) {
        this.font.y = this.calculateRotation(mouseX, 0, canvasWidth, -30, 30);
        this.font.x = this.calculateRotation(mouseY, 0, canvasHeight, -30, 30);

        // Rotate Header based on deg from mouse move
        var style = "translate(-50%, -50%) rotateX(" + this.font.x + "deg) rotateY(" + this.font.y + "deg)";
        this.header.style.transform = style;
        this.header.style.webkitTransform = style;
        this.header.style.mozTransform = style;
        this.header.style.msTransform = style;
        this.header.style.oTransform = style;
        
        // if(this.changeText){
         
        //     setInterval(() => {
                
        //     }, interval);
        // }        
    }

    rotate(x, y) {
        this.font.x = x;
        this.font.y = y;
    }

    calculateRotation(x, in_min, in_max, out_min, out_max) {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
}

export default HeaderAnimation;