/* Crea un programa que pida un número al usuario un número de mes (por ejemplo, el 4) y diga cuántos días tiene (por ejemplo, 30) y el nombre del mes. Debes usar un vector. Para simplificarlo vamos a suponer que febrero tiene 28 días. */

let vMes = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12];
let vNumeroMes = parseInt(prompt("Ingrese un numero de mes para ver sus respectivos dias"));

/*while (vNumeroMes !== vMes.length) {
    vNumeroMes = parseInt(prompt("ERROR \n Ingrese un numero de mes para ver sus respectivos dias"));
}*/

vMes = [vNumeroMes];

switch (vNumeroMes) {
    case 1:
        console.log("El mes es Enero tiene 31 días");
    break;

    case 2:
        console.log("El mes es Febrero tiene 28 días");
    break;

    case 3:
        console.log("El mes es Marzo tiene 31 días");
    break;

    case 4:
        console.log("El mes es Abril tiene 30 días");
    break;

    case 5:
        console.log("El mes es Mayo tiene 31 días");
    break;

    case 6: 
        console.log("El mes es Junio tiene 30 días");
    break;

    case 7:
        console.log("El mes es Julio tiene 31 días");
    break;

    case 8:
        console.log("El mes es Agosto tiene 31 días");
    break;

    case 9:
        console.log("El mes es Septiembre tiene 30 días");
    break;

    case 10:
        console.log("El mes es Octubre tiene 31 días");
    break;

    case 11:
        console.log("El mes es Noviembre tiene 30 días");
    break;

    case 12:
        console.log("El mes es Diciembre tiene 31 días");
    break;

    default:
        console.log("Ingrese un numero de mes valido");
        break;
}







































const meses = [
    { nombre: 'Enero', dias: 31 },
    { nombre: 'Febrero', dias: 28 },
    { nombre: 'Marzo', dias: 31 },
    { nombre: 'Abril', dias: 30 },
    { nombre: 'Mayo', dias: 31 },
    { nombre: 'Junio', dias: 30 },
    { nombre: 'Julio', dias: 31 },
    { nombre: 'Agosto', dias: 31 },
    { nombre: 'Septiembre', dias: 30 },
    { nombre: 'Octubre', dias: 31 },
    { nombre: 'Noviembre', dias: 30 },
    { nombre: 'Diciembre', dias: 31 },
  ];
  
  
  const numeroMes = parseInt(prompt('Ingresa el número de mes'));
  
  
  const mes = meses[numeroMes - 1];
  const nombreMes = mes.nombre;
  const cantidadDias = mes.dias;
  
  
  console.log(`El mes de ${nombreMes} tiene ${cantidadDias} días`);
  
  //?========================================================================================================
  // Pedir al usuario que ingrese el número de mes
const numeroMes = parseInt(prompt('Ingresa el número de mes'));

// Definir una variable para almacenar el nombre del mes
let nombreMes;

// Definir una variable para almacenar la cantidad de días del mes
let cantidadDias;

// Utilizar una estructura switch para asignar el nombre del mes y la cantidad de días correspondientes
switch (numeroMes) {
  case 1:
    nombreMes = 'Enero';
    cantidadDias = 31;
    break;
  case 2:
    nombreMes = 'Febrero';
    cantidadDias = 28;
    break;
  case 3:
    nombreMes = 'Marzo';
    cantidadDias = 31;
    break;
  case 4:
    nombreMes = 'Abril';
    cantidadDias = 30;
    break;
  case 5:
    nombreMes = 'Mayo';
    cantidadDias = 31;
    break;
  case 6:
    nombreMes = 'Junio';
    cantidadDias = 30;
    break;
  case 7:
    nombreMes = 'Julio';
    cantidadDias = 31;
    break;
  case 8:
    nombreMes = 'Agosto';
    cantidadDias = 31;
    break;
  case 9:
    nombreMes = 'Septiembre';
    cantidadDias = 30;
    break;
  case 10:
    nombreMes = 'Octubre';
    cantidadDias = 31;
    break;
  case 11:
    nombreMes = 'Noviembre';
    cantidadDias = 30;
    break;
  case 12:
    nombreMes = 'Diciembre';
    cantidadDias = 31;
    break;
  default:
    console.log('El número de mes ingresado no es válido');
}

// Imprimir el nombre y la cantidad de días del mes correspondiente, si se ingresó un número de mes válido
if (nombreMes && cantidadDias) {
  console.log(`El mes de ${nombreMes} tiene ${cantidadDias} días`);
}
