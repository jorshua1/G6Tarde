function comprobarEstacion(mes) {
    let estacion;
  
    if (mes >= 1 && mes <= 2 || mes == 12) {
      estacion = "invierno";
    } else if (mes >= 3 && mes <= 5) {
      estacion = "primavera";
    } else if (mes >= 6 && mes <= 8) {
      estacion = "verano";
    } else if (mes >= 9 && mes <= 11) {
      estacion = "otoño";
    } else {
      estacion = "mes inválido";
    }
  
    return estacion;
  }
  
  // Pedir al usuario que ingrese el número del mes
  let numeroMes = parseInt(prompt("Ingresa el número del mes"));
  
  // Comprobar la estación
  let estacion = comprobarEstacion(numeroMes);
  
  // Mostrar el resultado
  alert(`La estación del mes ${numeroMes} es: ${estacion}`);