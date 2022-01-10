var ggbApp = new GGBApplet({
    "appName": "classic", 
    "width": 600, 
    "height": 300, 
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "filename":"limiteInfinito.ggb"}, true);
      window.addEventListener("load", function() { 
          ggbApp.inject('ggb-element1');
      });
      

var n = 2;
var m = 3;
var i = 1;
var j = 1;

function changeNValue() {
    document.getElementById("output").innerHTML = "---";
    for(var a = 1; a <= i; a++){
        ggbApplet.deleteObject("polTop"+a);
    }
    n = document.getElementById("firstInput").value;
    i = 1;
    drawTopRectangle(n,i);
    drawBottomRectangle(m,j);
    if(i*n === j*m){
        document.getElementById("output").innerHTML = i*n
    }
}

function changeMValue() {
    document.getElementById("output").innerHTML = "---";
    for(var a = 1; a <= j; a++){
        ggbApplet.deleteObject("polBottom"+a);
    }
    m = document.getElementById("secondInput").value;
    j = 1; 
    drawTopRectangle(n,i);
    drawBottomRectangle(m,j);
    if(i*n === j*m){
        document.getElementById("output").innerHTML = i*n
    }
}

function incrementTop() {
    i++;
    drawTopRectangle(n,i);
    if(i*n === j*m){
        document.getElementById("output").innerHTML = i*n
    }
}

function incrementBottom() {
    j++;
    drawBottomRectangle(m,j);
    if(i*n === j*m){
        document.getElementById("output").innerHTML = i*n
    }
}

function drawTopRectangle(l,k) {
    ggbApplet.evalCommand("polTop"+k+"=Polygon((("+k+"-1)*"+l+",0),(("+k+"-1)*"+l+",1),("+k+"*"+l+",1),("+k+"*"+l+",0))");
    ggbApplet.evalCommand("SetColor(polTop"+k+",229/255,46/255,113/255)");  
}

function drawBottomRectangle(l,k) {
    ggbApplet.evalCommand("polBottom"+k+"=Polygon((("+k+"-1)*"+l+",0),(("+k+"-1)*"+l+",-1),("+k+"*"+l+",-1),("+k+"*"+l+",0))");
    ggbApplet.evalCommand("SetColor(polBottom"+k+",255/255,138/255,0)"); 
}
