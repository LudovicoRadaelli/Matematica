console.log( document.getElementById("geogebra1").clientWidth)

var ggbApp1 = new GGBApplet({
    "appName": "classic", 
    "id": "gg1",
    "width": document.getElementById("geogebra1").clientWidth, 
    "height": document.getElementById("geogebra1").clientHeight, 
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": true,
    "appletOnLoad": function(gg1) {
        gg1.registerObjectUpdateListener("C", refreshGeogebra); 
    },
    "material_id":"fgdwpjp6"}, true);

window.addEventListener("load", function() { 
    ggbApp1.inject('geogebra1');
    document.getElementById("geogebra1").style.width = "100%"


    let a = -1;
    let b = 2;
    let c = 2;
});

if(ggbApp1.appletOnLoad){
    console.log("aaaaaaa")
    gg1.registerObjectUpdateListener("C", refreshGeogebra); 
}

function refreshGeogebra() {
    /* if(gg1.getYcoord("C")>0) {
        gg1.setColor("j",255,0,0);
        document.getElementById("polinomioParabola").innerHTML = 
        `\\[
            -x^2 + 2x + 2 \\color{red}{\\,>\\,} \\color{black}{ 0 }    
        \\]`;
    } else {
        gg1.setColor("j",0,0,255);
        document.getElementById("polinomioParabola").innerHTML = 
        `\\[
            -x^2 + 2x + 2 \\color{blue}{\\,<\\,} \\color{black}{ 0 }      
        \\]`;
    } */

    document.getElementById("x").innerHTML = `\\(x = ${Math.floor(gg1.getXcoord("C")*100)/100}\\)`;

    
        document.getElementById("y").innerHTML = 
        `\\[y \\color{gray}{= -\\left(${Math.floor(gg1.getXcoord("C")*100)/100}\\right)^2 + 2\\cdot\\left(${Math.floor(gg1.getXcoord("C")*100)/100}\\right) + 2} \\color{black}{ = ${Math.floor(gg1.getYcoord("C")*100)/100}}\\]`;
    
        MathJax.typesetClear([document.getElementById("x"), document.getElementById("y")]);
        MathJax.typesetPromise([document.getElementById("x"), document.getElementById("y")]).then(() => {});
    /* MathJax.typesetClear([document.getElementById("polinomioParabola"), document.getElementById("x"), document.getElementById("y")]);
    MathJax.typesetPromise([document.getElementById("polinomioParabola"),  document.getElementById("x"), document.getElementById("y")]).then(() => {}); */

    
}






/* function generaEsempio() {

    MathJax.typesetClear([document.getElementById("polinomioParabola")]);
    MathJax.typesetPromise([document.getElementById("polinomioParabola")]).then(() => {});
} */