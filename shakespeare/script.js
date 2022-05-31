function colora(n) {
    document.getElementById(`15`).style.color = "rgb(212, 204, 188)";
    document.getElementById("16").style.color = "rgb(212, 204, 188)";
    document.getElementById("17").style.color = "rgb(212, 204, 188)";
    document.getElementById("20").style.color = "rgb(212, 204, 188)";
    document.getElementById("21").style.color = "rgb(212, 204, 188)";
    document.getElementById("22").style.color = "rgb(212, 204, 188)";
    document.getElementById("23").style.color = "rgb(212, 204, 188)";
    document.getElementById("24").style.color = "rgb(212, 204, 188)";
    document.getElementById("27").style.color = "rgb(212, 204, 188)";
    document.getElementById("28").style.color = "rgb(212, 204, 188)";
    document.getElementById("29").style.color = "rgb(212, 204, 188)";
    document.getElementById("30").style.color = "rgb(212, 204, 188)";
    document.getElementById("31").style.color = "rgb(212, 204, 188)";

    if(n >= 15 && n != 18 && n != 19 && n != 25 && n != 26) {
        document.getElementById(`${n}`).style.color = "#d6aa27";
    }
    
}