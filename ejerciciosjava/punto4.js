/*Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos iguales, 
donde el precio supere los 40 euros. Tu programa debe comprobar y calcular la cantidad a pagar
sabiendo el número de artículos y el precio de un articulo.*/

let numarticulos = Number(prompt("Ingrese el numero de articulos que compró"));
let precio = Number(prompt("Ingrese el valor de un alriculo"));
let valor = numarticulos*precio;
if (isNaN(numarticulos, precio)){
    console.log("¡ERROR!");
}else if (valor>40){
    let descuento = valor*0.15
    console.log("Su total a pagar es de: "+descuento);
}else{
    console.log("No tiene descuento");
}