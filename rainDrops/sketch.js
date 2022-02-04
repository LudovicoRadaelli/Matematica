//VERSIONE CLICCABILE

/* r = [];
cX = [];
cY = [];
dropColor = []
let dropOn = false;
let rain;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB,400);
  rain = new p5.Noise("pink")
}

function draw() {
  background(0);
  
  if(dropOn) {
    for(let i = 0; i < r.length; i++) {
      if(r[i] <= 400) {
        r[i] += 1;
        stroke(dropColor[i], 400, 400- r[i]);
        strokeWeight(4);
        noFill();
        ellipse(cX[i],cY[i],r[i],r[i]); 
      }   
    }
    
  }
  
}

function mouseClicked() {
  
  dropOn = true;
  r.push(0);
  cX.push(mouseX);
  cY.push(mouseY);
  dropColor.push(random(400))
  rain.start();
  
} */



//VERSIONE RANDOM

r = [];
cX = [];
cY = [];
dropColor = []
let dropOn = false;
let start = false;
let rain;
let timer = 0;

function preload() {
  soundFormats('mp3');
  mySound = loadSound('https://ludovicoradaelli.github.io/Matematica/rainDrops/sound/rain.mp3');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, 400);
  colorMode(HSB,400);
  rain = new p5.Noise("white")
}

function draw() {
  background(0);
  
  if(dropOn) {
    for(let i = 0; i < r.length; i++) {
      if(r[i] <= 400) {
        r[i] += 3;
        stroke(dropColor[i], 400, 400- r[i]);
        strokeWeight(4);
        noFill();
        ellipse(cX[i],cY[i],r[i],r[i]); 
      } else {
        r.shift();
        cX.shift();
        cY.shift();
        dropColor.shift();
      }
    }
    
  }

  if(start) {
    if(timer%1 === 0) {
        console.log("daje");
        dropOn = true;
        r.push(0);
        cX.push(random(window.innerWidth));
        cY.push(random(window.innerHeight));
        dropColor.push(random(400));
      }
  }
  
  
  timer++;
  console.log(r.length)
}

function mouseClicked() {
    start = true;
    rain.play();
} 
