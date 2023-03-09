/*
impuesto
*/

let edad=Number(prompt("Ingrese su edad:"))
let ingresos=Number(prompt("Ingrese sus ingresos:"))
if(isNaN(edad)|| isNaN(ingresos)||edad<=0||ingresos<0){
    console.log("Ingrese un valor valido");
}else if(edad>16 && ingresos>=1000){
    console.log("Tiene que tributar")
}else{
    console.log("No tiene que tributar")
}

/*
Estaciones switch
*/

let mes=prompt("Ingrese el numero del mes:");
switch(mes){
    case "diciembre":
    case "enero":
    case "febrero":
        console.log("Invierno");
    break;
    case "marzo":
    case "abril":
    case "mayo":
        console.log("primavera");
    break;
    case "junio":
    case "julio":
    case "agosto":
        console.log("Verano");
    break;
    case "septiembre":
    case "octubre":
    case "noviembre":
        console.log("Otoño");
    break;
    default:
        console.log("Ingrese un mes valido");
}

let nombre= prompt("Ingrese su nombre");
let saludo = nombre==="" ? "Ingrese un nombre valido":"Hola "+nombre
console.log(saludo);

let numero=parseInt(prompt("Ingrese un numero"))
console.log(numero%2==0 ? "el numero es par" : "el numero es impar");

let conejos=parseInt(prompt("Ingrese la cantidad de conejos en la granja:"));                                                 
let blancos=parseInt(prompt("Ingrese la cantidad de conejos blancos en la granja:"));
let negros=parseInt(prompt("Ingrese la cantidad de conejos negros en la granja:"));
let blancosVendidos=parseInt(prompt("Ingrese la cantidad de conejos blancos vendidos:"))
let negrosVendidos=parseInt(prompt("Ingrese la cantidad de conejos negros vendidos:"))
let precioBlancos=parseFloat(prompt("Ingrese el precio de conejos blancos:"))
let precioNegros=parseFloat(prompt("Ingrese el precio de conejos negros:"))
if (isNaN(conejos)||isNaN(blancos)||isNaN(negros)||isNaN(blancosVendidos)||isNaN(negrosVendidos)||isNaN(precioBlancos)||isNaN(precioNegros)||conejos<0 || blancos<0||negros<0|| blancosVendidos<0||negrosVendidos<0||precioBlancos<0||precioNegros<0||blancosVendidos>blancos||negrosVendidos>negros){
    console.log("Valor invalido");
}else{
    let cantidadVendida=blancosVendidos+negrosVendidos;
    let total=(blancosVendidos*precioBlancos)+(negrosVendidos*precioNegros)
    console.log("La cantidad de conejos vendidos es: "+ cantidadVendida);
    console.log("El monto total de venta es: "+ total);
    console.log(blancosVendidos>negrosVendidos ? "Los conejos blancos fueron los mas vendidos":"los conejos negros fueron los mas vendidos");
}



    
