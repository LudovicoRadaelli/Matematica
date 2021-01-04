var div1 = document.getElementById("simplifyPowers");

//basi
var b = [];

//potenze
var p = [];

//nuove potenze
var newP = [];

//stringhe con i passaggi precedenti
var num1 = {
    red: "",
    black: ""
};

var num2 = {
    red: "",
    black: ""
};
var den1 = {
    red: "",
    black: ""
};
var den2 = {
    red: "",
    black: ""
};

//risultati
var res = [];

//contatore passaggi
var m = 1;
console.log("m: " + m);


simplifyPowers();


function simplifyPowers() {
    
    //indice passaggi
    m = 1;

    //basi
    while(b[0]===b[1]){
      for(var i = 0; i<2; i++) {
        b[i] = Math.floor(Math.random()*6+2);
        b[3-i] = b[i];
      }
    }
    
    //potenze
    for(var i = 0; i<4; i++) {
        p[i] = Math.floor(Math.random()*6+2);
    }
    
    //potenze minime
    p[4] = Math.min(p[0],p[3]);
    p[5] = Math.min(p[1],p[2]);   

    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStepSimplifyPowers(1)'>→</button><br>";
    div1.innerHTML += "\\[ \\frac{"+b[0]+"^{"+p[0]+"}}{"+b[1]+"^{"+p[1]+"}} \\cdot \\frac{"+b[1]+"^{"+p[2]+"}}{"+b[0]+"^{"+p[3]+"}} = \\]"
  
    MathJax.typesetClear([div1]);
    MathJax.typesetPromise([div1]).then(() => {});
}

//cambia il nome della funzione nextStep a seconda di quante ce ne sono nella pagina principale
function nextStepSimplifyPowers(n) {
  console.log("passaggio " + m);  
  m++;
  console.log("m: " + m);
  
  //semplificazione prima diagonale

  if(n===1) {
    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStepSimplifyPowers("+m+")'>→</button><br>";
    div1.innerHTML += "\\[ \\frac{"+b[0]+"^{"+p[0]+"}}{"+b[1]+"^{"+p[1]+"}} \\cdot \\frac{"+b[1]+"^{"+p[2]+"}}{"+b[0]+"^{"+p[3]+"}} = \\]";
    div1.innerHTML += "<span style='color: red;'><ul><li>Semplifichiamo il primo numeratore con il secondo denominatore</li></ul></span>";
  }
  
  if(n===2) {
    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStepSimplifyPowers("+m+")'>→</button><br>";
    div1.innerHTML += "\\[ \\frac{\\color{red}{"+b[0]+"^{"+p[0]+"}}}{"+b[1]+"^{"+p[1]+"}} \\cdot \\frac{"+b[1]+"^{"+p[2]+"}}{\\color{red}{"+b[0]+"^{"+p[3]+"}}} = \\]";
    div1.innerHTML += "<ul><li>Semplifichiamo il primo numeratore con il secondo denominatore</li></ul>";
  }

  if(n===3) {
    if(p[0]===p[4] && p[3]===p[4]){
        m++;
        div1.innerHTML ="<button class ='nextStep' onclick = 'nextStepSimplifyPowers("+m+")'>→</button><br>";
        div1.innerHTML += "\\[ \\frac{"+b[0]+"^{"+p[0]+"}}{"+b[1]+"^{"+p[1]+"}} \\cdot \\frac{"+b[1]+"^{"+p[2]+"}}{"+b[0]+"^{"+p[3]+"}} = \\]";
        div1.innerHTML += "<span style='color: red;'><ul><li>Gli esponenti sono uguali, quindi semplifichiamo entrambe le potenze.</li></ul></span>";        
    } else {
        div1.innerHTML ="<button class ='nextStep' onclick = 'nextStepSimplifyPowers("+m+")'>→</button><br>";
        div1.innerHTML += "\\[ \\frac{"+b[0]+"^{"+p[0]+"}}{"+b[1]+"^{"+p[1]+"}} \\cdot \\frac{"+b[1]+"^{"+p[2]+"}}{"+b[0]+"^{"+p[3]+"}} = \\]";
        div1.innerHTML += "<span style='color: red;'><ul><li>L'esponente più piccolo tra "+p[0]+" e "+p[3]+" è "+p[4]+".</li></ul></span>";
    }
  }

  if(n===4) {
    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStepSimplifyPowers("+m+")'>→</button><br>";
    div1.innerHTML += "\\[ \\frac{"+b[0]+"^{"+p[0]+"}}{"+b[1]+"^{"+p[1]+"}} \\cdot \\frac{"+b[1]+"^{"+p[2]+"}}{"+b[0]+"^{"+p[3]+"}} = \\]";
    div1.innerHTML += "<ul><li>L'esponente più piccolo tra "+p[0]+" e "+p[3]+" è "+p[4]+".</li><span style='color: red;'><li>Quindi semplifichiamo entrambi i termini per \\("+b[0]+"^{"+p[4]+"}\\)</li></span></ul>";
  }

  if(n===5) {
    
    newP[0] = p[0]-p[4];
    newP[1] = p[1]-p[4];
    if(p[0]===p[4]) {
        num1.red = "\\overset{\\color{red}{1}}{\\color{red}{\\cancel{\\color{black}{"+b[0]+"^{"+p[0]+"}}}}}";
        num1.black = "\\overset{1}{\\cancel{"+b[0]+"^{"+p[0]+"}}}";
    } else {
        num1.red = b[0]+"^{\\color{red}{\\cancel{\\color{black}{"+p[0]+"}}\\:"+newP[0]+"}}";
        num1.black = b[0]+"^{\\cancel{"+p[0]+"}\\:"+newP[0]+"}";
    }

    newP[2] = p[2]-p[4];
    newP[3] = p[3]-p[4];
    if(p[3]===p[4]) {
        den2.red = "\\underset{\\color{red}{1}}{\\color{red}{\\cancel{\\color{black}{"+b[0]+"^{"+p[3]+"}}}}}";
        den2.black = "\\underset{1}{\\cancel{"+b[0]+"^{"+p[3]+"}}}";
    } else {
        den2.red = b[0]+"^{\\color{red}{\\cancel{\\color{black}{"+p[3]+"}}\\:"+newP[3]+"}}";
        den2.black = b[0]+"^{\\cancel{"+p[3]+"}\\:"+newP[3]+"}";

    }

    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStepSimplifyPowers("+m+")'>→</button><br>";
    div1.innerHTML += "\\[ \\frac{"+num1.red+"}{"+b[1]+"^{"+p[1]+"}} \\cdot \\frac{"+b[1]+"^{"+p[2]+"}}{"+den2.red+"} = \\]";
    if(p[0]===p[4] && p[3]===p[4]) {
        div1.innerHTML += "<ul><li>Gli esponenti sono uguali, quindi semplifichiamo entrambe le potenze.</li></ul>";        
    } else {
        div1.innerHTML += "<ul><li>L'esponente più piccolo tra "+p[0]+" e "+p[3]+" è "+p[4]+".</li><li>Quini semplifichiamo entrambi i termini per \\("+b[0]+"^{"+p[4]+"}\\)</li></ul>";
    }
  }

  if(n===6) {
    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStepSimplifyPowers("+m+")'>→</button><br>";
    div1.innerHTML += "\\[ \\frac{"+num1.black+"}{"+b[1]+"^{"+p[1]+"}} \\cdot \\frac{"+b[1]+"^{"+p[2]+"}}{"+den2.black+"} = \\]";
    div1.innerHTML += "<span style='color: red';><ul><li>Applichiamo lo stesso procedimento all'altra 'diagonale'.</li></ul></span>";
  }

  //semplificazione seconda diagonale

  //equivale al passo n===2
  if(n===7) {
    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStepSimplifyPowers("+m+")'>→</button><br>";
    div1.innerHTML += "\\[ \\frac{"+num1.black+"}{\\color{red}{"+b[1]+"^{"+p[1]+"}}} \\cdot \\frac{\\color{red}{"+b[1]+"^{"+p[2]+"}}}{"+den2.black+"} = \\]";
    div1.innerHTML += "<ul><li>Applichiamo lo stesso procedimento all'altra 'diagonale'.</li></ul>";
  }

  if(n===8) {
    if(p[1]===p[5] && p[2]===p[5]){
        m++;
        div1.innerHTML ="<button class ='nextStep' onclick = 'nextStepSimplifyPowers("+m+")'>→</button><br>";
        div1.innerHTML += "\\[ \\frac{"+num1.black+"}{"+b[1]+"^{"+p[1]+"}} \\cdot \\frac{"+b[1]+"^{"+p[2]+"}}{"+den2.black+"} = \\]";
        div1.innerHTML += "<span style='color: red;'><ul><li>Gli esponenti sono uguali, quindi semplifichiamo entrambe le potenze.</li></ul></span>";        
    } else {
        div1.innerHTML ="<button class ='nextStep' onclick = 'nextStepSimplifyPowers("+m+")'>→</button><br>";
        div1.innerHTML += "\\[ \\frac{"+num1.black+"}{"+b[1]+"^{"+p[1]+"}} \\cdot \\frac{"+b[1]+"^{"+p[2]+"}}{"+den2.black+"} = \\]";
        div1.innerHTML += "<span style='color: red;'><ul><li>L'esponente più piccolo tra "+p[1]+" e "+p[2]+" è "+p[5]+".</li></ul></span>";
    }   
  }

  if(n===9) {
    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStepSimplifyPowers("+m+")'>→</button><br>";
    div1.innerHTML += "\\[ \\frac{"+num1.black+"}{"+b[1]+"^{"+p[1]+"}} \\cdot \\frac{"+b[1]+"^{"+p[2]+"}}{"+den2.black+"} = \\]";
    div1.innerHTML += "<ul><li>L'esponente più piccolo tra "+p[1]+" e "+p[2]+" è "+p[5]+".</li><span style='color: red;'><li>Quindi semplifichiamo entrambi i termini per \\("+b[1]+"^{"+p[5]+"}\\)</li></span></ul>";
  }

  if(n===10) {
    
    newP[1] = p[1]-p[5];
    if(p[1]===p[5]) {
        den1.red = "\\underset{\\color{red}{1}}{\\color{red}{\\cancel{\\color{black}{"+b[1]+"^{"+p[1]+"}}}}}";
        den1.black = "\\underset{1}{\\cancel{"+b[1]+"^{"+p[1]+"}}}";
    } else {
        den1.red = b[1]+"^{\\color{red}{\\cancel{\\color{black}{"+p[1]+"}}\\:"+newP[1]+"}}";
        den1.black = b[1]+"^{\\cancel{"+p[1]+"}\\:"+newP[1]+"}";
        
    }

    newP[2] = p[2]-p[5];
    if(p[2]===p[5]) {
        num2.red = "\\overset{\\color{red}{1}}{\\color{red}{\\cancel{\\color{black}{"+b[2]+"^{"+p[2]+"}}}}}";
        num2.black = "\\overset{1}{\\cancel{"+b[2]+"^{"+p[2]+"}}}";
    } else {
        num2.red = b[2]+"^{\\color{red}{\\cancel{\\color{black}{"+p[2]+"}}\\:"+newP[2]+"}}";
        num2.black = b[1]+"^{\\cancel{"+p[2]+"}\\:"+newP[2]+"}";
    }
    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStepSimplifyPowers("+m+")'>→</button><br>";
    div1.innerHTML += "\\[ \\frac{"+num1.black+"}{"+den1.red+"} \\cdot \\frac{"+num2.red+"}{"+den2.black+"} = \\]";
    if(p[1]===p[5] && p[2]===p[5]) {
        div1.innerHTML += "<ul><li>Gli esponenti sono uguali, quindi semplifichiamo entrambe le potenze.</li></ul>";        
    } else {
        div1.innerHTML += "<ul><li>L'esponente più piccolo tra "+p[1]+" e "+p[2]+" è "+p[5]+".</li><li>Quini semplifichiamo entrambi i termini per \\("+b[1]+"^{"+p[5]+"}\\)</li></ul>";
    }
  }

  if(n===11) {
    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStepSimplifyPowers("+m+")'>→</button><br>";
    div1.innerHTML += "\\[ \\frac{"+num1.black+"}{"+den1.black+"} \\cdot \\frac{"+num2.black+"}{"+den2.black+"} = \\]";
    div1.innerHTML += "<span style='color: red';><ul><li>Ora svolgiamo i calcoli.</li></ul></span>";
  }

  if(n===12) {
    //risultati delle singole potenze semplificate
    res[0] = Math.pow(b[0],newP[0]);
    res[1] = Math.pow(b[1],newP[1]);
    res[2] = Math.pow(b[2],newP[2]);
    res[3] = Math.pow(b[3],newP[3]);

    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStepSimplifyPowers("+m+")'>→</button><br>";
    div1.innerHTML += "\\[ \\frac{"+num1.black+"}{"+den1.black+"} \\cdot \\frac{"+num2.black+"}{"+den2.black+"} = \\color{red}{\\frac{"+res[0]+"}{"+res[1]+"} \\cdot \\frac{"+res[2]+"}{"+res[3]+"}} = \\]";
    div1.innerHTML += "<ul><li>Ora svolgiamo i calcoli.</li></ul>";
  }

  if(n===13) {
    //risultati finali      
    res[4] = Math.pow(b[0],newP[0])*Math.pow(b[2],newP[2]);
    res[5] = Math.pow(b[1],newP[1])*Math.pow(b[3],newP[3]);

    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStepSimplifyPowers("+m+")'>→</button><br>";
    div1.innerHTML += "\\[ \\frac{"+num1.black+"}{"+den1.black+"} \\cdot \\frac{"+num2.black+"}{"+den2.black+"} = \\frac{"+res[0]+"}{"+res[1]+"} \\cdot \\frac{"+res[2]+"}{"+res[3]+"} = \\color{red}{\\frac{"+res[4]+"}{"+res[5]+"}} \\]";
    div1.innerHTML += "<ul><li>Ora svolgiamo i calcoli.</li></ul>";
  }

  if(n===14) {
    div1.innerHTML ="<button class ='nextStep' onclick = 'simplifyPowers()'>&#x27F3;</button><br>";
    div1.innerHTML += "\\[ \\frac{"+num1.black+"}{"+den1.black+"} \\cdot \\frac{"+num2.black+"}{"+den2.black+"} = \\frac{"+res[0]+"}{"+res[1]+"} \\cdot \\frac{"+res[2]+"}{"+res[3]+"} = \\frac{"+res[4]+"}{"+res[5]+"} \\]";
    //rendo uguali i valori di b[0] e b[1] in modo che entri nel while all'inizio di simplifyPowers()
    b[0]=1;
    b[1]=1;
  }

  
  
  MathJax.typesetClear([div1]);
  MathJax.typesetPromise([div1]).then(() => {});
}

