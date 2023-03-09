let previo1 = Number(prompt("¿Cuánto sacó en el 1er previo? (Min 1.0 , Max 5.0)"));
let previo2 = Number(prompt("¿Cuánto sacó en el 2do previo? (Min 1.0 , Max 5.0)"));
let previo3 = Number(prompt("¿Cuánto sacó en el 3er previo? (Min 1.0 , Max 5.0)"));
let notaPrevios = 0;

let trabajo1 = 0;
let trabajo2 = 0;
let notaTrabajos = 0;

let notaFinal = 0;

if((isNaN(previo1)) || (isNaN(previo2)) || (isNaN(previo3)) || (previo1<=0) || (previo2<=0) || (previo3<=0) || (previo1>5) || (previo2>5) || (previo3>5)){
    alert("Alguna de las tres notas ingresadas es inválida, por favor, inténtelo de nuevo según el intérvalo de notas específicadas.");
}else{
    trabajo1 = Number(prompt("¿Cuánto sacó en el 1er trabajo? (Min 1.0 , Max 5.0)"));
    trabajo2 = Number(prompt("¿Cuánto sacó en el 2do trabajo? (Min 1.0 , Max 5.0)"));
    if((isNaN(trabajo1)) || (isNaN(trabajo2)) || (trabajo1<=0) || (trabajo2<=0) || (trabajo1>5) || (trabajo2>5)){
        alert("Alguna de las dos notas ingresadas es inválida, por favor, inténtelo de nuevo según el intérvalo de notas específicadas.");
    }else{
        notaPrevios = (previo1+previo2+previo3)*0.2;
        notaTrabajos = (trabajo1+trabajo2)*0.2;
        notaFinal = (notaPrevios+notaTrabajos);
        alert("La nota definitiva del estudiante es: " + notaFinal)
    }
}