var vid = document.getElementById("myVideo");

var speed;
var sliderValue = document.getElementById("speedSlider").value; ;
speed = 14;
vid.playbackRate = speed;

var start = 10;

var end = 240; 

var password = "7914879065";


start = document.getElementById("startSlider").value;
vid.currentTime = start;

end = document.getElementById("endSlider").value;

function changeSpeed() { 

  console.log("speed: "+speed);
  sliderValue = document.getElementById("speedSlider").value;
  console.log("sliderValue: "+sliderValue);
  if(sliderValue==="0") {
    speed = 14;
  }
  if(sliderValue==="1") {
    speed = 10;
  }
  if(sliderValue==="2") {
    speed = 8;
  }
  if(sliderValue==="3") {
    speed = 0.25;
  }
  if(sliderValue==="4") {
    speed = 12;
  }
  if(sliderValue==="5") {
    speed = 9;
  }
  if(sliderValue==="6") {
    speed = 0.2;
  }
  if(sliderValue==="7") {
    speed = 0.25;
  }
  if(sliderValue==="8") {
    speed = 0.15;
  }
  if(sliderValue==="9") {
    speed = 0.35;
  }
  if(sliderValue==="10") {
    speed = 10;
  }
  if(sliderValue==="11") {
    speed = 10;
  }
  if(sliderValue==="12") {
    speed = 16;
  }
  if(sliderValue==="13") {
    speed = 16;
  }
  if(sliderValue==="14") {
    speed = 15;
  }
  if(sliderValue==="15") {
    speed = 14;
  }
  if(sliderValue==="16") {
    speed = 14;
  }
  if(sliderValue==="17") {
    speed = 10;
  }
  if(sliderValue==="18") {
    speed = 8;
  }
  if(sliderValue==="19") {
    speed = 0.25;
  }
  if(sliderValue==="20") {
    speed = 12;
  }
  if(sliderValue==="21") {
    speed = 9;
  }
  if(sliderValue==="22") {
    speed = 0.2;
  }
  if(sliderValue==="23") {
    speed = 0.1;
  }
  if(sliderValue==="24") {
    speed = 0.15;
  }
  if(sliderValue==="25") {
    speed = 0.35;
  }
  if(sliderValue==="26") {
    speed = 10;
  }
  if(sliderValue==="27") {
    speed = 11;
  }
  if(sliderValue==="28") {
    speed = 0.20;
  }
  if(sliderValue==="29") {
    speed = 16;
  }
  if(sliderValue==="30") {
    speed = 15;
  }
  if(sliderValue==="31") {
    speed = 14;
  }
  if(sliderValue==="32") {
    speed = 14;
  }
  if(sliderValue==="33") {
    speed = 10;
  }
  if(sliderValue==="34") {
    speed = 8;
  }
  if(sliderValue==="35") {
    speed = 0.25;
  }
  if(sliderValue==="36") {
    speed = 12;
  }
  if(sliderValue==="37") {
    speed = 9;
  }
  if(sliderValue==="38") {
    speed = 0.2;
  }
  if(sliderValue==="39") {
    speed = 0.20;
  }
  if(sliderValue==="40") {
    speed = 0.15;
  }
  if(sliderValue==="41") {
    speed = 0.35;
  }
  if(sliderValue==="42") {
    speed = 10;
  }
  if(sliderValue==="43") {
    speed = 1;
  }
  if(sliderValue==="44") {
    speed = 0.20;
  }
  if(sliderValue==="45") {
    speed = 16;
  }
  if(sliderValue==="46") {
    speed = 15;
  }
  if(sliderValue==="47") {
    speed = 14;
  }
  if(sliderValue==="48") {
    speed = 11;
  }
  if(sliderValue==="49") {
    speed = 0.17;
  }
  if(sliderValue==="50") {
    speed = 16;
  }

  document.getElementById("speedPar").innerHTML = sliderValue;
  

  /* speed = document.getElementById("speedSlider").value*0.1; */
  vid.playbackRate = speed;
} 

function changeStart() { 
  console.log("start: "+start);
  start = document.getElementById("startSlider").value;
  if(start>vid.currentTime) {
    vid.currentTime = start;
  }

  document.getElementById("startPar").innerHTML = start;
} 

function changeEnd() { 
  console.log("end: "+end);
  end = document.getElementById("endSlider").value;

  document.getElementById("endPar").innerHTML = end;
} 

vid.ontimeupdate = function() {
  console.log("vid.currentTime: "+vid.currentTime);
  if(vid.currentTime > end) {
    vid.currentTime = start;
  }
}

function checkPassword() {
  inputPassword = document.getElementById("password").value;
  console.log("password: "+password)
  if(inputPassword == password) {
    location.href = "http://ludovicoradaelli.github.io/Matematica/escapeClassRoom/room2/index.html";
  } else {
    alert("la password non è "+inputPassword);
  }
  
}
