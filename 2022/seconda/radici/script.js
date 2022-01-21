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

function gcd(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }

function lcm(a,b){
    return a/gcd(a,b)*b;
}


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

    let esempio = document.getElementById("esempio"+n);

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

    if(n === 7) {
        
        let arg = Math.floor(Math.random()*12+2);
        let index1 = Math.floor(Math.random()*13+2);
        let index2 = Math.floor(Math.random()*13+2);
        esempio.innerHTML = 
        `\\[
            \\sqrt[\\color{red}{${index1}}]{\\sqrt[\\color{red}{${index2}}]{${arg}}} = \\sqrt[\\color{red}{${index1*index2}}]{${arg}}
        \\]`
        document.getElementById("esempio-text7").innerHTML = 
        `L'indice del risultato è il prodotto tra gli indici delle due radici \\(\\color{red}{${index1} \\,\\cdot\\,${index2} = ${index1*index2}}\\).`
        MathJax.typesetClear([document.getElementById("esempio-text7")]);
        MathJax.typesetPromise([document.getElementById("esempio-text7")]).then(() => {});
    }

    if(n === 8) {
        let num = Math.floor(Math.random()*12+2);
        let den = Math.floor(Math.random()*12+2);
        /* let simplified = Math.floor(Math.random()*5 + 2);
        let num = den*simplified; */
        
        esempio.innerHTML = 
        `\\[
            \\dfrac{${num}}{\\sqrt{${den}}} = \\dfrac{${num}}{\\sqrt{${den}}} \\cdot \\color{red}{\\dfrac{\\sqrt{${den}}}{\\sqrt{${den}}}} \\color{black}{} = \\dfrac{${num}\\,\\sqrt{${den}}}{${den}}
         \\]`

    }

    if(n === 9) {
        signA = [``,`-`];
        signB = [`+`,`-`];
        let a = {
            signIndex: Math.floor(Math.random()*2),
            value: Math.floor(Math.random()*12+2)
        };
        a.sign = signA[a.signIndex];

        let b = {
            signIndex: Math.floor(Math.random()*2),
            value: Math.floor(Math.random()*12+2)
        };
        b.sign = signB[b.signIndex];

        let result = {};

        if(a.signIndex === (b.signIndex + 1)%2) {
            console.log(`
            a.signIndex: ${a.signIndex}, 
            b.signIndex: ${b.signIndex}, 
            segno opposto b: ${(b.signIndex + 1)%2}},
            ${a.signIndex === signB[(b.signIndex + 1)%2]}
            `)
            result.sign = ``;
        } else {
            console.log(`
            a.signIndex: ${a.signIndex}, 
            b.signIndex: ${b.signIndex}, 
            segno opposto b: ${(b.signIndex + 1)%2}},
            ${a.signIndex === signB[(b.signIndex + 1)%2]}
            `)
            result.sign = `-`
        }
        if(a.sign === `-`) {
            result.ineq = `\\leq`
        } else {
            result.ineq = `\\geq`
        }

        let gcdAB = gcd(a.value, b.value);

        let extraString = ``;
        if(gcdAB === 1) {
            extraString = ``;
        } else {
            num = b.value/gcdAB;
            den = a.value/gcdAB;
            if(num % den === 0) {
                result.value = num/den;
            } else {
                result.value = `\\dfrac{${num}}{${den}}`
            }

            extraString = `\\\\\\\\x & ${result.ineq} ${result.sign}${result.value} `
        }
        esempio.innerHTML = 
        `\\[
            \\sqrt{\\color{red}{${a.sign}${a.value}x ${b.sign} ${b.value}}} \\,\\,\\,\\text{esiste}
        \\]
        \\[
        \\Updownarrow
        \\]
        \\[
            \\begin{align*}    
            \\color{red}{${a.sign} ${a.value}x ${b.sign} ${b.value} }&\\color{blue}{\\,\\,\\geq 0 } \\\\\\\\
            ${a.sign}${a.value}x & \\geq ${signB[(b.signIndex + 1) % 2]}${b.value} \\\\\\\\
            x & ${result.ineq} ${result.sign}\\dfrac{${b.value}}{${a.value}} 
            ${extraString}
            \\end{align*}    
        \\]`

    }

    MathJax.typesetClear([esempio]);
    MathJax.typesetPromise([esempio]).then(() => {});
}

function show(n) {
    document.getElementById(`show-button${n}`).style.display = "none";
    document.getElementById(`show${n}`).style.display = "block";
}
