let numeros = [];

for (let i = 0; i < 5; i++) {

    let numero = Number(prompt("Introduce un número"));
    numeros.push(numero);

}

alert("Multiplicamos por 3 los números introducidos: ");

for (let indice in numeros) {
    let numero = numeros[indice];
    let resultado = numero * 3;

    alert(numero + " x 3 = " + resultado);
}