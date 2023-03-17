//calcular la suma de los números enteros del 1 al 10
let suma = 0;
for(contador = 1; contador <=10; contador++){
    suma = suma+contador;
    console.log(suma);
}
////////////////////////////////////////////////////////////////
let frase = "Apagar equipo al terminar";
let A = 0;
debugger;
for(let i = 0; i <= frase.length; i++){
    if(frase[i] === "a" || frase[i]=== "A"){
        console.log("Encontré una a en la posicion" +i);
        A = A + 1;
    }
}

console.log("La cantidad de letras a encontradas es de "+ A);