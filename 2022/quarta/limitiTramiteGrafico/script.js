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
    
    inserisciX0(i+1);
}

function inserisciX0(nEx) {
    for(let j = 0; j < document.getElementsByClassName("x0").length; j++) {
        document.getElementsByClassName("x0")[j].innerHTML = `\\( \\color{#0079FF}{${gg1.getValue("l2("+nEx+")")}} \\)`
    
        MathJax.typesetClear([document.getElementsByClassName("x0")[j]]);
        MathJax.typesetPromise([document.getElementsByClassName("x0")[j]]).then(() => {});
    }
    
}


