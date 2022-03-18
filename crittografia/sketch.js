let grabbed = false;
let grabbedX;
let grabbedY;
let phi1 = 0;
let oldPhi1;
let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "W", "X", "Y", "V", "Z", ];

function setup() {
  let cnv = createCanvas(600, 600);
  cnv.parent('canvas-container')
}

function draw() {
  background(255);

  ellipse(300,300,400,400);  
  for(let i=0; i<26; i++) {
    line(300,300,300+200*cos(i*2*PI/26+phi1),300+200*sin(i*2*PI/26+phi1));
    
    translate(300,300);
    rotate(i*2*PI/26+0.05+phi1);
    textStyle(BOLD);
    textSize(27)
    text(letters[i],0,180);
    rotate(-i*2*PI/26-0.05-phi1);
    translate(-300,-300);
    
  }
  
  ellipse(300,300,300,300);
  for(let i=0; i<26; i++) {
    line(300,300,300+150*cos(i*2*PI/26),300+150*sin(i*2*PI/26));
  
    translate(300,300);
    rotate(i*2*PI/26+0.05);
    textStyle(BOLD);
    textSize(23)
    text(letters[i],0,140);
    rotate(-i*2*PI/26-0.05);
    translate(-300,-300);
  }
  
  ellipse(300,300,200,200); 
}

function mousePressed() {
  grabbed = true;
  grabbedX = mouseX;
  grabbedY = mouseY;
  oldPhi1 = phi1;
  //print("grabbedX: "+grabbedX+"grabbedY: "+grabbedY);
}

function mouseDragged() {
  
  let dist = sqrt((mouseX-300)*(mouseX-300)+(mouseY-300)*(mouseY-300));
  let delta = arctan(mouseX,mouseY,300,300)-arctan(grabbedX,grabbedY,300,300);
  
  if(grabbed && dist>150 && dist<200) {
    phi1 = oldPhi1 + delta;
  } 
  
}

function mouseReleased() {
  grabbed = false;
}

function arctan(px,py,qx,qy) {
  if(px-qx>=0 && py-qy>=0) {
    return atan((py-qy)/(px-qx));
  }
  if(px-qx<=0 && py-qy<=0) {
    return PI + atan((py-qy)/(px-qx));
  }
  if(px-qx<=0 && py-qy>=0) {
    return PI + atan((py-qy)/(px-qx));
  } 
  if(px-qx>=0 && py-qy<=0) {
    return atan((py-qy)/(px-qx));
  }
}


let key = 0;

window.addEventListener("load", function() {
  document.getElementById("chiave").innerHTML = key;
})

function incrementaChiave(i) {
  if(i===1) {
    phi1 = phi1 + 2*PI/26;
    document.getElementById("chiave").innerHTML = (key+1)%26;
    key++;
  } else {
    if(key===0) {
      key = 26;
      console.log("ciao")
    }
    phi1 = phi1 - 2*PI/26;
    document.getElementById("chiave").innerHTML = (key-1)%26;
    key--
  }
  
}