var vid0 = document.getElementById("video0");
var vid1 = document.getElementById("video1");

function display(i) {

    if(i===0) {
        vid0.currentTime = 0;
        vid0.play();
        }

    if(i===1) {
        vid1.currentTime = 2*60 +33;
        vid1.play();
        }
    
    if(i===2) {
        vid1.currentTime = 4*60 + 49;
        vid1.play();
    }
}

vid0.ontimeupdate = function() {
    if(vid0.currentTime >= 2*60 +32) {
        vid0.currentTime = 8*60+3;
        vid0.pause();
    }
}
