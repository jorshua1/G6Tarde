/*Ejercicio 13
De una empresa de transporte se quiere guardar el nombre de 
los conductores que tiene, y los kilómetros que conducen cada día de la semana.

Para guardar esta información se van a utilizar dos arreglos:

Nombre: Vector para guardar los nombres de los conductores.
kms: Tabla para guardar los kilómetros que realizan cada día de la semana.
Se quiere generar un nuevo vector (“total_kms”) con los kilómetros 
totales que realza cada conductor.

Al finalizar se muestra la lista con los nombres de conductores y 
los kilómetros que ha realizado.*/

let nombre = new Array();
let km = new Array();
let continuar = 0;
let indice = 0;
let totalKm = new Array();
let sumaKm = 0;

do {

    nombre[indice] = prompt(`Ingrese el nombre del conductor #${indice + 1}`);
    while (!isNaN(nombre[indice])) {
        alert("Error, el valor ingresado no es de caracter texto");
        nombre[indice] = prompt(`Ingrese el nombre del conductor #${indice + 1}`);
    }

    
    km[indice] = new Array(7);
   

    for (let i = 0; i < 1; i++) {
        for (let j = 0; j < km[i].length; j++) {

            km[indice][j] = parseFloat(prompt(`Ingrese los km recorridos por ${nombre[indice]} en el dia #${j + 1}`))
            while (isNaN(km[i][j] || km[i][j] < 0)) {
                km[i][j] = parseFloat(prompt(`Ingrese los km recorridos por ${nombre[i]} en el dia #${j + 1}`))
            }
        }
    }

    continuar = parseFloat(prompt(`Desea coninuar registrando conductores? \n1. Si \n2.No`));
    indice++;
} while (continuar === 1)

for (let i = 0; i < km.length; i++) {

    sumaKm = 0;
    for (let j = 0; j < km[i].length; j++) {
        sumaKm += km[i][j];
    }
    totalKm[i] = sumaKm;
}
alert(`Los conductores ${nombre} recorieron ${totalKm} km respectivamente`)
