const boton = document.getElementById("boton");
const boton2 = document.getElementById("boton2");


function valorDeFuncionTotal(){
    const tipo = document.getElementById("tipo").value;
    const ex = document.getElementById("ex").value;
    let sx = document.getElementById("sx").value;
    let consultas = document.getElementById("consultas").value;
    let ax = document.getElementById("ax").value;
    let ai = document.getElementById("ai").value;
    let factor = 0, valorDeFuncion = 0;
    let lista = [ex,sx,consultas,ax,ai];
    console.log(lista)

    if (tipo === "baja") {
    factor = [3,4,3,7,5];
    } else if (tipo === "media") {
        factor = [4,5,4,10,7];
    } else if (tipo === "alta") {
        factor = [6,7,6,15,10];
    }

    for(let i = 0;  i < lista.length; i++){
        valorDeFuncion += (lista[i] * factor[i]);
    }


    document.getElementById("resultado").textContent = `Puntos de Función: ${valorDeFuncion}`;
}

function preguntas(valorDeFuncion){
    let PFA = 0, FI = 0;
    const P1 = document.getElementById("P1").value;
    const P2 = document.getElementById("P2").value;
    const P3 = document.getElementById("P3").value;
    const P4 = document.getElementById("P4").value;
    const P5 = document.getElementById("P5").value;
    const P6 = document.getElementById("P6").value;
    const P7 = document.getElementById("P7").value;
    const P8 = document.getElementById("P8").value;
    const P9 = document.getElementById("P9").value;
    const P10 = document.getElementById("P10").value;
    const P11 = document.getElementById("P11").value;
    const P12 = document.getElementById("P12").value;
    const P13 = document.getElementById("P13").value;
    const P14 = document.getElementById("P14").value;
    let num = [P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14], enteros = [];

    for (var i = 0; i < num.length; i++) {
        var cadena = num[i];
        var entero = parseInt(cadena, 10);
        enteros.push(entero);
    }

    for(x=0; x < enteros.length; x++){
        FI += enteros[x];
    }
    console.log(FI);
    PFA = valorDeFuncion*(0.65+0.01*FI);
    console.log(PFA);

}

