//Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos iguales, 
//donde el precio supere los 40 euros. Tu programa debe comprobar y calcular la cantidad a pagar
//sabiendo el número de artículos y el precio de un articulo.
 let cantidadArt=Number(prompt("Ingrese cantidad de articulos que va a llevar"));
 let precioArt=Number(prompt("Ingrese precio del articulo"));
 if(cantidadArt>=10 && precioArt>=40){
    var descuento=precioArt*0.15
    var total=cantidadArt*(precioArt-descuento)
    alert("El total a pagar es de: "+total)
 }else{
    let totalSD=cantidadArt*precioArt
    alert("No tiene descuento")
    alert("El total a pagar es:"+totalSD)
 }
