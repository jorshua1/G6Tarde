/* 2. Escribir un programa que indique de almacene en un arreglo unidimensional 100 datos e indique cuántos elementos positivos hay en el mismo. */
let vNumbers = [];
let vPositive = 0;
let vNegative = 0;

for (let i = 0; i < 100; i++) {
    var vNumberRange = Math.floor(Math.random() * 201) - 100;
    vNumbers.push(vNumberRange);

    if (vNumberRange >= 0) {
        vPositive++;
    }else {
        vNegative++;
    }
}
console.log(`Numeros randon: ${vNumbers}`);
console.log(`Numeros positivos: ${vPositive}`);

//==============================================================================================

