var size = 24;
var lineHeight = 1.7;
var wordsSpace = 1;
var charactersSpace = 1;



function openSettings(display) {

    if(display==="flex") {
        /* document.getElementById("macro-settings-container").style.backgroundColor="rgba(255, 255, 255, 86%)"; */
        document.getElementById("macro-settings-container").style.backgroundColor="white";
        document.getElementById("settings-panel").style.display = "flex";
        document.getElementsByClassName("settings-icon")[0].style.display = "none";
        document.getElementsByClassName("settings-icon")[1].style.display = "block";
        
    } else {
        document.getElementById("macro-settings-container").style.backgroundColor="transparent";
        document.getElementById("settings-panel").style.display = "none";
        document.getElementsByClassName("settings-icon")[0].style.display = "block";
        document.getElementsByClassName("settings-icon")[1].style.display = "none";
    }
}

function changeFont(font) {
    document.getElementById("main").style.fontFamily = font;
}

function fontSize(delta) {
    size = size + delta;
    document.getElementById("main").style.fontSize = size+"px";
    document.getElementById("size").innerHTML = size;
}

function changeLineHeight(delta) {
    lineHeight = lineHeight + delta;
    document.getElementById("main").style.lineHeight = lineHeight+"rem";
    document.getElementById("lineHeight").innerHTML = Math.trunc(lineHeight*100)/100;
}


function changeWordsSpace(delta) {
    wordsSpace = wordsSpace + delta;
    document.getElementById("main").style.wordSpacing = wordsSpace+"px";
    document.getElementById("wordsSpace").innerHTML = Math.trunc(wordsSpace*100)/100;
}

function changeCharactersSpace(delta) {
    charactersSpace = charactersSpace + delta;
    document.getElementById("main").style.letterSpacing = charactersSpace+"px";
    document.getElementById("charactersSpace").innerHTML = Math.trunc(wordsSpace*100)/100;
}


/* var ggbApp1 = new GGBApplet({
    "appName": "classic", 
    "id": "gg1",
    "width": 500, 
    "height": 300, 
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "material_id":"djfpbjff"}, true);

window.addEventListener("load", function() { 
    ggbApp1.inject('geogebra1');
});
 */