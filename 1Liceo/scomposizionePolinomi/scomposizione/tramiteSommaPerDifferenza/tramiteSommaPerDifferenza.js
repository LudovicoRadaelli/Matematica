var vid1 = document.getElementById("video1");

function display(i) {
    if(i===1) {
        vid1.currentTime = 0;
        vid1.play();
    }
    if(i===2) {
        vid1.currentTime = 1*60 + 40;
        vid1.play();
    }
    if(i===3) {
        vid1.currentTime = 2*60 + 42;
        vid1.play();
    }
}


