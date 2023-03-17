let num = parseInt(prompt("Ingrese un número entero positivo: "));
let i = 1;

while (i <= num) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}
