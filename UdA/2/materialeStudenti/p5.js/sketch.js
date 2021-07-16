var ereasing = false;
var rectToDraw = [];
var numRect = 0;
var numClick = 0;
rectToDraw[numRect] = [];

function setup() {
    let cnv = createCanvas(400, 400);
    cnv.parent('sketch1');

    translate(width/4,3*height/4);
    applyMatrix(1,0,0,-1,0,0);

    background(255);
    showFigure();
}

function draw() {
    translate(width/4,3*height/4);
    applyMatrix(1,0,0,-1,0,0);
  
    if(ereasing) {
        numRect = 0;
        rectToDraw[numRect] = [];
        console.log("new rectToDraw:"+rectToDraw+"\n");
        numClick = 0;
        background(255);
        showFigure();
        ereasing = !ereasing
    }
    
    for(let j=0; j<numRect; j++) {
      rectMode(CORNERS);
      rect(rectToDraw[j][0], rectToDraw[j][1],rectToDraw[j][2], rectToDraw[j][3]);
    }
  
    if(numClick%2 !== 0) {
        background(255);
        showFigure();
        strokeWeight(2);
        rectMode(CORNERS);
        for(let j=0; j<numRect; j++) {
        rect(rectToDraw[j][0], rectToDraw[j][1],rectToDraw[j][2], rectToDraw[j][3]);
    }
    
    rect(rectToDraw[numRect][0], rectToDraw[numRect][1],changeCoo(mouseX,mouseY)[0], changeCoo(mouseX,mouseY)[1]);
  }
}

function mouseClicked() {
    if(mouseX>0 && mouseY>0 && mouseX<width && mouseY<height){
        numClick++;
        console.log("numClick: "+numClick+"\n");
        if(numClick%2===0) {
            rectToDraw[numRect][2] = changeCoo(mouseX,mouseY)[0];
            rectToDraw[numRect][3] = changeCoo(mouseX,mouseY)[1]; 
            console.log("rect:"+rectToDraw[numRect][0]+"\n");
            console.log("rect:"+rectToDraw[numRect][1]+"\n");
            console.log("rect:"+rectToDraw[numRect][2]+"\n");
            console.log("rect:"+rectToDraw[numRect][3]+"\n");
            numRect++;
            rectToDraw[numRect] = [];
            console.log("numRect: "+numRect+"\n");
        } else {
            rectToDraw[numRect][0] = changeCoo(mouseX,mouseY)[0];
            rectToDraw[numRect][1] = changeCoo(mouseX,mouseY)[1]; 
        }
        
      }
    }
    



function f(x) {
  return sqrt(x/10)*30+50;
}


function showFigure() {
    let start = 30;
    let end = 200;


    strokeWeight(1);
    for(let i=start;i<end;i++) {
      point(i,f(i));
    }

    line(start,0,start,f(start));
    line(end,0,end,f(end));
    line(start,0,end,0);
}


function changeCoo(x_old,y_old) {
  x_new = x_old - width/4;
  y_new = -y_old + 3*height/4;
  
  let v = [x_new, y_new];
  return v
}

function cancella() {
    ereasing = !ereasing;
} 