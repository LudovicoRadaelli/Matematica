var ggbApp1 = new GGBApplet({
    "appName": "classic", 
    "id": "gg1",
    "width": 6*window.innerWidth/7, 
    "height": window.innerHeight/2, 
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "material_id":"pxd9ynb4"}, true);

window.addEventListener("load", function() { 
    ggbApp1.inject('geogebra1');
});



function generaEsempio() {
    let a = Math.floor(Math.random()*6 - 3);
    if(a === 0) { 
        a = 1;
    }
    let b = Math.floor(Math.random()*6 - 3);
    if(b === 0) {
        b = 1;
    }
    let c = Math.floor(Math.random()*6 - 3);
    if(c === 0) {
        c =1;
    }
    
    gg1.setValue("a", a);
    gg1.setValue("b", b);
    gg1.setValue("c", c);

    if(b > 0) {
        b = "+"+b;
    }
    if(c > 0) {
        c = "+"+c
    }
    document.getElementById("polinomioParabola").innerHTML = `\\( y = ${a}x^2 ${b}x ${c} \\)`;
    MathJax.typesetClear([document.getElementById("polinomioParabola")]);
    MathJax.typesetPromise([document.getElementById("polinomioParabola")]).then(() => {});
}