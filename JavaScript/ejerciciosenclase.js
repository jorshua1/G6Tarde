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

let mes = ""
switch (mes){
    case "diciembre":
    case "enero":
    case "febrero":
        console.log ("invierno");
        break;
    case "marzo":
    case "abril":
    case "mayo":
        console.log ("primavera");
        break;
    case "junio":
    case "julio":
    case "agosto":
        console.log ("verano");
    case "septiembre":
    case "octubre":
    case "noviembre":
        console.log ("verano");
        break;
    default:
        console.log ("ingrese un mes valido")
        break;
}
//

let nombre = prompt("ingrese su nombre");
let saludo = nombre === "" ? "ingrese un nombre valido":
"hola " + nombre + " no estes bravo"
console.log (saludo);

//

}
/*determinar el tipo de triangulo segun la medida de sus lados: escaleno, iscoceles o equilatero*/

let lado1= Number(prompt ("digite el valor del lado"));
let lado2= Number(prompt ("digite el valor del lado"));
let lado3= Number(prompt ("digite el valor del lado"));
if (isNaN(lado1)|| isNaN (lado2)|| isNan (lado3)){
    console.log ("Error");
}else if (lado1 == lado2 == lado3){
    console.log ("Tienes un triangulo", equilatero);
}else if (lado1 == lado2 && lado2 != lado3){
    console.log ("Tienes un triangulo", isosceles);
}else if (lado1 != lado2 || lado1 != lado3 || lado2 != lado3){
    console.log ("Tienes un triangulo", escaleno)
}

/*Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos ingresos iguales o 
superiores a 1000 € mensuales. Escribir un programa que pregunte al usuario su edad y sus ingresos mensuales y muestre 
por pantalla si el usuario tiene que tributar o no.*/

let edad = Number(prompt("ingrese su edad"));
let ingresosM = Number(prompt("ingrese sus ingresos mensuales"));
if (isNan(edad) || isNan(ingresosM)){
    console.log ("Error")
}else if (edad > 16 && ingresosM > 1000){
    console.log ("usted tiene que tributar");
}else if (edad < 16 && ingresosM < 1000){
    console.log ("usted no tiene que tributar");
}else ("ingrese datos validos")

/*Se necesita registrar el género de la persona que ingresé; el cuál solo acepte, hombre, mujer y 
indefinido además debe leerlos tanto la palabra en mayúscula y en minúscula, además solo deberá leer esos tres 
géneros en caso de agregar algo que no sea eso deberá aparecer un mensaje que diga "dijite un valor válido", y si ha 
ingresado el género dar un mensaje con el género que ingreso*/

let genero = promt ("ingrese su genero");{
}else if (genero == ("Masculino")){
    console.log ("su genero es", MASCULINO)
}else if (genero == ("Femenino")){
    console.log ("su genero es", FEMENINO)
}else if (genero == ("Indefinido")){
    console.log ("su genero es", INDEFINIDO)
}else ("Ingreso un genero valido")

/* "Los alumnos de un curso se han dividido en dos grupos A y B de acuerdo al sexo y el nombre. 
El grupo A esta formado por las mujeres con un nombre anterior a la M y los hombres con un nombre posterior a la N 
y el grupo B por el resto. Escribir un programa que pregunte al usuario su nombre y sexo, y muestre por pantalla el 
grupo que le corresponde. */

let nombre = "ingrese su nombre"
let sexo = "ingrese su sexo"

if (isNaN(nombre) || isNaN(sexo)){
    console.log ("Error");
}else if (nombre === "A || a " nombre === " B || b")


/* La política de cobro de una compañía telefónica es:

Cuando se realiza una llamada, el cobro es por el tiempo que esta dura, de tal forma que los primeros cinco minutos cuestan 
1 euro, los siguientes tres, 80 céntimos, los siguientes dos minutos a 70 céntimos y a partir del décimo minuto, 50 céntimos.
Además, se carga un impuesto de 3% cuando es domingo, y si es otro día 15%.
Realiza un algoritmo para determinar cuánto debe pagar por cada concepto una persona que realiza una llamada.*/


let tiempo=parseInt(prompt("Ingrese el tiempo de duracion de su llamada"));
let dia=prompt("ingrese el dia de la llamada, si es domingo ponga: domingo, y si es otro dia ponga: otro");
let domingo = 0.03
let otro=0.15

if (dia==="domingo"){
if (tiempo<=5){
   console.log("su llamada cuesta 1000 y tiene un impuesto de 3% para un total=",  1000+(1000*0.03));
}else if(tiempo>5 && tiempo<=8){
   console.log("su llamada cuesta 800 y tiene un impuesto de 3% para un total=",  800+(800 * 0.03));
}else if(tiempo>8 && tiempo<=10){
   console.log("su llamada cuesta 700 y tiene un impuesto de 3% para un total=", 700+(700*0.03));
}else{
    console.log("sullama cuesta 500 por minuto y tiene un impuesto de 3% para un total=" , 500+(500*0.03));
}
}else if(dia==="otro"){
if (tiempo<=5){
    console.log("su llamada cuesta 1000 y tiene un impuesto de 15% para un total=",  1000+(1000*0.15));
}else if(tiempo>5 && tiempo<=8){
    console.log("su llamada cuesta 800 y tiene un impuesto de 15% para un total=",  800+(800 * 0.15));
}else if(tiempo>8 && tiempo<=10){
    console.log("su llamada cuesta 700 y tiene un impuesto de 15% para un total=", 700+(700*0.15));
}else{
    console.log("sullama cuesta 500 por minuto y tiene un impuesto de 15% para un total=" , 500+(500*0.15))
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