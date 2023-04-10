/* 1. Desarrolle un algoritmo que realice la sumatoria de 10 números almacenados en un vector. */

let vSuma = 0;


let vNumber = parseInt(prompt("Dijite los siguientes numeros a sumar"));
for (let vI = 0; vI < 10; vI++) {
    vNumber = parseInt(prompt("Dijite el numero siguiente"));
    vSuma = vSuma + vNumber 
    console.log(vSuma);
}
