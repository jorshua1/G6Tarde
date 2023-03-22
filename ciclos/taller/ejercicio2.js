let art1= prompt("Ingrese nombre del primer articulo");
let art2= prompt("Ingrese nombre del segundo articulo");
let art3= prompt("Ingrese nombre del tercer articulo");
let art4= prompt("Ingrese nombre del cuarto articulo");
let precioArt1=Number(prompt("Ingrese el precio de "+art1));
while((isNaN(precioArt1))||(precioArt1<=0)){
    precioArt1 = Number(prompt("Ingrese un precio valido "))
}
let precioArt2=Number(prompt("Ingrese el precio de "+art2));
while((isNaN(precioArt2))||(precioArt2<=0)){
    precioArt2 = Number(prompt("Ingrese un precio valido "))
}
let precioArt3=Number(prompt("Ingrese el precio de "+art3));
while((isNaN(precioArt3))||(precioArt3<=0)){
    precioArt3 = Number(prompt("Ingrese un precio valido "))
}
let precioArt4=Number(prompt("Ingrese el precio de "+art4));
while((isNaN(precioArt4))||(precioArt4<=0)){
    precioArt4 = Number(prompt("Ingrese un precio valido "))
}
let pago=Number(prompt("Ingrese forma de pago (1:contado,2:credito)"));
while((pago!==1 && pago!==2)){
    pago=Number(prompt("Ingrese un valor valido"))
}
switch(pago){
    case 1:
        Desc1=precioArt1-(precioArt1*0.1);
        Desc2=precioArt2-(precioArt2*0.1);
        Desc3=precioArt3-(precioArt3*0.1);
        Desc4=precioArt3-(precioArt3*0.1);
        alert("producto: "+art1+ " precio original: "+precioArt1 + " Precio con descuento: " + Desc1)
        alert("producto: "+art2+ " precio original: "+precioArt2 + " Precio con descuento: " + Desc2)
        alert("producto: "+art3+ " precio original: "+precioArt3 + " Precio con descuento: " + Desc3)
        alert("producto: "+art4+ " precio original: "+precioArt4 + " Precio con descuento: " + Desc4)
        break;
    case 2:
        Desc1=precioArt1-(precioArt1*0.2);
        Desc2=precioArt2-(precioArt2*0.2);
        Desc3=precioArt3-(precioArt3*0.2);
        Desc4=precioArt3-(precioArt3*0.2);
        alert("producto: "+art1+ " precio original: "+precioArt1 + " Precio con descuento: " + Desc1)
        alert("producto: "+art2+ " precio original: "+precioArt2 + " Precio con descuento: " + Desc2)
        alert("producto: "+art3+ " precio original: "+precioArt3 + " Precio con descuento: " + Desc3)
        alert("producto: "+art4+ " precio original: "+precioArt4 + " Precio con descuento: " + Desc4)
        break;
    default:
        alert("Ha ocurrido un error inesperado. Intentelo nuevamente.");
        break;
}