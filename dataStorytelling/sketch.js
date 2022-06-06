// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

var font;
var vehicles = [];
let stable = true;
var points;
let alpha = 0;
function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
  let cnv = createCanvas(window.innerWidth, window.innerHeight);
  cnv.parent("sketch")
  background(`#1e1e1e`);
  colorMode(HSB,100)
  
  // textSize(192);
  // fill(255);
  // noStroke();
  // text('train', 100, 200);
  textFont(font);
  textSize(window.innerWidth/17);

  points = font.textToPoints('Raccontare attraverso i numeri', (window.innerWidth - textWidth('Raccontare attraverso i numeri'))/2, window.innerHeight/2, window.innerWidth/17, {
    sampleFactor: 0.3
  });

  console.log(`
  x iniziale: ${points[0].x}
  x finale: ${points[points.length-1].x}
  calcolo x iniziale: ${(window.innerWidth - textWidth('Raccontare attraverso i numeri'))/2}
  calcolo x finale: ${window.innerWidth - textWidth('Raccontare attraverso i numeri')/2 + textWidth('Raccontare attraverso i numeri')}`)

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    console.log(`
    ${vehicle.color}`)
    // stroke(255);
    // strokeWeight(8);
    // point(pt.x, pt.y);
  }
}

function draw() {
  background(`#1e1e1e`);
  stable = true;
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    if(millis() > 2000) {
      v.behaviors();
    };
    v.update();
    v.show();

    if(floor(sqrt((v.pos.x - v.target.x)*(v.pos.x - v.target.x) + (v.pos.y - v.target.y)*(v.pos.y - v.target.y))*100)/100 < 1)
    {
      v.stable = true;
    }
    stable = stable && v.stable
  }

  if(stable) {
    fill(`rgba(255,255,255,${alpha})`);
    textSize(25)
    text(`Data Storytelling: un dialogo tra narrativa e matematica.`, (window.innerWidth - textWidth('Data Storytelling: un dialogo tra narrativa e matematica.'))/2, 5*window.innerHeight/8)
    alpha += 0.1;
  }
  
}

