
function fizz_Buzz(A) {
    if (A <= 0) {
        console.log("Error numero negativo o cero");
    } else {
        for (let i = 1; i <= A; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("FizzBuzz");
            } else if (i % 3 === 0) {
                console.log("Fizz");
            } else if (i % 5 === 0) {
                console.log("Buzz");
            } else {
                console.log(i);
            }
        }
    }
}

var numero = parseInt(prompt("numero"));
console.log(fizz_Buzz(numero));