var div2 = document.getElementById("power");
//basi
var a1;
var b1;
//potenza
var c1;
//risultati
var num1_1;
var num2_1;
//contatore passaggi
var m1 = 1;
console.log("m: " + m1);
powerOfTwoFraction();



function powerOfTwoFraction() {
    
    //indice passaggi
    m1 = 1;

    //basi
    a1 = Math.floor(Math.random()*10+1);
    b1 = Math.floor(Math.random()*10+1);
    
    //potenza
    c1 = Math.floor(Math.random()*5+2);
    
    //risultati
    num1_1 = Math.pow(a1,c1);
    num2_1 = Math.pow(b1,c1);

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
    div2.innerHTML += "\\[ \\left( \\frac{"+a1+"}{"+b1+"} \\right)^{"+c1+"} \\color{white}{= \\frac{"+a1+"^{"+c1+"}}{"+b1+"^{"+c1+"}} = \\frac{"+num1_1+"}{"+num2_1+"}}\\]"
    div2.innerHTML += "<span style='color: red;'><ul><li>Applichiamo la potenza "+c1+" sia al numeratore che al denominatore</li></ul></span>";
  } 

  if(n===2) {
    div2.innerHTML ="<button class ='nextStep' onclick = 'nextStepPower("+m1+")'>→</button><br>";
    div2.innerHTML += "\\[ \\left( \\frac{"+a1+"}{"+b1+"} \\right)^{\\color{red}{"+c1+"}} =\\color{white}{= \\frac{"+a1+"^{"+c1+"}}{"+b1+"^{"+c1+"}} = \\frac{"+num1_1+"}{"+num2_1+"}}\\]"
    div2.innerHTML += "<ul><li>Applichiamo la potenza "+c1+" sia al numeratore che al denominatore</li></ul>";
  }

  if(n===3) {
    div2.innerHTML ="<button class ='nextStep' onclick = 'nextStepPower("+m1+")'>→</button><br>";
    div2.innerHTML += "\\[ \\left( \\frac{"+a1+"}{"+b1+"} \\right)^{"+c1+"} = \\frac{"+a1+"^{\\color{red}{"+c1+"}}}{"+b1+"^{\\color{red}{"+c1+"}}} = \\color{white}{\\frac{"+num1_1+"}{"+num2_1+"}}\\]"
    div2.innerHTML += "<ul><li>Applichiamo la potenza "+c1+" sia al numeratore che al denominatore</li></ul>";
  }

  if(n===4) {
    div2.innerHTML ="<button class ='nextStep' onclick = 'nextStepPower("+m1+")'>→</button><br>";
    div2.innerHTML += "\\[ \\left( \\frac{"+a1+"}{"+b1+"} \\right)^{"+c1+"} = \\frac{"+a1+"^{"+c1+"}}{"+b1+"^{"+c1+"}} = \\color{white}{\\frac{"+num1_1+"}{"+num2_1+"}}\\]"
    div2.innerHTML += "<span style='color: red;'><ul><li>Svolgiamo i calcoli sia al numeratore che al denominatore</li></ul></span>";
  }

  if(n===5) {
    div2.innerHTML ="<button class ='nextStep' onclick = 'nextStepPower("+m1+")'>→</button><br>";
    div2.innerHTML += "\\[ \\left( \\frac{"+a1+"}{"+b1+"} \\right)^{"+c1+"} = \\frac{\\color{red}{"+a1+"^{"+c1+"}}}{"+b1+"^{"+c1+"}} = \\frac{\\color{white}{"+num1_1+"}}{\\color{white}{"+num2_1+"}}\\]"
    div2.innerHTML += "<ul><li>Svolgiamo i calcoli sia al numeratore che al denominatore</li></ul>";
  }

  if(n===6) {
    div2.innerHTML ="<button class ='nextStep' onclick = 'nextStepPower("+m1+")'>→</button><br>";
    div2.innerHTML += "\\[ \\left( \\frac{"+a1+"}{"+b1+"} \\right)^{"+c1+"} = \\frac{"+a1+"^{"+c1+"}}{"+b1+"^{"+c1+"}} = \\frac{\\color{red}{"+num1_1+"}}{\\color{white}{"+num2_1+"}}\\]"
    div2.innerHTML += "<ul><li>Svolgiamo i calcoli sia al numeratore che al denominatore</li></ul>";
  }

  if(n===7) {
    div2.innerHTML ="<button class ='nextStep' onclick = 'nextStepPower("+m1+")'>→</button><br>";
    div2.innerHTML += "\\[ \\left( \\frac{"+a1+"}{"+b1+"} \\right)^{"+c1+"} = \\frac{"+a1+"^{"+c1+"}}{\\color{red}{"+b1+"^{"+c1+"}}} = \\frac{"+num1_1+"}{\\color{white}{"+num2_1+"}}\\]"
    div2.innerHTML += "<ul><li>Svolgiamo i calcoli sia al numeratore che al denominatore</li></ul>";
  }

  if(n===8) {
    div2.innerHTML ="<button class ='nextStep' onclick = 'nextStepPower("+m1+")'>→</button><br>";
    div2.innerHTML += "\\[ \\left( \\frac{"+a1+"}{"+b1+"} \\right)^{"+c1+"} = \\frac{"+a1+"^{"+c1+"}}{"+b1+"^{"+c1+"}} = \\frac{"+num1_1+"}{\\color{red}{"+num2_1+"}}\\]"
    div2.innerHTML += "<ul><li>Svolgiamo i calcoli sia al numeratore che al denominatore</li></ul>";
  }

  if(n===9) {
    div2.innerHTML ="<button class ='nextStep' onclick = 'powerOfTwoFraction()'>→</button><br>";
    div2.innerHTML += "\\[ \\left( \\frac{"+a1+"}{"+b1+"} \\right)^{"+c1+"} = \\frac{"+a1+"^{"+c1+"}}{"+b1+"^{"+c1+"}} = \\frac{"+num1_1+"}{"+num2_1+"}\\]"
  }
  //div2.innerHTML += "\\[ \\left( \\frac{"+a+"}{"+b+"} \\right)^{"+c+"} = \\frac{"+a+"^{"+c+"}}{"+b+"^{"+c+"}} = \\frac{"+num1+"}{"+num2+"}\\]"
  
  MathJax.typesetClear([div2]);
  MathJax.typesetPromise([div2]).then(() => {});
}

