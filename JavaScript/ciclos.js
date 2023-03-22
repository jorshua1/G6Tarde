/* CICLO WHILE
LET NUMERO =1
WHILE (NUMERO <=10){
    CONSOLE.LOG (NUMERO)
    
    NUMERO ++
}
CONSOLE.LOG ("ERROR")*/

/*let numero = 1 
while (numero<=10){
    console.log (numero)

    numero ++
}
console.log ("error")

let numero = 1 
while (true){
    alert (numero)

    break;
}
console.log ("error")*/
var numero = 0;
let num = 1;
let resultado;
let tabla;
let numero = Numero(prompt("ingrese el numero al cual deseas conusltar la tabla"));

if (!isNaN(numero) > 0) {
    while (num <= 10) {
        resultado = num * numero;
        tabla += ("\n" + num + " x " + numero + " = " + resultado);
        num++
    }
    alert(tabla);
} else {
    alert("ingrese un valor valido");
}


let numerador = parseInt(prompt("ingrese el numero de tabla que deseea halllar"));
while (isNaN(numerador)) {
    numerador = parseInt(prompt("ingrese el numero de tabla que deseea halllar"))
} for (j = 0; j <= 10; j++) {
    tabla = numerador * j
    console.log(numerador + " x " + j + " = " + tabla);
}

/* Calcula la suma de los cuadrados de los 100 primeros números naturales*/

let suma = 0;
for (let i = 1; i <= 100; i++) {
  suma += i * i;
}
console.log(suma);

/* calcular la suma de los números enteros del 1 al 10*/

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);



let numero = 10
if (numero <=10){
    let numero = "15"
}console.log (numero)

let numero = 10
if (numero <=10){
    var numero = "15"
}console.log (numero)

