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

/*
Crea un script que pida al usuario el diámetro de una rueda y su grosor (en metros) y a través de condicionales if realice las siguientes operaciones:

a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”. Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.


*/


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

/*
una empresa tiene una promocion donde por compras mayores o iguales a 250000 da un 30% de descuento a la compra, por compras mayores o iguales a 200000 da un 20 % de descuento a la compra, si la compra es menor a 200000 no hay descuento y toca notificarle al usuario, si la compra es menor a 50000 agregar 2000 por Parqueadero
*/
let compra =Number(prompt("Ingrese el valor de la compra"));
if(isNaN(compra)){
    console.log("Ingrese un valor valido");
}else if(compra>=250000){
    total=compra*0.7;
    console.log("El total de la compra es:"+total);
}else if(compra>=200000 && compra<=250000){
    total=compra*0.8;
    console.log("El total de la compra es:"+total);
}else if(compra<200000 && compra>=50000){
    total=compraM
    console.log("No se realizo descuento en la compra, El total de la compra es:"+total);
}else if(compra<50000){
    total=compra+2000
    console.log("se añadieron 2000 de parqueaadero, El total es:"+total);
}


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
        console.log("sullama cuesta 500 por minuto y tiene un impuesto de 3% para un toral=" , 500+(500*0.03))
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

/*crear un algoritmo que compruebe la estacion en la que se encuentra un mes, para saber si el mes esta en verano, otoño, primavera, invierno.*/
let mes=Number(prompt("Ingrese el numero del mes:"))
if(isNaN(mes)|| mes<=0){
    console.log("Ingrese un valor valido");
}else if(mes>=3 && mes<=5){
    console.log("Primavera");
}else if(mes>=6 && mes<=8){
    console.log("Verano");
}else if(mes>=9 && mes<=11){
    console.log("Otoño");
}else if(mes==12 || mes<=2){
    console.log("Invierno");
}else{
    console.log("Ingrese un valor valido");
}

/*
determinar el tipo de triangulo segun la medida de sus lados: escaleno, iscoceles o equilatero
*/
let lado1=Number(prompt("Ingrese el primer lado del triangulo:"))
let lado2=Number(prompt("Ingrese el segundo lado del triangulo:"))
let lado3=Number(prompt("Ingrese el tercer lado del triangulo:"))
if(isNaN(lado1)|| isNaN(lado2)||isNaN(lado2)||lado1<=0||lado2<=0||lado3<=0){
    console.log("Ingrese un valor valido");
}else if(lado1==lado2 && lado2==lado3){
    console.log("Es un triagulo equilatero");
}else if(lado1!=lado2 && lado1!=lado3 && lado2!=lado3){
    console.log("Es un triagulo escaleno");
}else{
    console.log("Es un triagulo isosceles");
}

