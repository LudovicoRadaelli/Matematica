let x0 = [undefined, 3, 1, -1, 4, 1, -6, 7, 0, 1, 10, 0, 0, 2, 0, 0];


function f(nEx, x) {
    
    if(nEx === 1) {
        return Math.pow(x,2)-x+1
    } else if(nEx === 2) {
        return x/(x+1)
    } else if(nEx === 3) {
        return x/(x+1)
    } else if(nEx === 4) {
        return (Math.sqrt(x)-1)/(x)
    } else if(nEx === 5) {
        let y;
        if(x < 1) {
            y = x + 2
        } else {
            y = -4*x + 1 
        }
        return y
    } else if(nEx === 6) {
        return 1/Math.pow(x + 6,2)
    } else if(nEx === 7) {
        let y;
        if(x < 7) {
            y = x - 7
        } else {
            y = 1/Math.pow(x-7, 4)
        }
        return y
    } else if(nEx === 8) {
        return Math.sin(x)/x
    } else if(nEx === 9) {
        return (4 - x)/(2 - x)
    } else if(nEx === 10) {
        let y;
        if(x < 10) {
            y = -3
        } else {
            y = 3
        }
    return y
    } else if(nEx === 11) {
        return Math.log(Math.abs(x))
    } else if(nEx === 12) {
        return Math.log(Math.abs(x))/Math.pow(2, 1/x)
    } else if(nEx === 13) {
        let y;
        if(x < 2) {
            y = 3*x +4
        } else {
            y = x + 8
        }
        return y
    } else if(nEx === 14) {
        return x*Math.sin(x)
    } else if(nEx === 15) {
        return Math.sin(1/x)
    }
    
}


function compilaTabella(nEx) {
    for(let i = 1; i <= 6; i++) {
        let lx = Math.floor(x0[nEx]*10000000 -  Math.pow(10,-i)*10000000)/10000000;
        let ly = Math.floor((f(nEx, lx))*100000000)/100000000;
        let rx = Math.floor(x0[nEx]*100000000 +  Math.pow(10,-i)*100000000)/100000000;
        let ry = Math.floor((f(nEx, rx))*100000000)/100000000;

        console.log(`
        (${lx}, ${ly})
        (${rx}, ${ry})`);

        document.getElementById(`lx${i}`).innerHTML = `\\(${lx}\\)`;
        document.getElementById(`ly${i}`).innerHTML = `\\(${ly}\\)`;
        document.getElementById(`rx${i}`).innerHTML = `\\(${rx}\\)`;
        document.getElementById(`ry${i}`).innerHTML = `\\(${ry}\\)`;


        lxId = document.getElementById(`lx${i}`)
        lyId = document.getElementById(`ly${i}`)
        rxId = document.getElementById(`rx${i}`)
        ryId = document.getElementById(`ry${i}`)

        MathJax.typesetClear([lxId, lyId, rxId, ryId]);
        MathJax.typesetPromise([lxId, lyId, rxId, ryId]).then(() => {});
    }
    
}

function vai() {
    let i = document.getElementById("ex").selectedIndex;
    compilaTabella(i+1);

    for(let j = 0; j < document.getElementsByClassName("x0").length; j++) {
        document.getElementsByClassName("x0")[j].innerHTML = `\\( \\color{#0079FF}{${x0[i+1]}} \\)`
    
        MathJax.typesetClear([document.getElementsByClassName("x0")[j]]);
        MathJax.typesetPromise([document.getElementsByClassName("x0")[j]]).then(() => {});
    }
}



compilaTabella(1);