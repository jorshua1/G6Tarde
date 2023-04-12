/*Crear un vector de 5 elementos de cadenas de caracteres, inicializa el vector con datos leídos por el teclado. 
Copia los elementos del vector en otro vector pero en orden inverso, y muéstralo por la pantalla.*/

let vector = [];
let vector2 = [];
c = 0;

for(let a = 0; a < 5; a++){
    vector [a] = prompt("Ingrese los 5 datos del vector");
    while(!isNaN(vector[a])){
        vector [a] = prompt("Ingrese un valor correcto, leeeeeeeeeeeeeeaaaaa. Caracteres (LETRAS)");

    }
}
console.log(vector);

for(a = 4; a >= 0; a--){
    vector2 [c] = vector [a];
    c = c + 1;
}
console.log(vector2);