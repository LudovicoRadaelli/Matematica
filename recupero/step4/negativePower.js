//STRUTTURATO IN MANIERA ORRENDA 
//HO RIMANEGGIATO (MALE MALE) powerOfTwoFraction()

var div2 = document.getElementById("negativePower");
//basi
var a1;
var b1;
//copia basi
var oldA1;
var oldB1;
//potenza
var c1;
//copia potenza
var oldC1;
//risultati
var num1_1;
var num2_1;
//contatore passaggi
var m1 = 1;
console.log("m: " + m1);
negativePower();



function negativePower() {
    
    //indice passaggi
    m1 = 1;

    //basi

    while(a1===b1) {
      a1 = Math.floor(Math.random()*10+1);
      b1 = Math.floor(Math.random()*10+1);
    }
    
    //potenza
    c1 = Math.floor(Math.random()*5+1);
    c1 = -c1;
    
    //risultati
    num2_1 = Math.pow(a1,-c1);
    num1_1 = Math.pow(b1,-c1);

    div2.innerHTML ="<button class ='nextStep' onclick = 'nextStepPower(1)'>→</button><br>";
    div2.innerHTML += "\\[ \\left( \\frac{"+a1+"}{"+b1+"} \\right)^{"+c1+"} \\color{white}{= \\frac{"+a1+"^{"+c1+"}}{"+b1+"^{"+c1+"}} = \\frac{"+num1_1+"}{"+num2_1+"}}\\]"
  
    MathJax.typesetClear([div2]);
    MathJax.typesetPromise([div2]).then(() => {});
}

//cambia il nome della funzione nextStep a seconda di quante ce ne sono nella pagina principale
function nextStepPower(n) {
  console.log("passaggio " + m1);  
  m1++;
  console.log("m: " + m1);
  
  if(n===1) {
    div2.innerHTML ="<button class ='nextStep' onclick = 'nextStepPower("+m1+")'>→</button><br>";
    div2.innerHTML += "\\[ \\left( \\frac{"+a1+"}{"+b1+"} \\right)^{"+c1+"} = \\left( \\frac{\\color{white}{bla}}{\\color{white}{bl}} \\right)^{} \\color{white}{= \\frac{"+a1+"^{"+c1+"}}{"+b1+"^{"+c1+"}} = \\frac{"+num1_1+"}{"+num2_1+"}}\\]"
    div2.innerHTML += "<ul><li><span style='color: red;'>Per svolgere la potenza negativa</span><ul><span style='color: white;'><li>invertiamo la frazione</li></span><span style='color: white;'><li>trasformiamo il segno dell'esponente in +</li></span></ul></li></ul>";
  }

  if(n===2) {
    div2.innerHTML ="<button class ='nextStep' onclick = 'nextStepPower("+m1+")'>→</button><br>";
    div2.innerHTML += "\\[ \\left( \\frac{"+a1+"}{"+b1+"} \\right)^{"+c1+"} = \\left( \\frac{\\color{white}{bla}}{\\color{white}{bl}} \\right)^{} \\color{white}{= \\frac{"+a1+"^{"+c1+"}}{"+b1+"^{"+c1+"}} = \\frac{"+num1_1+"}{"+num2_1+"}}\\]"
    div2.innerHTML += "<ul><li>Per svolgere la potenza negativa<ul><span style='color: red;'><li>invertiamo la frazione</li></span><span style='color: white;'><li>trasformiamo il segno dell'esponente in +</li></span></ul></li></ul>";
  }
  
  if(n===3) {
    div2.innerHTML ="<button class ='nextStep' onclick = 'nextStepPower("+m1+")'>→</button><br>";
    div2.innerHTML += "\\[ \\left( \\color{red}{\\frac{"+a1+"}{"+b1+"}} \\right)^{"+c1+"} = \\left( \\frac{\\color{white}{bla}}{\\color{white}{bl}} \\right) \\color{white}{= \\frac{"+a1+"^{"+c1+"}}{"+b1+"^{"+c1+"}} = \\frac{"+num1_1+"}{"+num2_1+"}}\\]"
    div2.innerHTML += "<ul><li>Per svolgere la potenza negativa<ul><li>invertiamo la frazione</li><span style='color: white;'><li>trasformiamo il segno dell'esponente in +</li></span></ul></li></ul>";
  }

  if(n===4) {
    oldA1 = a1;
    oldB1 = b1;
    oldC1 = c1;
    c1 = -c1;
    a1 = oldB1;
    b1 = oldA1;
    
    div2.innerHTML ="<button class ='nextStep' onclick = 'nextStepPower("+m1+")'>→</button><br>";
    div2.innerHTML += "\\[ \\left( \\frac{"+oldA1+"}{"+oldB1+"} \\right)^{"+oldC1+"} = \\left( \\color{red}{\\frac{"+a1+"}{"+b1+"}} \\right)^{\\color{white}{"+c1+"}} \\color{white}{= \\frac{"+a1+"^{"+c1+"}}{"+b1+"^{"+c1+"}} = \\frac{"+num1_1+"}{"+num2_1+"}}\\]"
    div2.innerHTML += "<ul><li>Per svolgere la potenza negativa<ul><li>invertiamo la frazione</li><span style='color: white;'><li>trasformiamo il segno dell'esponente in +</li></span></ul></li></ul>";
  }

  if(n===5) {
    div2.innerHTML ="<button class ='nextStep' onclick = 'nextStepPower("+m1+")'>→</button><br>";
    div2.innerHTML += "\\[ \\left( \\frac{"+oldA1+"}{"+oldB1+"} \\right)^{"+oldC1+"} = \\left( \\frac{"+a1+"}{"+b1+"} \\right)^{\\color{white}{"+c1+"}} \\color{white}{= \\frac{"+a1+"^{"+c1+"}}{"+b1+"^{"+c1+"}} = \\frac{"+num1_1+"}{"+num2_1+"}}\\]"
    div2.innerHTML += "<ul><li>Per svolgere la potenza negativa<ul><li>invertiamo la frazione</li><span style='color: red;'><li>trasformiamo il segno dell'esponente in +</li></span></ul></li></ul>";
  }

  if(n===6) {
    div2.innerHTML ="<button class ='nextStep' onclick = 'nextStepPower("+m1+")'>→</button><br>";
    div2.innerHTML += "\\[ \\left( \\frac{"+oldA1+"}{"+oldB1+"} \\right)^{\\color{red}{"+oldC1+"}} = \\left( \\frac{"+a1+"}{"+b1+"} \\right)^{\\color{white}{"+c1+"}} \\color{white}{= \\frac{"+a1+"^{"+c1+"}}{"+b1+"^{"+c1+"}} = \\frac{"+num1_1+"}{"+num2_1+"}}\\]"
    div2.innerHTML += "<ul><li>Per svolgere la potenza negativa<ul><li>invertiamo la frazione</li><li>trasformiamo il segno dell'esponente in +</li></ul></li></ul>";
  }

  if(n===7) {
    div2.innerHTML ="<button class ='nextStep' onclick = 'nextStepPower("+m1+")'>→</button><br>";
    div2.innerHTML += "\\[ \\left( \\frac{"+oldA1+"}{"+oldB1+"} \\right)^{"+oldC1+"} = \\left( \\frac{"+a1+"}{"+b1+"} \\right)^{\\color{red}{"+c1+"}} \\color{white}{= \\frac{"+a1+"^{"+c1+"}}{"+b1+"^{"+c1+"}} = \\frac{"+num1_1+"}{"+num2_1+"}}\\]"
    div2.innerHTML += "<ul><li>Per svolgere la potenza negativa<ul><li>invertiamo la frazione</li><li>trasformiamo il segno dell'esponente in +</li></ul></li></ul>";
  }

  if(n===8) {
    div2.innerHTML ="<button class ='nextStep' onclick = 'nextStepPower("+m1+")'>→</button><br>";
    div2.innerHTML += "\\[ \\left( \\frac{"+oldA1+"}{"+oldB1+"} \\right)^{"+oldC1+"} = \\left( \\frac{"+a1+"}{"+b1+"} \\right)^{"+c1+"} \\color{white}{= \\frac{"+a1+"^{"+c1+"}}{"+b1+"^{"+c1+"}} = \\frac{"+num1_1+"}{"+num2_1+"}}\\]"
    div2.innerHTML += "<span style='color: red;'><ul><li>Applichiamo la potenza "+c1+" sia al numeratore che al denominatore</li></ul></span>";
  } 

  if(n===9) {
    div2.innerHTML ="<button class ='nextStep' onclick = 'nextStepPower("+m1+")'>→</button><br>";
    div2.innerHTML += "\\[ \\left( \\frac{"+oldA1+"}{"+oldB1+"} \\right)^{"+oldC1+"} = \\left( \\frac{"+a1+"}{"+b1+"} \\right)^{\\color{red}{"+c1+"}} =\\color{white}{= \\frac{"+a1+"^{"+c1+"}}{"+b1+"^{"+c1+"}} = \\frac{"+num1_1+"}{"+num2_1+"}}\\]"
    div2.innerHTML += "<ul><li>Applichiamo la potenza "+c1+" sia al numeratore che al denominatore</li></ul>";
  }
  //

  if(n===10) {
    div2.innerHTML ="<button class ='nextStep' onclick = 'nextStepPower("+m1+")'>→</button><br>";
    div2.innerHTML += "\\[ \\left( \\frac{"+oldA1+"}{"+oldB1+"} \\right)^{"+oldC1+"} = \\left( \\frac{"+a1+"}{"+b1+"} \\right)^{"+c1+"} = \\frac{"+a1+"^{\\color{red}{"+c1+"}}}{"+b1+"^{\\color{red}{"+c1+"}}} = \\color{white}{\\frac{"+num1_1+"}{"+num2_1+"}}\\]"
    div2.innerHTML += "<ul><li>Applichiamo la potenza "+c1+" sia al numeratore che al denominatore</li></ul>";
  }

  if(n===11) {
    div2.innerHTML ="<button class ='nextStep' onclick = 'nextStepPower("+m1+")'>→</button><br>";
    div2.innerHTML += "\\[ \\left( \\frac{"+oldA1+"}{"+oldB1+"} \\right)^{"+oldC1+"} = \\left( \\frac{"+a1+"}{"+b1+"} \\right)^{"+c1+"} = \\frac{"+a1+"^{"+c1+"}}{"+b1+"^{"+c1+"}} = \\color{white}{\\frac{"+num1_1+"}{"+num2_1+"}}\\]"
    div2.innerHTML += "<span style='color: red;'><ul><li>Svolgiamo i calcoli sia al numeratore che al denominatore</li></ul></span>";
  }

  if(n===12) {
    div2.innerHTML ="<button class ='nextStep' onclick = 'nextStepPower("+m1+")'>→</button><br>";
    div2.innerHTML += "\\[ \\left( \\frac{"+oldA1+"}{"+oldB1+"} \\right)^{"+oldC1+"} = \\left( \\frac{"+a1+"}{"+b1+"} \\right)^{"+c1+"} = \\frac{\\color{red}{"+a1+"^{"+c1+"}}}{"+b1+"^{"+c1+"}} = \\frac{\\color{white}{"+num1_1+"}}{\\color{white}{"+num2_1+"}}\\]"
    div2.innerHTML += "<ul><li>Svolgiamo i calcoli sia al numeratore che al denominatore</li></ul>";
  }

  if(n===13) {
    div2.innerHTML ="<button class ='nextStep' onclick = 'nextStepPower("+m1+")'>→</button><br>";
    div2.innerHTML += "\\[ \\left( \\frac{"+oldA1+"}{"+oldB1+"} \\right)^{"+oldC1+"} = \\left( \\frac{"+a1+"}{"+b1+"} \\right)^{"+c1+"} = \\frac{"+a1+"^{"+c1+"}}{"+b1+"^{"+c1+"}} = \\frac{\\color{red}{"+num1_1+"}}{\\color{white}{"+num2_1+"}}\\]"
    div2.innerHTML += "<ul><li>Svolgiamo i calcoli sia al numeratore che al denominatore</li></ul>";
  }

  if(n===14) {
    div2.innerHTML ="<button class ='nextStep' onclick = 'nextStepPower("+m1+")'>→</button><br>";
    div2.innerHTML += "\\[ \\left( \\frac{"+oldA1+"}{"+oldB1+"} \\right)^{"+oldC1+"} = \\left( \\frac{"+a1+"}{"+b1+"} \\right)^{"+c1+"} = \\frac{"+a1+"^{"+c1+"}}{\\color{red}{"+b1+"^{"+c1+"}}} = \\frac{"+num1_1+"}{\\color{white}{"+num2_1+"}}\\]"
    div2.innerHTML += "<ul><li>Svolgiamo i calcoli sia al numeratore che al denominatore</li></ul>";
  }

  if(n===15) {
    div2.innerHTML ="<button class ='nextStep' onclick = 'nextStepPower("+m1+")'>→</button><br>";
    div2.innerHTML += "\\[ \\left( \\frac{"+oldA1+"}{"+oldB1+"} \\right)^{"+oldC1+"} = \\left( \\frac{"+a1+"}{"+b1+"} \\right)^{"+c1+"} = \\frac{"+a1+"^{"+c1+"}}{"+b1+"^{"+c1+"}} = \\frac{"+num1_1+"}{\\color{red}{"+num2_1+"}}\\]"
    div2.innerHTML += "<ul><li>Svolgiamo i calcoli sia al numeratore che al denominatore</li></ul>";
  }

  if(n===16) {
    div2.innerHTML ="<button class ='nextStep' onclick = 'negativePower()'>&#10227;</button><br>";
    div2.innerHTML += "\\[ \\left( \\frac{"+oldA1+"}{"+oldB1+"} \\right)^{"+oldC1+"} = \\left( \\frac{"+a1+"}{"+b1+"} \\right)^{"+c1+"} = \\frac{"+a1+"^{"+c1+"}}{"+b1+"^{"+c1+"}} = \\frac{"+num1_1+"}{"+num2_1+"}\\]"
    //rendo uguali i valori di a1 e b1 in modo che entri nel while all'inizio di negativePower()
    a1=1;
    b1=1;
  }
  //div2.innerHTML += "\\[ \\left( \\frac{"+a+"}{"+b+"} \\right)^{"+c+"} = \\frac{"+a+"^{"+c+"}}{"+b+"^{"+c+"}} = \\frac{"+num1+"}{"+num2+"}\\]"
  
  MathJax.typesetClear([div2]);
  MathJax.typesetPromise([div2]).then(() => {});
}

