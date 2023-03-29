var num = [1, 2, 3, 4, 5];

var letra = ["jirafa", "perro", "sapo"];

console.log(letra[0]);

var mixto = ["perro", 56, "Jose"];

/////////////////////////////////////////////////////////////////////////////

var perro = { raza: "doberman", color: "negro", edad: 5 };

console.log(perro.raza);

var anidado = { anidado1: { anidado2: { anidado3: "perro" } } };

console.log(anidado.anidado1.anidado2.anidado3);

var cubica = [];

for (let index = 0; index < num.length; index++) {
  cubica[index] = num[index] ** 3;

  console.log("El numero cubico de " + num[i] + " es " + cubico[i]);
}

console.log(cubica);

var sapo = [];

for (let index = 0; index < 10; index++) {
  sapo[index] = parseInt(prompt("Ingrese el numero " + (index + 1)));
}

console.log(sapo);
