var numeriNaturali = false;
document.getElementById("numeriNaturali").addEventListener("click", function(){
    if(numeriNaturali === false) {
        document.getElementById("sistemaNumerazioneRomana").style.display = "initial";
        document.getElementById("sistemaDiNumerazioneIndoArabo").style.display = "initial";
        /*document.getElementById("argomento3").style.display = "initial";
        document.getElementById("argomento4").style.display = "initial";*/
        numeriNaturali = true;
    } else {
        document.getElementById("sistemaNumerazioneRomana").style.display = "none";
        document.getElementById("sistemaDiNumerazioneIndoArabo").style.display = "none";
        /*document.getElementById("argomento3").style.display = "none";
        document.getElementById("argomento4").style.display = "none";*/
        numeriNaturali = false;
    }
});

document.getElementById("sistemaNumerazioneRomana").addEventListener("click", function(){
    location.href = "https://ludovicoradaelli.github.io/Matematica/Road%20Map%201LS/NumeriNaturali/romanNumber.html";
});
document.getElementById("sistemaDiNumerazioneIndoArabo").addEventListener("click", function(){
    location.href = "https://ludovicoradaelli.github.io/Matematica/Road%20Map%201LS/NumeriNaturali/numericalBase10.html";
});

   
