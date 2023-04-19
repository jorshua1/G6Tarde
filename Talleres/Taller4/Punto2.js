let numeros = []; 
let contador = 0;

for (let i = 0; i < 100; i++) {
    let random = Math.floor(Math.random()*(100 - (-100)))+(-100);
    numeros[i] = random;
}
for (let x = 0; x < numeros.length; x++) {
    if(numeros[x] < 0) {
        contador++;
    }
}
alert("Cantidad de numeros positivos: "+contador);