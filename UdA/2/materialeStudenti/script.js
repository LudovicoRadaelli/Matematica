var ggbApp1 = new GGBApplet({
    "appName": "classic", 
    "id": "gg1",
    "width": 500, 
    "height": 300, 
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "material_id":"djfpbjff"}, true);

var ggbApp2 = new GGBApplet({
    "appName": "classic", 
    "id": "gg2",
    "width": 500, 
    "height": 300, 
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "material_id":"mkcpfxsq"}, true);

window.addEventListener("load", function() { 
    ggbApp1.inject('geogebra1');
    ggbApp2.inject('geogebra2');
});

function esTrap(num) {
    
    gg1.setVisible("a", false);
    gg1.setVisible("b", false);
    gg1.setVisible("c", false);
    gg1.setVisible("d", false);
    if(num===0) {
        gg1.setVisible("a", true);
    } else if(num===1) {
        gg1.setVisible("b", true);
    } else if(num===2) {
        gg1.setVisible("c", true);
    } else if(num===3) {
        gg1.setVisible("d", true);
    }
}


