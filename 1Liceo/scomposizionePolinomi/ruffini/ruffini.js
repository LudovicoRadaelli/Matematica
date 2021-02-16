function display(i) {
    document.getElementById("video0").style.display = "none";
    document.getElementById("video1").style.display = "none";
    if(i === 2) {
        let vid = document.getElementById("video2");
        vid.currentTime = 40;   
    }
    document.getElementById("video2").style.display = "none";
    document.getElementById("video3").style.display = "none";
    document.getElementById("video"+i).style.display = "block";

}