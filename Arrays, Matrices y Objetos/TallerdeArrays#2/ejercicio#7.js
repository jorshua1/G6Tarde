let vector1 = new Array(5);
let vector2 = new Array(5);
let vector3 = new Array();


for (let i = 0; i < vector1.length; i++) {
    vector1[i] = Number(prompt(`Ingrese por favor los 5 valores que le va anexar al primer vector en la posicion N°${(i + 1)}`));
    vector2[i] = Number(prompt(`Ingrese por favor los 5 valores que le va anexar al segundo vector en la posicion N°${(i + 1)}`));
    while (isNaN(vector1[i]) || (vector1[i]) < 0) {
        alert("Por favor, ingrese un valor valido");
        vector1[i] = Number(prompt(`Error de datos, por intentelo de nuevo.
    Ingrese por favor los 5 valores que le va anexar al primer vector
    `));
    }
    while (isNaN(vector2[i]) || (vector2[i]) < 0) {
        alert("Por favor, ingrese un valor valido");
        vector2[i] = Number(prompt(`Error de datos, por intentelo de nuevo.
    Ingrese por favor los 5 valores que le va anexar al segundo vector
    `));
    }
    vector3[i] = vector1[i] + vector2[i];
}
alert(` El valor del Vector 1 es ${vector1}
        El valor del Vector 2 es ${vector2}
        La sumatoria de los vectores es: ${vector3}`);

