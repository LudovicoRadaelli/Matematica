let posX = [];
posX[0] = 100;
posX[1] = 300;
posX[2] = 500;
posX[3] = 700;

let grabbed = []
for(let i=0; i<4; i++) {
  grabbed[i] = false;
}

let gridNumber;

let gridIsShowed = false;

let groove = false;

let t = 0;

let bpm = 120;

let dum;
let ta;
function preload() {
  soundFormats('mp3');
  dum = loadSound("soundSample/dum");
  ta = loadSound("soundSample/ta");
}


function setup() {
  createCanvas(1000, 400);
  
  playButton = createButton('Play!');
  playButton.position(0, 0);
  playButton.mousePressed(startGroove);

  gridButton = createButton('show grid');
  gridButton.position(100, 0);
  gridButton.mousePressed(showGrid);

  slider = createSlider(0, 15, 0, 1);
  slider.position(225, 0);
  slider.style('width', '150px');

}

function draw() {
  background(220);

  strokeWeight(1);
  stroke("black");
  rect(100,100,800,200);

  for(let i=0; i<4; i++) {
    strokeWeight(3);
    line(posX[i],100,posX[i],300);
  }

  gridNumber = slider.value();
  
  if(gridIsShowed) {
    for(let i=0; i<gridNumber*4; i++) {
      strokeWeight(1);
      stroke(255, 95, 95);
      line(100+800/(gridNumber*4)*i,100,100+800/(gridNumber*4)*i,300);
    }
  }

  if(groove) {
      let tStar = []; //tempi corrispondenti alla posizione dei cursori

      for(let i=0; i<4; i++) {
        strokeWeight(1);
        stroke("red");
        line(1/18*bpm*t+100,100,1/18*bpm*t+100,300); //posizione cursori

        tStar[i] = 18*(posX[i]-100)/bpm;
        if(t>=tStar[i]-0.5 && t<=tStar[i]+0.5) {
          if(i%2===1) {
            dum.play();
          } else {
            ta.play();
          }
        } 
      }
      t = (t+1)%(240*60/bpm);
      console.log("t: "+t+" primi");
    }
      
      
  
}

function mousePressed() {
  for(let i=0; i<4; i++) {
    if(mouseX>=posX[i]-3 && mouseX<=posX[i]+3) {
      grabbed[i] = true;
    }
  }
}

function mouseDragged() {
  if(grabbed[0]) {
    posX[0] = mouseX;
    if(posX[0]<100) {
      posX[0] = 100;
    }
  }

  for(let i=1; i<3; i++) {
    if(grabbed[i]) {
      posX[i] = mouseX;
      if(posX[i]<posX[i-1]) {
        posX[i] = posX[i-1];
      }
    }
  }

  if(grabbed[3]) {
    posX[3] = mouseX;
    if(posX[3]>900) {
      posX[3] = 900;
    }
  }

  
  
  
}

function mouseReleased() {
  for(let i=0; i<4; i++) {
    grabbed[i] = false;
  }
}

function startGroove() {
  groove = !groove;
  t = 0;
}

function showGrid() {
  gridIsShowed = !gridIsShowed; 
}