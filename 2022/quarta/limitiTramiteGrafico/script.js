var ggbApp1 = new GGBApplet({
    "appName": "classic", 
    "id": "gg1",
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "material_id":"sd65e4wq",
    "scaleContainerClass":"geogebra-container"}, 
    true);
          
    
window.addEventListener("load", function() { 
    ggbApp1.inject('geogebra1');
});

function vai() {
    let ex = document.getElementById("ex").options;
    let i = document.getElementById("ex").selectedIndex;
    console.log(`ex[i]: ${ex[i].index}`);

    gg1.setValue(`n`,i+1);

    
}


