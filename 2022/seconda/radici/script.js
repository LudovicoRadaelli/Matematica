

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

    MathJax.typesetClear([esempio]);
    MathJax.typesetPromise([esempio]).then(() => {});
}

function show(n) {
    document.getElementById(`show-button${n}`).style.display = "none";
    document.getElementById(`show${n}`).style.display = "block";
}
