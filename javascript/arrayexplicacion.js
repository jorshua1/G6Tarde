let conejos=new Array();
conejos=prompt("a");

let saludo="hola";
saludo[0]=k;
console.log(saludo);

let numeros=[1,2,3,4,5,6,7,8];
let texto=["uno","dos","tres","cuatro","cinco"];
let mixto=[1,"dos",3,"cuatro",5];
let cubica=[];
let i=0;
while(i<=7){
cubica[i]=numeros[i]**3;
console.log(cubica[i]);
i++;
}
for(let i=0; i<8;i++){
    cubica[i]=numeros[i]**3;
console.log(cubica[i]);
}
let bolso={
    cartuchera:{
        lapicero:{
            color:"negro"
        }
    }
}
console.log(bolso.cartuchera.lapicero.color);

let empanada=[];
for(i=0;i<10;i++){
    empanada[i]=prompt("ingrese lo que quiera")
    console.log(empanada[i]);
}