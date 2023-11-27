function empezar() {
    const botonEmpezar = document.querySelector('button');
    const modulo1 = document.getElementById('modulo1');
    
    botonEmpezar.style.display = 'none';
    modulo1.classList.remove('oculto');
    modulo1.classList.add('mostrar');
  }
  
  function siguienteModulo(numeroModulo) {
    const moduloActual = document.getElementById(`modulo${numeroModulo - 1}`);
    const siguienteModulo = document.getElementById(`modulo${numeroModulo}`);
    
    moduloActual.classList.remove('mostrar');
    moduloActual.classList.add('oculto');
    
    siguienteModulo.classList.remove('oculto');
    siguienteModulo.classList.add('mostrar');
  }
  
  function regresarModulo(numeroModulo) {
    if (numeroModulo === 2) {
      const moduloActual = document.getElementById('modulo3');
      const moduloAnterior = document.getElementById('modulo2');
      
      moduloActual.classList.remove('mostrar');
      moduloActual.classList.add('oculto');
      
      moduloAnterior.classList.remove('oculto');
      moduloAnterior.classList.add('mostrar');

    } else if (numeroModulo === 1) {
      const moduloActual = document.getElementById('modulo2');
      const moduloAnterior = document.getElementById('modulo1');
      
      moduloActual.classList.remove('mostrar');
      moduloActual.classList.add('oculto');
      
      moduloAnterior.classList.remove('oculto');
      moduloAnterior.classList.add('mostrar');
    }
  }
