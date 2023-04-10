debugger
let numeroRandom = [];
let posicion = 0;

let cantidadDeNumeros = Number(prompt("Ingrese la cantidad de numeros aleatorios que desea"));
while (isNaN(cantidadDeNumeros)) {
    cantidadDeNumeros = Number(prompt("Ingrese una cantidad validad"));
}

for (let i = 0; i < cantidadDeNumeros; i++) {
    numeroRandom[i] = Math.floor(Math.random() * 99 - 0);
}
console.log("El numero aleatorios es " + numeroRandom);
for (let i = 0; i < cantidadDeNumeros; i++) {
    for (j = 0; j < cantidadDeNumeros; j++) {
        if (numeroRandom[j] > numeroRandom[j+1]) {
            posicion = numeroRandom[j];
            numeroRandom[j] = numeroRandom[j+1];
            numeroRandom[j+1] = posicion;
        }
    }
}
console.log(numeroRandom);