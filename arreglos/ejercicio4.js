let vector = [];
let suma = 0;
let promedio = 0;

for(i = 0; i < 5; i++){
    let nota = Number(prompt("INGRESE LAS 5 NOTAS"));
    while(isNaN(nota)){
        nota = Number(prompt("INGRESE UNA NOTA VALIDA"));
    }
    vector [i] = nota;
    suma = suma+nota;
    promedio = suma/5;
}
console.log(`Su promedio es ${ promedio }`);
if(promedio > 0 && promedio <= 2.9){
    console.log(`Su promedio es deficiente`);
}else if(promedio > 2.9 && promedio <= 3.5){
    console.log(`Su promedio es aceptable`);
}else if(promedio > 3.5 && promedio <= 4.0){
    console.log(`Su promedio es sobresaliente`);
}else if(promedio > 4.5 && promedio <= 5){
    console.log(`Su promedio es excelente`);
}