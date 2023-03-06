/*una empresa tiene una promocion donde por compras mayores o iguales a 250000 da un 30% de
 descuento a la compra, por compras mayores o iguales a 200000 da un 20 % de descuento a la 
 compra, si la compra es menor a 200000 no hay descuento y toca notificarle al usuario, si la 
 compra es menor a 50000 agregar 2000 por Parqueadero*/


let compras = Number(prompt("ingrese el valor de su compra"));
else if (compras >= 250000){
    console.log ("el valor de su compra es", compras*0.3)
}else if (compras>= 200000){
    console.log ("el valor de su compra es", compras*0.2)
}else if (compras<200000){
    console.log ("no tienes ningun descuento",)
}

/*crear un algoritmo que compruebe la estacion en la que se encuentra un mes, 
para saber si el mes esta en verano, otoño, primavera, invierno.*/

let mes = "digite el mes del año"
if (!isNaN(mes)){
    console.log ("Error")
}else if (mes == "Diciembre"){
    console.log ("Estamos en", invierno);
}else if (mes == "Enero"){
    console.log ("Estamos en", invierno);
}else if (mes == "Febrero"){
    console.log ("Estamos en", invierno);
}else if (mes == "Marzo"){
    console.log ("Estamos en", primavera);
}else if (mes == "Abril"){
    console.log ("Estamos en", primavera);
}else if (mes == "Mayo"){
    console.log ("Estamos en", primavera);
}else if (mes == "Junio"){
    console.log ("Estamos en", verano);
}else if (mes == "Julio"){
    console.log ("Estamos en", verano);
}else if (mes == "Agosto"){
    console.log ("Estamos en", verano);
}else if (mes == "Septiembre"){
    console.log ("Estamos en", otoño);
}else if (mes == "Octubre"){
    console.log ("Estamos en", otoño);
}else if (mes == "Noviembre"){
    console.log ("Estamos en", otoño);
}

/*determinar el tipo de triangulo segun la medida de sus lados: escaleno, iscoceles o equilatero*/

let lado1= Number(prompt ("digite el valor del lado"));
let lado1= Number(prompt ("digite el valor del lado"));
let lado1= Number(prompt ("digite el valor del lado"));



/* La política de cobro de una compañía telefónica es:

Cuando se realiza una llamada, el cobro es por el tiempo que esta dura, de tal forma que los primeros cinco minutos cuestan 1 euro, los siguientes tres, 80 céntimos, los siguientes dos minutos a 70 céntimos y a partir del décimo minuto, 50 céntimos.

Además, se carga un impuesto de 3% cuando es domingo, y si es otro día 15%.

Realiza un algoritmo para determinar cuánto debe pagar por cada concepto una persona que realiza una llamada.*/


let tiempo=parseInt(prompt("Ingrese el tiempo de duracion de su llamada"));
let dia=prompt("ingrese el dia de la llamada, si es domingo ponga: domingo, y si es otro dia ponga: otro");
let domingo = 0.03
let otro=0.15

if (dia==="domingo"){
if (tiempo<=5){
   console.log("su llamada cuesta 1000 y tiene un impuesto de 3% para un toral=",  1000+(1000*0.03));
}else if(tiempo>5 && tiempo<=8){
   console.log("su llamada cuesta 800 y tiene un impuesto de 3% para un toral=",  800+(800 * 0.03));
}else if(tiempo>8 && tiempo<=10){
   console.log("su llamada cuesta 700 y tiene un impuesto de 3% para un toral=", 700+(700*0.03));
}else{
    console.log("sullama cuesta 500 por minuto y tiene un impuesto de 3% para un toral=" , 500+(500*0.03));
}
}else if(dia==="otro"){
if (tiempo<=5){
    console.log("su llamada cuesta 1000 y tiene un impuesto de 15% para un toral=",  1000+(1000*0.15));
}else if(tiempo>5 && tiempo<=8){
    console.log("su llamada cuesta 800 y tiene un impuesto de 15% para un toral=",  800+(800 * 0.15));
}else if(tiempo>8 && tiempo<=10){
    console.log("su llamada cuesta 700 y tiene un impuesto de 15% para un toral=", 700+(700*0.15));
}else{
    console.log("sullama cuesta 500 por minuto y tiene un impuesto de 15% para un toral=" , 500+(500*0.15))
}

}

/*"Realizar un ejercicio en el cual se definan las siguientes variables “precio_kilometro”, “vehiculo”, 
“kms_recorridos”, “litros_consumidos”. A continuación, defina y realice los cálculos para obtener el total a pagar, 
teniendo en cuenta las siguientes consideraciones.
Si el vehículo es “coche”, el precio kilometro ha de ser 0.10, si es “moto” ha de ser 0.20 y si es “autobús” 0.5. si 
los litros consumidos están entre 0 y 100 se ha de añadir 1 al total, si es mayor la cantidad de litros consumidos se ha
 de añadir 2 al total."*/

let vehiculo = Number(prompt("Ingrese el vehiculo:1=si es coche, 2=si es moto y 3=autobus"));
let kmsRecorridos = Number(prompt("Ingrese kilometros recorridos:"));
let ltsComsumidos = Number(prompt("Ingrese los litros consumidos:"));
if (isNaN(vehiculo)||isNaN(kmsRecorridos)||isNaN(ltsComsumidos)){
    console.log("Ingrese un valor valido");
}else if(vehiculo==1){
    totalkms=(0.1*kmsRecorridos);
if(ltsComsumidos>=0 && ltsComsumidos<=100){
        totallts=totalkms+1;
        console.log(totallts);
}else {
        totallts=totalkms+2;
        console.log(totallts);
}
}else if(vehiculo==2){
    totalkms=(0.2*kmsRecorridos);
if(ltsComsumidos>=0 && ltsComsumidos<=100){
        totallts=totalkms+1;
        console.log(totallts);
}else {
        totallts=totalkms+2;
        console.log(totallts);
    }
}else if(vehiculo==3){
    totalkms=(0.5*kmsRecorridos);
if(ltsComsumidos>=0 && ltsComsumidos<=100){
        totallts=totalkms+1;
        console.log(totallts);
    }else {
        totallts=totalkms+2;
        console.log(totallts);
    }
}else{
    console.log("Ingrese un valor valido");
}