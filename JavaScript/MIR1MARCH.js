//ejercicio 1
var numero1 = parseInt(prompt ("Ingrese un numero"));
var numero2 = parseInt(prompt ("Ingrese segundo numero"));
var sum= numero1+numero2;
console.log(sum);

//ejercicio 2
var dis = parseInt(prompt ("Ingrese distancia entre dos vehiculos (km)"));
var vel1 = parseInt(prompt ("Ingrese velocidad carro 1 (km/h)"));
var vel2 = parseInt(prompt ("Ingrese velocidad carro 2 (km/h)"));
var tiempo= dis/(vel1-vel2);
var tiempof= tiempo*60;
console.log(tiempof);