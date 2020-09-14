var percheStudiamoiNumeri = false;
document.getElementById("percheStudiamoINumeri").addEventListener("click", function(){
    if(percheStudiamoiNumeri === false) {
        document.getElementById("matematicaECervello").style.display = "initial";
        document.getElementById("argomento2").style.display = "initial";
        document.getElementById("argomento3").style.display = "initial";
        document.getElementById("argomento4").style.display = "initial";
        percheStudiamoiNumeri = true;
    } else {
        document.getElementById("matematicaECervello").style.display = "none";
        document.getElementById("argomento2").style.display = "none";
        document.getElementById("argomento3").style.display = "none";
        document.getElementById("argomento4").style.display = "none";
        percheStudiamoiNumeri = false;
    }
});

   
