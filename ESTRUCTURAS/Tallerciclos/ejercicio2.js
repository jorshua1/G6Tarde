/* Hacer un algoritmo que imprima el nombre de 4 artículos, precio original y su precio condescuento. 
El descuento lo hace en base a la forma de pago, 
si es a contado será (1), y su descuento es del 10%
si la forma de pago es a crédito será dos (2) y su descuento es del 20% (solo existen dos claves). */
let articulo1 = prompt("ingrese el nombre del primer articulo");
let articulo2 = prompt("ingrese el nombre del segundo articulo");
let articulo3 = prompt("ingrese el nombre del tercer articulo");
let articulo4 = prompt("ingrese el nombre del cuarto articulo");
let precioArticulo1 = parseInt(prompt("ingrese el precio del primer articulo"));
let precioArticulo2 = parseInt(prompt("ingrese el precio del segundo articulo"));
let precioArticulo3 = parseInt(prompt("ingrese el precio del tercer articulo"));
let precioArticulo4 = parseInt(prompt("ingrese el precio del cuarto articulo"));
let descuento = parseInt(prompt("ingrese el tipo de descuento si es clase 1 o 2"));
if(descuento == 1){
    let articulo1descuento = precioArticulo1 - (precioArticulo1* 0.10);
    let articulo2descuento = precioArticulo2 - (precioArticulo2* 0.10);
    let articulo3descuento = precioArticulo3 - (precioArticulo3* 0.10);
    let articulo4descuento = precioArticulo4 - (precioArticulo4* 0.10);
    console.log("articulo"+ articulo1 + "precio original" + precioArticulo1 + "precio con descuento" + articulo1descuento );
    console.log("articulo"+ articulo2 + "precio original" + precioArticulo2 + "precio con descuento" + articulo2descuento );
    console.log("articulo"+ articulo3 + "precio original" + precioArticulo3 + "precio con descuento" + articulo3descuento );
    console.log("articulo"+ articulo4 + "precio original" + precioArticulo4 + "precio con descuento" + articulo4descuento );

}else{
    let articulo1descuento2 = precioArticulo1 - (precioArticulo1* 0.20);
    let articulo2descuento2 = precioArticulo2 - (precioArticulo2* 0.20);
    let articulo3descuento2 = precioArticulo3 - (precioArticulo3* 0.20);
    let articulo4descuento2 = precioArticulo4 - (precioArticulo4* 0.20);
    console.log("articulo"+ articulo1 + "precio original" + precioArticulo1 + "precio con descuento" + articulo1descuento2 );
    console.log("articulo"+ articulo2 + "precio original" + precioArticulo2 + "precio con descuento" + articulo2descuento2 );
    console.log("articulo"+ articulo3 + "precio original" + precioArticulo3 + "precio con descuento" + articulo3descuento2 );
    console.log("articulo"+ articulo4 + "precio original" + precioArticulo4 + "precio con descuento" + articulo4descuento2 );
}
