//Ejercicios de Multiplicar
let numero = Number(prompt("Ingrese un numero"));
let i = "";
let contador = 3;

while (isNaN(numero) || numero < 1) {
    contador--
    alert("le quedan : " +contador + " intentos")
    numero = Number(prompt("Ingrese un numero"));
    if (contador === 1) {
        alert("Ya no tiene mas intentos");
        break
    }
}
if (contador === 1) {
} else {
    for (i; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + numero * i); // imprimimos la tabla de multiplicar
        i +
            i +
            i
        console.log(i);
    }
}





