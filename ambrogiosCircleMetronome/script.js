let w;

if(window.innerWidth >= 500) {
  w = 500;
} else {
  w = window.innerWidth*2;
}
let h = w;

let diam = 7/10*w;
let r = diam/2;

let beat = 4;
let beatSub = 3;
let time = 0;
let bpm = 60;

//let actualBeat = 0;
//let nextBeatTime = 60000/bpm;


let perc = [];
updatePerc();

let actualBeatSub;
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
    line(0,0, r*sin(perc[i].angle), r*cos(perc[i].angle));
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

  //disegna percentuali
  drawPercentual();


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
    ellipse(littleCirc[i].cX*sin(perc[i].angle), littleCirc[i].cY*cos(perc[i].angle), 2*littleCirc[i].ray, 2*littleCirc[i].ray);
    if(littleCirc[i].active) {
      textAlign(CENTER, CENTER);
      textSize( Math.min(w/(beat*beatSub)/2, w/30)*1.4)
      resetMatrix();
      text(littleCirc[i].syl, littleCirc[i].cX*sin(perc[i].angle) + width/2, -littleCirc[i].cY*cos(perc[i].angle) + height/2);
      translate(width/2,height/2);
      applyMatrix(1,0,0,-1,0,0);
    }  
  }


  if(playBool) { 

    //aggiorna actualBeat
    if(time > nextBeatSubTime) {  

      actualBeatSub++;

      console.log(`
      
      perc index: ${(beatSub*beat + actualBeatSub)%(beatSub*beat)},
      percentual[${(beatSub*beat + actualBeatSub)%(beatSub*beat)}] = ${perc[(beatSub*beat + actualBeatSub)%(beatSub*beat)].percentual}
      actualBeatSub: ${actualBeatSub}, 
      `)

      if(actualBeatSub < 0) {
        console.log("out beat");
        nextBeatSubTime = time + perc[beat*beatSub + actualBeatSub].deltaTime;  
      } else {
        nextBeatSubTime = time + perc[actualBeatSub%(beat*beatSub)].deltaTime;
      }
      
      

      /* console.log(`
      time: ${time}, 
      delta: ${nextBeatSubTime - time},
      perc index: ${(beatSub*beat - actualBeatSub)%(beatSub*beat)},
      percentual[${(beatSub*beat - actualBeatSub)%(beatSub*beat)}] = ${perc[(beatSub*beat + actualBeatSub)%(beatSub*beat)].percentual}
      actualBeatSub: ${actualBeatSub}, 
      `) */

      
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


    //disegna raggio subBeat
    stroke(255, 182, 182);
    strokeWeight(3);
    line(0,0, r*sin(perc[(beatSub*beat + actualBeatSub)%(beatSub*beat)].angle), r*cos(perc[(beatSub*beat + actualBeatSub)%(beatSub*beat)].angle));
    
    strokeWeight(15)
    point(r*sin(perc[(beatSub*beat + actualBeatSub)%(beatSub*beat)].angle), r*cos(perc[(beatSub*beat + actualBeatSub)%(beatSub*beat)].angle))


    //disegna raggio
    stroke("red");
    strokeWeight(5);
    line(0,0, r*sin(actualBeat*2*PI/beat), r*cos(actualBeat*2*PI/beat));
    
    strokeWeight(15)
    point(r*sin(actualBeat*2*PI/beat), r*cos(actualBeat*2*PI/beat));

  } else {
    stroke("red")
    line(0,0, r*sin(-2*PI/beat), r*cos(-2*PI/beat));
  }


  
  
}




function mouseClicked() {
  let mX = mouseX - width/2;
  let mY = -mouseY + height/2;
  for(let i = 0; i < beat*beatSub; i++) {
    let distMouseCentro = sqrt((mX - littleCirc[i].cX*sin(perc[i].angle))*(mX - littleCirc[i].cX*sin(perc[i].angle)) + (mY - littleCirc[i].cY*cos(perc[i].angle))*(mY - littleCirc[i].cY*cos(perc[i].angle)))
    if( distMouseCentro <= littleCirc[i].ray) {
      littleCirc[i].active = !littleCirc[i].active;
    }
  }
}


//**********************TODO**********************************
function mousePressed() {
  let mX = mouseX - width/2;
  let mY = -mouseY + height/2;
  let distMouseCentro = sqrt((mX*mX + mY*mY))
  let angoloMouse;
  if(mX >= 0) {
    angoloMouse = PI/2 - atan(mY/mX);
  } else {
    angoloMouse = PI + PI/2 - atan(mY/mX);
  }

  

  for(let i = 0; i < beat*beatSub; i++) {
    if(distMouseCentro < r && abs(angoloMouse - perc[i].angle) < 0.025  && i%beatSub !==0) {
      perc[i].grabbed = true;
      console.log(`
      distMouseCentro = ${distMouseCentro},
      angoloMouse = ${angoloMouse*180/PI}
      `)
    }
  }
}

function mouseDragged() {
  
  let mX = mouseX - width/2;
  let mY = -mouseY + height/2;
  let angoloMouse;
  if(mX >= 0) {
    angoloMouse = PI/2 - atan(mY/mX);
  } else {
    angoloMouse = PI + PI/2 - atan(mY/mX);
  }


  for(let i = 1; i < beatSub*beat; i++) {
    if(perc[i].grabbed && angoloMouse > perc[(i-1)%(beat*beatSub)].angle && angoloMouse < perc[(i+1)%(beat*beatSub)].angle) {
      
      for(let j = 0; j < beat; j++) {
        perc[i + j*beatSub].angle = angoloMouse + j*2*PI/beat;
      }
      
      for(let j = 0; j < beatSub*beat; j++) {
        if(j === beatSub*beat -1) {
          perc[j].percentual = perc[j - beatSub].percentual 
        } else {
          perc[j].percentual = abs(perc[j].angle - perc[(j+1)%(beat*beatSub)].angle)/(2*PI/beat);
        }

        
        perc[j].deltaTime = (60000/bpm)*perc[j].percentual;
        console.log(`
        perc[${j}].angle = ${perc[j].angle},
        perc[${j}].percentual = ${perc[j].percentual}
        `)
      }
    }

    for(let j = 0; j < beatSub; j++) {
      document.getElementById(`beatSubPercentual${j}`).value = floor(perc[j].percentual*10000)/100;
    }
    
  }

}

function mouseReleased() {
  for(let i=0; i<beat*beatSub; i++) {
    perc[i].grabbed = false;
  }
}

//************************************************************



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

  updatePerc();
  
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

  updatePerc();

  for(let i = 0; i < 16; i++) {
    console.log(`${i}`);
    document.getElementById(`beatSubPercentual${i}`).style.display = "none";
  }

  for(let i = 0; i < beatSub; i++) {
    document.getElementById(`beatSubPercentual${i}`).style.display = "block";
    document.getElementById(`beatSubPercentual${i}`).style.width = `${Math.round(perc[i].percentual*10000)/100}%`;
    document.getElementById(`beatSubPercentual${i}`).value = `${Math.round(perc[i].percentual*10000)/100}`;
    

  }
  
}


function changeBpmButton(i) {
  bpm = parseInt(bpm) + i;
  document.getElementById("bpm").innerHTML = `${bpm}`;
  document.getElementById("bpm-slider").value = bpm;
  updatePerc();
}

function  changeBpmSlider() {
  bpm = document.getElementById("bpm-slider").value;
  document.getElementById("bpm").innerHTML = `${bpm}`;
  updatePerc();
}

function  play(bool) {
  
  playBool = bool;
  actualBeat = -2;
  actualBeatSub = -beatSub - 1;

  console.clear();
  console.log(`
  ${actualBeat},
  ${actualBeatSub}`)
  
}

function updatePerc() {
  for(let i = 0; i < beatSub*beat; i++) {
    if(i%beatSub === 0) {
      perc[i] = {
        percentual: 1/beatSub,
        angle: i/beatSub*2*Math.PI/beat,
        grabbed: false
      };
      perc[i].deltaTime = (60000/bpm)*perc[i].percentual;
    } else if(i%beatSub === beatSub - 1) {
        let percentualSum = 0;
        let angleSum = 0;
          for(let j = 0; j < beatSub -1; j++) {
            percentualSum += perc[j].percentual;
            angleSum += perc[j].angle;
          }
        perc[i] = {
          percentual: 1 - percentualSum,
          angle: perc[i-1].angle + perc[i-1].percentual*2*Math.PI/beat,
          grabbed: false
        };
        
        //
        perc[i].deltaTime = (60000/bpm)*perc[i].percentual;
    } else {
        perc[i] = {
          percentual: 1/beatSub,
          angle: perc[i-1].angle + perc[i-1].percentual*2*Math.PI/beat,
          grabbed: false
        };
        perc[i].deltaTime = (60000/bpm)*perc[i].percentual;
    }
  
    
    console.log(`
    angolo[${i}] = ${perc[i].angle/Math.PI*180},
    percentuale[${i}] = ${perc[i].percentual},
    deltaTime[${i}] = ${perc[i].deltaTime}
    `)
  }
}

function changePercentual() {
  
  let percInput = [];
  for(let i = 0; i < beatSub; i++) {
    percInput[i] = document.getElementById(`beatSubPercentual${i}`).value/100;
  }

  for(let i = 0; i < beatSub*beat; i++) {
    if(i%beatSub === 0) {
      perc[i] = {
        percentual: percInput[i%beatSub],
        angle: i/beatSub*2*Math.PI/beat,
      };
      perc[i].deltaTime = (60000/bpm)*perc[i].percentual;
    } else if(i%beatSub === beatSub - 1) {
        let percentualSum = 0;
        let angleSum = 0;
          for(let j = 0; j < beatSub -1; j++) {
            percentualSum += perc[j].percentual;
            angleSum += perc[j].angle;
          }
        perc[i] = {
          percentual: 1 - percentualSum,
          angle: perc[i-1].angle + perc[i-1].percentual*2*Math.PI/beat,
        };
        
        perc[i].deltaTime = (60000/bpm)*perc[i].percentual;
    } else {
        perc[i] = {
          percentual: percInput[i%beatSub],
          angle: perc[i-1].angle + perc[i-1].percentual*2*Math.PI/beat,
        };
        perc[i].deltaTime = (60000/bpm)*perc[i].percentual;
    }
  
  
    
    console.log(`
    angolo[${i}] = ${perc[i].angle/Math.PI*180},
    percentuale[${i}] = ${perc[i].percentual},
    deltaTime[${i}] = ${perc[i].deltaTime}
    `)
  }
}

function drawPercentual() {
  if(document.getElementById("changeAll").checked) {
    push();

    resetMatrix();
    translate(width/2,height/2);
    rotate(-PI/2)
    
    //per impostare la textSize vediamo quale è l'angolo più piccolo tra un raggio e l'altro
    let indexMin = 0;
    for(let i = 1; i < beatSub; i++) {
      if(perc[i].percentual < perc[i-1].percentual) {
        indexMin = i;
      }
    }
    textSize(cos(Math.abs(perc[(indexMin + 1)].angle - perc[indexMin].angle))/2*25);
    
    
    for(let i = 0; i < beatSub; i++) {
      textAlign(CENTER, CENTER);
      let textAngle = Math.abs(perc[(i + 1)%(beat*beatSub)].angle - perc[i%(beat*beatSub)].angle)/2;
      noFill();
      stroke(0);
      strokeWeight(1);
      
      rotate(textAngle);      
      text(`${Math.round(perc[i].percentual*10000)/100}%`, r/2, 0);
      rotate(textAngle);

    }
    pop();
  }
}

