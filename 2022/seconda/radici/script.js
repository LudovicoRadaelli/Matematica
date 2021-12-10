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
        let factor = Math.floor(Math.random()*9+2);
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

    if(n === 4) {
        
        let arg1 = Math.floor(Math.random()*9+1);
        let arg2 = Math.floor(Math.random()*9+1);
        let index = Math.floor(Math.random()*9+1);
        
        esempio.innerHTML =
        `\\[
            \\sqrt[\\color{red}{${index}}]{\\color{blue}{${arg1}}} \\cdot \\sqrt[\\color{red}{${index}}]{\\color{blue}{${arg2}}} = \\sqrt[\\color{red}{${index}}]{\\color{blue}{${arg1} \\color{black}{\\,\\cdot\\,} \\color{blue}{${arg2}}}}        
        \\]`
    }

    if(n === 5) {
        
        let arg1 = Math.floor(Math.random()*12+2);
        let arg2 = Math.floor(Math.random()*12+2);
        let index = Math.floor(Math.random()*13+2);
        let form = Math.floor(Math.random()*2);
        console.log(`form: ${form}`)
        if(form === 0) {
            esempio.innerHTML =
            `\\[
                \\dfrac{\\sqrt[\\color{red}{${index}}]{\\color{blue}{${arg1}}}}{\\sqrt[\\color{red}{${index}}]{\\color{blue}{${arg2}}}} = \\sqrt[\\color{red}{${index}}]{\\dfrac{\\color{blue}{${arg1}}}{\\color{blue}{${arg2}}}}
            \\]`
        } else {
            esempio.innerHTML =
            `\\[
                \\sqrt[\\color{red}{${index}}]{\\color{blue}{${arg1}}} : \\sqrt[\\color{red}{${index}}]{\\color{blue}{${arg2}}} = \\sqrt[\\color{red}{${index}}]{\\color{blue}{${arg1} \\color{black}{\\,:\\,} \\color{blue}{${arg2}}}}
            \\]`
        }
    }

    if(n === 6) {
        
        let exp1 = Math.floor(Math.random()*5+1);
        let index = Math.floor(Math.random()*5+2);
        let exp2 = Math.floor(Math.random()*(index-1))+1;
        console.log(`exp2: ${exp2}`)
        let base = Math.floor(Math.random()*13+2);
        
        esempio.innerHTML = 
        `\\[
            \\begin{align}
                \\sqrt[${index}]{${base}^{${exp1*index + exp2}}} \\,&=\\, \\sqrt[${index}]{${base}^{${exp1*index}}\\,\\cdot\\,${base}^{${exp2}}} \\,=\\\\\\\\
                &=\\, ${base}^{${exp1}}\\,\\sqrt[${index}]{${base}^{${exp2}}}\\,= \\\\\\\\
                &=\\, ${Math.pow(base,exp1)}\\,\\sqrt[${index}]{${Math.pow(base,exp2)}} 
            \\end{align}
        \\]`
    }

    MathJax.typesetClear([esempio]);
    MathJax.typesetPromise([esempio]).then(() => {});
}

function show(n) {
    document.getElementById(`show-button${n}`).style.display = "none";
    document.getElementById(`show${n}`).style.display = "block";
}
