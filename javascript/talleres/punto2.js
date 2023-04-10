let numerosrandom=[];
for(let i=0;i<100;i++){
    var numero=Math.floor(Math.random()*(100 - (-100))+(-100));
    numerosrandom[i]=numero;
}
let contadordenegativos=0;
let contadorhasta100=0;
for(contadorhasta100; contadorhasta100<numerosrandom.length; contadorhasta100++){
    if(numerosrandom[contadorhasta100]>0){
        contadordenegativos++
    }
}
alert("se generaron "+contadordenegativos+" numeros positivos");