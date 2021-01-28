//ss1 = w3.slideshow(".c1", 0);
//ss2 = w3.slideshow(".c2", 0);
//ss3 = w3.slideshow(".c3", 0);
//ss4 = w3.slideshow(".c4", 0);

var ggbApp1 = new GGBApplet({
    "appName": "classic", 
    "id": "gg1",
    "width": 500, 
    "height": 300, 
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "material_id":"bkkyxzje"}, true);

    var ggbApp2 = new GGBApplet({
        "appName": "classic", 
        "id": "gg2",
        "width": 500, 
        "height": 300, 
        "showToolBar": false, 
        "showAlgebraInput": false, 
        "showMenuBar": false, 
        "enableShiftDragZoom": false,
        "material_id":"gycvsw6n"}, true);    

window.addEventListener("load", function() { 
    ggbApp1.inject('geogebra1');
    ggbApp2.inject('geogebra2');
});

var tentativo = -1;

function chiudi() {
    document.getElementById("istruzioniWrapper").style.display = "none";
}

var vid = document.getElementById("disegnaBisettrice");
vid.addEventListener("ended",function(){
    document.getElementById("disegnaBisettriceWrapper").innerHTML = "<img id='disegnaBisettrice' class='centred' src='images/isoscele5.png'>";
});




  