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
