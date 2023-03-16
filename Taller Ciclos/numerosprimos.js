var cantidadNumeros = parseInt(prompt("Ingrese la cantidad de numeros que quiere calcular en numeros primos"));
while (cantidadNumeros < 0 || isNaN(cantidadNumeros)) {
    alert("La informacion que ingreso es incorrecta, escriba un numero positivo");
    cantidadNumeros = parseInt(prompt("Ingrese la cantidad de numeros que quiere calcular en numeros primos"));
}
let suma = 0;

for (let i = 1; i <= cantidadNumeros; i++) {
  const numeroPromedio = i * (i + 1) / 2 / i;
  suma += numeroPromedio;
  console.log(numeroPromedio);
}
const promedio = suma / cantidadNumeros;
console.log(`El promedio de los ${cantidadNumeros} números promedio es ${promedio}`);
