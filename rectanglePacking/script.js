class Rectangle {
    constructor(x,y) {
      this.x = x;
      this.y = y;
      this.rx = 1;
      this.ry = 1;
      this.isGrowing = true;
      this.vertical = random([true, false]);
      this.color = [random(255), random(255), random(255)];
      //this.color = [0,0,0]
    }
  
    grow() {
      if(this.vertical) {
        this.rx++;
        this.ry +=2;
      } else {
        this.rx +=2;
        this.ry++;
      }
    }
  
    isTouchingBorder() {
      return this.x - this.rx <= 1 || this.x + this.rx >= width - 1 || this.y - this.ry <= 1 || this.y + this.ry >= height -1;
    }
  
    show() {
      strokeWeight(2);
      stroke(this.color);
      noFill();
      rectMode(RADIUS);
      rect(this.x,this.y,this.rx,this.ry);
    }
  }
  
  
  
  
  var rectList = [];  
  
  function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    
  }
  
  function draw() {
    
    
    let v = null;
    let attempt = 0;
    
    while(v === null && attempt < 100) {
      v = makeNewRect();
      attempt++;
    }
  
    if(v !== null){
      rectList.push(v);
    } else {
      console.log("NoLoop!")
      noLoop();
    }
    
    background(0);
  
    let numRect = rectList.length; 
  
    for(let i = 0; i < min(rectList.length, numRect); i++) {
      if(rectList[i].isGrowing) {
        for(let j = 0; j < min(rectList.length, numRect); j++) {
          if(rectList[i] !== rectList[j]) {
            if(!(abs(rectList[i].x - rectList[j].x) >= rectList[i].rx + rectList[j].rx + 4 || abs(rectList[i].y - rectList[j].y) >= rectList[i].ry + rectList[j].ry + 4)) {
              rectList[i].isGrowing = false;
              rectList[j].isGrowing = false;
            }
             
          }
        }
        rectList[i].grow();  
      }
      rectList[i].show();
      
    }
  
    
  }
  
  function makeNewRect() {
    let x = random(width);
    let y = random(height);
    for(let i = 0; i < rectList.length; i++) {
      if( x > rectList[i].x - rectList[i].rx - 2 && 
        x < rectList[i].x + rectList[i].rx + 2 &&
        y > rectList[i].y - rectList[i].ry - 2&& 
        y < rectList[i].y + rectList[i].ry + 2) {
          return null;
        } 
      }
    return new Rectangle(x,y);
  }