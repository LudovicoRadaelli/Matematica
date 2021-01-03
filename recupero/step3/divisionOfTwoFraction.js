var div1 = document.getElementById("division");
var a;
var b;
var c;
var d;
var num1;
var num2;
var m = 1;
console.log("m: " + m);
divisionOfTwofraction();



function divisionOfTwofraction() {
    //indice dei passaggi
    m = 1;

    //numeratore prima frazione
    a = Math.floor(Math.random()*20+1);
    //denominatore prima frazione
    b = Math.floor(Math.random()*50+1);
    //numeratore seconda frazione
    c = Math.floor(Math.random()*20+1);
    //denominatore seconda frazione
    d = Math.floor(Math.random()*50+1);


    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStep(1)'>→</button><br>";
    div1.innerHTML += "\\[  \\frac{"+a+"}{"+b+"} : \\frac{"+c+"}{"+d+"} = \\color{white}{\\frac{"+a+"}{"+b+"} \\cdot \\frac{"+d+"}{"+c+"} =}\\]"
    div1.innerHTML += "<span style='color: white';><ul><li>Riscriviamo la prima frazione</li><li>Trasformiamo la divisione in moltiplicazione</li><li>Invertiamo la seconda frazione</li></ul></span>";
  
    
    MathJax.typesetClear([div1]);
    MathJax.typesetPromise([div1]).then(() => {});
}

function nextStep(n) {
  console.log("passaggio " + m);  
  m++;
  console.log("m: " + m);
  
  if(n===1) {
    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStep("+m+")'>→</button><br>";
    div1.innerHTML += "\\[  \\frac{"+a+"}{"+b+"} : \\frac{"+c+"}{"+d+"} = \\color{white}{\\frac{"+a+"}{"+b+"} \\cdot \\frac{"+d+"}{"+c+"} =}\\]"
    div1.innerHTML += "<ul><li>Riscriviamo la prima frazione</li><li>Trasformiamo la divisione in moltiplicazione</li><li>Invertiamo la seconda frazione</li></ul>";
  } 

  if(n===2) {
    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStep("+m+")'>→</button><br>";
    div1.innerHTML += "\\[  \\frac{"+a+"}{"+b+"} : \\frac{"+c+"}{"+d+"} = \\color{white}{\\frac{"+a+"}{"+b+"} \\cdot \\frac{"+d+"}{"+c+"} =}\\]"
    div1.innerHTML += "<ul><span style='color: red'><li>Riscriviamo la prima frazione</li></span><li>Trasformiamo la divisione in moltiplicazione</li><li>Invertiamo la seconda frazione</li></ul>";
  }

  if(n===3) {
    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStep("+m+")'>→</button><br>";
    div1.innerHTML += "\\[  \\frac{"+a+"}{"+b+"} : \\frac{"+c+"}{"+d+"} = \\frac{"+a+"}{"+b+"} \\color{white}{\\cdot \\frac{"+d+"}{"+c+"} =}\\]"
    div1.innerHTML += "<ul><li>Riscriviamo la prima frazione</li><li>Trasformiamo la divisione in moltiplicazione</li><li>Invertiamo la seconda frazione</li></ul>";
  }

  if(n===4) {
    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStep("+m+")'>→</button><br>";
    div1.innerHTML += "\\[  \\frac{"+a+"}{"+b+"} : \\frac{"+c+"}{"+d+"} = \\frac{"+a+"}{"+b+"} \\color{white}{\\cdot \\frac{"+d+"}{"+c+"} =}\\]"
    div1.innerHTML += "<ul><li>Riscriviamo la prima frazione</li><span style='color: red'><li>Trasformiamo la divisione in moltiplicazione</li></span><li>Invertiamo la seconda frazione</li></ul>";
  }

  /*
  if(n===5) {
    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStep("+m+")'>→</button><br>";
    div1.innerHTML += "\\[  \\frac{"+a+"}{"+b+"} : \\frac{"+c+"}{"+d+"} = \\frac{"+a+"}{"+b+"} \\color{white}{\\cdot \\frac{"+d+"}{"+c+"} =}\\]"
    div1.innerHTML += "<ul><li>Trasformiamo la divisione in moltiplicazione</li><li>Invertiamo la seconda frazione</li></ul>";
  }

  if(n===6) {
    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStep("+m+")'>→</button><br>";
    div1.innerHTML += "\\[  \\frac{"+a+"}{"+b+"} : \\frac{"+c+"}{"+d+"} = \\color{white}{\\frac{"+a+"}{"+b+"} \\cdot \\frac{"+d+"}{"+c+"} =}\\]"
    div1.innerHTML += "<ul><span style='color: red'><li>Trasformiamo la divisione in moltiplicazione</li></span><li>Invertiamo la seconda frazione</li></ul>";
  }*/

  if(n===5) {
    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStep("+m+")'>→</button><br>";
    div1.innerHTML += "\\[  \\frac{"+a+"}{"+b+"} \\color{red}{ : } \\color{black}{\\frac{"+c+"}{"+d+"} = \\frac{"+a+"}{"+b+"}} \\color{white}{\\cdot \\frac{"+d+"}{"+c+"}} =\\]"
    div1.innerHTML += "<ul><li>Riscriviamo la prima frazione</li><li>Trasformiamo la divisione in moltiplicazione</li><li>Invertiamo la seconda frazione</li></ul>";
  } 

  if(n===6) {
    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStep("+m+")'>→</button><br>";
    div1.innerHTML += "\\[  \\frac{"+a+"}{"+b+"} : \\frac{"+c+"}{"+d+"} = \\frac{"+a+"}{"+b+"} \\color{red}{\\cdot} \\color{white}{\\frac{"+d+"}{"+c+"}} =\\]"
    div1.innerHTML += "<ul><li>Riscriviamo la prima frazione</li><li>Trasformiamo la divisione in moltiplicazione</li><li>Invertiamo la seconda frazione</li></ul>";
  } 

  if(n===7) {
    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStep("+m+")'>→</button><br>";
    div1.innerHTML += "\\[  \\frac{"+a+"}{"+b+"} : \\frac{"+c+"}{"+d+"} = \\frac{"+a+"}{"+b+"} \\cdot \\color{white}{\\frac{"+d+"}{"+c+"}} =\\]"
    div1.innerHTML += "<ul><li>Riscriviamo la prima frazione</li><li>Trasformiamo la divisione in moltiplicazione</li><span style='color:red;'><li>Invertiamo la seconda frazione</li></span></ul>";
  } 

  if(n===8) {
    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStep("+m+")'>→</button><br>";
    div1.innerHTML += "\\[  \\frac{"+a+"}{"+b+"} : \\color{red}{\\frac{"+c+"}{"+d+"}} \\color{black}{= \\frac{"+a+"}{"+b+"} \\cdot} \\color{white}{\\frac{"+d+"}{"+c+"}} =\\]"
    div1.innerHTML += "<ul><li>Riscriviamo la prima frazione</li><li>Trasformiamo la divisione in moltiplicazione</li><li>Invertiamo la seconda frazione</li></ul>";
  } 

  if(n===9) {
    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStep("+m+")'>→</button><br>";
    div1.innerHTML += "\\[  \\frac{"+a+"}{"+b+"} : \\frac{"+c+"}{"+d+"} = \\frac{"+a+"}{"+b+"} \\color{red}{\\cdot \\frac{"+d+"}{"+c+"}} \\color{black}{=}\\]"
    div1.innerHTML += "<ul><li>Riscriviamo la prima frazione</li><li>Trasformiamo la divisione in moltiplicazione</li><li>Invertiamo la seconda frazione</li></ul>";
  }

  if(n===10) {
    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStep("+m+")'>→</button><br>";
    div1.innerHTML += "\\[  \\frac{"+a+"}{"+b+"} : \\frac{"+c+"}{"+d+"} = \\frac{"+a+"}{"+b+"} \\cdot \\frac{"+d+"}{"+c+"} = \\]"
    div1.innerHTML += "<ul><span style='color: red;'><li>Eseguiamo la moltiplicazione tra le due frazioni</li></span></ul>";
  }

  if(n===11) {
    div1.innerHTML ="<button class ='nextStep' onclick = 'nextStep("+m+")'>→</button><br>";
    div1.innerHTML += "\\[  \\frac{"+a+"}{"+b+"} : \\frac{"+c+"}{"+d+"} = \\color{red}{\\frac{"+a+"}{"+b+"} \\cdot \\frac{"+d+"}{"+c+"}} = \\]"
    div1.innerHTML += "<ul><li>Eseguiamo la moltiplicazione tra le due frazioni</li></ul>";
  }

  if(n===12) {
    num1 = a*c;
    num2 = b*d;
    div1.innerHTML ="<button class ='nextStep' onclick = 'divisionOfTwofraction()'>→</button><br>";
    div1.innerHTML += "\\[  \\frac{"+a+"}{"+b+"} : \\frac{"+c+"}{"+d+"} = \\frac{"+a+"}{"+b+"} \\cdot \\frac{"+d+"}{"+c+"} = \\frac{"+num1+"}{"+num2+"}\\]"
  }
  
  
    MathJax.typesetClear([div1]);
    MathJax.typesetPromise([div1]).then(() => {});
}
