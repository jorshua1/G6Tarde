//imprima la suma de todos los números impares entre 1 y 100



var i;
var suma;
suma = 0

for (i = 0; i <= 100; i++) {
    if (i % 2 === 1) {
        suma = suma + i
    }
}
console.log(suma)