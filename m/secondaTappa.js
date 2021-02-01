function showHint(i) {
    let j = i +1;
    if(i!==5) {
        document.getElementById("buttonHint"+j).style.display = "block";
    }
    
    document.getElementById("hint"+i).style.display = "block";

}

function goToLink() {
    location.href = "https://ludovicoradaelli.github.io/Matematica/m/terzaTappa.html";
}