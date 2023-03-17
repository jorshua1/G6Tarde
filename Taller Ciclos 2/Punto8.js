let numAnimales0a1 = 0;
let numAnimales1a3 = 0;
let numAnimalesMasDe3 = 0;
let animal = prompt("¿Qué animal desea estudiar? (elefantes, jirafas, chimpancés)");

let numMuestras;
if (animal === "elefantes") {
  numMuestras = 20;
} else if (animal === "jirafas") {
  numMuestras = 15;
} else if (animal === "chimpancés") {
  numMuestras = 40;
} else {
  alert("Animal no válido");
}

for (let i = 1; i <= numMuestras; i++) {
  let edad = prompt(`Ingrese la edad del animal ${i}:`);
  if (edad >= 0 && edad <= 1) {
    numAnimales0a1++;
  } else if (edad > 1 && edad < 3) {
    numAnimales1a3++;
  } else if (edad >= 3) {
    numAnimalesMasDe3++;
  } else {
    alert("Edad no válida");
    i--;
  }
}
let porcAnimales0a1 = (numAnimales0a1 / numMuestras) * 100;
let porcAnimales1a3 = (numAnimales1a3 / numMuestras) * 100;
let porcAnimalesMasDe3 = (numAnimalesMasDe3 / numMuestras) * 100;
alert(`Porcentaje de animales de 0 a 1 año: ${porcAnimales0a1}%
Porcentaje de animales de más de 1 año y menos de 3: ${porcAnimales1a3}%
Porcentaje de animales de 3 o más años: ${porcAnimalesMasDe3}%`);