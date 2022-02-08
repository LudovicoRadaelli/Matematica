slideIndex = 0;

function changeSlide(delta) {
    
    slideIndex += delta;
    slideIndex %=  document.getElementsByClassName("slide").length;
    if(slideIndex < 0 ) {
        slideIndex += document.getElementsByClassName("slide").length;
    }
    console.log(slideIndex < 0);
    for(let i = 0; i < document.getElementsByClassName("slide").length; i++) {
        document.getElementsByClassName("slide")[i].style.display = "none";
    }
    document.getElementsByClassName("slide")[slideIndex].style.display = "block";
    document.getElementsByClassName("prev")[0].disabled = false;

    /* if(document.getElementsByClassName("slide")[slideIndex] === 5) {
        document.getElementsByClassName("slide")[slideIndex].style = "fontS"
        style="font: 0.7rem;"
    } */
}