// determinar la media de 4 numeros introducidos por teclado

let numero, suma = 0, contador, media;
for (contador = 0; contador < 4; contador++) {
  numero = parseInt(prompt("Teclear numero"));
  while (isNaN(numero)) {
    alert("Dato erroneo");
    numero = parseInt(prompt("Teclear numero"));
  }
  suma += numero;

}
media = suma / 4;
alert("La media es " + media);
