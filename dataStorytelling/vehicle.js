// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

let rndmColor = [`rgb(231, 93, 157)`, `rgb(255)`, `rgb(19, 208, 183)`]

let color1 = {
  red: 19, 
  green: 208, 
  blue: 183
}

let color2 = {
  red: 255, 
  green: 255, 
  blue: 255
}

let gradient = [];
for(let i = 0; i < 100; i++) {
  let percent = i/100;
  let resultRed = Math.floor(color1.red + percent*percent * (color2.red - color1.red));
  let resultGreen = Math.floor(color1.green + percent*percent * (color2.green - color1.green));
  let resultBlue = Math.floor(color1.blue + percent*percent * (color2.blue - color1.blue));
  gradient.push(`rgb(${resultRed},${resultGreen},${resultBlue})`);
  console.log(gradient[i])
}

function Vehicle(x, y) {
  this.pos = createVector(random(width), random(height));
  this.target = createVector(x, y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.r = random(8,13);
  this.maxspeed = 10;
  this.maxforce = 1;
  this.number = Math.floor(Math.random()*10);
  this.stable = false;

  //this.color = rndmColor[Math.floor(Math.random()*3)];
  this.color = map(x, points[0].x, points[points.length-1].x, 0, 60)
  //this.color = gradient[floor(map(x, points[0].x, points[points.length-1].x, 2, 98))]
}

Vehicle.prototype.behaviors = function() {
  var arrive = this.arrive(this.target);

  arrive.mult(1);

  this.applyForce(arrive);
};

Vehicle.prototype.applyForce = function(f) {
  this.acc.add(f);
};

Vehicle.prototype.update = function() {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
};

Vehicle.prototype.show = function() {
  textFont(`Georgia`);
  fill(this.color, 100, 100);
  //fill(`${this.color}`);
  textSize(this.r)
  text(`${this.number}`,this.pos.x, this.pos.y);
};

Vehicle.prototype.arrive = function(target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  var speed = this.maxspeed;
  if (d < 100) {
    speed = map(d, 0, 100, 0, this.maxspeed);
  }
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
};


