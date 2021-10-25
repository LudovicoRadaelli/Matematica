let color = document.getElementById("colorDiv-container").scrollTop % 360;
let letsDraw = true;
document.getElementById("colorDiv").style.backgroundColor = `hsl(${color}, 100%, 50%)`;

document.getElementById("colorDiv-container").addEventListener("scroll", changeColor);

function changeColor() {
    letsDraw = true;
    color = document.getElementById("colorDiv-container").scrollTop % 360;
    let input = document.getElementById("inputScroll");
    let output = document.getElementById("outputColor");
    console.log(`scrollTop: ${color}`)
    
    document.getElementById("colorDiv").style.backgroundColor = `hsl(${color}, 100%, 50%)`;
    input.innerHTML = `${document.getElementById("colorDiv-container").scrollTop}`;
    output.innerHTML = `${color}`
    
}

let u = document.getElementById("skecth1").offsetWidth/4;

const s1 = p => {
    p.setup = function() {
        p.cnv = p.createCanvas(4*u, 2*u);
        p.cnv.parent("skecth1");
        
        p.drawFunction();
    
    }

    p.draw = function() {
        if(letsDraw) {

            p.background(255);
            p.changeCoordinate();
            p.drawFunction();
            p.drawPoint();
            
            
            letsDraw = false;
        }
        
    }

    p.changeCoordinate = function() {
        p.translate(0,100);
        p.applyMatrix(1,0,0,-1,0,0);
    }

    p.drawPoint = function() {
        p.strokeWeight(2);
        p.colorMode(p.HSL,360,100,100);
        p.stroke("black")
        p.fill(color, 100, 50);
        p.ellipse(document.getElementById("colorDiv-container").scrollTop*u/360, color*u/360,10,10) 
    }

    p.drawFunction = function() {
        
        p.stroke("black");
        p.strokeWeight(2);
        p.line(0,0,0,p.width);
        p.line(0,0,p.width,0);
        
        p.strokeWeight(3);
        p.stroke("gray");
        p.line(0,0,u,u);
        p.line(u,0,2*u,u);
        p.line(2*u,0,3*u,u);
        p.line(3*u,0,4*u,u);
    }

}

new p5(s1);

let u2 = document.getElementById("skecth1").offsetWidth/20;

const s2 = p => {
    p.setup = function() {
        p.cnv = p.createCanvas(20*u2, 10*u2);
        p.cnv.parent("sketch2");
        
        p.drawFunction();
    
    }

    p.draw = function() {
        

            p.background(255);
            p.changeCoordinate();
            p.drawFunction();
            p.drawPoint();   
        
    }

    p.changeCoordinate = function() {
        p.translate(10,10*u2-10);
        p.applyMatrix(1,0,0,-1,0,0);
    }

    p.drawPoint = function() {
        p.strokeWeight(10);
        p.stroke("red")
        p.point(0,0)
    }

    p.drawFunction = function() {
        
        p.stroke("black");
        p.strokeWeight(2);
        p.line(0,0,0,p.width);
        p.line(0,0,p.width,0);
        
        p.strokeWeight(3);
        p.stroke("blue");
        p.line(0,0,10*u2,0);
        p.noFill()
        p.beginShape();
            for(let i = 0; i<10; i+=0.1 ) {
                p.vertex(10*u2 + i*u2, i*i*u2)
            }
        p.endShape();
    }
}
new p5(s2);

/* let osc, playing, freq, amp, enable;
playing = false;
enable = 0;

const s3 = p=> {

    p.setup = function() {
        p.cnv = p.createCanvas(100, 100);
        p.canvas.touchStarted(playOscillator)
        p.cnv.parent("sketch3")
        osc = new p5.Oscillator('sine');
    }

    p.draw = function() {
        p.background(220)
        freq = p.constrain(p.map(p.mouseX, 0, p.width, 100, 500), 100, 500);
        amp = p-constrain(p.map(p.mouseY, p.height, 0, 0, 1), 0, 1);

        if (playing) {
            // smooth the transitions by 0.1 seconds
            osc.freq(freq, 0.1);
            osc.amp(amp, 0.1);
        }
    }

    p.playOscillator = function() {
        // starting an oscillator on a user gesture will enable audio
        // in browsers that have a strict autoplay policy.
        // See also: userStartAudio();
        enable++;

        if(enable%2 === 0) {
            osc.start();
            playing = true;
            document.getElementById("play-button").innerHTML = "stop";
        } else if(enable%2 === 0) {
            osc.amp(0, 0.5);
            playing = false;
            document.getElementById("play-button").innerHTML = "stop";
        }
        
    }

    

}

new p5(s3); */

/* MathJax.typesetClear([document.getElementsByClassName("calcoliEquazione"), document.getElementsByClassName("nuovaEquazione")]);
MathJax.typesetPromise([document.getElementsByClassName("calcoliEquazione"), document.getElementsByClassName("nuovaEquazione")]).then(() => {}); */