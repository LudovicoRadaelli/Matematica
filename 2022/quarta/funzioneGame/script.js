
let time = 0;
let position = 0;
let positionMemory = [[0,0]];
let teletransport = false;
let teletransportRest = 0;
let randomSpeedRest = 0;

let speed = 16;

function setup() {
  sketch = document.getElementById(`sketch`);
  let cnv = createCanvas(sketch.clientWidth, sketch.clientWidth/2);
  cnv.parent("sketch");
  changeCoordSystem();
}

function draw() {
  changeCoordSystem();
  
  clear();
  
  //Disegno il tempo che avanza
  noStroke();
  fill(200);
  rect(0,-height/4,time, height);
  
  //Disegno gli assi cartesiani
  strokeWeight(2)
  stroke("black")
  line(0, -height/4, 0, 3*height/4);
  line(-width/4, 0, width*5, 0);
  
  if(keyIsDown(UP_ARROW)) {
    //incrementa velocità
    speed += 1/10;
  } else if(keyIsDown(DOWN_ARROW)) {
    //decrementa velocità
    speed -= 1/10;
  } else if(keyIsDown(65)) {
    //frena (tasto A)
    if(speed > 0) {
      speed -= 1/20;
    } else if(speed < 0) {
      speed += 1/20
    }
  } else if(keyIsDown(90)) {
    //inchioda (tasto Z)
    speed = 0;
  } else if(keyIsDown(83) && teletransportRest > 40) { 
    //teletrasporto controllato (tasto S)
    position = random(-height/4, 3*height/4)
    teletransportRest = 0;
  } else if(keyIsDown(88)) {
    //teletrasporto selvaggio (tasto X)
    position = random(-height/4, 3*height/4)
  } else if(keyIsDown(81) && randomSpeedRest > 40) {
    //velocità random (tasto Q)
    speed = random(-5, 5);
    randomSpeedRest = 0;
  } 
  position += speed;

  console.log(`
  speed = ${speed}
  position = ${position}`)

  teletransportRest++;
  randomSpeedRest++;
  
  //disegno lo sprite
  fill(`red`);
  stroke(`red`)
  strokeWeight(1);
  ellipse(-width/16, position, width/30, width/30);
  strokeWeight(7);
  point(-width/16, position);
  
  //Aggiungo il nuovo punto a positionMemory
  positionMemory.push([time, position]);
  
  //Disegno tutti i punti della funzione
  for(let i = 0; i < positionMemory.length; i++) {
    stroke("blue");
    strokeWeight(4);
    point(positionMemory[i][0], positionMemory[i][1])
  }

  //disegno la linea che congiunge il centro dello spirte all'ultimo punto disegnato
  lastIndex = positionMemory.length - 1;
  stroke(`black`);
  strokeWeight(1)
  line(-width/16, position, positionMemory[lastIndex][0], positionMemory[lastIndex][1])
    
  //stampa tempo
  textSize(height/20);
  push();
  resetMatrix();
  fill("black");
  text(`t = ${floor(time/60*10)/10}`, 7*width/8, 31*height/32);
  pop();
  
 
  //aggiorno il tempo
  time += 1;
  
  if(time > 7*width/8) {
    noLoop();
    print("ciao")
  }
}

function changeCoordSystem() {
  translate(width/8, 3*height/4);
  applyMatrix(1,0,0,-1,0,0);
}



