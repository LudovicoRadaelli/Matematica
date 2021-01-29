compito();

function compito() {
    document.getElementById("somme").innerHTML = "svolgi l'esercizio n° "+rnd(27,78)+" a pag. 361";
    document.getElementById("prodotti").innerHTML = "svolgi l'esercizio n° "+rnd(145,153)+" a pag. 366";
    document.getElementById("espressione1").innerHTML = "svolgi l'esercizio n° "+rnd(182,206)+" a pag. 368";
    document.getElementById("sommaPerDifferenza").innerHTML = "svolgi l'esercizio n° "+rnd(272,279)+" a pag. 375";
    document.getElementById("quadratoDiBinomio").innerHTML = "svolgi l'esercizio n° "+rnd(311,321)+" a pag. 378";
    document.getElementById("quadratoDiTrinomio").innerHTML = "svolgi l'esercizio n° "+rnd(372,378)+" a pag. 381";
    document.getElementById("cuboDiTrinomio").innerHTML = "svolgi l'esercizio n° "+rnd(399,408)+" a pag. 383";
    document.getElementById("espressione2").innerHTML = "svolgi l'esercizio n° "+rnd(441,485)+" a pag. 383";
}

function rnd(min,max) {
    return Math.floor(Math.random() * (max+1 - min) ) + min;
}