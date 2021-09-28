var x;
var signX;
var checkX;
var y;
var signY;
var checkY;

var result; 
var answer;

var numEs = 0;

var rnd;
var gif = [
    '<br><iframe src="https://giphy.com/embed/TdfyKrN7HGTIY" width="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
    '<br><iframe src="https://giphy.com/embed/xT5LMQ8rHYTDGFG07e" width="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
    '<br><iframe src="https://giphy.com/embed/3NtY188QaxDdC" width="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
    '<br><iframe src="https://giphy.com/embed/G9Kj87gLF8Z4A" width="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
    '<br><iframe src="https://giphy.com/embed/hraEU3kXpPa36" width="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
    '<br><iframe src="https://giphy.com/embed/xUySTUZ8A2RJBQitEc" width="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
    '<br><iframe src="https://giphy.com/embed/f6VfCFyOL5KmiICskp" width="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'    
]
function start() {

    document.addEventListener("keypress", function(event) {
        if (event.keyCode === 13) {
          checkResult();
        }
      });
      
    x = Math.floor(Math.random()*40 + 1);
    signX = Math.random();
    checkX;
    if(signX>0.5){
        signX="-";
        checkX=-x;
    }
    else {
        signX="+";
        checkX = x;
    } 

    y = Math.floor(Math.random()*40 + 1);
    signY = Math.random();
    checkY;
    if(signY>0.5){
        signY="-";
        checkY=-y}
    else {
        signY="+";
        checkY = y;
    }

    result = checkX + checkY;

    console.log("chechX: "+checkX+", checkY: "+checkY+", result: "+result+", signX: "+signX+", signY: "+signY);

    document.getElementsByClassName("page")[0].style.display = "none";

    document.getElementById("question-container").style.display = "block";
    document.getElementById("gif-container").style.display = "none";
    document.getElementById("riprovaContinua").style.display = "none";    






    let nDomanda = numEs+1;
    document.getElementById("domanda").innerHTML = `Domanda ${nDomanda}`

    if(signX === "+") {
        document.getElementById("sum").innerHTML = 
        `${x} ${signY} ${y} = <input id='result'></input></form>`
    } else {
        document.getElementById("sum").innerHTML = 
        `${signX} ${x} ${signY} ${y} = <input id='result'></input></form>`
    }

    document.getElementsByClassName("page")[1].style.display = "block";
}


function checkResult() {

    answer =document.getElementById("result").value;
    console.log("result: "+result+"answer: "+answer);
    
    if(answer == result){

        numEs++;
        rnd = Math.floor(Math.random()*7);

        document.getElementById("question-container").style.display = "none";

        document.getElementById("gif-container").innerHTML = gif[rnd];
        document.getElementById("gif-container").style.display = "block"



        document.getElementById("riprovaContinua").innerHTML = "Continua";
        document.getElementById("riprovaContinua").addEventListener("click", start);
        document.getElementById("riprovaContinua").style.display = "block";

        if(numEs===10){
            document.getElementById("gif-container").innerHTML = '<br><iframe src="https://giphy.com/embed/BWySufD6KWQzC" width="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><br><p style="text-align: center;">Obiettivo raggiunto!</p>'    
            document.getElementById("riprovaContinua").innerHTML = "Torna agli esercizi";
            document.getElementById("riprovaContinua").removeEventListener("click", start);
            document.getElementById("riprovaContinua").addEventListener("click", tornaEsercizi);
        }

    } else {
        numEs=0;
        document.getElementById("question-container").style.display = "none";
        
        document.getElementById("gif-container").innerHTML =
        '<br><iframe src="https://giphy.com/embed/l0G18G3m69vQCOddm" width="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
        document.getElementById("gif-container").style.display = "block"

        document.getElementById("riprovaContinua").innerHTML = "Riprova!";
        document.getElementById("riprovaContinua").addEventListener("click", start);
        document.getElementById("riprovaContinua").style.display = "block";
        
    }
}

function tornaEsercizi() {
    location.href='https://ludovicoradaelli.github.io/Matematica/2022/prima/esercizi1Fi/es2.html';
}
