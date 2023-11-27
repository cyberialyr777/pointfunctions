const boton = document.getElementById("boton");
const boton2 = document.getElementById("boton2");

//aver si sale lo de arriba

let valorDeFuncion = 0, formula_PFA = 0;function valorDeFuncionTotal(numeroModulo) {
  let tipo = document.getElementById("tipo").value;
  let ex = document.getElementById("ex").value;
  let sx = document.getElementById("sx").value;
  let consultas = document.getElementById("consultas").value;
  let ax = document.getElementById("ax").value;
  let ai = document.getElementById("ai").value;
  let factor = 0, valorDeFuncion2 = 0;
  let lista = [ex, sx, consultas, ax, ai];
  console.log(lista);

  if (ex.trim() === '' || sx.trim() === '' || consultas.trim() === '' || ax.trim() === '' || ai.trim() === '') {
    // Mostrar un mensaje de error si algún campo está vacío
    document.getElementById('validar').innerText = 'Por favor, complete todos los campos.';
    // Detener la ejecución de la función
    return;
  }

  document.getElementById('validar').innerText = '';

  if (tipo === "baja") {
    factor = [3, 4, 3, 7, 5];
  } else if (tipo === "media") {
    factor = [4, 5, 4, 10, 7];
  } else if (tipo === "alta") {
    factor = [6, 7, 6, 15, 10];
  }

  for (let i = 0; i < lista.length; i++) {
    valorDeFuncion2 += lista[i] * factor[i];
  }
  
  valorDeFuncion = valorDeFuncion2;
  valorDeFuncion2 = 0;

  console.log(valorDeFuncion);
  console.log(valorDeFuncion2);


  const moduloActual = document.getElementById(`modulo${numeroModulo - 1}`);
  const siguienteModulo = document.getElementById(`modulo${numeroModulo}`);
  
  moduloActual.classList.remove('mostrar');
  moduloActual.classList.add('oculto');
  
  siguienteModulo.classList.remove('oculto');
  siguienteModulo.classList.add('mostrar');


  document.getElementById("resultado").textContent = `Puntos de Función: ${valorDeFuncion}`;}function preguntas(numeroModulo) {
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
  formula_PFA = Math.round(valorDeFuncion * (0.65 + 0.01 * formula_FI));
  console.log(formula_PFA);
  if(formula_PFA <= 100){
    document.getElementById("interpretacion").textContent = 'interpretación de complejidad: se considera de complejidad sencilla';
  }else if(formula_PFA >= 101 && formula_PFA <= 300){
    document.getElementById("interpretacion").textContent = 'interpretación de complejidad: se considera de complejidad media';
  }else if(formula_PFA >= 301 && formula_PFA <= 500){
    document.getElementById("interpretacion").textContent = 'interpretación de complejidad: se considera de complejidad dificil';
  }else{
    document.getElementById("interpretacion").textContent = 'fuera del rango para la interpretacion de complejidad'
  }

  const moduloActual = document.getElementById(`modulo${numeroModulo - 1}`);
  const siguienteModulo = document.getElementById(`modulo${numeroModulo}`);
  
  moduloActual.classList.remove('mostrar');
  moduloActual.classList.add('oculto');
  
  siguienteModulo.classList.remove('oculto');
  siguienteModulo.classList.add('mostrar');


  document.getElementById("resultado_preguntas").textContent = `Posible interpretación de complejidad: ${formula_PFA}`;}function horas_de_trabajo(numeroModulo) {
  let horas_por_jornada = document.getElementById("horas_por_jornada").value;
  let personas_en_equipo = document.getElementById("personas_en_equipo").value;
  let horas_desarrollo_proyecto = document.getElementById("horas_desarrollo_proyecto").value;
  let horas_persona = 0, duracion_proyecto = 0, duracion_meses = 0;

<<<<<<< Updated upstream
  if (horas_por_jornada.trim() === '' || personas_en_equipo.trim() === '' || horas_desarrollo_proyecto.trim() === '') {
    // Mostrar un mensaje de error si algún campo está vacío
    document.getElementById('validar2').innerText = 'Por favor, complete todos los campos.';
    // Detener la ejecución de la función
    return;
  }

  document.getElementById('validar2').innerText = '';

  console.log(formula_PFA)

  horas_persona = Math.round(formula_PFA / (1 / horas_por_jornada));
  duracion_proyecto = Number((horas_persona / personas_en_equipo).toFixed(2));
  duracion_meses = (duracion_proyecto / horas_desarrollo_proyecto);
=======
  horas_persona = formula_PFA / (1 / horas_por_jornada);

  duracion_proyecto = horas_persona / personas_en_equipo;
  
  duracion_meses = duracion_proyecto / horas_desarrollo_proyecto;
>>>>>>> Stashed changes

  console.log(horas_persona);
  console.log(duracion_proyecto);
  console.log(duracion_meses);

  document.getElementById("horas_por_persona").textContent = `Horas por persona: ${horas_persona}`;
  document.getElementById("horas_proyecto").textContent = `Horas del proyecto: ${duracion_proyecto}`;
  document.getElementById("duracion_proyecto").textContent = `Duracion en dias: ${duracion_meses}`;

  const moduloActual = document.getElementById(`modulo${numeroModulo - 1}`);
  const siguienteModulo = document.getElementById(`modulo${numeroModulo}`);
  
  moduloActual.classList.remove('mostrar');
  moduloActual.classList.add('oculto');
  
  siguienteModulo.classList.remove('oculto');
  siguienteModulo.classList.add('mostrar');

}


