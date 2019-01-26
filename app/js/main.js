import '../scss/main.scss';

(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        header = document.getElementById('logo'),
        lastName = document.getElementsByClassName('lastName'),
        mouse = {x: 0, y: 0},
        cursor = { 
            x: canvas.width/2, 
            y: canvas.height/2, 
            width: 20, 
            widthHover: 0, 
            color:{r: 0, g:0, b:0}, 
            colorHover:{r: 133, g:30, b:62},
            cursorTarget: 'canvas'
        },
        background = {
            pallete: [{r: 5, g:30, b:62}, {r: 37, g:30, b:62}, {r: 69, g:30, b:62}, {r: 101, g:30, b:62}], 
            color: {r:  Math.floor(Math.random() * 256), g: Math.floor(Math.random() * 256), b: Math.floor(Math.random() * 256)}, 
            colorUpdate: {r:  Math.floor(Math.random() * 256), g: Math.floor(Math.random() * 256), b: Math.floor(Math.random() * 256)}
        },
        font = {
            x: 0,
            y: 0,
            origin: {
                x: -90,
                y: -90
            }
        };

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            setup();
    }
    
    resizeCanvas();
    
    function lerp(a, b, t){
        return (1-t)*a+t*b;
    }

    function setup() {
                    
        context.fillStyle = 'rgb('+ background.color.r +','+ background.color.g +','+ background.color.b +')';
        context.fillRect(0,0,canvas.width, canvas.height);

        context.beginPath();
        context.arc(cursor.x, cursor.y, cursor.width, 0, 2 * Math.PI);
        context.strokeStyle = '#ffffff';
        context.stroke();
        
        
        window.addEventListener('mousemove', function({clientX, clientY, target}){
            // Set Mouse position on mouse move
            mouse.x = clientX;
            mouse.y = clientY;
            
            // Update to random color on mouse move
            let currentColor = background.pallete[Math.floor(Math.random()*background.pallete.length)];
            background.colorUpdate.r = currentColor.r;
            background.colorUpdate.g = currentColor.g;
            background.colorUpdate.b = currentColor.b;
            

            cursor.cursorTarget = target.id;
            // Set new deg for title rotation on mouse move
            // font.x = mouse.x - font.origin.x;
            // font.y = (mouse.y - font.origin.y);
            
            console.log(mouse.x, mouse.y);
            // font.y = font.origin.x / (((canvas.width / mouse.x) * 100) / 45);
            // font.x = font.origin.y / (((canvas.height / mouse.y) * 100) / 45);
            let center = {x: canvas.width/2, y: canvas.height/2}
            console.log(center);
            
            font.y = calculateHeaderRotation(mouse.x, 0, canvas.width, -30, 30);
            font.x = calculateHeaderRotation(mouse.y, 0, canvas.height, -30, 30);
            // if(font.x < 23) font.x * -1;
            // if(font.y < 23) font.y * -1;
            
        }, false);
        
        
        // Reset values when mouse leaves window
        window.addEventListener('mouseout', function(){
            font.x = 0;
            font.y = 0;
            cursor.cursorTarget = 'NotOnScreen'
        }, false)
        
        update(); 
    }
    
    function calculateHeaderRotation(x, in_min, in_max, out_min, out_max) {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
    
    function update() {
        
        // Rotate Header based on deg from mouse move
        var style = "translate(-50%, -50%) rotateX(" + font.x + "deg) rotateY(" + font.y + "deg)";
        header.style.transform = style;
        header.style.webkitTransform = style;
        header.style.mozTransform = style;
        header.style.msTransform = style;
        header.style.oTransform = style;
        
        background.color.r = lerp(background.color.r, background.colorUpdate.r, 0.01);
        background.color.g = lerp(background.color.g, background.colorUpdate.g, 0.01);
        background.color.b = lerp(background.color.b, background.colorUpdate.b, 0.01);
        
        context.fillStyle = 'rgb('+ background.color.r +','+ background.color.g +','+ background.color.b +')';
        context.fillRect(0,0,canvas.width, canvas.height);
            
        context.beginPath();
        
        cursor.x = lerp(cursor.x, mouse.x, 0.05);
        cursor.y = lerp(cursor.y, mouse.y, 0.07);
        cursor.width = lerp(cursor.width, cursor.widthHover, 0.1);
        
        cursor.color.r = lerp(cursor.color.r, cursor.colorHover.r, 0.1);
        cursor.color.g = lerp(cursor.color.g, cursor.colorHover.g, 0.1);
        cursor.color.b = lerp(cursor.color.b, cursor.colorHover.b, 0.1);
        
        context.arc(cursor.x, cursor.y, cursor.width, 0, 2 * Math.PI);
        context.strokeStyle = 'rgb('+ cursor.color.r +','+ cursor.color.g +','+ cursor.color.b +')';
        // context.fillStyle = 'rgb('+ cursor.color.r +','+ cursor.color.g +','+ cursor.color.b +')';
        // context.fill();
        context.stroke();
        
        
        // cursor.x > canvas.width/2
        if(cursor.cursorTarget == 'NotOnScreen') {
            cursor.widthHover = 0;
        } else if(cursor.cursorTarget != 'canvas') {
            cursor.widthHover = 50;
            cursor.colorHover = {r: 255, g:255, b:255};
        } else {
            cursor.widthHover = 20;
            cursor.colorHover = {r: 133, g:30, b:62};
        }
        
        window.requestAnimationFrame(update);
    }
    

})();
