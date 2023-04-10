let aleatorios = [];
let cantidadNumeros = 0;
let datoMaximo = 0;

cantidadNumeros = Number(prompt("¿Cuántos números desea generar?"));
while((cantidadNumeros<=0)||(isNaN(cantidadNumeros))||(!Number.isInteger(cantidadNumeros))){
    alert("Ingrese una cantidad válida.");
    cantidadNumeros = Number(prompt("¿Cuántos números desea generar?"));
}
datoMaximo = Number(prompt("Indique el mayor número posible.(Solo se aceptan positivos)."));
while((datoMaximo<=0)||(isNaN(datoMaximo))||(!Number.isInteger(datoMaximo))){
    alert("Ingrese un valor válido.");
    datoMaximo = Number(prompt("Indique el mayor número posible.(Solo se aceptan positivos)."));
}

for(let i = 0;i<cantidadNumeros;i++){
    aleatorios[i] = parseInt((Math.random()*datoMaximo)+1)
}
console.log(aleatorios);

for(let i = 1;i<aleatorios.length;i++){
    for(let j = 0;j<aleatorios.length;j++){
        if(aleatorios[j]>aleatorios[j+1]){
            let temp = 0;
            temp = aleatorios[j];
            aleatorios[j] = aleatorios[j+1];
            aleatorios[j+1] = temp;
        }
    }
}
console.log(aleatorios);
