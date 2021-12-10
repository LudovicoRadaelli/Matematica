let w = 500;
let h = w;

let diam = 7/10*w;
let r = diam/2;

let beat = 4;
let beatSub = 3;
let time = 0;
let bpm = 60;

let actualBeat = 0;
let nextBeatTime = 60000/bpm;

let actualBeatSub = -beatSub;
let nextBeatSubTime = 60000/bpm; //in questo modo non si sentono le suddivisioni prima dell'uno

let playBool = false;
let sound = []

let littleCirc = [];
for(let i = 0; i < beat*beatSub; i++) {
  littleCirc[i] = {
    cX: Math.min(r + w/(beat*beatSub), r + w/15),
    cY: Math.min(r + w/(beat*beatSub), r +w/15),
    ray: Math.min(w/(beat*beatSub)/2, w/30),
    active: false
  }

  if(Math.floor(i/beatSub) === 0) {
    littleCirc[i].syl = "ta"
  }

  if(Math.floor(i/beatSub) === 1) {
    littleCirc[i].syl = "ti"
  }

  if(Math.floor(i/beatSub) === 2) {
    littleCirc[i].syl = "to"
  }

  if(Math.floor(i/beatSub) === 3) {
    littleCirc[i].syl = "te"
  }


  console.log(`
  --------------
  littleCircle${i},
  cX: ${littleCirc[i].cX},
  cY: ${littleCirc[i].cY},
  ray: ${littleCirc[i].ray},
  syl: ${littleCirc[i].syl}`)
}

function preload() {
  sound[0] = loadSound('media/one.mp3');
  sound[1] = loadSound('media/beat.mp3');
  sound[2] = loadSound('media/subd.mp3');
}


function setup() {

  let cnv = createCanvas(w, h);
  cnv.parent("sketch");

}


function draw() {

  //aggiorna il tempo
  time = millis();

  translate(width/2,height/2);
  applyMatrix(1,0,0,-1,0,0);

  
  //pulisci
  background(255);


  //disegna beatSub
  for(let i = 0; i < beatSub*beat; i++) {
    stroke(215);
    strokeWeight(1)
    line(0,0, r*sin(i*2*PI/(beatSub*beat)), r*cos(i*2*PI/(beatSub*beat)))

    /* if(firstTime) {
      inputSillabe[i] = createDiv('');
      div.style('font-size', '20px');
      div.position(r*sin(i*2*PI/(beatSub*beat)), r*cos(i*2*PI/(beatSub*beat)));
    } */
  }


  //disegna beat
  for(let i = 0; i < beat; i++) {
    stroke(150);
    if(i === 0) {
      strokeWeight(4);
    } else {
      strokeWeight(2)
    }
    
    line(0,0, r*sin(i*2*PI/beat), r*cos(i*2*PI/beat))
  }

  


  //disegna circonferenza
  noFill();
  stroke(0);
  strokeWeight(4)
  ellipse(0, 0, diam, diam);

  //disegnaCirconferenzine
  for(let i = 0; i < beat*beatSub; i++) {
    noFill();
    stroke(0);
    strokeWeight(1)
    ellipse(littleCirc[i].cX*sin(i*2*PI/(beat*beatSub)), littleCirc[i].cY*cos(i*2*PI/(beat*beatSub)), 2*littleCirc[i].ray, 2*littleCirc[i].ray);
    if(littleCirc[i].active) {
      textAlign(CENTER, CENTER);
      textSize( Math.min(w/(beat*beatSub)/2, w/30)*1.4)
      resetMatrix();
      text(littleCirc[i].syl, littleCirc[i].cX*sin(i*2*PI/(beat*beatSub)) + width/2, -littleCirc[i].cY*cos(i*2*PI/(beat*beatSub)) + height/2);
      translate(width/2,height/2);
      applyMatrix(1,0,0,-1,0,0);
    }  
  }


  if(playBool) { 

    //aggiorna actualBeat
    if(time > nextBeatSubTime) {  

      actualBeatSub++;
      nextBeatSubTime = time + 60000/bpm/beatSub;
      console.log(`
      time: ${time}, 
      actualBeatSub: ${actualBeatSub}, 
      nextBeatSubTime: ${nextBeatSubTime}
      actualBeatSub%(beat*beatSub): ${actualBeatSub%(beat*beatSub)},
      actualBeatSub%beatSub: ${actualBeatSub%beatSub}`)

      
      if(actualBeatSub%(beat*beatSub) === 0) {
        sound[0].play();
        actualBeat++;
        console.log("one");
      } else if(actualBeatSub%beatSub === 0) {
        sound[1].play();
        actualBeat++;
        console.log("beat");
      } else {  
        sound[2].play();
        console.log("subbeat");
      }
      
    }


    //disegna raggio
    stroke("red");
    strokeWeight(5);
    line(0,0, r*sin(actualBeat*2*PI/beat), r*cos(actualBeat*2*PI/beat));
    
    strokeWeight(15)
    point(r*sin(actualBeat*2*PI/beat), r*cos(actualBeat*2*PI/beat))

  } else {
    stroke("red")
    line(0,0, r*sin(-2*PI/beat), r*cos(-2*PI/beat));
  }
  
}




function mouseClicked() {
  let mX = mouseX - width/2;
  let mY = -mouseY + height/2;
  for(let i = 0; i < beat*beatSub; i++) {
    let distMouseCentro = sqrt((mX - littleCirc[i].cX*sin(i*2*PI/(beat*beatSub)))*(mX - littleCirc[i].cX*sin(i*2*PI/(beat*beatSub))) + (mY - littleCirc[i].cY*cos(i*2*PI/(beat*beatSub)))*(mY - littleCirc[i].cY*cos(i*2*PI/(beat*beatSub))))
    if( distMouseCentro <= littleCirc[i].ray) {
      littleCirc[i].active = !littleCirc[i].active;
    }
  }
}

function selectBeat() {
  let option = document.getElementById("beat").options;
  let i = document.getElementById("beat").selectedIndex;
  beat = option[i].index + 2;
  for(let i = 0; i < beat*beatSub; i++) {
    littleCirc[i] = {
      cX: Math.min(r + w/(beat*beatSub), r + w/15),
      cY: Math.min(r + w/(beat*beatSub), r +w/15),
      ray: Math.min(w/(beat*beatSub)/2, w/30),
      active: false
    }

    if(Math.floor(i/beatSub) === 0) {
      littleCirc[i].syl = "ti"
    }
  
    if(Math.floor(i/beatSub) === 1) {
      littleCirc[i].syl = "mo"
    }
  
    if(Math.floor(i/beatSub) === 2) {
      littleCirc[i].syl = "te"
    }
  
    if(Math.floor(i/beatSub) === 3) {
      littleCirc[i].syl = "ta"
    }
  
    console.log(`
    --------------
    littleCircle${i},
    cX: ${littleCirc[i].cX},
    cY: ${littleCirc[i].cY},
    ray: ${littleCirc[i].ray},
    beat: ${beat},
    beatSub: ${beatSub}`)
  }
}


function selectBeatSub() {
  let option = document.getElementById("beatSub").options;
  let i = document.getElementById("beatSub").selectedIndex;
  beatSub = option[i].index + 1;
  for(let i = 0; i < beat*beatSub; i++) {
    littleCirc[i] = {
      cX: Math.min(r + w/(beat*beatSub), r + w/15),
      cY: Math.min(r + w/(beat*beatSub), r +w/15),
      ray: Math.min(w/(beat*beatSub)/2, w/30),
      active: false
    }

    if(Math.floor(i/beatSub) === 0) {
      littleCirc[i].syl = "ta"
    }
  
    if(Math.floor(i/beatSub) === 1) {
      littleCirc[i].syl = "ti"
    }
  
    if(Math.floor(i/beatSub) === 2) {
      littleCirc[i].syl = "to"
    }
  
    if(Math.floor(i/beatSub) === 3) {
      littleCirc[i].syl = "te"
    }
  
    console.log(`
    --------------
    littleCircle${i},
    cX: ${littleCirc[i].cX},
    cY: ${littleCirc[i].cY},
    ray: ${littleCirc[i].ray},
    beat: ${beat},
    beatSub: ${beatSub}`)
  }
}


function changeBpmButton(i) {
  bpm = parseInt(bpm) + i;
  document.getElementById("bpm").innerHTML = `${bpm}`;
  document.getElementById("bpm-slider").value = bpm
}

function  changeBpmSlider() {
  bpm = document.getElementById("bpm-slider").value;
  document.getElementById("bpm").innerHTML = `${bpm}`;
}

function  play(bool) {

  /* if(!bool) {
    firstTime = true;
  } */
  
  playBool = bool;
  actualBeat = -1;
  actualBeatSub = -2;
  
}
