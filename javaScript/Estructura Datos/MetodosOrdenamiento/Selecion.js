
//Ordenamiento usando el metodo de seleccion --------------------------------------

let arreglo = new Array();
let minimo = 0;

numeroMaximo = parseInt(prompt(`Ingrese un numero maximo para generar un vector de numero aleatorios.`));
while (isNaN(numeroMaximo) || numeroMaximo <= 0) {
    numeroMaximo = parseInt(prompt(`POR FAVOR ingrese un numero maximo para generar un vector de numero aleatorios.`));
}

for (let i = 0; i < numeroMaximo; i++) {
    arreglo[i] = Math.floor(Math.random() * (100 - (-100))) + (-100);

}
console.log(arreglo);

while (minimo < arreglo.length) {

    for (let i = minimo + 1; i < arreglo.length; i++) {

        if (arreglo[minimo] > arreglo[i]) {
            let temp = arreglo[minimo];
            arreglo[minimo] = arreglo[i];
            arreglo[i] = temp;
        }
    }
    minimo++;
}
console.log((arreglo));

