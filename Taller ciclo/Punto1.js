// Solicitamos al usuario que ingrese un número
let numero = prompt("Ingrese un número");

// Convertimos el número a una cadena de texto
let numeroStr = numero.toString();

// Inicializamos los índices del comienzo y fin de la cadena
let i = 0;
let j = numeroStr.length - 1;

// Creamos un bucle while que se ejecuta mientras los índices no se cruzan
while (i < j) {
  // Si los caracteres en los índices correspondientes son diferentes,
  // el número no es un palíndromo
  if (numeroStr.charAt(i) !== numeroStr.charAt(j)) {
    console.log("El número ingresado no es un palíndromo");
    break;
  }

  // Incrementamos el índice de inicio y decrementamos el de fin
  i++;
  j--;
}

// Si el bucle while ha terminado y los índices se han cruzado, entonces
// el número es un palíndromo
if (i >= j) {
  console.log("El número ingresado es un palíndromo");
}
