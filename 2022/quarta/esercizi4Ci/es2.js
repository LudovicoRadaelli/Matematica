let first = true; 

setInterval(checkPageYOffset, 500)

function checkPageYOffset() {
    console.log(window.pageYOffset);
    if(window.pageYOffset > 169 && first) {
        document.getElementById("warning").style.display = "block";
    }
}

function closeWarning() {
    document.getElementById("warning").style.display = "none";
    first = !first;
}


