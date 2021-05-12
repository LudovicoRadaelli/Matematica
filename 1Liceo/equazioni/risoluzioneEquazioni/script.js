let input = [0, 6, 6, 6];

function aggiungi(i) {
        input[i]++;

        if(i===1) {
            document.getElementById("numberInput"+i).innerHTML = "\\(\\color{red}{"+input[i]+"}\\)";
            let risultato = 2*input[i] + 5;
            document.getElementById("espressione"+i).innerHTML = 
        "\\(2\\color{red}{x}\\color{black}{\\,\\,+\\,\\, 5 \\,\\,\\,=\\,\\,\\,  2\\cdot}\\color{red}{"+input[i]+"}\\color{black}{\\,\\,+\\,\\, 5 \\,\\,\\,=\\,\\,\\,"+risultato+"}\\)"
        }
        if(i===2) {
            document.getElementById("numberInput"+i).innerHTML = "\\(\\color{red}{"+input[i]+"}\\)";
            let risultato = 3*input[i] + 3;
            document.getElementById("espressione"+i).innerHTML = 
            "\\(3\\color{red}{x}\\color{black}{\\,\\,+\\,\\, 3 \\,\\,\\,=\\,\\,\\,  3\\cdot}\\color{red}{"+input[i]+"}\\color{black}{\\,\\,+\\,\\, 3 \\,\\,\\,=\\,\\,\\,"+risultato+"}\\)"
        }
        if(i===3) {
            let risultato1 = 2*input[i] + 5;
            let risultato2 = 3*input[i] + 3;

            document.getElementById("numberInput"+i).innerHTML = "\\(x=\\color{red}{"+input[i]+"}\\)";
            document.getElementById("espressione"+i).innerHTML = 
        "\\(2\\color{red}{x}\\color{black}{\\,\\,+\\,\\, 5 \\,\\,\\,=\\,\\,\\,  2\\cdot}\\color{red}{"+input[i]+"}\\color{black}{\\,\\,+\\,\\, 5 \\,\\,\\,=\\,\\,\\,"+risultato1+"}\\)"
            document.getElementById("espressione"+i).innerHTML += "<br>"
            document.getElementById("espressione"+i).innerHTML += 
            "\\(3\\color{red}{x}\\color{black}{\\,\\,+\\,\\, 3 \\,\\,\\,=\\,\\,\\,  3\\cdot}\\color{red}{"+input[i]+"}\\color{black}{\\,\\,+\\,\\, 3 \\,\\,\\,=\\,\\,\\,"+risultato2+"}\\)"
        }

        MathJax.typesetClear([document.getElementById("numberInput"+i),document.getElementById("espressione"+i)]);
        MathJax.typesetPromise([document.getElementById("numberInput"+i),document.getElementById("espressione"+i)]).then(() => {});
}

function sottrai(i) {
    input[i]--;
    
    document.getElementById("numberInput"+i).innerHTML = "\\(\\color{red}{"+input[i]+"}\\)";

    if(i===1) {
        let risultato = 2*input[i] + 5;
        document.getElementById("espressione"+i).innerHTML = 
    "\\(2\\color{red}{x}\\color{black}{\\,\\,+\\,\\, 5 \\,\\,\\,=\\,\\,\\,  2\\cdot}\\color{red}{"+input[i]+"}\\color{black}{\\,\\,+\\,\\, 5 \\,\\,\\,=\\,\\,\\,"+risultato+"}\\)";
    }
    if(i===2) {let risultato = 3*input[i] + 3;
        document.getElementById("espressione"+i).innerHTML = 
        "\\(3\\color{red}{x}\\color{black}{\\,\\,+\\,\\, 3 \\,\\,\\,=\\,\\,\\,  3\\cdot}\\color{red}{"+input[i]+"}\\color{black}{\\,\\,+\\,\\, 3 \\,\\,\\,=\\,\\,\\,"+risultato+"}\\)";
    }
    if(i===3) {
        let risultato1 = 2*input[i] + 5;
        let risultato2 = 3*input[i] + 3;

        document.getElementById("numberInput"+i).innerHTML = "\\(x=\\color{red}{"+input[i]+"}\\)";
        if(risultato1===risultato2) {
            document.getElementById("espressione"+i).innerHTML = 
            "\\(2\\color{red}{x}\\color{black}{\\,\\,+\\,\\, 5 \\,\\,\\,=\\,\\,\\,  2\\cdot}\\color{red}{"+input[i]+"}\\color{black}{\\,\\,+\\,\\, 5 \\,\\,\\,=\\,\\,\\,\\color{green}{"+risultato1+"}}\\)";
            document.getElementById("espressione"+i).innerHTML += "<br>"
            document.getElementById("espressione"+i).innerHTML += 
            "\\(3\\color{red}{x}\\color{black}{\\,\\,+\\,\\, 3 \\,\\,\\,=\\,\\,\\,  3\\cdot}\\color{red}{"+input[i]+"}\\color{black}{\\,\\,+\\,\\, 3 \\,\\,\\,=\\,\\,\\,\\color{green}{"+risultato2+"}}\\)";
            let par = document.createElement("P");
            let parText = document.createTextNode("\\("+input[i]+"\\) è il numero che sostituito alla \\(x\\) rende uguali le due quantità \\(\\,\\,2x+5\\,\\,\\) e \\(\\,\\,3x+3\\)");
            par.appendChild(parText);
            document.getElementById("espressione3-container").appendChild(par);
            MathJax.typesetClear([par]);
    MathJax.typesetPromise([par]).then(() => {});
        } else {
            document.getElementById("espressione"+i).innerHTML = 
            "\\(2\\color{red}{x}\\color{black}{\\,\\,+\\,\\, 5 \\,\\,\\,=\\,\\,\\,  2\\cdot}\\color{red}{"+input[i]+"}\\color{black}{\\,\\,+\\,\\, 5 \\,\\,\\,=\\,\\,\\,"+risultato1+"}\\)";
            document.getElementById("espressione"+i).innerHTML += "<br>"
            document.getElementById("espressione"+i).innerHTML += 
            "\\(3\\color{red}{x}\\color{black}{\\,\\,+\\,\\, 3 \\,\\,\\,=\\,\\,\\,  3\\cdot}\\color{red}{"+input[i]+"}\\color{black}{\\,\\,+\\,\\, 3 \\,\\,\\,=\\,\\,\\,"+risultato2+"}\\)";
        }
        
        
    }

    MathJax.typesetClear([document.getElementById("numberInput"+i),document.getElementById("espressione"+i)]);
    MathJax.typesetPromise([document.getElementById("numberInput"+i),document.getElementById("espressione"+i)]).then(() => {});
}