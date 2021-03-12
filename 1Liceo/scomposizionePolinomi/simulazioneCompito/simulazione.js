function hint(i) {
    document.getElementById("hint"+i).style.display = "block";
}

function show(i) {
    document.getElementById("solution"+i).style.display = "block";
    if(i===7||i===8||i===13) {
        document.getElementById("solutionImg"+i).style.display = "block";
    }
}