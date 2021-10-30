
function mostraSoluzione(n) {
    document.getElementById("soluzione"+n).style.display = "block";
    document.getElementById(`soluzione${n}-button`).style.display = "none";
}

/* MathJax.typesetClear([document.getElementsByClassName("calcoliEquazione"), document.getElementsByClassName("nuovaEquazione")]);
MathJax.typesetPromise([document.getElementsByClassName("calcoliEquazione"), document.getElementsByClassName("nuovaEquazione")]).then(() => {}); */