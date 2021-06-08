let i = 0;

let startAnimation = false;
let isDrawing = true;
let isDrawingButton = true;

let mySound;

let btn = document.createElement("BUTTON");
btn.innerHTML = "vai alla prima stanza";

let line = document.createElement("HR");

let tStart0 = 15;
let tStart = tStart0;

let deltaT = 2.5;

let sStartX = 300;

let sStartY0 = 50;
let sStartY = 50;
let deltaSY = 35;

let power = 2.5;

let innerText = 
    ["Dei tesori",
     "I più preziosi",
    "",
    "Luccicano e splendono",
    "accanto a voi",
    "eppure sono nascosti",
    "alla vostra vista",
    "",
    "Riuscirete a trovarli?",
    "Ne troverete altri",
    "che siano solo vostri?"
    ]

function preload() {
  soundFormats('mp3');
  mySound = loadSound("https://ludovicoradaelli.github.io/Matematica/escapeClassRoom/intro/sound/introSound(1).mp3");
  //mySound = loadSound("sound/introSound(1).mp3");
  fill(255);
  ellipse(20,20,10,10);
}

function setup() {
  let cnv = createCanvas(600, 450);
  cnv.parent('canvas');
  cnv.mousePressed(canvasPressed);
  colorMode(HSB,tStart0+innerText.length*deltaT, 1, 1);
  textAlign(CENTER);
}

function draw() {
  if(startAnimation===true) {
    if(isDrawing) {
      background(0);
  
      for(let j=0;j<innerText.length;j++) {
        if(i>tStart) {
          textSize(32);
          //fill(tStart0+j*deltaT, 1, pow(i,power)-pow(tStart,power));
          fill(tStart0+j*deltaT, 1, (i-tStart)*0.1);
          text(innerText[j],sStartX,sStartY);
        }
        tStart = tStart + deltaT;
        sStartY = sStartY + deltaSY;
      }
    }
    
    /* if(i>tStart0+(innerText.length+3)*deltaT && isDrawingButton===true) {
      isDrawing =! isDrawing;
      button = createButton('vai nella prima stanza');
      button.position(sStartX, sStartY);
      button.style("color","red")
      button.mousePressed(goToLink);
      isDrawingButton = !isDrawingButton
    } */
  
    if(i>tStart0+(innerText.length+3)*deltaT && isDrawingButton===true) {
      btn.style.display = "block";
      btn.style.width = "auto";
      btn.style.padding = "1rem"
      btn.style.margin ="auto";
      btn.style.marginTop = "1rem"
      btn.style.fontSize = "32px";
      btn.style.color = "tomato";
      btn.style.border = "0.3rem solid tomato";
      btn.style.borderRadius = "5rem"
      btn.style.backgroundColor = "#000";
      btn.addEventListener("click", goToLink);
      btn.addEventListener("mouseover", function() {
          btn.style.transform = "scale(1.1)"
      })
  
      line.style.width = "600px";
  
      document.body.appendChild(line);
      document.body.appendChild(btn); 
      
      isDrawing =! isDrawing;
      isDrawingButton = !isDrawingButton
    }
    
    if(isDrawingButton) {
      i = i + 1/60;
      print(i);
      print(innerText.length);
      print(tStart0+innerText.length*deltaT);
      print(i>innerText.length*deltaT)
      
    }
    
    tStart = tStart0;
    sStartY = sStartY0;
  }
}

function canvasPressed() {
  startAnimation = true;
  mySound.play();
}


function goToLink() {
    location.href = "https://ludovicoradaelli.github.io/Matematica/escapeClassRoom/room1/index.html";
}
