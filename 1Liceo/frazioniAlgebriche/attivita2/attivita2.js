ss1 = w3.slideshow(".c1", 0);

/* var c = [];
let deg=0; 




function update() {
    console.log("\nfunction update");
    console.log("\ndeg: "+deg);
    console.log("\nc: "+c);
    console.log("\ndeg===0: "+deg===0);

    if(deg==0) {
        console.log("a");
        if(c[0]>0) {
            document.getElementById("displayerFormula").innerHTML = 
            "\\[ \\frac{x+2}{x+1} = \\frac{x+2}{x+1} \\cdot \\frac{"+c[0]+"}{"+c[0]+"} = \\frac{"+c[0]+"x +"+2*c[0]+"}{"+c[0]+"x+"+c[0]+"}\\]";
        } else if(c[0]<0) {
            document.getElementById("displayerFormula").innerHTML = 
            "\\[ \\frac{x+2}{x+1} = \\frac{x+2}{x+1} \\cdot \\frac{"+c[0]+"}{"+c[0]+"} = \\frac{"+c[0]+"x "+2*c[0]+"}{4x+4}\\]";
        }
        
    }
    
    if(deg==1) {
        console.log("b");
        document.getElementById("displayerFormula").innerHTML = 
        "\\[ \\frac{x+2}{x+1} = \\frac{x+2}{x+1} \\cdot \\frac{"+c[0]+"+"+c[1]+"x}{"+c[0]+"+"+c[1]+"x} = \\frac{4x + 8}{4x+4} \\]";
        console.log("aaaa");
    } else if (deg===2) {

    } else if (deg===3) {

    } else if (deg===4) {

    }

    MathJax.typesetClear([document.getElementById("displayerFormula")]);
    MathJax.typesetPromise([document.getElementById("displayerFormula")]).then(() => {});

}

function cambiaGrado () {
    console.log("\nfunction cambioGrado");
    deg = document.getElementById("grado").value;
    
    

    for(let i=1; i<5; i++) {
        let nItem = i+2;
        document.getElementById("item"+nItem).style.display = "none";
    }

    for(let i=0; i<=deg; i++) {
        let nItem = i+2;
        document.getElementById("item"+nItem).style.display = "flex";
    }

    c = [];
    for(let i=0; i<=deg; i++) {
        c.push(document.getElementById("coeff"+i).value);
    }

    console.log("\ndeg: "+deg);
    console.log("\nc: "+c);

    update();

}


function cambiaTermineNoto() {
    c[0] = document.getElementById("coeff0").value;
    console.log("c[0]: "+c[0])
    update();
} */