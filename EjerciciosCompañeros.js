/*una empresa tiene una promocion donde por compras mayores o iguales a 250000 da un 30% a la compra, 
por compras mayores o iguales a 200000 da un 20 % a la compra, si la compra es menor a 200000 no 
hay descuento y toca notificarle al usuario, si la compra es menor a 50000 agregar 2000 por Parqueadero*/

let valorcompra = parseFloat(prompt("Ingrese el valor de la compra"));
let descuento1;
let descuento2;
let valorparq;

if (isNaN(valorcompra)|| valorcompra<=0){
    console.log("El dato ingresado no es valido")
}

else if(valorcompra>=250000){
    descuento1 = valorcompra*0.3;
    console.log("Su descuento es de ",descuento1, "por lo tanto debe pagar", valorcompra-descuento1)
} 
else if(valorcompra>=200000 && valorcompra<250000){
    descuento2 = valorcompra*0.2;
    console.log("Su descuento es de ",descuento2, "por lo tanto debe pagar", valorcompra-descuento2)
}
else if(valorcompra<200000 && valorcompra>=50000){
    console.log("Su compra no tiene descuento, debe pagar", valorcompra)
}
else{
    valorparq = valorcompra + 2000;
    console.log("Su compra es menor a 50.000 pesos, por lo tanto debe pagar un excedente de 2000 por parqueadero, en total serian", valorparq)
}


/*determinar el tipo de triangulo segun la medida de sus lados: escaleno, iscoceles o equilatero*/

let lado1 = parseFloat(prompt("Ingrese la medida del primer lado del triangulo, el mas grande"));
let lado2 = parseFloat(prompt("Ingrese la medida del segundo lado del triangulo"));
let lado3 = parseFloat(prompt("Ingrese la medida del tercer lado del triangulo"));

if (isNaN(lado1)|| lado1<0){
    console.log("Error, debe ingresar datos validos")
}
if (isNaN(lado2)|| lado2<0){
    console.log("Error, debe ingresar datos validos")
}
if (isNaN(lado3)|| lado3<0){
    console.log("Error, debe ingresar datos validos")
}
else if(lado1 == lado2 && lado2 == lado3){
    console.log("Es un triangulo equilatero")
}
else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
    console.log("Es un triangulo isoceles")
}
else{
    console.log("Es un triangulo escaleno")
}

/*Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos 
ingresos iguales o superiores a 1000 € mensuales. Escribir un programa que pregunte 
al usuario su edad y sus ingresos mensuales y muestre por pantalla si el usuario 
tiene que tributar o no.*/

let edad = parseInt(prompt("Ingrese su edad"));
let ingresos = parseInt(prompt("Ingrese sus ingresos sin puntos"));
if (isNaN(edad)|| edad<0){
    console.log("No es un dato valido")
}
if (isNaN(ingresos)){
    console.log("No es un dato valido")
}
else if(edad<=16 || ingresos<1000){
    console.log("No tiene que tributar")
}
else{
    console.log("Tiene que tributar")
}

/*Se necesita registrar el género de la persona que ingresé; el cuál solo acepte, 
hombre, mujer y indefinido además debe leerlos tanto la palabra en mayúscula y en 
minúscula, además solo deberá leer esos tres géneros en caso de agregar algo que 
no sea eso deberá aparecer un mensaje que diga "dijite un valor válido", y si ha 
ingresado el género dar un mensaje con el género que ingreso*/

let genero = prompt("Ingrese su genero");
if (genero == "MUJER" || genero == "mujer"){
    console.log(genero)
}
else if (genero == "HOMBRE" || genero == "hombre"){
    console.log(genero)
}
else{
    console.log("Dijite un valor válido")
}


/*"Los alumnos de un curso se han dividido en dos grupos A y B de acuerdo al sexo 
y el nombre. El grupo A esta formado por las mujeres con un nombre anterior a la M 
y los hombres con un nombre posterior a la N y el grupo B por el resto. Escribir 
un programa que pregunte al usuario su nombre y sexo, y muestre por pantalla el 
grupo que le corresponde.*/

let nombre = prompt("Esbriba su nombre en mayusculas");
let sexo = prompt("Escriba M si el alumno es hombre y F si la alumna es mujer");

if (nombre[0]<"M" && sexo == "F"){
    console.log(nombre, ", Pertenece al grupo A")
}
else if(nombre[0]>="M" && sexo == "M"){
    console.log(nombre, ", Pertenece al grupo A")
}
else{
    console.log(nombre, ", Pertenece al grupo B")
}

/*Una compañía de seguros está abriendo un dpto de finanzas y estableció un 
programa para captar clientes, que consiste en lo siguiente: Si el monto por
el que se efectúa la fianza es menor que $50 000 la cuota a pagar será por 
el 3% del monto, y si el monto es mayor que $50 000 la cuota a pagar será 
el 2% del monto, si el monto es igual a $50.000 no se debe pagar cuota. La 
afianzadora desea determinar si se debe pagar cuota y cuál será la cuota 
que debe pagar un cliente.*/

let valor = parseInt(prompt("Ingrese su fianza"));
let cuota1;
let cuota2;
if(isNaN(valor)){
    console.log("Ingrese un dato valido")
}
else if(valor<50000){
    cuota1 = valor * 0.03;
    console.log("SI DEBE PAGAR CUOTA, ésta es de ", cuota1)
}
else if(valor == 50000){
    console.log("NO DEBE PAGAR CUOTA", cuota1)
}
else{
    cuota2 = valor * 0.02;
    console.log("SI DEBE PAGAR CUOTA, ésta es de ", cuota2)
}

/*"Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos iguales, 
donde el precio supere los 40 euros. Tu programa debe comprobar y calcular la cantidad a pagar
sabiendo el número de artículos y el precio de un articulo."*/

let numarticulo = parseInt(prompt("Ingrese la cantidad de articulos iguales"));
let valorarticulo = parseFloat(prompt("Ingrese el valor unitario del articulo"));
let descuento;
let total = (valorarticulo*numarticulo);
if(isNaN(numarticulo)|| numarticulo<0){
    console.log("Ingrese un valor valido")
}
else if(isNaN(valorarticulo)|| valorarticulo<0){
    console.log("Ingrese un valor valido")
}
else if(numarticulo>10 && total>40){
    descuento = total * 0.15;
    console.log("Su descuento es de ", descuento, "debe pagar un total de ", (total-descuento))
}
else{
    console.log("No tiene descuento")
}


