var ggbApp1 = new GGBApplet({
    "appName": "classic", 
    "id": "gg1",
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "material_id":"wymdc93a",
    "scaleContainerClass":"geogebra-container"}, 
    true);
        
    
    window.addEventListener("load", function() { 
        ggbApp1.inject('geogebra1');
    });
