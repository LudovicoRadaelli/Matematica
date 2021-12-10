let  side =300;
let newValue;
let letsDraw = true;
let f = [0,0,0,0,0,0,0,0,0,0,0];
let data = [];
let u;
let media, mediana, moda;

function setup() { 
    
    let cnv = createCanvas(side, side);
    cnv.parent("sketch");

    u = width/10;  

    colorMode(HSB,10);
    textAlign(CENTER, CENTER);

    drawGrid();
}

function draw() {
    
    changeCoordinate();

    

    if(letsDraw) {
        background("white")

        drawGrid();

        for(let i = 0; i < 10; i++) {
            
            stroke(i, 10, 5);
            strokeWeight(2);
            fill(i, 6, 10);
            rect(i*u, u, u, f[i+1]*u);
            resetMatrix();
            text(`${i+2}`, (i+3/2)*u, height - u/2)
            changeCoordinate();

            media = mean(data, data.length);
            mediana = median(data, data.length);
            document.getElementById("media").innerHTML = floor(media*100)/100;
            document.getElementById("mediana").innerHTML = mediana;
            //mode = mode(data, data.length);

            stroke("red");
            strokeWeight(2);
            line(0, media*u + u, width, media*u + u);
            stroke("blue");
            line(0, mediana*u + u, width, mediana*u + u);

            
        }
        letsDraw = false;
    }

}

function mouseClicked() {
    
    for(let i = 0; i < 10; i++) {
        if(sqrt(((i + 3/2)*u - mouseX)*((i + 3/2)*u - mouseX) +(height - u/2 - mouseY)*(height - u/2 - mouseY)) < u/2) {
            drawGraphic1(i+1);
        }
    }
    
}

function changeCoordinate() {
    translate(u,height);
    applyMatrix(1,0,0,-1,0,0);
}

function drawGrid() {
    for(let j = 0; j < 10; j += 0.5) {
        stroke(1,3,7);
        strokeWeight(1);
        line(0,j*u + u,width, j*u + u);
        strokeWeight(2);
        resetMatrix();
        strokeWeight(1);
        fill("gray");
        text(`${j}`, u/2, height - u - j*u);
        changeCoordinate()
        //line(0,j*u + u,width, j*u + u);
    }
}

function drawGraphic() {
    voto = parseInt(document.getElementById("input").value);
    f[voto] = f[voto] + 1/2;
    console.log(`
    voto: ${voto},
    f[voto]: ${f[voto]}`)
    letsDraw = true;
    data.push(voto);
    console.log(`
    data: ${data},
    f: ${f}`)
}

function drawGraphic1(val) {
    voto = val;
    f[voto] = f[voto] + 1/2;
    console.log(`
    voto: ${voto},
    f[voto]: ${f[voto]}`)
    letsDraw = true;
    data.push(voto+1);
    console.log(`
    data: ${data},
    f: ${f}`)
}



function mean(a, n) {

    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum += a[i];
    }
    return sum/n;
}

function median(a, n) {
    a.sort();
 
    if (n % 2 != 0)
        return a[parseInt(n / 2)];
 
    return (a[parseInt((n - 1) / 2)] + a[parseInt(n / 2)]) / 2.0;
}
 

function mode(a, n) {
 
    let max = Number.MIN_VALUE;
     
    for (let i = 0; i < a.length; i++)
    {
        max = Math.max(max, a[i]);
    }

    let t = max + 1;
    let count = new Array(t);
    for (let i = 0; i < t; i++)
        count[i] = 0;

    for (let i = 0; i < n; i++)
        count[a[i]]++;

    let mode = 0;
    let k = count[0];
    for (let i = 1; i < t; i++) {
        if (count[i] > k) {
            k = count[i];
            mode = i;
        }
    }

    return (mode);
}


/* MathJax.typesetClear([]);
MathJax.typesetPromise([]).then(() => {}); */
