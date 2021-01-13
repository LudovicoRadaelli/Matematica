//SETUP
function setup() {
  frameRate(60);
  let cnv = createCanvas(400, 400);  
  cnv.parent('try1');
  drawBackground();
  //let button1 = createButton('pulisci');
  //button1.mousePressed(drawBackground);

}

//DRAW
function draw() {
  if (mouseIsPressed === true && mouseX > 100 && mouseX < 300) {
      stroke('black');
      strokeWeight(3);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }  
}

//DRAW BACKGROUND
function drawBackground() {
  fill(255);
  
  strokeWeight(2);
  stroke('black')
  rect(0,0,400,400);
  translate(200,200);
  line(0,-200,0,200);
  line(-200,0,200,0);
  
  strokeWeight(4);
  stroke('red');
  line(-100,0,100,0);
  
  strokeWeight(7); // Make the points 10 pixels in size
  point(-100, 0);
  point(100, 0);
 
}  









  
