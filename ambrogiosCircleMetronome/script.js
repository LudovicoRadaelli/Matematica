let w = 500;
let h = w;
let diam = 8/10*w;
let r = diam/2;
let beat = 4;
let beatSub = 3;
let time = 0;
let bpm = 60;
let actualBeat = 0;
let nextBeatTime = 60000/bpm;

let playBool = false;

/* let firstTime = false; */
let inputSillabe = []


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


  if(playBool) { 

    //aggiorna actualBeat
    if(time > nextBeatTime) {  

      console.log(`${time}, ${floor(time)}, ${time === floor(time)}, ${actualBeat}`)
      actualBeat++;
      nextBeatTime = time + 60000/bpm;

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

function selectBeat() {
  let option = document.getElementById("beat").options;
  let i = document.getElementById("beat").selectedIndex;
  beat = option[i].index + 2;
}

function selectBeatSub() {
  console.log("sjsjsj")
  let option = document.getElementById("beatSub").options;
  let i = document.getElementById("beatSub").selectedIndex;
  beatSub = option[i].index + 1;
}

function changeBpmButton(i) {
  bpm += i;
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
  
}