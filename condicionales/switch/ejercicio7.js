//realice un algotrmo que imprima el nombre de un articulo, clave, precio original, cantidad y su precio con dcto.El dcto lo hace con base en la clave, sila cave es 1, el dcto seradel 10%, si la clave es 2, el dcto sera del 20%. solo existen 2 claves.

var articulo = prompt ("Ingrese Nombre del articulo")
var clave = Number (prompt("Ingrese la clave del producto"))
var precio = Number (prompt("Ingerese el precio del producto"))
var cantidad  = Number(prompt("Ingrese cantidad del producto"))
var precioSinD = precio * cantidad
var dcto;
if (!isNaN(articulo) || isNaN(clave) || isNaN(precio) || isNaN(cantidad)){
    alert("ingrese un valor valido")
} else if (clave == 1 || clave == 2){
    if (clave == 1){
        dcto = precio * 0.10 
    }else {
        dcto = precio * 0.20
    }
    alert("articulo = " + articulo + '\n'  + "clave = " + clave + '\n' + "precio sin dcto = " + precioSinD + '\n' + "precion con dcto = " + (precioSinD - dcto))

}else {
    alert("La clave no es valida")
}



