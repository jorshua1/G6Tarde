
let numero = Number(prompt("Ingrese un numero"));

function contador(A) {
    console.log(numero > 0 ? "El numero es creciente" : numero < 0 ? "El numero es decreciente" : "El numero es cero");


    if (A < 0) {
        for (let i = 1; i >= A; i--) {
            console.log(i);
        }
    } else if (A > 0) {
        for (let i = 1; i <= A; i++) {
            console.log(i);
        }

    }
}
console.log(contador(numero));