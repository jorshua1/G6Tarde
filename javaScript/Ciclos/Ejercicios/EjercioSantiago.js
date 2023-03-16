/**Mostrar en pantalla los N primero número primos. 
 * Se pide por teclado la cantidad de números primos 
 * que queremos mostrar. */

let numeroMaximo = parseInt(prompt("Ingrese la cantidad de los primeros números primos que desea visualizar."));
let control = 6;

while ((isNaN(numeroMaximo)) || (numeroMaximo <= 0)) {
    numeroMaximo = parseInt(prompt("Ingrese un valor númerico válido."));
}
if (numeroMaximo == 1) {
    console.log(2);
    numeroMaximo = 0;
} else if (numeroMaximo == 2) {
    console.log(2);
    console.log(3);
    numeroMaximo = 0;
} else if (numeroMaximo == 3) {
    console.log(2);
    console.log(3);
    console.log(5);
    numeroMaximo = 0;
} else {
    console.log(2);
    console.log(3);
    console.log(5);
    numeroMaximo = numeroMaximo - 3
    for (numeroMaximo; numeroMaximo > 0;) {
        if (((control / control) == 1) && ((control / 1) == control) && ((control % 2) != 0) && ((control % 3) != 0) && ((control % 5) != 0)) {
            numeroMaximo--
            console.log(control)
            control++
        } else {
            control++
        }
    }
}