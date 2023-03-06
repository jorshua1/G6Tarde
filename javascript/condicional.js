// ejemplo para explicar else if :)
let edad = (Number(prompt("ingrese la edad")));
if (isNaN(edad)) {
  console.log("error, ¿usted es alienigena o que?");
} else if (edad > 1 && edad >= 18 && edad < 125) {
  console.log("es mayor de edad");
} else if (edad > 1 && edad < 18) {
  console.log("es menor de edad");
} else {
  console.log("ingrese una edad valida");
}
//
let numero = Number(prompt("ingrese el numero"));
let par=numero/2;
if (isNaN(numero)) {
  console.log("error");
} else if (Number.isInteger(par) && par > 0) {
  console.log("el numero es par");
} else if ((numero =0)) {
  console.log("el numero es 0");
} else {
  console.log("el numero es impar");
}
 
