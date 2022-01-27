/* var ggbApp1 = new GGBApplet({
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
 */


/* 
MathJax.typesetClear([]);
MathJax.typesetPromise([]).then(() => {});
*/
class Coeff {
    constructor(module, sign) {
        this.module = module;
        this.sign = sign;
        this.value = [];
        if(this.sign === "+") {
            this.value[0] = this.module;
        } else {
            this.value[0] = -this.module;
        }
    }
    
    show() {
        if(this.sign === "+") {
            return `${this.module}`
        } else {
            return `\\left(${-this.module}\\right)`
        }
    }
}

function generaEsempio(n) {

    let esempio = document.getElementById("esempio"+n);

    if(n === 1) {
        

        let sol1 = Math.floor(Math.random()*20-10);
        let sol2 = Math.floor(Math.random()*20-10);
        let a = Math.floor(Math.random()*20-5);
        let b = -a*(sol1 + sol2);
        let c = a*sol1*sol2

        document.getElementById("esempio"+n).innerHTML = 
        `
        <p>
            Risolvere l'equazione
            \\[
                \\color{red}{${a}}\\,\\color{black}{x^2}\\, + \\color{blue}{${b}}\\,\\color{black}{x}\\, + \\color{darkorange}{${c}}\\,\\,  \\color{black}{}= 0
            \\]
        </p>
        <p>
            Usiamo la formula 
            \\[
                \\begin{align*}
                    x &= \\dfrac{-\\color{blue}{b}\\color{black}{} \\pm \\sqrt{\\color{blue}{b}\\color{black}{}^2 - 4 \\cdot \\color{red}{a}\\color{black} \\cdot  \\color{darkorange}{c}\\color{black}}}{2\\color{red}{a}}    \\\\\\\\
                      &= \\dfrac{-\\color{blue}{${b}}\\color{black}{} \\pm \\sqrt{\\color{blue}{${b}}\\color{black}{}^2 - 4 \\cdot \\color{red}{${a}}\\color{black} \\cdot  \\color{darkorange}{${c}}\\color{black}}}{2\\cdot\\color{red}{${a}}}    
                \\end{align*}
            \\]
        </p>
        `;
        
        

    }

    MathJax.typesetClear([esempio]);
    MathJax.typesetPromise([esempio]).then(() => {});
}

function show(n) {
    document.getElementById(`show-button${n}`).style.display = "none";
    document.getElementById(`show${n}`).style.display = "block";
}
