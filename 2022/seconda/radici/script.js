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

/* function generaEsempio(n) {

    if(n === 1) {
        let b = Math.floor(Math.random()*12+2);
        let e1 = Math.floor(Math.random()*12+1);
        let e2 = Math.floor(Math.random()*12+1);
        let eRes = e1 + e2;

        document.getElementById("esempio"+n).innerHTML = 
        `\\[ \\color{red}{${b}}^{\\color{blue}{${e1}}} \\color{black}{\\,\\,\\cdot\\,\\,} \\color{red}{${b}}^{\\color{blue}{${e2}}} \\color{black}{\\,\\,\\,=\\,\\,\\,} \\color{red}{${b}}^{\\color{blue}{${eRes}}} \\]`;
        MathJax.typesetClear([document.getElementById("esempio1")]);
        MathJax.typesetPromise([document.getElementById("esempio1")]).then(() => {});

    }

    if(n === 2) {
        let b = Math.floor(Math.random()*12 + 2);
        let e1 = Math.floor(Math.random()*6 + 7);
        let e2 = e1 - Math.floor(Math.random()*6);
        let eRes = e1 - e2;

        document.getElementById("esempio2").innerHTML = 
        `\\[ \\color{red}{${b}}^{\\color{blue}{${e1}}} \\color{black}{\\,\\,:\\,\\,} \\color{red}{${b}}^{\\color{blue}{${e2}}} \\color{black}{\\,\\,\\,=\\,\\,\\,} \\color{red}{${b}}^{\\color{blue}{${eRes}}} \\]`;
        MathJax.typesetClear([document.getElementById("esempio"+n)]);
        MathJax.typesetPromise([document.getElementById("esempio"+n)]).then(() => {});
    }

    if(n === 3) {
        let b1 = Math.floor(Math.random()*12 + 2);
        let b2 = Math.floor(Math.random()*12 + 2);
        let e = Math.floor(Math.random()*12 + 2);
        let bRes = b1*b2;

        document.getElementById("esempio"+n).innerHTML = 
        `\\[ \\color{red}{${b1}}^{\\color{blue}{${e}}} \\color{black}{\\,\\,\\cdot\\,\\,} \\color{red}{${b2}}^{\\color{blue}{${e}}} \\color{black}{\\,\\,\\,=\\,\\,\\,} \\color{red}{${bRes}}^{\\color{blue}{${e}}} \\]`;
        MathJax.typesetClear([document.getElementById("esempio"+n)]);
        MathJax.typesetPromise([document.getElementById("esempio"+n)]).then(() => {});
    }

    if(n === 4) {
        let b2 = Math.floor(Math.random()*5 + 2);
        let b1 = b2*Math.floor(Math.random()*5 + 2);
        let e = Math.floor(Math.random()*12 + 2);
        let bRes = Math.floor(b1/b2);
        document.getElementById("esempio"+n).innerHTML = 
        `\\[ \\color{red}{${b1}}^{\\color{blue}{${e}}} \\color{black}{\\,\\,:\\,\\,} \\color{red}{${b2}}^{\\color{blue}{${e}}} \\color{black}{\\,\\,\\,=\\,\\,\\,} \\color{red}{${bRes}}^{\\color{blue}{${e}}} \\]`;
        MathJax.typesetClear([document.getElementById("esempio"+n)]);
        MathJax.typesetPromise([document.getElementById("esempio"+n)]).then(() => {});
    }

    if(n === 5) {
        let e1 = Math.floor(Math.random()*12 + 2);
        let e2 = Math.floor(Math.random()*12 + 2);
        let b = Math.floor(Math.random()*12 + 2);
        let eRes = Math.floor(e1*e2);
        document.getElementById("esempio"+n).innerHTML = 
        `\\[ 
            \\left(\\color{red}{${b}}\\color{black}{}^{\\color{blue}{${e1}}}\\right)^{\\color{blue}{${e2}}} = \\color{red}{${b}}^{\\color{blue}{${eRes}}}    
        \\]`;
        MathJax.typesetClear([document.getElementById("esempio"+n)]);
        MathJax.typesetPromise([document.getElementById("esempio"+n)]).then(() => {});
    }

} */


function generaDefinizione() {
    let n = document.getElementById("nInput").value;
    let a = document.getElementById("aInput").value;
    let definizione = document.getElementById("definizione");

    definizione.innerHTML = 
    `\\(\\sqrt[\\color{red}{${n}}]{\\color{blue}{${a}}}\\) è quel numero che elevato alla \\(\\color{red}{${n}}\\) dà come risultato \\(\\color{blue}{${a}}\\).`

    MathJax.typesetClear([definizione]);
    MathJax.typesetPromise([definizione]).then(() => {});
}

function generaEsempio(n) {

    let esempio =document.getElementById("esempio"+n);

    if(n === 1) {
        let ind = Math.floor(Math.random()*20+1);
        let arg; 
        if(ind%2===0) {
            arg = Math.floor(Math.random()*20);
        } else {
            arg = Math.floor(Math.random()*40-20);
        }

        document.getElementById("esempio"+n).innerHTML = 
        `<p>
            \\(\\sqrt[\\color{red}{${ind}}]{\\color{blue}{${arg}}}\\,\\,\\) ha
        </p>
        <ul>
            <li>
                <span style="color: red;">indice</span>: \\(\\color{red}{${ind}}\\)
            </li>
            <li>
                <span style="color: blue;">argomento</span>: \\(\\color{blue}{${arg}}\\)
            </li>
        </ul>
        <br>`
        
        

    }

    if(n === 2) {
        let esempioText = document.getElementById(`esempio-text${n}`);
        
        let arg = Math.floor(Math.random()*9+1);
        let indexS = Math.floor(Math.random()*12+1);
        let expS = Math.floor(Math.random()*12+1);
        let factor = Math.floor(Math.random()*9+1);
        let index = indexS*factor;
        let exp = expS*factor;

        esempio.innerHTML =
        `\\[
            \\sqrt[\\color{red}{${index}}]{${arg}^{\\color{red}{${exp}}}} = \\sqrt[\\color{red}{${indexS}}]{${arg}^{\\color{red}{${expS}}}}
        \\]`

        esempioText.innerHTML =
        `<u>Divido</u> per \\(${factor}\\) sia l'indice di radice, \\(\\color{red}{${index}}\\), che l'esponente dell'argomento, \\(\\color{red}{${exp}}\\).`
        
        MathJax.typesetClear([esempioText]);
        MathJax.typesetPromise([esempioText]).then(() => {});
    }

    if(n === 3) {
        let esempioText = document.getElementById(`esempio-text${n}`);
        
        let arg = Math.floor(Math.random()*9+1);
        let indexS = Math.floor(Math.random()*12+1);
        let expS = Math.floor(Math.random()*12+1);
        let factor = Math.floor(Math.random()*9+2);
        let index = indexS*factor;
        let exp = expS*factor;

        esempio.innerHTML =
        `\\[
            \\sqrt[\\color{red}{${indexS}}]{${arg}^{\\color{red}{${expS}}}} = \\sqrt[\\color{red}{${index}}]{${arg}^{\\color{red}{${exp}}}}
        \\]`

        esempioText.innerHTML =
        ` <u>Moltiplico</u> per \\(${factor}\\) sia l'indice di radice, \\(\\color{red}{${indexS}}\\), che l'esponente dell'argomento, \\(\\color{red}{${expS}}\\).`
        
        MathJax.typesetClear([esempioText]);
        MathJax.typesetPromise([esempioText]).then(() => {});
    }

    MathJax.typesetClear([esempio]);
    MathJax.typesetPromise([esempio]).then(() => {});
}

function show(n) {
    document.getElementById(`show-button${n}`).style.display = "none";
    document.getElementById(`show${n}`).style.display = "block";
}