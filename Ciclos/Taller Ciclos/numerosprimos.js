let contador = parseInt(prompt("Por favor, ingrese la cantidad de los primeros números primos que desea visualizar. (Las cifras decimales no serán tenidas en cuenta.)"));
let base = 6;

while ((isNaN(contador)) || (contador <= 0)) {
  contador = parseInt(prompt("Error. Por favor, ingrese un valor númerico válido. (Las cifras decimales no serán tenidas en cuenta.)"));
}
if (contador == 1) {
  console.log(2);
  contador = 0;
} else if (contador == 2) {
  console.log(2);
  console.log(3);
  contador = 0;
} else if (contador == 3) {
  console.log(2);
  console.log(3);
  console.log(5);
  contador = 0;
} else {
  console.log(2);
  console.log(3);
  console.log(5);
  contador = contador - 3
  for (contador; contador > 0;) {
    if (((base / base) == 1) && ((base / 1) == base) && ((base % 2) != 0) && ((base % 3) != 0) && ((base % 5) != 0)) {
      contador--
      console.log(base)
      base++
    } else {
      base++
    }
  }
}