let numerosAleatorios = new Array();
let cantidad = 0;
let i = 0;

cantidad = Number(prompt("Cuantos numeros va organizar"));
while (isNaN(cantidad || cantidad < 0)) {
    cantidad = Number(prompt("Error por favor verifique el dato ingresado"));
}
for (let i = 0; i < cantidad; i++) {
    numerosAleatorios[i] = parseInt((Math.random() * 100) + 1);
}

function bubbleSort(numerosAleatorios) {
    for (var i = 0; i < cantidad; i++) {
        for (var j = 0; j < (cantidad - 1); j++) {
            if (numerosAleatorios[j] > numerosAleatorios[j + 1]) {
                var tmp = numerosAleatorios[j];
                numerosAleatorios[j] = numerosAleatorios[j + 1];
                numerosAleatorios[j + 1] = tmp;
            }
        }
    }
    return numerosAleatorios;
}
console.log(numerosAleatorios);

bubbleSort(numerosAleatorios);