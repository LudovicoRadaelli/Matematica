
var muString = ["M", "I"];
document.getElementById("muWrapper").innerHTML = 
    "<div id='1' class='muDiv' onclick='refreshIndex()'>" + muString[0] + "</div> " + 
    "<div id='2' class='muDiv' onclick='refreshIndex()'>" + muString[1] + "</div>";

/*Evidenzio in rosso l'ultimo elemento.
n.b. index parte da 1, mentre l'indice del vettore parte da zero.
Ad es, 1 è l'id del div che include muStrin[0] */
var index, currentDiv;
index = muString.length;
currentDiv = document.getElementById(index);
currentDiv.style.backgroundColor = "#ff6fa4";
/* Queste sono le istruzioni per creare intermittenza sul background-color del div selezionato
currentDiv.style.webkitAnimationName = "intermittence";
currentDiv.style.webkitAnimationIterationCount = "infinite";  
currentDiv.style.webkitAnimationDuration = "1.5s"; */
    

/* Queste due funzioni insieme permettono di selezionare un elemento della stringa*/
function cleanBackground(item) {
    item.style.backgroundColor = "white";
    /*Serve per pulire l'intermittenza sull'elemento selezionato precedentemente
    currentDiv.style.webkitAnimationIterationCount = "";*/  
}
function refreshIndex(){
    var muDiv = document.querySelectorAll(".muDiv");
    muDiv.forEach(cleanBackground);
    index = event.target.id;
    currentDiv = document.getElementById(index);
    currentDiv.style.backgroundColor = "#ff6fa4";   
}/*-------------------------------------------------------------------------------*/

/*Le regole sono scritte in modo da modificare prima l'array muString, per poi andare a generare i div 
contenenti le singole lettere della stringa*/
function firstRule() {
    if (muString[muString.length -1] === "I") {
        muString.push("U");
        document.getElementById("muWrapper").innerHTML += 
            " <div id='" + muString.length + "' class='muDiv' onclick='refreshIndex()'>" + 
            muString[muString.length-1] + 
            "</div>";
    }  
}

function secondRule(indexPar) {

    clickedLetter = muString[indexPar -1];
    var actualLenght = muString.length;
    
    if(clickedLetter === "M") {
        for(var i = indexPar; i < actualLenght; i++){
            muString.push(muString[i]);
            document.getElementById("muWrapper").innerHTML += 
            " <div id='" + muString.length + "' class='muDiv' onclick='refreshIndex()'>" + 
            muString[muString.length-1] + 
            "</div>";
        }
    }
}

function thirdRule(indexPar) {
    clickedLetter = muString[indexPar -1];
    if((clickedLetter === "I") && (muString[indexPar] === "I") && (muString[parseInt(indexPar)+1] === "I")){
        muString[parseInt(indexPar)-1] = "U";
        muString.splice(indexPar,2);
        /*Nelle prossime righe prima cancello totalmente il div #muWrapper, poi lo rigenero con gli id giusti.*/
        document.getElementById("muWrapper").innerHTML = "";
        for(var i = 0; i < muString.length; i++){
            var j = i+1;
            document.getElementById("muWrapper").innerHTML += 
            " <div id='" + j + "' class='muDiv' onclick='refreshIndex()'>" + 
            muString[i] + 
            "</div>";    
        }
        currentDiv = document.getElementById(indexPar);
        currentDiv.style.backgroundColor = "#ff6fa4"; 
    }
}

function fourthRule(indexPar){
    clickedLetter = muString[indexPar -1];
    if((clickedLetter === "U") && (muString[indexPar] === "U")){
        muString.splice(indexPar-1,2);
        /*Nelle prossime righe prima cancello totalmente il div #muWrapper, poi lo rigenero con gli id giusti.*/
        document.getElementById("muWrapper").innerHTML = "";
        for(var i = 0; i < muString.length; i++){
            var j = i+1;
            document.getElementById("muWrapper").innerHTML += 
            " <div id='" + j + "' class='muDiv' onclick='refreshIndex()'>" + 
            muString[i] + 
            "</div>";    
        }
        currentDiv = document.getElementById(indexPar);
        currentDiv.style.backgroundColor = "#ff6fa4";  
    }
}

function refresh(){
    muString = ["M", "I"];
    document.getElementById("muWrapper").innerHTML = 
    "<div id='1' class='muDiv' onclick='refreshIndex()'>" + muString[0] + "</div> " + 
    "<div id='2' class='muDiv' onclick='refreshIndex()'>" + muString[1] + "</div>";
    index = muString.length;
    currentDiv = document.getElementById(index);
    currentDiv.style.backgroundColor = "#ff6fa4";
}
