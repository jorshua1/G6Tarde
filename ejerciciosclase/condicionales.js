let edad= Number(prompt("ingrese su edad:"));
if (edad<=0 || isNaN(edad)){
    console.log("Ingrese una edad valida");
}else if(edad>=18){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}

let num=Number(prompt("IIngrese un numero:"));
if (isNaN(num)){
    console.log("Ingrese un valor valido");
}else if (num%2){
    console.log("El numero es impar");
}else {
    console.log("El numero es par");
}

let vehiculo = Number(prompt("Ingrese el vehiculo:1=si es coche, 2=si es moto y 3=autobus"));
let kmsRecorridos = Number(prompt("Ingrese kilometros recorridos:"));
let ltsComsumidos = Number(prompt("Ingrese los litros consumidos:"));
if (isNaN(kmsRecorridos)||isNaN(kmsRecorridos)){
    console.log("Ingrese un valor valido");
}else if(vehiculo==1){
    let total=(0.1*kmsRecorridos);
}else if(vehiculo==2){
    let total=(0.2*kmsRecorridos);
}else if(vehiculo==3){
    let total=(0.5*kmsRecorridos);
}

if(isNaN(ltsComsumidos)){
    console.log("Ingrese un valor valido");
}else if(ltsComsumidos){

}




let diametro= Number(prompt("Imgrese el diametro de la rueda en metros"));
if (isNaN(diametro)|| diametro<=0){
    console.log("Ingrese un valor valido");
}else if (diametro>1.4){
    console.log("Es para un vehiculo grande");
}else if(diametro>0.8 && diametro<=1.4) {
    console.log("Es para un vehiculo mediano");
}else{
    console.log("Es para un vehiculo pequeño");
}