document.getElementById("row1column1").style.opacity = "0.5";
document.getElementById("row1column2").style.opacity = "0.5";
document.getElementById("row1column3").style.opacity = "0.5";
document.getElementById("row1column4").style.opacity = "0.5";

document.getElementById("row2column1").style.opacity = "0.5";
document.getElementById("row2column2").style.opacity = "0.5";
document.getElementById("row2column3").style.opacity = "0.5";
document.getElementById("row2column4").style.opacity = "0.5";

document.getElementById("row3column1").style.opacity = "0.5";
document.getElementById("row3column2").style.opacity = "0.5";
document.getElementById("row3column3").style.opacity = "0.5";
document.getElementById("row3column4").style.opacity = "0.5";

document.getElementById("row4column1").style.opacity = "0.5";
document.getElementById("row4column2").style.opacity = "0.5";
document.getElementById("row4column3").style.opacity = "0.5";
document.getElementById("row4column4").style.opacity = "0.5";

document.getElementById("row5column1").style.opacity = "0.5";
document.getElementById("row5column2").style.opacity = "0.5";
document.getElementById("row5column3").style.opacity = "0.5";
document.getElementById("row5column4").style.opacity = "0.5";

document.getElementById("row6column1").style.opacity = "0.5";
document.getElementById("row6column2").style.opacity = "0.5";
document.getElementById("row6column3").style.opacity = "0.5";
document.getElementById("row6column4").style.opacity = "0.5";

document.getElementById("row7column1").style.opacity = "0.5";
document.getElementById("row7column2").style.opacity = "0.5";
document.getElementById("row7column3").style.opacity = "0.5";
document.getElementById("row7column4").style.opacity = "0.5";

document.getElementById("row8column1").style.opacity = "0.5";
document.getElementById("row8column2").style.opacity = "0.5";
document.getElementById("row8column3").style.opacity = "0.5";
document.getElementById("row8column4").style.opacity = "0.5";

document.getElementById("row9column1").style.opacity = "0.5";
document.getElementById("row9column2").style.opacity = "0.5";
document.getElementById("row9column3").style.opacity = "0.5";
document.getElementById("row9column4").style.opacity = "0.5";

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
        result = result + 1000;
        document.getElementById("numberDisplayer").innerHTML = "totale: " + result;
        document.getElementById(event.target.id).style.opacity = 1;
        cifra4++;
        document.getElementById("cifra4").innerHTML = cifra4;
    } else {
        result = result -1000;
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
        result = result + 100;
        document.getElementById("numberDisplayer").innerHTML = "totale: " + result;
        document.getElementById(event.target.id).style.opacity = 1;
        cifra3++;
        document.getElementById("cifra3").innerHTML = cifra3;
    } else {
        result = result -100;
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
        result = result + 10;
        document.getElementById("numberDisplayer").innerHTML = "totale: " + result;
        document.getElementById(event.target.id).style.opacity = 1;
        cifra2++;
        document.getElementById("cifra2").innerHTML = cifra2;
    } else {
        result = result -10;
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