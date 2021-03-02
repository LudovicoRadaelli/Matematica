var vid0 = document.getElementById("video0");
var vid1 = document.getElementById("video1");

vid0.ontimeupdate = function() {
    if(vid0.currentTime >= 2*60+55) {
        vid0.currentTime = 460;
        vid0.pause();
    }
};

function display(i) {
    if(i===1) {
        vid1.currentTime = 2*60+55;
        vid1.play();
    }
    if(i===2) {
        vid1.currentTime = 5*60+40;
        vid1.play();
    }
}


