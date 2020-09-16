document.getElementById("row1column1").style.opacity = "0.5";
document.getElementById("row1column2").style.opacity = "0.5";
document.getElementById("row1column3").style.opacity = "0.5";
document.getElementById("row1column4").style.opacity = "0.5";
document.getElementById("row2column1").style.opacity = "0.5";
document.getElementById("row2column2").style.opacity = "0.5";
document.getElementById("row2column3").style.opacity = "0.5";
document.getElementById("row2column4").style.opacity = "0.5";

var result = 0;
var cifra4 = 0;
var cifra3 = 0; 
var cifra2 = 0; 
var cifra1 = 0;
var targetNumber = Math.round(Math.random()*80);

document.getElementById("targetNumber").innerHTML = "numero da tradurre: " + targetNumber;

function power3Clicked(event) {
    
    console.log("event.target.id: " + event.target.id);
    console.log("opacity: " + document.getElementById(event.target.id).style.opacity);
    
    if(document.getElementById(event.target.id).style.opacity === "0.5") {
        result = result + 27;
        document.getElementById("numberDisplayer").innerHTML = "totale: " + result;
        document.getElementById(event.target.id).style.opacity = 1;
        cifra4++;
        document.getElementById("cifra4").innerHTML = cifra4;
    } else {
        result = result -27;
        document.getElementById("numberDisplayer").innerHTML = "totale: " + result;
        document.getElementById(event.target.id).style.opacity = "0.5";
        cifra4--;
        document.getElementById("cifra4").innerHTML = cifra4;
    }

}

function power2Clicked(event) {
    
    console.log("event.target.id: " + event.target.id);
    console.log("opacity: " + document.getElementById(event.target.id).style.opacity);
    
    if(document.getElementById(event.target.id).style.opacity === "0.5") {
        result = result + 9;
        document.getElementById("numberDisplayer").innerHTML = "totale: " + result;
        document.getElementById(event.target.id).style.opacity = 1;
        cifra3++;
        document.getElementById("cifra3").innerHTML = cifra3;
    } else {
        result = result -9;
        document.getElementById("numberDisplayer").innerHTML = "totale: " + result;
        document.getElementById(event.target.id).style.opacity = "0.5";
        cifra3--;
        document.getElementById("cifra3").innerHTML = cifra3;
    }

}

function power1Clicked(event) {
    
    console.log("event.target.id: " + event.target.id);
    console.log("opacity: " + document.getElementById(event.target.id).style.opacity);
    
    if(document.getElementById(event.target.id).style.opacity === "0.5") {
        result = result + 3;
        document.getElementById("numberDisplayer").innerHTML = "totale: " + result;
        document.getElementById(event.target.id).style.opacity = 1;
        cifra2++;
        document.getElementById("cifra2").innerHTML = cifra2;
    } else {
        result = result -3;
        document.getElementById("numberDisplayer").innerHTML = "totale: " + result;
        document.getElementById(event.target.id).style.opacity = "0.5";
        cifra2--;
        document.getElementById("cifra2").innerHTML = cifra2;
    }

}

function power0Clicked(event) {
    
    console.log("event.target.id: " + event.target.id);
    console.log("opacity: " + document.getElementById(event.target.id).style.opacity);
    
    if(document.getElementById(event.target.id).style.opacity === "0.5") {
        result = result + 1;
        document.getElementById("numberDisplayer").innerHTML = "totale: " + result;
        document.getElementById(event.target.id).style.opacity = 1;
        cifra1++;
        document.getElementById("cifra1").innerHTML = cifra1;
    } else {
        result = result -1;
        document.getElementById("numberDisplayer").innerHTML = "totale: " + result;
        document.getElementById(event.target.id).style.opacity = "0.5";
        cifra1--;
        document.getElementById("cifra1").innerHTML = cifra1;
    }

}