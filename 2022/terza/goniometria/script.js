var ggbApp1 = new GGBApplet({
    "appName": "classic", 
    "id": "gg1",
    "scaleContainerClass": "geogebra1",
    "allowUpscale": true,
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "material_id":"kswyuuds"}, 
    true);     
    

window.addEventListener("load", function() { 
    ggbApp1.inject('geogebra1');
});
    