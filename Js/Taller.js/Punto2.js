//-------------------------EJERCICIO #2---------------------------

let vCapital = parseInt(prompt("Ingrese su capital"));
 let vRazonMensual = 1.2;
 let vGanara;
 let vTotalMes;

 vGanara = vCapital * vRazonMensual / 100;
 vTotalMes = vGanara + vCapital;
 console.log(vGanara);
 console.log(typeof(vGanara));

 alert("Se ganara = " + vGanara + "%");
