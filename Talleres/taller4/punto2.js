let numerosAleatorios = new Array(100);
let contadorPositivos = 0;

for(let i=0;i<numerosAleatorios.length;i++){
    numerosAleatorios[i] = parseInt((Math.random()*200)+1)-100;
    if(numerosAleatorios[i]>=0){
        contadorPositivos++
    }
}
console.log(numerosAleatorios);
console.log("Números positivos: " + contadorPositivos);

