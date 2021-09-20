let correctAnswer = true;
let sign = ["+", "-"];
let sa, sb, sc, sd, a, b, c, d;
let coin = [0,0,1];

function checkAnswer(answer) {
    document.getElementById("right").style.display = "none";
    document.getElementById("wrong").style.display = "none";
    if(answer === correctAnswer) {
        document.getElementById("right").style.display = "block";
    } else {
        document.getElementById("wrong").style.display = "block";
    }
    document.getElementById("button-container").style.display = "none";
    document.getElementById("altraDomanda").style.display = "block";
}

function altraDomanda() {
    
    sa = sign[Math.floor(Math.random()*2)];
    sc = sign[Math.floor(Math.random()*2)];
    
    a = Math.floor(Math.random()*11 + 1);
    if(a === 1) a = "";
    c = Math.floor(Math.random()*11 + 1);
        if(c === 1) c = "";
    if(coin[Math.floor(Math.random()*3)] === 0) {
        sb = sa;
        b = a;
        sd = sc;
        d = c; 
        correctAnswer = true;
    } else {
        sb = sign[Math.floor(Math.random()*2)];
        sd = sign[Math.floor(Math.random()*2)];
        b = Math.floor(Math.random()*11 + 1);
        if(b === 1) b = "";
        d = Math.floor(Math.random()*11 + 1);
        if(d === 1) d = "";
        correctAnswer = false;
    }
    

    document.getElementById("domanda").innerHTML = 
    `\\[
        \\color{black}{${sa}${a}}\\color{red}{A} \\color{black}{\\color{black}{${sc}${c}}} \\color{blue}{C} \\color{black}{\\,\\,=\\,\\,} \\color{black}{${sb}${b}}\\color{red}{B} \\color{black}{${sd}${d}} \\color{blue}{D} \\,\\,\\color{black}{\\text{?}}
    \\]`;
    MathJax.typesetClear([document.getElementById("domanda")]);
    MathJax.typesetPromise([document.getElementById("domanda")]).then(() => {});
    
    document.getElementById("button-container").style.display = "flex";
    document.getElementById("right").style.display = "none";
    document.getElementById("wrong").style.display = "none";
    document.getElementById("altraDomanda").style.display = "none";
}

let sc1, c1, sc2, c2, sxA, xA, syA, yA, sxC, xC, syC, yC, sB, B, sD, D, prevB, prevD;




function generaEsempio() {

    //segni
    sc1 = sign[Math.floor(Math.random()*2)];
    if(sc1 === "+") sc1 = "";
    sc2 = sign[Math.floor(Math.random()*2)];
    sxA = sign[Math.floor(Math.random()*2)];
    if(sxA === "+") sxA = "";
    syA = sign[Math.floor(Math.random()*2)];
    sxC = sign[Math.floor(Math.random()*2)];
    syC = sign[Math.floor(Math.random()*2)];
    sB = sign[Math.floor(Math.random()*2)];
    sD = sign[Math.floor(Math.random()*2)];

    //moltiplicatori equazioni
    c1 = Math.floor(Math.random()*6 + 1);
    //if(c1 === 1) c1 = "";
    c2 = Math.floor(Math.random()*6 + 1);
    //if(c2 === 1) c2 = "";

    //coefficienti equazioni
    xA =  Math.floor(Math.random()*9 + 1);
    //if(xA === 1) xA = "";
    yA =  Math.floor(Math.random()*9 + 1);
    //if(yA === 1) yA = "";
    xC =  Math.floor(Math.random()*9 + 1);
    //if(xC === 1) xA = "";
    yC =  Math.floor(Math.random()*9 + 1);
    //if(yC === 1) yA = "";

    B =  Math.floor(Math.random()*9 + 1);
    prevB = B;
    if(sB === "-") {
        B = `${sB}${B}`;
    } else {
        sB = "";
    }
    D =  Math.floor(Math.random()*9 + 1);
    prevD = D;
    if(sD === "-") {
        D = `${sD}${D}`;
    } else {
        sD = "";
    }

    /* B =  Math.floor(Math.random()*9 + 1);
    prevB = B;
    if(sB === "-") {
        B = `\\left(${sB}${B}\\right)`;
    } else {
        sB = "";
    }
    D =  Math.floor(Math.random()*9 + 1);
    prevD = D;
    if(sD === "-") {
        D = `\\left(${sD}${D}\\right)`;
    } else {
        sD = "";
    } */

    document.getElementById("eq1").innerHTML = 
    `\\[
        \\begin{equation*}
                    \\begin{cases}
                        \\overset{\\color{red}{A}}{\\color{gray}{\\overbrace{\\color{red}{${sxA}${xA}x${syA}${yA}y}}}}=\\overset{\\color{red}{B}}{\\color{gray}{\\overbrace{\\color{red}{${sB}${prevB}}}}} \\\\
                        \\\\
                        \\underset{\\color{blue}{C}}{\\color{gray}{\\underbrace{\\color{blue}{${sxC}${xC}x${syC}${yC}y}}}}=\\underset{\\color{blue}{D}}{\\color{gray}{\\underbrace{\\color{blue}{${sD}${prevD}}}}}
                    \\end{cases}
                \\end{equation*}
    \\]`;

    

    document.getElementById("eq2").innerHTML = 
    `\\[
        ${sc1}${c1}\\color{red}{A} \\color{black}{\\,\\,${sc2}\\,\\,${c2}} \\color{blue}{C} \\color{black}{\\,\\,=\\,\\,${sc1}${c1}} \\color{red}{B} \\color{black}{\\,\\,${sc2}\\,\\,${c2}} \\color{blue}{D}
    \\]`;


    document.getElementById("eq3").innerHTML = 
    `\\[
        ${sc1}${c1}\\color{red}{\\left(${sxA}${xA}x${syA}${yA}y\\right)} \\color{black}{\\,\\,${sc2}\\,\\,${c2}} \\color{blue}{\\left(${sxC}${xC}x${syC}${yC}y\\right)} \\color{black}{\\,\\,=\\,\\,${sc1}${c1}\\,} \\color{red}{\\left(${B}\\right)} \\color{black}{\\,\\,${sc2}\\,\\,${c2}\\,} \\color{blue}{\\left(${D}\\right)}
    \\]`;

    let e = [];
    console.log(`
        sc1: ${sc1},
    c1: ${c1},
    sc2: ${sc2},
    c2: ${c2},
    sxA: ${sxA},
    xA: ${xA},
    syA: ${syA},
    yA: ${yA},
    sxC: ${sxA},
    xC: ${xA},
    syC: ${syC},
    yC: ${xC},
    sB: ${sB},
    B: ${B},
    sD: ${sD},
    D: ${D},
    e: ${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}, ${e[4]}, ${e[5]}, ${e[6]}, ${e[7]}, ${e[8]}, ${e[9]}, ${e[10]}, ${e[11]}`)

    if(sc1 === "" || sc1 === "+") {
        e[0] = sxA;
    } else {
        if(sxA === "+" || sxA === "")  {
            e[0] = "-";
        } else {
            e[0] = "+";
        }
    }
    e[1] = Math.floor(c1*xA);
    
    if(sc1 === "" || sc1 === "+") {
        e[2] = syA;
    } else {
        if(syA === "+")  {
            e[2] = "-";
        } else {
            e[2] = "+";
        }
    }

    e[3] = Math.floor(c1*yA);

    if(sc2 === "" || sc2 === "+") {
        e[4] = sxC;
    } else {
        if(sxC === "+")  {
            e[4] = "-";
        } else {
            e[4] = "+";
        }
    }

    e[5] = Math.floor(c2*xC);

    if(sc2 === "" || sc2 === "+") {
        e[6] = syC;
    } else {
        if(syC === "+")  {
            e[6] = "-";
        } else {
            e[6] = "+";
        }
    }

    e[7] = Math.floor(c2*yC);


    c1 = sc1+c1;
    c2 = sc2+c2;

    console.log(`
    c1_: ${c1};
    c2_: ${c2};
    `)

    e[8] = Math.floor(c1*B);

    /* if(sc1 === "" || sc1 === "+") {
        e[8] = sB;
    } else {
        if(sB === "+")  {
            e[8] = "-";
        } else {
            e[8] = "+";
        }
    } */

    //e[9] = Math.floor(c1*B);
    
    e[10] = Math.floor(c2*D);
    if(e[10]>0) {
        e[9] = "+";
    } else {
        e[9] = "";
    }

    /* if(sc2 === "" || sc2 === "+") {
        e[10] = sD;
    } else {
        if(sB === "+")  {
            e[10] = "-";
        } else {
            e[10] = "+";
        }
    } */

    //e[11] = Math.floor(c2*D); 

    document.getElementById("eq4").innerHTML = 
    `\\[
        ${e[0]}${e[1]}x${e[2]}${e[3]}y ${e[4]}${e[5]}x ${e[6]}${e[7]}y = ${e[8]}${e[9]} ${e[10]};
    \\]`;

    e[1] = e[0] + e[1];
    e[3] = e[2] + e[3];
    e[5] = e[4] + e[5];
    e[7] = e[6] + e[7];

    console.log(`
    e[1]: ${e[1]},
    e[3]: ${e[3]},
    e[5]: ${e[5]},
    e[7]: ${e[7]},
    `);

    e[1] = parseInt(e[1]) + parseInt(e[5]);
    e[3] = parseInt(e[3]) + parseInt(e[7]);
    if(e[3] >= 0) {
        e[2] = "+";
    } else {
        e[2] = "";
    }
    e[10] = parseInt(e[8]) + parseInt(e[10]);

    console.log(`
    e[1]: ${e[1]},
    e[3]: ${e[3]},
    e[2]: ${e[2]},
    e[10]: ${e[10]},
    `);

    document.getElementById("eq5").innerHTML = 
    `\\[
        ${e[1]}x${e[2]}${e[3]}y = ${e[10]};  
    \\]`


    MathJax.typesetClear([document.getElementById("eq1"), document.getElementById("eq2"), document.getElementById("eq3"), document.getElementById("eq4"), document.getElementById("eq5")]);
    MathJax.typesetPromise([document.getElementById("eq1"), document.getElementById("eq2"), document.getElementById("eq3"), document.getElementById("eq4"), document.getElementById("eq5")]).then(() => {});

}