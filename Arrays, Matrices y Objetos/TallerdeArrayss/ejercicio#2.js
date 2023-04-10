let numerosAleatorios = new Array(100);
let positivoNegativo =0;
let contadorPositivos =0;

for(let i = 0;i<numerosAleatorios.length;i++){
    numerosAleatorios[i] = parseInt((Math.random()*100)+1);
    positivoNegativo = parseInt((Math.random()*2)+1);
    switch (positivoNegativo){
        case 1:
            contadorPositivos++
            break;
        case 2: 
            numerosAleatorios[i] *= -1;
            break;
    }
}
console.log(numerosAleatorios);
console.log(contadorPositivos);
