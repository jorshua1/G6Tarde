/**En script el usuario deberá teclear una letra y un número, 
 * y el programa mostrará una cadena formada por la letra 
 * repetida el número que haya tecleado. */
let letra, numero, contador, cadena = '';
numero = parseInt(prompt("Escriba un numero entero"));
letra = prompt("Escriba una letra");

for (i = 0; i <= numero; i++) {
  if (letra[i] != null) {
    alert("Ingrese una sola letra");
    letra = prompt("Por favor ingrese datos validos  ");
  }
}

while (isNaN(numero) || numero <= 0) {
  numero = parseInt(prompt("Por favor ingrese datos validos  "));
}

for (contador = 0; contador < numero; contador++) {
  cadena += letra;
}
alert(cadena);