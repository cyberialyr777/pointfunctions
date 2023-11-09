const boton = document.getElementById("boton");
const boton2 = document.getElementById("boton2");

let valorDeFuncion = 0, formula_PFA = 0;function valorDeFuncionTotal() {
  const tipo = document.getElementById("tipo").value;
  const ex = document.getElementById("ex").value;
  let sx = document.getElementById("sx").value;
  let consultas = document.getElementById("consultas").value;
  let ax = document.getElementById("ax").value;
  let ai = document.getElementById("ai").value;
  let factor = 0;
  let lista = [ex, sx, consultas, ax, ai];
  console.log(lista);

  if (tipo === "baja") {
    factor = [3, 4, 3, 7, 5];
  } else if (tipo === "media") {
    factor = [4, 5, 4, 10, 7];
  } else if (tipo === "alta") {
    factor = [6, 7, 6, 15, 10];
  }

  for (let i = 0; i < lista.length; i++) {
    valorDeFuncion += lista[i] * factor[i];
  }
  console.log(valorDeFuncion);
  document.getElementById("resultado").textContent = `Puntos de Función: ${valorDeFuncion}`;}function preguntas() {
  let formula_FI = 0;
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
  let num = [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14],
    enteros = [];

  for (var i = 0; i < num.length; i++) {
    var cadena = num[i];
    var entero = parseInt(cadena, 10);
    enteros.push(entero);
  }

  for (x = 0; x < enteros.length; x++) {
    formula_FI += enteros[x];
  }
  console.log(formula_FI);
  console.log(valorDeFuncion);
  formula_PFA = valorDeFuncion * (0.65 + 0.01 * formula_FI);
  console.log(formula_PFA);
  document.getElementById("resultado_preguntas").textContent = `Posible interpretación de complejidad: ${formula_PFA}`;}function horas_de_trabajo() {
  let horas_por_jornada = document.getElementById("horas_por_jornada").value;
  let personas_en_equipo = document.getElementById("personas_en_equipo").value;
  let horas_desarrollo_proyecto = document.getElementById("horas_desarrollo_proyecto").value;
  let horas_persona = 0, duracion_proyecto = 0, duracion_meses = 0;

  horas_persona = formula_PFA / (1 / horas_por_jornada);
  duracion_proyecto = horas_persona / personas_en_equipo;
  duracion_meses = duracion_proyecto / horas_desarrollo_proyecto;

  console.log(horas_persona);
  console.log(duracion_proyecto);
  console.log(duracion_meses);

  document.getElementById("horas_por_persona").textContent = `Horas por persona: ${horas_persona}`;
  document.getElementById("p_e").textContent = `Horas: ${duracion_proyecto}`;
  document.getElementById("h_d_p").textContent = `Horas por persona: ${duracion_meses}`;
}


// function guardar_valor_deFuncion(puntos_de_funcion) {
//   valorDeFuncion = puntos_de_funcion;
// }



// let resultado_PFA = 0;