  var sketch = function(p) {

    class Triangle {
      constructor(x,y,side,shift,angle,shape,color) {
        this.x = x;
        this.y = y;
        this.side = side;
        this.shift = shift;
        this.angle = angle;
        this.shape = shape;
        this.color = color
      }
      show() {
        p.noFill();
        
        p.strokeWeight(1);
        
        if(p.round(this.color) === 0) {
          p.stroke(66, 133, 244);
        }
        if(p.round(this.color) === 1) {
          p.stroke(219, 68, 55);
        }
        if(p.round(this.color) === 2) {
          p.stroke(244, 180, 0);
        }
        if(p.round(this.color) === 3) {
          p.stroke(15, 157, 88);
        }
    
        p.rotate(this.angle*p.PI);
        
        if(p.round(this.shape)===0){
          p.triangle(this.x,this.y,this.x+this.side,this.y,this.x+this.side/2,this.y+p.sqrt(3)/2*this.side);
        } 
        if(p.round(this.shape)===1) {
          p.rect(this.x,this.y,this.side,this.side);
        }
        if(p.round(this.shape)===2) {
          p.ellipse(this.x,this.y,this.side,this.side)
        }
        
        p.rotate(-this.angle*p.PI);
        
      }
    }

    p.t = [];
    p.j = 0;
    p.numOfFig = 30;
    p.coeffT = 0.009;

    p.setup = function() {
      p.cnv = p.createCanvas(document.body.offsetWidth, document.body.clientHeight);
      console.log(document.body.offsetWidth);
      p.cnv.parent('fixedBackground');
      
      for(let i=0;i<p.numOfFig;i++) {
        p.t[i] = new Triangle(p.random(-50,p.width+50),p.random(-50,p.height+50),p.random(40,70),p.random(0,0.5),p.random(0.01,0.09),p.random(-0.5,2.5),p.random(-0.5, 3.5))
      }
    }

    p.draw = function() {

      p.background(255);
    
      for(let i=0;i<p.numOfFig;i++) {
        if(i%2===0) {
          p.t[i].x = p.t[i].x + p.t[i].shift*p.cos(p.j*p.coeffT);
          p.t[i].y = p.t[i].y + p.t[i].shift*p.sin(p.j*p.coeffT);  
        } else {
          p.t[i].x = p.t[i].x + p.t[i].shift*p.sin(p.j*p.coeffT);
          p.t[i].y = p.t[i].y + p.t[i].shift*p.cos(p.j*p.coeffT);  
        }  
      }
      
      for(let i=0;i<p.numOfFig;i++) {
        p.t[i].show();
      }
      
      p.stroke(50);
      p.ellipse(p.mouseX,p.mouseY,150,150);
      p.strokeWeight(6);
      p.point(p.mouseX,p.mouseY);
      
      p.j = p.j + 1;

    }

  }

  var p51 = new p5(sketch);


  /*----------------------------------------------------------------------------------------------------------*/

  /* var sketch1 = function(p) {

    class Ball {
    
      constructor(x,y,diameter,color) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.color = color
      }
    
      show() {
        p.noFill();
        
        p.strokeWeight(5);
        
        if(this.color === 0) {
          p.stroke(66, 133, 244);
        }
        if(this.color === 1) {
          p.stroke(219, 68, 55);
        }
        if(this.color === 2) {
          p.stroke(244, 180, 0);
        }
        if(p.round(this.color) === 3) {
          p.stroke(15, 157, 88);
        }
      
        p.ellipse(this.x,this.y,this.diameter,this.diameter)
              
      }
    }
  
    
  
    p.ball = [];
    p.k = 0; 
    p.h = 0;
    p.timer = 0;
    p.numOfBallsRow = 20;
    p.numOfBallsCol = 13;
    p.startAnimation = false;
  
  
    p.setup = function() {
  
      p.cnv1 = p.createCanvas(1000, 650);
      p.cnv1.parent('sketch1');
      p.background(255);
      
      for(let i=0;i<=p.numOfBallsRow;i++) {
        p.ball[i] = [];
        for(let j=0;j<=p.numOfBallsCol;j++) {
          p.ball[i][j] = new Ball(50*i,50*j, 50,(i+j)%4);
        }
      }
  
    }
  
  
    p.draw = function() {
  
      if(p.startAnimation){
        
        p.ball[p.k][p.h].show();
        p.h = (p.h+1)%(p.numOfBallsCol+1);
        if(p.h===0) {
          p.k = (p.k+1)%(p.numOfBallsRow+1);
        }        
        if(p.k*p.h===260){
          p.startAnimation = !p.startAnimation;
        }     
      }
  
    }
  }
  
  var p52 = new p5(sketch1);
  
  
  window.onscroll = function() {myFunction()};
  
  function myFunction() {
    if (document.body.scrollTop > 12050 || document.documentElement.scrollTop > 12050) {
      console.log("document.body.scrollTop: "+document.body.scrollTop+"\n");
      console.log("document.documentElement.scrollTop: "+document.documentElement.scrollTop+"\n");
      p52.startAnimation = true;
    }
  } */