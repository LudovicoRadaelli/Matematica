console.log( document.getElementById("geogebra2").clientWidth)

var ggbApp1 = new GGBApplet({
    "appName": "classic", 
    "id": "gg1",
    "width": document.getElementById("geogebra2").clientWidth, 
    "height": document.getElementById("geogebra2").clientHeight, 
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "material_id":"wmd2pnut"}, true);

window.addEventListener("load", function() { 
    ggbApp1.inject('geogebra2');
});






/* function generaEsempio() {

    MathJax.typesetClear([document.getElementById("polinomioParabola")]);
    MathJax.typesetPromise([document.getElementById("polinomioParabola")]).then(() => {});
} */