let matriz = []


for (let i = 0; i <= 9; i++) {
    let datos = Number(prompt("Ingrese los datos"));
    while (isNaN(datos)) {
        datos = Number(prompt(`Ingrese un dato valido`));
    }
    matriz[i] = datos
}
let adivinar = Number(prompt("Ingrese un numero para ganar"));
while (isNaN(adivinar)) {
    adivinar = Number(prompt("Ingrese un numero valido"));
}
    for (let i = 0; i <= 9; i++) {
        if (adivinar === matriz[i]) {
            console.log("ganó" + " el numero que ingresó se encuentra en la posicion " + i);
        } else {
            console.log("El numero que ingresó no se encuentra en la matriz");
        }
    }

console.log(matriz);