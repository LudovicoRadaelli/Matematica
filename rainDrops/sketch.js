//VERSIONE RANDOM

r = [];
cX = [];
cY = [];
dropColor = []
let dropOn = false;
let start = false;
let rain;
let timer = 0;

let cnv;

function preload() {
  soundFormats('mp3');
  rain = loadSound('https://ludovicoradaelli.github.io/Matematica/rainDrops/sound/rain.mp3');
}

function setup() {
  cnv = createCanvas(window.innerWidth, window.innerHeight);
  colorMode(HSB,400);
}

function draw() {
  
  background(0);
  
  if(dropOn) {
    for(let i = 0; i < r.length; i++) {
      if(r[i] <= 400) {
        r[i] += 3;
        stroke(dropColor[i], 400, 400- r[i]);
        strokeWeight(2);
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
}

function mouseClicked() {
    start = true;
    rain.play();
} 

//ffmpeg -i "frames(1)/%07d.png"  "video.mp4"
