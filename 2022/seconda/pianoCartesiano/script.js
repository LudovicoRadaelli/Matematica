let sketchWidth = document.getElementById("sketch").offsetWidth;
let u = sketchWidth/10;
let x, y;
let pointList = [];

let letsDraw = false;

function setup() {
  
  let cnv = createCanvas(sketchWidth, sketchWidth);
  cnv.parent("sketch");
  drawGrid();
}

function draw() {

    if(letsDraw) {

        translate(width/2, height/2);
        applyMatrix(1,0,0,-1,0,0);

        for(let i = 0; i < pointList.length; i++) {
            stroke("red");
            strokeWeight(8);
            point(pointList[i].x, pointList[i].y)
        }

        letsDraw = false;
    }
    
}

function drawGrid() {

  stroke("black")

  for(let i = 0; i<=width; i += u) {
    strokeWeight(0.4);
    line(i,0,i,height);
    line(0,i,width,i);
  }
  strokeWeight(1);
  line(width/2,0,width/2,height);
  line(0,height/2,width,height/2);

  strokeWeight(6);
  point(width/2,height/2)
}

function disegna() {
    console.log("function disegna()");
    x = document.getElementsByClassName("coordinate")[0].value;
    y = document.getElementsByClassName("coordinate")[1].value;

    let p = {
        x: x*u,
        y: y*u
    }
    pointList.push(p);
    
    letsDraw = true;
}

function pulisci() {
    console.log("function pulisci()");
    pointList = [];
    background(255);
    drawGrid() 

}

function indietro() {
    pointList.pop();
    console.log(pointList);
    pulisci();
    letsDraw = true;
}

/* MathJax.typesetClear([document.getElementsByClassName("calcoliEquazione"), document.getElementsByClassName("nuovaEquazione")]);
MathJax.typesetPromise([document.getElementsByClassName("calcoliEquazione"), document.getElementsByClassName("nuovaEquazione")]).then(() => {}); */
