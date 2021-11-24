let dominioVisible = [false, false, false];
let segnoVisible = [false, false, false];
let functionVisible = [true, true];

var ggbApp1 = new GGBApplet({
    "appName": "classic", 
    "id": "gg1",
    "scaleContainerClass": "geogebra1",
    "allowUpscale": true,
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "material_id":"t27t86xg"}, 
    true);     
    
var ggbApp2 = new GGBApplet({
    "appName": "classic", 
    "id": "gg2",
    "scaleContainerClass": "geogebra2",
    "allowUpscale": true,
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": true,
    "material_id":"jscngdpx"}, 
    true); 
    
var ggbApp3 = new GGBApplet({
    "appName": "classic", 
    "id": "gg3",
    "scaleContainerClass": "geogebra3",
    "allowUpscale": true,
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "material_id":"twyr7skc"}, 
    true); 
         
    
    
window.addEventListener("load", function() { 
    ggbApp1.inject('geogebra1');
    ggbApp2.inject('geogebra2');
    ggbApp3.inject(`geogebra3`);
});

function grafica(name) {
    if(name==="dominio0") {
        dominioVisible[0] = !dominioVisible[0];
        gg1.setVisible("a",dominioVisible[0]);
        document.getElementById("dominio0").style.display = "none";
        if(!dominioVisible[0]) {
            document.getElementById("dominio0").style.display = "none";
        } else {
            document.getElementById("dominio0").style.display = "block";
        }
        document.getElementById("segno0").style.display = "none";
    }
    if(name==="segno0") {
        segnoVisible[0] = !segnoVisible[0];
        gg1.setVisible("b",segnoVisible[0]);
        gg1.setVisible("c",segnoVisible[0]);
        if(!segnoVisible[0]) {
            document.getElementById("segno0").style.display = "none";
        } else {
            document.getElementById("segno0").style.display = "block";
        }
        document.getElementById("dominio0").style.display = "none";
        
    }
    if(name==="funzione0") {
        functionVisible[0] = !functionVisible[0];
        gg1.setVisible("f",functionVisible[0]);
        gg1.setVisible("P",functionVisible[0]);
        gg1.setVisible("g",functionVisible[0]);
    }

    if(name==="dominio1") {
        dominioVisible[1] = !dominioVisible[1];
        gg2.setVisible("a",dominioVisible[1]);
        document.getElementById("dominio1").style.display = "none";
        if(!dominioVisible[1]) {
            document.getElementById("dominio1").style.display = "none";
        } else {
            document.getElementById("dominio1").style.display = "block";
        }
        document.getElementById("segno1").style.display = "none";
    }
    if(name==="segno1") {
        segnoVisible[1] = !segnoVisible[1];
        gg2.setVisible("b",segnoVisible[1]);
        gg2.setVisible("c",segnoVisible[1]);
        if(!segnoVisible[1]) {
            document.getElementById("segno1").style.display = "none";
        } else {
            document.getElementById("segno1").style.display = "block";
        }
        document.getElementById("dominio1").style.display = "none";
        
    }
    if(name==="funzione1") {
        functionVisible[1] = !functionVisible[1];
        gg2.setVisible("f",functionVisible[1]);
        gg2.setVisible("P",functionVisible[1]);
        gg2.setVisible("g",functionVisible[1]);
    }

    if(name==="dominio2") {
        dominioVisible[2] = !dominioVisible[2];
        gg3.setVisible("a",dominioVisible[2]);
        document.getElementById("dominio2").style.display = "none";
        if(!dominioVisible[2]) {
            document.getElementById("dominio2").style.display = "none";
        } else {
            document.getElementById("dominio2").style.display = "block";
        }
        document.getElementById("segno2").style.display = "none";
    }
    if(name==="segno2") {
        segnoVisible[2] = !segnoVisible[2];
        gg3.setVisible("b",segnoVisible[2]);
        gg3.setVisible("c",segnoVisible[2]);
        if(!segnoVisible[2]) {
            document.getElementById("segno2").style.display = "none";
        } else {
            document.getElementById("segno2").style.display = "block";
        }
        document.getElementById("dominio2").style.display = "none";
        
    }

    
}



/* MathJax.typesetClear([document.getElementsByClassName("calcoliEquazione"), document.getElementsByClassName("nuovaEquazione")]);
MathJax.typesetPromise([document.getElementsByClassName("calcoliEquazione"), document.getElementsByClassName("nuovaEquazione")]).then(() => {}); */
