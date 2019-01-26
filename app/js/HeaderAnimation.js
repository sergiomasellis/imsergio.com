class HeaderAnimation {

    constructor(){
        this.font = {
            x: 0,
            y: 0,
            origin: {
                x: -90,
                y: -90
            }
        };
    }

    update(mouseX, mouseY, canvasWidth, canvasHeight) {
        this.font.y = this.calculateRotation(mouseX, 0, canvasWidth, -30, 30);
        this.font.x = this.calculateRotation(mouseY, 0, canvasHeight, -30, 30);

        // Rotate Header based on deg from mouse move
        var style = "translate(-50%, -50%) rotateX(" + font.x + "deg) rotateY(" + font.y + "deg)";
        header.style.transform = style;
        header.style.webkitTransform = style;
        header.style.mozTransform = style;
        header.style.msTransform = style;
        header.style.oTransform = style;
    }

    calculateRotation(x, in_min, in_max, out_min, out_max) {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
}

export default HeaderAnimation;