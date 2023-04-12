let aleatorios = [];
let cantidadNumeros = 0;
let datoMaximo = 0;
let datoMinimo = 0;

cantidadNumeros = Number(prompt("¿Cuántos números desea generar?"));
while((cantidadNumeros<=0)||(isNaN(cantidadNumeros))||(!Number.isInteger(cantidadNumeros))){
    alert("Ingrese una cantidad válida.");
    cantidadNumeros = Number(prompt("¿Cuántos números desea generar?"));
}
datoMaximo = Number(prompt("Indique el mayor número posible."));
while((isNaN(datoMaximo))||(!Number.isInteger(datoMaximo))){
    alert("Ingrese un valor válido.");
    datoMaximo = Number(prompt("Indique el mayor número posible."));
}
datoMinimo = Number(prompt("Indique el menor número posible."));
while((isNaN(datoMinimo))||(!Number.isInteger(datoMinimo))){
    alert("Ingrese un valor válido.");
    datoMinimo = Number(prompt("Indique el menor número posible."));
}

for(let i = 0;i<cantidadNumeros;i++){
    aleatorios[i] = parseInt((Math.random()*(datoMaximo-datoMinimo+1)+datoMinimo));
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