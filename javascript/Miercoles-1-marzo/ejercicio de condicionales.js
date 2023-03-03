let edad= Number(prompt("ingrese su edad"));

if (edad>=0 && edad>=18){
    console.log("es mayor de edad");
        
} else if(edad>=0 && edad<18){
    console.log("es menor de edad");
} else {
    console.log("ingrese una edad valida");
}
//super corto omg 

const edad = prompt("ingrese una edad")
const esMayorDeEdad = edad >= 18;

console.log(`La persona tiene ${edad} años y ${esMayorDeEdad ? "es mayor de edad" : "es menor de edad"}.`);


//numero par e impar
let num = Number(prompt("ingrese un numero"));;

if (num % 2 === 0) {
  console.log("es un número par.");
} else {
  console.log("es un número impar.");
}


/*Una compañía de seguros está abriendo un dpto de finanzas y estableció un programa para
captar clientes, que consiste en lo siguiente: Si el monto por el que se efectúa la fianza es menor
que $50 000 la cuota a pagar será por el 3% del monto, y si el monto es mayor que $50 000 la
cuota a pagar será el 2% del monto, si el monto es igual a $50.000 no se debe pagar cuota. La
afianzadora desea determinar si se debe pagar cuota y cuál será la cuota que debe pagar un
cliente.*/

let monto = Number(prompt("ingrese el monto por el que se efectúa la fianza"));
let cuota 

if (monto < 50000){
    cuota = monto * 0.03;
    console.log(`se debe pagar un 3% del monto y la cuota a pagar será ${cuota+monto}`); 

}else if (monto > 50000){
    cuota = monto * 0.02;
    console.log(`se debe pagar un 2% del monto y la cuota a pagar será ${cuota+monto}`); 
} else if (monto === 50000) {
    cuota = monto;
    console.log(`la cuota a pagar será ${cuota}`); 
} else (isNaN(monto)|| monto < 0) {
    console.log("ingrese un monto valido");
}

// el ejercicio de camila

let diametro = Number(prompt("ingrese el diametro"));

if (diametro <= 1.4 && diametro >0.8) {
    console.log(`la rueda es para un vehiculo mediano`); 

}else if (diametro > 1.4){
    console.log(`la rueda es para un vehiculo grande`); 
} else if (isNaN(diametro)) {
    console.log(`ingrese un diametro valido`); 
} else {
    console.log("La rueda es para un vehiculo pequeño");
 }