var contadorNiños=0;
var contadorJovenes=0;
var contadorAdultos=0;
var contadorViejos=0;
var pesoNiños=0;
var pesoJovenes=0;
var pesoAdultos=0;
var pesoViejos=0;
var peso=0;

for (i=1;i<=20;i++){
    let edad=Number(prompt("Ingrese su edad"));
    while(isNaN(edad)|| edad<0){
        edad=Number(prompt("Dato invalido. Ingrese nuevamente su edad"));
    }
    if(edad>=0 && edad<=12){
        contadorNiños+=1;
        peso= Number(prompt("Ingrese su peso en kg"));
        while(isNaN(peso)|| peso<=0){
            peso=Number(prompt("Dato invalido. Ingrese un peso válido nuevamente"));
        }
        pesoNiños+=peso
    }else if (edad <=29){
        contadorJovenes+=1;
        peso=Number(prompt("Ingrese su peso en kg"));
        while(isNaN(peso)|| peso<=0){
            peso=Number(prompt("Dato invalido. Ingrese un peso válido nuevamente"));
        }
        pesoJovenes+=peso;
    }else if(edad<=59){
        contadorAdultos+=1;
        peso=Number(prompt("Ingrese su peso en kg"));
        while(isNaN(peso)|| peso<=0){
            peso=Number(prompt("Dato invalido. Ingrese un peso válido nuevamente"));
        }
        pesoAdultos+=peso;
    }else{
        contadorViejos+=1;
        peso=Number(prompt("Ingrese su peso en kg"));
        while(isNaN(peso)|| peso<=0){
            peso=Number(prompt("Dato invalido. Ingrese un peso válido nuevamente"));
        }
        pesoViejos+=peso;
    }
}
let promedioNiños=contadorNiños===0?0:(pesoNiños/contadorNiños);
let promedioJovenes=contadorJovenes===0?0:(pesoJovenes/contadorJovenes);
let promedioAdultos=contadorAdultos===0?0:(pesoAdultos/contadorAdultos);
let promedioViejos=contadorViejos==0?0:(pesoViejos/contadorViejos);

alert(`PROMEDIO PESO
NIÑOS -> ${promedioNAdultos}
JOVENES -> ${promedioJovenes}kg
ADULTOS -> ${promedioAdultos}kg
VIEJOS -> ${promedioViejos}kg`);