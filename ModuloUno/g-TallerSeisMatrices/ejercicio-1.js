/*
Desarrolle un algoritmo que realice la sumatoria de 1O números almacenados en un vector.
*/
let vectorUno = new Array (10);// Crear vectorUno vacío de 10 filas
console.log(vectorUno);
let sumaVectorUno = 0;

for (let i = 0; i < vectorUno.length; i++) {
    vectorUno[i] = 1;/*prompt(`Ingrese el valor número ${i+1}:`);*/

    while (isNaN(vectorUno[i])) {
        vectorUno[i] = 0;/*parseInt(prompt("Por favor ingrse un valor valido"));*/
    }
    sumaVectorUno += vectorUno[i]
}
console.log(`
El vector contiene los siguientes numeros 
${vectorUno}
y la sumatoria es 
${sumaVectorUno}`);



let vectorDos = new Array(10);// Crear vectorDos vacío de 10 filas
console.log(vectorDos);
let sumaVectorDos = 0;

for (let i = 0; i < vectorDos.length; i++) {
    vectorDos[i] = 1;/*prompt(`Ingrese el valor número ${i+1}:`);*/

    while (isNaN(vectorDos[i])) {
        vectorDos[i] = 0;/*parseInt(prompt("Por favor ingrse un valor valido"));*/
    }
    sumaVectorDos += vectorDos[i]
}

console.log(`
El vector contiene los siguientes numeros 
${vectorDos}
y la sumatoria es 
${sumaVectorDos}`);



let vectorTres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// Crear vectorTres vacío de 10 filas
console.log(vectorTres);
let sumaVectorTres = 0;

for (let i = 0; i < vectorTres.length; i++) {
    sumaVectorTres += vectorTres[i];
}

console.log(`
El vector contiene los siguientes numeros 
${vectorTres}
La sumatoria es: 
${sumaVectorTres}`);


let vectorCuatro = [];// Crear vectorCuatro vacío de 0 filas
console.log(vectorCuatro);
let sumaVectorCuatro = 0;

for (let i = 0; i < 10; i++) {
    vectorCuatro[i] = 1; /*prompt(`Ingrese el valor número ${i+1}:`);*/

    while (isNaN(vectorCuatro[i])) {
        vectorCuatro[i] = 0;/*parseInt(prompt("Por favor ingrse un valor valido"));*/
    }

    vectorCuatro.push(parseInt(vectorCuatro[i]));
    sumaVectorCuatro += parseInt(vectorCuatro[i]);
}

console.log(`
El vector contiene los siguientes numeros 
${vectorCuatro}
La sumatoria es: 
${sumaVectorCuatro}`);


let vectorCinco = [];// Crear vectorCinco vacío de 0 filas
console.log(vectorCinco);
let sumaVectorCinco = 0;

for (let i = 0; i < 10; i++) {
    let numero = Math.floor(Math.random() * 201) - 100;
    vectorCinco.push(numero);
    sumaVectorCinco += numero;
}

console.log(`
El vector contiene los siguientes numeros 
${vectorCinco}
La sumatoria es: 
${sumaVectorCinco}`);