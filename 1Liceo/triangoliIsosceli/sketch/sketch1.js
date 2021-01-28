//SETUP
function setup() {
  frameRate(60);
  let cnv = createCanvas(300, 300);  
  cnv.parent('try1');
  drawBackground();
  //let button1 = createButton('pulisci');
  //button1.mousePressed(drawBackground);

}

//DRAW
function draw() {
  if (mouseIsPressed === true) {
      stroke('black');
      strokeWeight(3);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }  
}


//DRAW BACKGROUND
function drawBackground() {
  tentativo++;
  console.log("tentativo: \n"+tentativo)
  fill(255);
  
  strokeWeight(2);
  stroke('black')
  rect(0,0,300,300);
  translate(150,150);
  
  
  strokeWeight(4);
  stroke('black');
  line(-100,50,100,50);
  
  if(tentativo === 3) {
    document.getElementById("afterTry").style.display = "block";
  }
}  









  
