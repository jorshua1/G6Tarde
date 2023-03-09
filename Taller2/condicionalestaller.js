//EJERCICIOS ALGORITMIA ESTRUCTURA CONDICIONAL

const { parse } = require("@vue/compiler-dom");

/*EJERCICIO 1: LEER DOS NUMEROS Y LOS IMPRIMA DE FORMA ASCENDENTE*/
let num1 = parseInt(prompt("ingrese el primer numero"));
let num2 = parseInt(prompt("ingrese el segundo numero"));
if(isNaN(num1) || isNaN(num2)){
    console.log("error");
}else if(num1>num2){
    console.log(num1)
    console.log(num2)
}else if(num1<num2){
    console.log(num2)
    console.log(num1)
}else{
    console.log("los numeros son iguales");
}
//EJERCICIO 2:
var numero = parseInt(prompt("ingrese un numero de 1 a 10 "));
switch (numero) {
    case 1 :
    case 3 :
    case 5 :
    case 7 :
    case 8 :
        console.log("impar");
        break;
    case 2 :
    case 4 :
    case 6 :
    case 8 :
    case 10:
        console.log("par");
        break;

    default:
        console.log("no es un numero valido");
    
}
//EJERCICIO 3:
var numero = parseInt(prompt("ingrese un numero de 1 a 10 "));
switch (numero) {
    case 1 :
        console.log(numero + "= uno");
        break;
    case 2 :
        console.log(numero + "= dos");
    case 3 :
        console.log(numero + "= tres");
        break;    
    case 4 :
        console.log(numero + "= cuatro");
        break;    
    case 5 :
        console.log(numero + "= cinco");
        break;    
    case 6 :
        console.log(numero + "= seis");
        break;    
    case 7 :
        console.log(numero + "= siete");
        break;   
    case 8 :
        console.log(numero + "= ocho");
        break;    
    case 9 :
        console.log(numero + "= nueve");
        break;
    case 10:
        console.log(numero + "= diez");
        break;

    default:
        console.log("no es un numero valido");

 }
 //EJERCICIO 4
 var tiempo = parseInt(prompt("ingrese el tiempo que tardo la llamada en minutos"));
 if(isNaN(tiempo) || tiempo<0){
    console.log("error tiempo invalido");
 }else if(tiempo>3){
    var pago = 200 + (100*(tiempo-3));
    console.log("debe cancelar "+ pago + "pesos");
}else{
    console.log("cancele 200 pesos");
}

//EJERCICIO 5
var blancosC1 = parseInt(prompt("ingrese la cantidad de conejos blancos"));
var negrosC2 = parseInt(prompt("ingrese la cantidad de conejos negros"));
var ventasX = parseInt(prompt("ingrese conejos negros vendidos"));
var ventasY = parseInt(prompt("ingrese conejos blancos vendidos"));
var p1 = parseInt(prompt("ingrese el precio de venta de los conejos blancos"));
var p2 = parseInt(prompt("ingrese el precio de venta de los conejos negros"));
if(isNaN(blancosC1) || isNaN(negrosC2) || isNaN(ventasX) || isNaN(ventasY) || isNaN(p1) || isNaN(p2)){
    console.log("error dato invalido");
}else if((ventasX>=0 && ventasY>=0) && (p1>=0 && p2>=0) && (ventasX > ventasY)){
    var conejosvendidos = ventasX + ventasY;
    var montoTotal = (p1*ventasY) + (p2*ventasX);
    console.log("cantidad de conejos vendidos fue de " + conejosvendidos);
    console.log("monto total de la venta es " + montoTotal);
    console.log("negro")
}else{
    var conejosvendidos = ventasX + ventasY;
    var montoTotal = (p1*ventasY) + (p2*ventasX);
    console.log("cantidad de conejos vendidos fue de " + conejosvendidos);
    console.log("monto total de la venta es " + montoTotal);
    console.log("blanco")
}

//EJERCICIO 6
var nota1 = parseFloat(prompt("ingrese la primer nota de previo"));
var nota2 = parseFloat(prompt("ingrese la segunda nota de previo"));
var nota3 = parseFloat(prompt("ingrese la tercer nota de previo"));
var trabajo1 = parseFloat(prompt("ingrese la nota del primer trabajo"));
var trabajo2 = parseFloat(prompt("ingrese la nota del segundo trabajo"));
if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(trabajo1) || isNaN(trabajo2)){
    console.log("ingrese un valor valido")
}else if((nota1 && nota2 && nota3)>=1 && (trabajo1 && trabajo2)>=1 && (nota1 && nota2 && nota3)<=5 && (trabajo1 && trabajo2)<=5){
    var notaPrevios = ((nota1+nota2+nota3)/3);
    var notaTrabajos = ((trabajo1+trabajo2)/2);
    var notaFinal = (notaPrevios*0.6)+(notaTrabajos*0.4);
    console.log("su nota de previos es  "+ notaPrevios + "su nota de trabajos es  "+ notaTrabajos + "su nota final es  " + notaFinal)
}else{
    console.log("ingrese un valor valido recuerde que la nota deberia estar entre 1 - 5");
}

//EJERCICIO 7
var articulo = prompt("ingrese el nombre del articulo");
var clave = parseInt(prompt("ingrese la clave recuerde que solo existe 1 y 2"));
var precio1 = parseInt(prompt("ingrese el precio del articulo"));
var cantidad = parseInt(prompt("cantidad de articulos"));
if(isNaN(clave) || isNaN(precio1) || isNaN(cantidad) && clave>2 || clave<0){
    console.log("error");
}else if(clave===1){
    var descuento1 = precio1 - (precio1*0.1)
    console.log(articulo +"clave"+ clave +"precio original"+precio1+ "precio con descuento" + descuento1 );
}else{
    var descuento2 = precio1 - (precio1*0.2)
    console.log(articulo +"clave"+ clave +"precio original"+precio1+ "precio con descuento" + descuento2 );
}

//EJERCICIO 8
var presupuesto = parseInt(prompt("ingrese el presupuesto anual"));
var psiquiatria = parseInt(prompt("ingrese el porcentaje de psquiatria de 1 a 100"));
var pediatria = parseInt(prompt("ingrese el porcentaje de pediatria de 1 a 100"));
var traumatologia = parseInt(prompt("ingrese el porcentaje de traumatologia 1 a 100"));
if(isNaN(presupuesto) || isNaN(psiquiatria) || isNaN(pediatria) || isNaN(traumatologia)){
    console.log("error");
}else if((pediatria+psiquiatria+traumatologia)==100){
    var prepsiqui = presupuesto*(psiquiatria/100);
    var prepedi = presupuesto*(pediatria/100);
    var pretrauma = presupuesto*(traumatologia/100);
    console.log("porcentaje psiquiatria "+ psiquiatria + "%" + "presupuesto" + prepsiqui);
    console.log("porcentaje pediatria "+ pediatria + "%" + "presupuesto" + prepedi);
    console.log("porcentaje traumatologia "+ traumatologia + "%" + "presupuesto" + pretrauma);
}else{
    console.log("error, recuerde que la suma de los porcentajes debe ser 100");
}

//EJERCICIO 9