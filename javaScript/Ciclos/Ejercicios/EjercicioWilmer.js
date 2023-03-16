/**Ingresar su edad y la forma en la que se desplaza, 
 * validar si se desplaza a pie o trasporte(moto, carro, pie, bicicleta) 
 * y con la edad que sea mayor o igual a +16 años lo cual si cumple dar 
 * la información de su trasporte(forma de desplazarse) y la edad, sino 
 * dar un aviso (“no tiene edad para conducir”, esto en caso de que maneja 
 * siendo menor, a la edad correspondiente). Añadido a ese, validar si tiene 
 * el carnet de conducción sino lo tiene dar  el mensaje, lo mismo ocurre 
 * si lo tiene renovado o vencido “Lo van a multar XD”.
Recuerde que debe rectificar datos de error, en ese caso se debe dar un 
mensaje “PELIGRO DATOS INCORRECTOS, NO SABE LEER NI ESCRIBIR”, y se vuelve 
a ejecutar o colocar la información de manera correcta. */

const ERROR = "PELIGRO DATOS INCORRECTOS, NO SABES LEER NI ESCRIBIR";
const MULTA = "Lo van a multar XD";
const EDAD_MINIMA = 16;
let edad = Number(prompt("Introduce tu edad"));
while (isNaN(edad) || edad <= 0) {
    alert(ERROR);
    edad = Number(prompt("Introduce tu edad"));
}
let forma = prompt("Introduce tu forma de desplazarte (moto, carro, pie o bicicleta)");
while ((forma !== "moto") && (forma !== "carro") && (forma !== "pie") && (forma !== "bicicleta")) {
    alert(ERROR);
    forma = prompt("Introduce tu forma de desplazarse (moto, carro, pie o bicicleta)");
}
if (edad >= EDAD_MINIMA && (forma === "moto" || forma === "carro")) {
    let carnet = prompt("¿Tienes el carnet de conducción? (si o no)");
    while (carnet !== "si" && carnet !== "no") {
        alert(ERROR);
        carnet = prompt("¿Tienes el carnet de conducción? (si o no)");
    } if (carnet === "si") {
        let estado = prompt("¿Está renovado tu carnet? (si o no)");
        while (estado !== "si" && estado !== "no") {
            alert(ERROR);
            estado = prompt("¿Está renovado tu carnet? (si o no)");
        }
        if (estado === "si") {
            alert(`Tu edad es ${edad} años y te desplazas en ${forma}`);
        } else {
            alert(MULTA);
        }
    } else {
        alert(MULTA);
    }
} else if (edad < EDAD_MINIMA && (forma === "moto" || forma === "carro")) {
    alert("No tienes edad para conducir");
} else {
    alert(`Tu edad es ${edad} años y te desplazas en ${forma}`);
}