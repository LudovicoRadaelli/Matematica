let esempio; 
let signList = ["+", "-"];

function generaEsempio(n) {
    if(n === 1) {

        //riposiziono la visuale in cima all'esempio
        document.location.href=`#esempio1-title`

        esempio = document.getElementById("esempio"+n);
        
        //genero il monomio fattore comune
        let commonFactor = new Monomial(0, rndInt(1,5), 1, [0,0,0,rndInt(1,3), 0, 0]);
        
        //definisco un polinomio tale che 
        // * i suoi coefficienti siano coprimi
        // * ci sia almeno un monomio senza x ed uno senza y
        let polyArray = [];

        let polyLength = rndInt(2, 4);
        for(let i = 0; i < polyLength; i++) {
            let monomial = new Monomial(rndInt(0,1), rndInt(1,15), 1, [0, 0, 0, rndInt(1,4), rndInt(1,4), 0]);
            polyArray.push(monomial);
        }


        polyInParenthesis = new Polynomial(polyArray);
        for(let i = 1; i < polyArray.length; i++) {
            for(let j = 0; j < i; j++) {
                //controllo che i coefficienti siano coprimi; in caso contrario li modifico
                let gcdCoeff = gcd(polyInParenthesis.monomial[i].num, polyInParenthesis.monomial[j].num);
                if(gcdCoeff !== 1) {
                    Object.defineProperty(polyInParenthesis.monomial[i], "num" , {value:polyInParenthesis.monomial[i].num/gcdCoeff});
                }
            }
        }

        //mi assicuro che almeno un termine sia senza x
        Object.defineProperty(polyInParenthesis.monomial[rndInt(0,polyLength-1)], "literal" , {value: [0, 0, 0, 0, rndInt(1, 4),  0]});
        
        //mi assicuro che almeno un termine sia senza y
        let indexInquired = rndInt(0,polyLength - 1); 
        console.log(`indexInquired: ${indexInquired}`)
        while(polyInParenthesis.monomial[indexInquired].literal[3] === 0) {
            indexInquired = rndInt(0,polyLength - 1);    
        }
        Object.defineProperty(polyInParenthesis.monomial[indexInquired], "literal" , {value: [0, 0, 0, rndInt(1, 4), 0, 0]});


        //definisco il polinomio da scomporre a partire dal fattore comune e  dal polinomio in parentesi
        let toBeFactorizedArray = [];
        for(let i = 0; i < polyArray.length; i++) {
            toBeFactorizedArray.push(product(polyInParenthesis.monomial[i], commonFactor));
        }

        let toBeFactorized = new Polynomial(toBeFactorizedArray);


        //compongo il testo dell'esercizio
        esempio.innerHTML = 
        `<p>
            Scomponiamo il polinomio 
            \\[${toBeFactorized.display()}\\]
        </p>
        <p>
            <b>Troviamo il fattore comune</b>
        </p>
        <br>
        <p>
            &bullet; Il più grande numero che divide i coefficienti del polinomio è \\(${commonFactor.num}\\).
        </p>
        <br>
        <p>
            &bullet;  La \\(x\\) è presente in tutti i monomi e l'esponente più piccolo con cui 
            compare è \\(${commonFactor.literal[3]}\\).
        </p>
        <br>
        <p>
            Il fattore comune è \\(${commonFactor.display()}\\)
        </p>
        <br>
        <p class="grayBackground">
            Di conseguenza possiamo scomporre il polinomio come segue:
            \\[
                \\begin{align*}
                & ${toBeFactorized.display()} =
                \\\\\\\\
                = \\,\\,&  ${commonFactor.display()} \\cdot \\left(${polyInParenthesis.display()}\\right)
                \\end{align*}
            \\]
        </p>
        <p>
            
        </p>
        <br>
        <p>
            <b>Come abbiamo trovato i termini in parentesi</b>
        </p>
        <br>
        `

        for(let i = 0; i < polyLength; i++) {
            esempio.innerHTML += `
            <p>
                \\( 
                    ${polyInParenthesis.monomial[i].displayWithSign()}
                \\) è il monomio che moltiplicato per \\(${commonFactor.display()}\\) dà come risultato \\(${toBeFactorized.monomial[i].displayWithSign()} \\)
            </p>
            <br>
            `
        }

    }
    
    MathJax.typesetClear([esempio]);
    MathJax.typesetPromise([esempio]).then(() => {});
}

function rndInt(min, max) {
    let rnd = min + Math.floor(Math.random()*(max - min +1));
    return rnd;
}



