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
    '<iframe src="https://giphy.com/embed/TdfyKrN7HGTIY" width="480" height="275" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
    '<iframe src="https://giphy.com/embed/xT5LMQ8rHYTDGFG07e" width="480" height="366" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
    '<iframe src="https://giphy.com/embed/3NtY188QaxDdC" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
    '<iframe src="https://giphy.com/embed/G9Kj87gLF8Z4A" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
    '<iframe src="https://giphy.com/embed/hraEU3kXpPa36" width="480" height="258" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
    '<iframe src="https://giphy.com/embed/xUySTUZ8A2RJBQitEc" width="480" height="260" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
    '<iframe src="https://giphy.com/embed/f6VfCFyOL5KmiICskp" width="480" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'    
]
function start() {
    document.addEventListener("keypress", function(event) {
        if (event.keyCode === 13) {
          checkResult();
        }
      });
      
    x = Math.floor(Math.random()*40);
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
    y = Math.floor(Math.random()*40);
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
    document.body.innerHTML = 
    "<form id='sum'>"+signX+x+signY+y+" = <input id='result'></input></form>"+
    "<button onclick='checkResult(result)'>Invia soluzione</button>";
}

function checkResult() {
    answer =document.getElementById("result").value;
    console.log("result: "+result+"answer: "+answer);
    if(answer==result){
        numEs++;
        rnd = Math.floor(Math.random()*7)
        document.body.innerHTML = 
        gif[rnd]+
        '<br><button onclick="start()">Continua</button>'
        if(numEs===10){
            document.body.innerHTML =
            '<iframe src="https://giphy.com/embed/BWySufD6KWQzC" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><br><p>Obiettivo raggiunto!</p>'+
            '<button onclick="start()">Rinizia</button><button><a href="www.youtube.com">Next step</a></button>';
        }
    } else {
        numEs=0;
        document.body.innerHTML = 
        '<iframe src="https://giphy.com/embed/l0G18G3m69vQCOddm" width="480" height="366" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><br><button onclick="start()">Riproviamoci!</button>';
    }
}

function showSolution() {
    if(signX===signY) {
        if(signX==="+"){
            document.body.innerHTML = 
            "<div class='wrapper'><div id='signX'>"+signX+"</div><div id='x'>"+x+"</div><div id='signY'>"+signY+"</div><div id='y'>"+y+" </div><div id='equal'>=</div></div>" 
            

        }
    }
}