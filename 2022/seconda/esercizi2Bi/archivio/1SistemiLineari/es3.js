function mostraSoluzione(n) {
    document.getElementById("soluzione-button"+n).style.display = "none";
    document.getElementById("soluzione"+n).style.display = "block";
    /* document.getElementById("soluzione"+n).style.textAlign = "center"; */
}

let m1, m2, sign, c1X, c1Y, c1Y_, t1, c2X, c2Y, c2Y_, t2, cX, cY, cY_, t;

function calcola(n){
    if(n===1) {
        m1 = document.getElementById("coeff1").value;
        m2 = document.getElementById("coeff2").value;
        sign = document.getElementById("sign").value;

        c1X = Math.floor(m1*10);
        c1Y = Math.floor(m1*12);
        if(c1Y > 0) {
            c1Y_ = `+${c1Y}`;
        } else {
            c1Y_ = c1Y;
        }
        t1 = Math.floor(m1*1);

        c2X = Math.floor(m2*4);
        c2Y = Math.floor(-m2*14);
        if(c2Y > 0) {
            c2Y_ = `+${c2Y}`; 
            console.log(`c2Y_: ${c2Y_}`);
        } else {
            c2Y_ = c2Y;
        }
        t2 = Math.floor(m2*(-2));

        
        if(sign === "+") {
            cX = c1X + c2X;
            cY = c1Y + c2Y;
            t = t1 + t2;
        } else {
            cX = c1X - c2X;
            cY = c1Y - c2Y;
            t = t1 - t2;
            sign = "-";
            document.getElementById("sign").value = "-";
        }
        if(cY > 0) {
            cY_ = `+${cY}`; 
            console.log(`cY_: ${cY_}`);
        } else {
            cY_ = cY;
        }



        console.log(`cX: ${cX}, cY: ${cY}, t: ${t}`)
        
        document.getElementsByClassName("svolgimento")[0].style.display = "flex"
        document.getElementsByClassName("calcoliEquazione")[0].innerHTML = 
        `\\( 
            \\Rightarrow
            \\color{blue}{${sign}}
            \\color{black}{}

                \\begin{equation*}
                    \\begin{cases}
                        ${c1X}x ${c1Y_}y = ${t1} \\\\
                        \\\\
                        ${c2X}x ${c2Y_}y = ${t2}
                    \\end{cases}
                \\end{equation*}
        \\)`
        
        document.getElementsByClassName("nuovaEquazione")[0].innerHTML = 
        `\\(
            \\qquad\\quad\\, ${cX}x ${cY_}y = ${t} \\qquad
        \\)
        <br>
        <br>`


        MathJax.typesetClear([document.getElementsByClassName("calcoliEquazione"), document.getElementsByClassName("nuovaEquazione")]);
        MathJax.typesetPromise([document.getElementsByClassName("calcoliEquazione"), document.getElementsByClassName("nuovaEquazione")]).then(() => {});
        
    }
} 

function help(n) {
    if(n === 1) {
        document.getElementsByClassName("help")[0].style.display = "block";
        document.getElementsByClassName("input-container")[0].style.display = "flex";
        document.getElementsByClassName("help-button")[0].style.display = "none";
        document.getElementById("calcola").style.display = "block"
    }

    if(n === 2) {
        document.getElementsByClassName("help")[1].style.display = "block";
        document.getElementsByClassName("help-button")[1].style.display = "none";
    }

    if(n === 3) {
        document.getElementsByClassName("help")[2].style.display = "block";
        document.getElementsByClassName("help-button")[2].style.display = "none";
    }
}