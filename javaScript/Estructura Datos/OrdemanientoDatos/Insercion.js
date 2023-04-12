
//Ordenamiento usando el metodo de Inserción---------------------------------------------

let numeros = new Array();

numeroMaximo = parseInt(prompt(`Ingrese un numero maximo para generar un vector de numeros aleatorios.`));
while (isNaN(numeroMaximo) || numeroMaximo <= 0) {
    numeroMaximo = parseInt(prompt(`POR FAVOR ingrese un numero maximo para generar un vector de numeros aleatorios.`));
}

for (let i = 0; i < numeroMaximo; i++) {
    numeros[i] = Math.floor(Math.random() * (100 - (-100))) + (-100);

}
console.log(numeros);

for (let i = 1; i < numeros.length; i++) {
    let temp = numeros[i];
    let j = i - 1;
    while (j >= 0 && numeros[j] > temp) {

        numeros[j + 1] = numeros[j];
        j--;
    }
    numeros[j + 1] = temp;
}

console.log((numeros));