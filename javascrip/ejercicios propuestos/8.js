/*"Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos iguales, 
donde el precio supere los 40 euros. Tu programa debe comprobar y calcular la cantidad a pagar
sabiendo el número de artículos y el precio de un articulo."*/

let cantidad=Number(prompt("ingrese la cantidad de articulos"));
let precio=Number(prompt("ingrese el precio del producto "))
let total=precio*cantidad

if(cantidad < 10){
    console.log("no tiene descuento");

}else if(cantidad>=10 && total>40000){
    console.log("El total a pagar es:", (total-(total*0.15)));
}else if(total<40000){
    console.log("No tiene descuento ");
}