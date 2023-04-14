let tamaño=Number(prompt("Ingrese el tamaño del arreglo"));
let numerosAleatorios= new Array(tamaño);

for (let i=0; i<numerosAleatorios.length;i++){
    numerosAleatorios[i]=Math.random()*100;
}
 