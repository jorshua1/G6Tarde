//el mio pq soy un flojo
let numeroInicial = prompt("Ingrese un numero desde donde desea iniciar el conteo");
let numeroFinal = prompt("Ingrese un numero desde donde desea finalizar el conteo");
for (let i = numeroInicial; i <= numeroFinal; i++) {
    console.log(i);
}

// el de any
let sumaCuadrados = 0;

for (let i = 1; i <= 100; i++) {
    sumaCuadrados += i * i;
}

alert("La suma de los cuadrados de los primeros 100 números naturales es: " + sumaCuadrados);

// otro que hice pero ya mas cansón 
let numeros = [];
let cantidadNumeros = prompt("Ingrese la cantidad de números a ingresar:");

for (let i = 0; i < cantidadNumeros; i++) {
    let numero = prompt("Ingrese el número " + (i + 1) + ":");
    numeros.push(Number(numero));
}

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length - 1; j++) {
        if (numeros[j] < numeros[j + 1]) {
            let temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }
    }
}

alert("Los números ingresados ordenados de mayor a menor son: " + numeros);

