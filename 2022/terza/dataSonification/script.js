let data = [68,65,88,82,77,84,69,76,85,76,62,69,62,81,70,94,87,96,57,78,64,83,74,58,81,82,92,74,93,98,74,88,79,82,83,89,100,96,91,93,76,82,81,68,58,70,68,68,64,64,68,68]

let osc;
let freq;
let index = 0;
let play = false;

function setup() {
  let cnv = createCanvas(window.innerWidth, 300);
  cnv.parent("sketch");
  osc = new p5.Oscillator('sine');
  background(0);

}

function draw() {

    translate(20,height/2);
    applyMatrix(1,0,0,-1,0,0);

  if(index >= data.length) {
    osc.stop();
    play = false;
  }
  if(play) {
      //console.log(floor(index*100)/100 === floor(index))
      console.log(`${floor(index*10)/10}, ${floor(index)}, ${floor(index*100)/100 === floor(index)}`)
    if(floor(index*10)/10 === floor(index)) {

        let j = floor(index);
        console.log(data[j]);

        let xLeft = map(j-1, 0, data.length-1, 0, 9*width/10);
        let xRight = map(j, 0, data.length-1, 0, 9*width/10);

        let yLeft = map(data[j-1], min(data), max(data), -height/2 +10, height/2 -10);
        let yRight = map(data[j], min(data), max(data), -height/2 +10, height/2 -10);
            
        stroke(255);
        strokeWeight(2);
        line(xLeft,yLeft,xRight,yRight);

        strokeWeight(8);
        point(xLeft,yLeft);
        stroke(0,255,0);
        point(xRight,yRight);            
        
    }
    freq = data[floor(index)];
    freq = map(freq, min(data), max(data),200,600)
    osc.freq(freq,0.2)
    index +=1/25;
  } 
  
}

function mousePressed() {
  play = true;
  osc.start();
  osc.amp(0.1)
}

