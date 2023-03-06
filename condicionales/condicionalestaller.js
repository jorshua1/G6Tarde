let edad = Number(prompt("ingrese su edad"));
if(isNaN(edad)){
    console.log("error")
}else if(edad>=1 && edad>=18){
    console.log("es mayor de edad");
}else if(edad>=1 && edad>=17){
    console.log("es menor de edad")
}else{
    console.log("ingrese una edad valida");
}

let edad1 = Number(prompt("ingrese su edad"));
if(isNaN(edad1) || edad1<0){
    console.log("ingrese un valor valido")
}else if(edad1>=0 && edad1>=18){
    console.log("es mayor de edad");
}else{
    console.log("es menor de edad")
}

let numero = Number(prompt("ingrese un numero"));
if(isNaN(numero)||numero<0){
    console.log("error")
}else if(numero%2==0){
    console.log(numero + "es par")
}else{
    console.log("es impar")
}

//pedir dos numero y decir si son multiplos o no
let numero1 = Number(prompt("ingrese el primer numero"));
let numero2 = Number(prompt("ingrese el segundo numero"));
if(isNaN(numero1) || isNaN(numero2)){
    console.log("error");
}else if(numero1%numero2==0 || numero2%numero1==0){
    console.log("son multiplos");
}else{
    console.log("no son multiplos");
}


let numero1 = Number(prompt("ingrese el primer numero"));
let numero2 = Number(prompt("ingrese el segundo numero"));

if(numero1%numero2==0 || numero2%numero1==0){
    console.log("son multiplos");
}else{
    console.log("no son multiplos");
}

/*pedi al usuario el diametro de una rueda y su grosor en mt
y atraves de condicionales realice las siguientes operaciones
- si el diametro es superior a 1.4 debe mostrar "la rueda es paraun vehiculo grande"
- si <=1.4 y >0.8 debe mostrar "la rueda es para un vehiculo medio"
- si no se cumple ninguna condicion debe mostrar "la rueda es para un vehiculo pequeño"
*/
let diametro = Number(prompt("ingrese el diametro"));
if(isNaN(diametro) || diametro<0){
    console.log("error")
}else if(diametro>1.4){
    console.log("la rueda es para un vehiculo grande")
}else if(diametro<=1.4 && diametro>0.8){
    console.log("la rueda es para un vehiculo medio")
}else{
    console.log("la rueda es para un vehiculo pequeño")
}
/*cree una calculadora para saber si un año es bisiesto
a)si es divisible por 4 y no es divisible por 100 o divisible 400 es bisiesto
b)si no divisible por 100 o si es divisible por 400
*/
let año = Number(prompt("ingrese el año"));
if(isNaN(año) || año<0){
    console.log("error")
}else if(año%4==0 && año%100!=0 || año%400==0){
    console.log("el año es bisiesto")
}else{
    console.log("el año no es bisiesto")
}
/*cree una calculadora para calcular el descuento del valor de una compra
a)si la compra es mayor de 500000 el descuento es de 30%
b)si la compra es menor de 500000 el descuento es del 15%
mostrar el descuento y el valor de la compra con él.
*/
let compra = Number(prompt("ingrese el valor de la compra"));
if(isNaN(compra) || compra<0){
    console.log("error")
}else if(compra>500000){
descuento = compra*0.3;
valorCompra = compra-descuento; 
console.log("su descuento es de"+descuento+"total a pagar "+valorCompra)
}else if(compra<500000){
    descuento2=compra*0.15
    valorCompra2=compra-descuento2
    alert("su descuento es de"+ descuento2 + "total a pagar" + valorCompra2)
}
/*En este ejercicio debes pedir dos números enteros y devolver el cociente 
de dividir el primero entre el segundo, pero si este es cero no debe hacer 
la división, sino lanzar un mensaje de error*/
let num1 = Number(prompt("ingrese el dividendo"));
let num2 = Number(prompt("ingrese el divisor"));
if(isNaN(num1) || isNaN(num2)){
    console.log("error ingrese numeros enteros")
}else if((num1 && num2)>0){
     cociente = num1/num2;
     console.log("el cociente de la division es " + cociente)
}else{
    console.log("error")
}
/*Este script pide al usuario que teclee una letra entre A, B, C, D.
Si pulsa la letra A en mayúsucla o en minúscula le dará el mensaje de que ha acertado, 
en caso contrario le dirá que se equivocó...*/
var letra = prompt("teclee una letra entre A B C D");
if(letra == "A" || letra == "a"){
    console.log("felicitaciones acerto")
}else{
    console.log("te equivocaste")
}
/*Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas,
 para ello el cliente puede pedir vino, cerveza, refresco, agua. Si pide una cerveza 
 o vino se le dirige a la barra y si no pues se le dirige a la tienda.*/
 var pedido = prompt("digite que quiere consumir a.vino b.cerveza c.refresco d.agua");
 if(pedido == "a" || pedido == "b"){
    console.log("por favor dirijase a la barra")
 }else{
    console.log("por favor dirijase a la tienda")
 }
 /*En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos.
  Este ejercicio debe tomar la longitud del tramo en kilometros y el tiempo empleado, 
  si la velocidad está entre 40 y 60 km/h el conductor pasa la prueba en caso contrario es descalificado.*/
  let longitud = parseInt(prompt("digite la longitud o distancia del tramo en kilometros"));
  let tiempo = parseInt (prompt("ingrese el tiempo que tarda en horas"));
  let velocidad = longitud/tiempo;
  if(velocidad >= 40 && velocidad <= 60){
    console.log("prueba superada")
  }else{
    console.log("descalificado")
  }
  /*Crea un programa que pida la nota de un estudiante en los tres trimestres del curso 
  y calcule la nota promedio. El resultado que dará será suspenso si la media es menor de 5, 
  aprobado si está entre 5 y 7 y  Notable por encima de 7.*/
  let nota1 = parseInt(prompt("ingrese la nota del primer trimestre"));
  let nota2 = parseInt(prompt("ingrese la nota del segundo trimestre"));
  let nota3 = parseInt(prompt("ingrese la nota del tercer trimestre"));
  let notatotal= (nota1+nota2+nota3)/3;
  if(notatotal<5){
    console.log("suspendido")
  }else if(notatotal >= 5 && notatotal <= 7){
    console.log("aprobado")
  }else{
    console.log("notable")
  }
  /*una empresa tiene una promocion donde por compras mayores o iguales a 250000 
  da un 30% de descuento a la compra, por compras mayores o iguales a 200000 da un 20 % 
  de descuento a la compra, si la compra es menor a 200000 no hay descuento y toca notificarle 
  al usuario, si la compra es menor a 50000 agregar 2000 por Parqueadero*/
  var compra = parseInt(prompt("ingrese el valor de la compra"));
  if(isNaN(compra)){
    console.log("error")
  }else if(compra >= 250000){
  var pago1 = (compra-(compra*0.3)); 
    console.log("su descuento es del 30% el pago total con el descuento aplicado es "+ pago1)
  }else if(compra >= 200000){
  var pago2 = (compra-(compra*0.2)); 
    console.log("su descuento es del 20% el pago total con el descuento aplicado es "+ pago2)
  }else if(compra<200000 && compra>50000){
    console.log("no aplica descuento pero no paga parqueadero")
  }else if(compra<50000){
    var pago3 = compra+2000
    console.log("no aplica descuento debe pagar parqueadero total es  "+pago3)
  }else{
    console.log("no aplica descuento")
  }
  /*
crear un algoritmo que compruebe la estacion en la que se encuentra un mes, 
para saber si el mes esta en verano, otoño, primavera, invierno.*/
var mes = prompt("ingrese el mes para saber la estacion de 1-12 segun el mes ejemplo enero=1 y diciembre=12");
if(isNaN(mes)|| mes<0 || mes>12){
    console.log("error")
}else if(mes >= 3 && mes<=6){
    console.log("primavera")
}else if(mes>6 && mes<=9){
    console.log("verano")
}else if(mes>9 && mes<=12){
    console.log("otoño")
}else{
    console.log("invierno")
}
/*determinar el tipo de triangulo segun la medida de sus lados: escaleno, iscoceles o equilatero*/
var base = parseInt(prompt("ingrese la base del triaungulo en cm"));
var a = parseInt(prompt("ingrese el primer lado")); 
var c = parseInt

