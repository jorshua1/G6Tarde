let nombre = prompt("ingrese su nombre");
let edad = parseInt(prompt("ingrese la edad"));
let tiempos = parseInt(prompt("ingrese el tiempo en segundos"));

let numpulsaciones=(220-edad)/tiempos;

alert("Apreciado usuario: "+ nombre + " la cantidad de sus pulsaciones fueron " + numpulsaciones) + " por los " + tiempos +" segundos";