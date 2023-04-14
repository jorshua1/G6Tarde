function validador(numero) {
    var array = [];
    for (i = 1; i <= numero; i++) {
    if (i % 3 == 0) {
    array[i] = "fizz"
    } else if (i % 5 == 0) {
    array[i] = "buzz"
    } else {
    array[i] = i
    }
    console.log(array[i]);
    }
    }
console.log(validador(15            ))