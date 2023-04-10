let numeros = new Array(10);
let sumatoria = 0;

for (let i = 0; i < numeros.length; i++) {
    numeros[i] = Number(prompt("Ingrese los 10 Numeros a sumar"));
    while (isNaN(numeros[i] || numeros[i]<0)) {
        numeros[i] = Number(prompt("Error por favor verifique el dato ingresado"));
    }
    sumatoria +=numeros[i];
};
console.log(numeros);
alert("El resultado es :" + sumatoria);
