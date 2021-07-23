let slide = 0;
let boxWidth = 100/document.getElementsByClassName("slide").length;

for(let i=0; i<document.getElementsByClassName("slide").length; i++) {
    document.getElementsByClassName("slide")[i].style.display = "none";
}
document.getElementsByClassName("slide")[slide].style.display = "block";

for(let i=0; i<document.getElementsByClassName("slide").length; i++) {
    let div = document.createElement("DIV");
    div.style.width = boxWidth+"%";
    div.style.minHeight = "0.2rem";
    div.className = "box"
    div.style.backgroundColor = "#f5d8d6"
    if(i===0) {
        div.style.backgroundColor = "#DB4437";
    }
    document.getElementById("progressBar").appendChild(div);
    
}


function changePage(delta) {
    for(let i=0; i<document.getElementsByClassName("slide").length; i++) {
        document.getElementsByClassName("slide")[i].style.display = "none";
    }
    
    if(slide===0 && delta<0) {
        slide = document.getElementsByClassName("slide").length;
    }
    slide = slide + delta;
    slide = slide % document.getElementsByClassName("slide").length;
    document.getElementsByClassName("slide")[slide].style.display = "block";

    for(let i=0; i<document.getElementsByClassName("slide").length; i++) {
        if(i<=slide) {
            document.getElementsByClassName("box")[i].style.backgroundColor = "#DB4437";
        } else {
            document.getElementsByClassName("box")[i].style.backgroundColor = "#f5d8d6";
        }
        
    }
}


var ggbApp1 = new GGBApplet({
    "appName": "classic", 
    "id": "gg1",
    "width": 500, 
    "height": 300, 
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "material_id":"dtythzq9"}, 
    true);

var ggbApp2 = new GGBApplet({
    "appName": "classic", 
    "id": "gg2",
    "width": 500, 
    "height": 300, 
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "material_id":"edank3kp"}, 
    true);

var ggbApp3 = new GGBApplet({
    "appName": "classic", 
    "id": "gg3",
    "width": 500, 
    "height": 470, 
    "showToolBar": true, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "material_id":"gert54wz"}, 
    true);

    
window.addEventListener("load", function() { 
    ggbApp1.inject('geogebra1');
    ggbApp2.inject('geogebra2');
    ggbApp3.inject('geogebra3');
});



