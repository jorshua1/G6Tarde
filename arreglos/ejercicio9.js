/*Se quiere realizar un programa que lea por teclado las 5 notas obtenidas por un alumno 
(comprendidas entre 0 y 10). A continuación debe mostrar todas las notas, 
la nota media, la nota más alta que ha sacado y la menor.*/

let notas = [];
let posicion = 0;
let media = 0;
let sumatoria = 0;

for(let a = 0; a < 5; a++){
    notas [a] = Number(prompt("Ingrese las 5 notas" + "\n nota #" + (a+1) ))
    while(isNaN(notas[a]) || notas[a] < 0 || notas[a] > 10){
        notas [a] = Number(prompt("Ingrese una nota valida" + "\n nota #" + (a+1) ))
    }
    for (let a = 0; a < 5; a++) {
        for (b = 0; b < 5; b++) {
            if (notas[b] > notas[b+1]) {
                posicion = notas[b];
                notas[b] = notas[b+1];
                notas[b+1] = posicion;
            }
        }
    }
    sumatoria = notas[a] + sumatoria;
}
media = sumatoria / 5;

console.log(notas);
console.log("la nota mayor es " + notas[4]);
console.log("La nota menor es " + notas[0]);
console.log("La nota media es " + media);