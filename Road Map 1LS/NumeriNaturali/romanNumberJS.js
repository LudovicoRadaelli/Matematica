organizeKeyboard(9);


function organizeKeyboard(n) {
    alignKeyboard(n-2);
    alignMetaKeyboard(2);
    
}
var keyBoardPadding = 0;
function alignKeyboard(n){
    keyBoardPadding = 8*n;  //n è il numero di tasti 
    keyBoardPadding = (80-keyBoardPadding)/2;
    keyBoardPadding.toString;
    keyBoardPadding = keyBoardPadding + "vw";
    keyboard = document.getElementById("keyboard");
    keyboard.style.paddingLeft = keyBoardPadding;
    keyboard.style.paddingRight = keyBoardPadding;
}
var metaKeyBoardPadding = 0;
function alignMetaKeyboard(n){
    metaKeyBoardPadding = 8*n;  //n è il numero di tasti 
    metaKeyBoardPadding = (80-metaKeyBoardPadding)/2;
    metaKeyBoardPadding.toString;
    metaKeyBoardPadding = metaKeyBoardPadding + "vw";
    metaKeyboard = document.getElementById("metaKeyboard");
    metaKeyboard.style.paddingLeft = metaKeyBoardPadding;
    metaKeyboard.style.paddingRight = metaKeyBoardPadding;
}



function generateRandomNumber() {
    var targetNumber = Math.round(Math.random()*1000);
    document.getElementById("displayRandomNumber").innerHTML = targetNumber;   
}


var displayerArray = [];

function youClickedAKey(evt){
    if(evt.target.id==="1Key"){
        displayerArray.push("I");
        updateDisplayer();
    } else if(evt.target.id==="5Key"){
        displayerArray.push("V");
        updateDisplayer();
    } else if(evt.target.id==="10Key"){
        displayerArray.push("X");
        updateDisplayer();
    } else if(evt.target.id==="50Key"){
        displayerArray.push("L");
        updateDisplayer();
    } else if(evt.target.id==="100Key"){
        displayerArray.push("C");
        updateDisplayer();
    } else if(evt.target.id==="500Key"){
        displayerArray.push("D");
        updateDisplayer();
    } else if(evt.target.id==="1000Key"){
        displayerArray.push("M");
        updateDisplayer();
    }  else if(evt.target.id==="refreshKey"){
        displayerArray = [];
        updateDisplayer();
    } else if(evt.target.id==="deleteKey"){
        displayerArray.pop();
        updateDisplayer(); 
    }

}

function updateDisplayer() {
    var displayerString = [];
    for(var i=0; i<displayerArray.length;i++) {
        displayerString += displayerArray[i]; 
    }
    document.getElementById("displayRomanNumber").innerHTML = displayerString;
}