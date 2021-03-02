var vid1 = document.getElementById("video1");

function display(i) {
    if(i===1) {
        vid1.currentTime = 0;
        vid1.play();
    }
    if(i===2) {
        vid1.currentTime = 4*60 + 22;
        vid1.play();
    }
    if(i===3) {
        vid1.currentTime = 7*60 + 28;
        vid1.play();
    }
}


