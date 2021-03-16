var ggbApp1 = new GGBApplet({
    "appName": "classic", 
    "id": "gg1",
    "width": 500, 
    "height": 300, 
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "material_id":"gd7whq2b"}, true);

window.addEventListener("load", function() { 
    ggbApp1.inject('right');
});



function xValue() {
    let x = document.getElementById("slider1").value;
    let xValue = document.getElementById("xValue");
    let yValue = document.getElementById("yValue");
    let explanation = document.getElementById("explanation");

    let y = (-3*x+1)/(x-7);
    y = Math.floor(y*100)/100;
    xValue.innerHTML = "\\(x = \\color{red}{"+x+"}\\)"
    yValue.innerHTML = "\\(\\color{black}{}\\frac{-3\\color{red}{x}\\color{black}{+1}}{\\color{red}{x}\\color{black}{-7}}=\\frac{-3\\cdot\\color{red}{\\left("+x+"\\right)}\\color{black}{}+1}{\\color{red}{"+x+"}\\color{black}{-7}} = \\color{blue}{}"+y+"\\)";
    
    gg1.evalCommand("a="+x);

    explanation.innerHTML = "Quindi se \\(x\\) vale \\(\\color{red}{"+x+"}\\),<br>"+ 
    "la frazione algebrica vale \\(\\color{blue}{"+y+"}\\)"

    MathJax.typesetClear([document.getElementById("xValue"),document.getElementById("yValue"),document.getElementById("explanation")]);
    MathJax.typesetPromise([document.getElementById("xValue"),document.getElementById("yValue"),document.getElementById("explanation")]).then(() => {});
}

function aggiungiParagrafo(i) {
    let parag = document.getElementsByClassName("paragrafoAggiunto");
    if(i===1) {
        parag[0].style.display = "block";
        parag[1].style.display = "list-item"
    }

    if(i===2) {
        parag[2].style.display = "block";
    }
}

function spiegazione(i) {
    let spiegazione = document.getElementsByClassName("spiegazione");
    if(i===1) {
        
        let valore1 = document.getElementById("valore1");
        let valore2 = document.getElementById("valore2");
        
        spiegazione[0].style.display = "block";
        valore1.innerHTML = "\\(-\\frac{9}{49}\\)"
        valore2.innerHTML = "\\(-\\frac{9}{49}\\)"
        MathJax.typesetClear([valore1, valore2]);
        MathJax.typesetPromise([valore1, valore2]).then(() => {});
    }

    if(i===2) {
        spiegazione[1].style.display = "block";
    }
}
