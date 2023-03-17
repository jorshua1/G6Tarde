//Crea una aplicación que permita adivinar un número. La aplicación genera un número aleatorio del 1 al 100. A continuación va pidiendo números y va respondiendo si el número a adivinar es mayor o menor que el introducido, a demás de los intentos que te quedan (tienes 10 intentos para acertarlo). El programa termina cuando se acierta el número (además te dice en cuantos intentos lo has acertado), si se llega al limite de intentos te muestra el número que había generado.

var numeroAleatorio = parseInt
var intento = parseInt
var contador = parseInt
contador = 10;
// Obtención de número aleatorio
numeroAleatorio = parseInt((Math.random()*100+1));
alert("Intenta adivinar un número aleatorio entre el 1 y 100. "
    + "Tienes 10 intentos.");
// Realización del ciclo do-while
do {
   alert("Número contador: " + contador);
  intento = parseInt(prompt("Introduce el número que creas posible: "));
       while (isNaN(intento) || intento > 100){
        alert("ERROR" + '\n' + "Ingrese dato valido")
        intento = parseInt(prompt("Introduce el número que creas posible: "));
       }

  if (intento > numeroAleatorio) {
    alert("El número que buscas es menor, te quedan "
        + (contador-1) + " intentos: ");
  } else if (intento < numeroAleatorio){
    alert("El número que buscas es mayor, te quedan "
        + (contador-1) + " intentos: ");
  } else {
    alert("¡CORRECTO! "+ numeroAleatorio + " era el número que estabas "
        + "buscando, has necesitado " + (10 - (contador-1)) +" intentos.");
  }
  contador--;
} while (intento != numeroAleatorio && contador > 0);
if (contador == 0) {
  alert("Has perdido. El numero aleatorio era " + numeroAleatorio);
}
