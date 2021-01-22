//tutto il codice di questo file.js è racchiuso da graffe, in maniera da poter usare
//let con block scope
{
    var container2 = document.getElementById("container2");
    var button2 = document.getElementById("quadratoDiBinomioWrapper");

    let p = randomPolynomial(2);

    for(var i = 0; i<2; i++) {
        for(var j = 0; j<6; j++) {
            p.poly[i].literal[j] = 0;
        }
    }

    Object.defineProperty(p.poly[0], "den" , {value: 1});
    Object.defineProperty(p.poly[1], "den" , {value: 1});
    p.poly[0].literal[rnd(0,5)] = rnd(0,3);
    p.poly[0].literal[rnd(0,5)] = rnd(0,3);
    p.poly[1].literal[rnd(0,5)] = rnd(0,3);
    p.poly[1].literal[rnd(0,5)] = rnd(0,3);

    container2.innerHTML += "\\[\\left("+p.display()+"\\right)^2 = \\]";
    button2.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' disabled>&#8592;</button>";    
    button2.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepQuadratoDiBinomio(0,0,0,1)";>&#8594;</button>';    
    
    let showFormula = true;
    document.getElementById("quadratoDiBinomioTitle").onclick = function(){
        if(showFormula){
            document.getElementById("quadratoDiBinomioTitle").style.transform = "scale(0.7)"
            document.getElementById("quadratoDiBinomioTitle").innerHTML = "\\(\\left(A + B\\right)^{2} = A^{2} + 2AB + B^{2}\\)";
        } else {
            document.getElementById("quadratoDiBinomioTitle").style.transform = "scale(1)"
            document.getElementById("quadratoDiBinomioTitle").innerHTML = "Somma per differenza";
        }
        MathJax.typesetClear([document.getElementById("quadratoDiBinomioTitle")]);
        MathJax.typesetPromise([document.getElementById("quadratoDiBinomioTitle")]).then(() => {});
        showFormula = !showFormula;
    }

    
    let mcm;

    let result = [];

    function showStepQuadratoDiBinomio(done,i,j,index) {

        let showFormula = true;

        if(index === 0) {

            let indexB = index + 1;

            container2.innerHTML = "\\[\\left("+p.display()+"\\right)^{2} = \\]";
            button2.innerHTML = "<h2 id='quadratoDiBinomioTitle' class='title'>Quadrato di binomio</h2>"
            button2.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' disabled>&#8592;</button>";    
            button2.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepQuadratoDiBinomio(0,0,0,1)";>&#8594;</button>';    
        }

        if(index === 1) {

            let indexB = index + 1;
            let indexC = index - 1;

            container2.innerHTML = "\\[\\left("+p.display()+"\\right)^{2} = \\]";
            container2.innerHTML += "<p class='commento'><span>Eleviamo al quadrato il primo monomio</span></p>"
            button2.innerHTML = "<h2 id='quadratoDiBinomioTitle' class='title'>Quadrato di binomio</h2>"
            button2.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepQuadratoDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button2.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepQuadratoDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }

        if(index === 2) {

            let indexB = index+1;
            let indexC = index - 1;

            container2.innerHTML = "\\[\\left(\\color{red}{"+p.poly[0].display()+"}\\color{black}{}"+p.poly[1].displayWithSign()+"\\right)^{2}  = \\]";
            container2.innerHTML += "<p class='commento'><span>Eleviamo al quadrato il primo monomio</span></p>"
            button2.innerHTML = "<h2 id='quadratoDiBinomioTitle' class='title'>Quadrato di binomio</h2>"
            button2.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepQuadratoDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button2.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepQuadratoDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }

        if(index === 3) {

            let indexB = index +1;
            let indexC = index - 1;
            result[0] = product(p.poly[0],p.poly[0])

            container2.innerHTML = "\\[\\left("+p.display()+"\\right)^{2} = \\color{red}{\\left("+p.poly[0].display()+"\\right)}\\color{black}{}^{2}\\]";
            container2.innerHTML += "<p class='commento'><span>Eleviamo al quadrato il primo monomio</span></p>"
            button2.innerHTML = "<h2 id='quadratoDiBinomioTitle' class='title'>Quadrato di binomio</h2>"
            button2.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepQuadratoDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button2.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepQuadratoDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }

        if(index === 4) {

            let indexB = index +1;
            let indexC = index - 1;
            result[0] = product(p.poly[0],p.poly[0])

            container2.innerHTML = "\\[\\left("+p.display()+"\\right)^{2} = "+result[0].display()+"\\]";
            container2.innerHTML += "<p class='commento'><span>Eleviamo al quadrato il primo monomio</span></p>"
            button2.innerHTML = "<h2 id='quadratoDiBinomioTitle' class='title'>Quadrato di binomio</h2>"
            button2.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepQuadratoDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button2.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepQuadratoDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }

        if(index === 5) {

            let indexB = index +1;
            let indexC = index - 1;
            
            container2.innerHTML = "\\[\\left("+p.display()+"\\right)^{2} = "+result[0].display()+"\\]";
            container2.innerHTML += "<p class='commento'><span>Svolgiamo il doppio prodotto tra i due monomi.</span></p>"
            button2.innerHTML = "<h2 id='quadratoDiBinomioTitle' class='title'>Quadrato di binomio</h2>"
            button2.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepQuadratoDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button2.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepQuadratoDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }

        if(index === 6) {

            let indexB = index+1;
            let indexC = index - 1;

            container2.innerHTML = "\\[\\left(\\color{red}{"+p.poly[0].display()+"}\\color{blue}{"+p.poly[1].displayWithSign()+"}\\right)^{2} = "+result[0].display()+"\\]";
            container2.innerHTML += "<p class='commento'><span>Svolgiamo il doppio prodotto tra i due monomi.</span></p>"
            button2.innerHTML = "<h2 id='quadratoDiBinomioTitle' class='title'>Quadrato di binomio</h2>"
            button2.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepQuadratoDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button2.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepQuadratoDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }

        if(index === 7) {

            let indexB = index +1;
            let indexC = index - 1;

            container2.innerHTML = "\\[\\left("+p.display()+"\\right)^{2} = "+result[0].display()+"+2\\color{red}{\\left("+p.poly[0].display()+"\\right)}\\color{blue}{\\left("+p.poly[1].display()+"\\right)}\\]";
            container2.innerHTML += "<p class='commento'><span>Svolgiamo il doppio prodotto tra i due monomi.</span></p>"
            button2.innerHTML = "<h2 id='quadratoDiBinomioTitle' class='title'>Quadrato di binomio</h2>"
            button2.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepQuadratoDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button2.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepQuadratoDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }

        if(index === 8) {

            let indexB = index +1;
            let indexC = index - 1;

            result[1] = product(p.poly[0],p.poly[1]);
            Object.defineProperty(result[1], "num" , {value: result[1].num*2});

            container2.innerHTML = "\\[\\left("+p.display()+"\\right)^{2} = "+result[0].display()+result[1].displayWithSign()+"\\]";
            container2.innerHTML += "<p class='commento'><span>Svolgiamo il doppio prodotto tra i due monomi.</span></p>"
            button2.innerHTML = "<h2 id='quadratoDiBinomioTitle' class='title'>Quadrato di binomio</h2>"
            button2.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepQuadratoDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button2.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepQuadratoDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }

        if(index === 9) {

            if(gcd(result[1].num,result[1].den) !== 1) {
                
                let indexB = index +1;
                mcm = gcd(result[1].num,result[1].den);
                container2.innerHTML = "\\[\\left("+p.display()+"\\right)^{2} = "+result[0].display()+result[1].displayWithSign()+"\\]";
                container2.innerHTML += "<p class='commento'><span>Semplifichiamo la frazione per "+mcm+".</span></p>"
                button2.innerHTML = "<h2 id='quadratoDiBinomioTitle' class='title'>Quadrato di binomio</h2>"
                button2.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepQuadratoDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
                button2.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepQuadratoDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
                
            } else {
                index = index + 3;
            }
        }

        if(index === 10) {

            let indexB = index +1;
            let indexC = index - 1;
        
            result[1] = simplify(result[1]);

            container2.innerHTML = "\\[\\left("+p.poly[0].display()+p.poly[1].displayWithSign()+"\\right)^{2} = "+result[0].display()+result[1].displayWithSign()+"\\]";
            container2.innerHTML += "<p class='commento'><span>Semplifichiamo la frazione per "+mcm+".</span></p>"
            button2.innerHTML = "<h2 id='quadratoDiBinomioTitle' class='title'>Quadrato di binomio</h2>"
            button2.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepQuadratoDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button2.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepQuadratoDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        
            index++;
            
        }

        if(index === 11) {

            var indexB = index +1;
            console.log("mcm: \n"+mcm);

            container2.innerHTML = "\\[\\left("+p.poly[0].display()+p.poly[1].displayWithSign()+"\\right)^{2} = "+result[0].display()+result[1].displayWithSign()+"\\]";
            container2.innerHTML += "<p class='commento'><span>Semplifichiamo la frazione per "+mcm+".</span></p>"
            button2.innerHTML = "<h2 id='quadratoDiBinomioTitle' class='title'>Quadrato di binomio</h2>"
            button2.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepQuadratoDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button2.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepQuadratoDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    

        }

        if(index === 12) {

            let indexB = index +1;

            container2.innerHTML = "\\[\\left("+p.poly[0].display()+p.poly[1].displayWithSign()+"\\right)^{2} = "+result[0].display()+result[1].displayWithSign()+"\\]";
            container2.innerHTML += "<p class='commento'><span>Eleviamo al quadrato il secondo monomio.</span></p>"
            button2.innerHTML = "<h2 id='quadratoDiBinomioTitle' class='title'>Quadrato di binomio</h2>"
            if(mcm===1){
                var indexC = index - 1;
                console.log("mcm: \n"+mcm);
            } else {
                var indexC = index - 4;
                console.log("mcm: \n"+mcm);
            }
            button2.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepQuadratoDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button2.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepQuadratoDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    

        }

        if(index === 13) {

            let indexB = index +1;
            let indexC = index - 1;

            container2.innerHTML = "\\[\\left("+p.poly[0].display()+"\\color{blue}{"+p.poly[1].displayWithSign()+"}\\right)^{2} = "+result[0].display()+result[1].displayWithSign()+"\\]";
            container2.innerHTML += "<p class='commento'><span>Eleviamo al quadrato il secondo monomio.</span></p>"
            button2.innerHTML = "<h2 id='quadratoDiBinomioTitle' class='title'>Quadrato di binomio</h2>"
            button2.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepQuadratoDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button2.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepQuadratoDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    

        }

        if(index === 14) {

            let indexB = index +1;
            let indexC = index - 1;

            container2.innerHTML = "\\[\\left("+p.display()+"\\right)^{2} = "+result[0].display()+result[1].displayWithSign()+"+ \\color{blue}{\\left("+p.poly[1].displayWithSign()+"\\right)}\\color{black}{}^{2}\\]";
            container2.innerHTML += "<p class='commento'><span>Eleviamo al quadrato il secondo monomio.</span></p>"
            button2.innerHTML = "<h2 id='quadratoDiBinomioTitle' class='title'>Quadrato di binomio</h2>"
            button2.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepQuadratoDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button2.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepQuadratoDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }

        if(index === 15) {

            let indexB = index +1;
            let indexC = index - 1;
            result[2] = product(p.poly[1],p.poly[1]);

            container2.innerHTML = "\\[\\left("+p.display()+"\\right)^{2} = "+result[0].display()+result[1].displayWithSign()+result[2].displayWithSign()+"\\]";
            button2.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' disabled>&#8592;</button>";    
            button2.innerHTML = "<h2 id='quadratoDiBinomioTitle' class='title'>Quadrato di binomio</h2>"
            
            p = randomPolynomial(2);

            for(var i = 0; i<2; i++) {
                for(var j = 0; j<6; j++) {
                    p.poly[i].literal[j] = 0;
                }
            }

            p.poly[0].literal[rnd(0,5)] = rnd(0,3);
            p.poly[0].literal[rnd(0,5)] = rnd(0,3);
            p.poly[1].literal[rnd(0,5)] = rnd(0,3);
            p.poly[1].literal[rnd(0,5)] = rnd(0,3);
            
            button2.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepQuadratoDiBinomio(0,0,0,0)";>&#8634;</button>';    
        }

        document.getElementById("quadratoDiBinomioTitle").onclick = function(){
            if(showFormula){
                document.getElementById("quadratoDiBinomioTitle").style.transform = "scale(0.7)"
                document.getElementById("quadratoDiBinomioTitle").innerHTML = "\\(\\left(A + B\\right)^{2} = A^{2} + 2AB + B^{2}\\)";
            } else {
                document.getElementById("quadratoDiBinomioTitle").style.transform = "scale(1)"
                document.getElementById("quadratoDiBinomioTitle").innerHTML = "Somma per differenza";
            }
            MathJax.typesetClear([document.getElementById("quadratoDiBinomioTitle")]);
            MathJax.typesetPromise([document.getElementById("quadratoDiBinomioTitle")]).then(() => {});
            showFormula = !showFormula;
        }
        
        MathJax.typesetClear([container2]);
        MathJax.typesetPromise([container2]).then(() => {});
    }

    function align(text) {
        return "\\[ \\begin{align*} &\\color{white}{=}\\color{black}{}"+text+" \\\\ \\end{align*} \\]";

    }

}