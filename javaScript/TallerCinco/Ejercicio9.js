/*Queremos guardar la temperatura mínima y máxima de 5 días. 
realiza un programa que de la siguiente información:

La temperatura media de cada día
Los días con menos temperatura
Se lee una temperatura por teclado y se muestran los días 
cuya temperatura máxima coincide con ella. si no existe ningún 
día se muestra un mensaje de información. */


var temperaturaMinima = [];
var temperaturaMaxima = [];
var temperaturaMedia = [];
var diasConMenosTemperatura = [];
var temperaturaBuscada;

for (var i = 0; i < 5; i++) {
  temperaturaMinima[i] = parseFloat(prompt(`Ingrese la temperatura minima del dia ${i+1}`));

  while(isNaN(temperaturaMinima)){
    temperaturaMinima[i] = parseFloat(prompt(`POR FAVOR Ingrese la temperatura minima del dia  ${i+1} (debe ser un dato numerico)`));
  }

  temperaturaMaxima[i] = parseFloat(prompt("Introduce la temperatura máxima del día " + (i+1) + ": "));
  
  while(isNaN(temperaturaMaxima) || temperaturaMaxima < temperaturaMinima){
    temperaturaMaxima[i] = parseFloat(prompt(`La  temperatura Maxima tiene que ser mayo a la minima y de caracter numerico `));
  }
  
  temperaturaMedia[i] = (temperaturaMinima[i] + temperaturaMaxima[i]) / 2;
}

let temperaturaMinimaActual = temperaturaMaxima[0];

for (var i = 1; i < 5; i++) {

  if (temperaturaMaxima[i] < temperaturaMinimaActual) {

    temperaturaMinimaActual = temperaturaMaxima[i];
    diasConMenosTemperatura = [i];
  } else if (temperaturaMaxima[i] === temperaturaMinimaActual) {

    diasConMenosTemperatura.push(i);
  }
}

for (var i = 0; i < 5; i++) {
    
  console.log(`La temperatura media de dia ${i+1} es ${temperaturaMedia[i]}`);
}
console.log("Los días con menos temperatura son: " + (diasConMenosTemperatura.map(dia => dia+1)).join(", "));

temperaturaBuscada = parseFloat(prompt("Introduce una temperatura máxima para buscar los días correspondientes: "));

let diasConTemperaturaBuscada = [];

for (var i = 0; i < 5; i++) {

  if (temperaturaMaxima[i] === temperaturaBuscada) {
    diasConTemperaturaBuscada.push(i+1);
  }
}

if (diasConTemperaturaBuscada.length > 0) {
  console.log("Los días con temperatura máxima de ");
} else {
  console.log(`"No hay días con temperatura máxima de  ${temperaturaBuscada}`);
}
