let vectornumeros = new Array(10);
let temporalcuadrado = [];
let temporalCubo = [];

for (let i = 0; i < vectornumeros.length; i++) {
    vectornumeros[i] = Math.floor((Math.random()*10)+1);
    temporalcuadrado[i] = (vectornumeros[i]**2);
    temporalCubo[i] = (vectornumeros[i]**3);

    alert(`En la posicion ${[i]} \nEl valor es; ${vectornumeros[i]} \nEl resultado al cuadrado es: ${temporalcuadrado[i]} \nEl resultado al Cubo es : ${temporalCubo[i]}`);
};

