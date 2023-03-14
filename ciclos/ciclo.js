let numero=1
while(numero<=10){console.log(numero)
numero++
}
console.log("Hi")


let num = parseInt(prompt("Ingrese un número del 1 al 10:"));

while (num < 1 || num > 10 || isNaN(num)) {
  num = parseInt(prompt("Por favor ingrese un número válido del 1 al 10:"));
}

let i = 1;
while (i <= 10) {
  let resultado = num * i;
  console.log(num + " x " + i + " = " + resultado);
  i++;
}


let num = parseInt(prompt("Ingrese un número del 1 al 10:"));

while (num < 1 || num > 10 || isNaN(num)) {
  num = parseInt(prompt("Por favor ingrese un número válido del 1 al 10:"));
}

for (let i = 1; i <= 10; i++) {
  let resultado = num * i;
  console.log(num + " x " + i + " = " + resultado);
}



