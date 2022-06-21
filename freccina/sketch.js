let u = 20;
var arrowLength = 0
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(HSL,100);
}

function draw() {
  translate(0, height/2)
  background(0);
  
  beginShape(LINES)
  for(let i = 0; i < arrowLength; i++) {
    strokeWeight(6)
    stroke(i%100,50,50);
    vertex(i, u*sin(i/u));
  }
  endShape()
  
  push()
  translate(arrowLength, u*sin(arrowLength/u))
  strokeWeight(10);
  point(0,0)
  rotate(PI/4*cos(arrowLength/u))
  triangle(-u/2, u/4, -u/2, -u/4, 0, 0)
  
  pop()
  
  arrowLength++
}