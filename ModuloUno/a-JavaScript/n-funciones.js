
function validador(x) {
    if (isNaN(x)) {
        return "Error";
    } else {
        return "Es un numero";
    }
}

let x="a";/*prompt("Ingresar numero");*/

console.log(validador(x));

console.log(typeof x);