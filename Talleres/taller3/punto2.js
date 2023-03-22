let articulo1 = prompt("¿Cómo se llama el primer artículo que desea comprar?");
let articulo2 = prompt("¿Cómo se llama el segundo artículo que desea comprar?");
let articulo3 = prompt("¿Cómo se llama el tercer artículo que desea comprar?");
let articulo4 = prompt("¿Cómo se llama el cuarto artículo que desea comprar?");

let precioArt1 = Number(prompt("¿Cuál es el precio del artículo " + articulo1 + "?"));
let precioArt2 = 0;
let precioArt3 = 0;
let precioArt4 = 0;

let formaPago = 0;

let descuentoArt1 = 0;
let descuentoArt2 = 0;
let descuentoArt3 = 0;
let descuentoArt4 = 0;

let precioTotal = 0;

while((isNaN(precioArt1))||(precioArt1<=0)){
    precioArt1 = Number(prompt("Error, por favor, ingrese un precio válido para el artículo " + articulo1));
}
precioArt2 = Number(prompt("¿Cuál es el precio del artículo " + articulo2 + "?"));

while((isNaN(precioArt2))||(precioArt2<=0)){
    precioArt2 = Number(prompt("Error, por favor, ingrese un precio válido para el artículo " + articulo2));
}
precioArt3 = Number(prompt("¿Cuál es el precio del artículo " + articulo3 + "?"));

while((isNaN(precioArt3))||(precioArt3<=0)){
    precioArt3 = Number(prompt("Error, por favor, ingrese un precio válido para el artículo " + articulo3));
}

precioArt4 = Number(prompt("¿Cuál es el precio del artículo " + articulo4 + "?"));

while((isNaN(precioArt4))||(precioArt4<=0)){
    precioArt4 = Number(prompt("Error, por favor, ingrese un precio válido para el artículo " + articulo4));
}

formaPago = Number(prompt("¿De qué forma desea pagar los artículos?\nEscriba 1 para pagar a contado. \nEscriba 2 para pagar a crédito."));

while((formaPago !==1)&&(formaPago !==2)){
    formaPago = Number(prompt("Hay errores en la opción ingresada. Inténtelo de nuevo. \nEscriba 1 para pagar a contado. \nEscriba 2 para pagar a crédito."));
}

switch(formaPago){
    case 1:
        precioTotal = precioArt1+precioArt2+precioArt3+precioArt4
        alert("A continuación se muestran los artículos que el usuario desea comprar con su respectivo precio: \n" + articulo1 + " = " + precioArt1 + "$\n" + articulo2 + " = " + precioArt2 + "$\n" + articulo3 + " = " + precioArt3 + "$\n" + articulo4 + " = " + precioArt4 + "$\nTotal a pagar: " + precioTotal + "$");
        descuentoArt1 = precioArt1*0.1;
        descuentoArt2 = precioArt2*0.1;
        descuentoArt3 = precioArt3*0.1;
        descuentoArt4 = precioArt4*0.1;

        precioArt1 = precioArt1-descuentoArt1;
        precioArt2 = precioArt2-descuentoArt2;
        precioArt3 = precioArt3-descuentoArt3;
        precioArt4 = precioArt4-descuentoArt4;
        precioTotal = precioArt1+precioArt2+precioArt3+precioArt4;
        alert("Como el método de pago va a ser a contado, los artículos han recibido un descuento del 10%. A continuación se visualizan los precios finales y el total a pagar: \n" + articulo1 + " = " + precioArt1 + "$\n" + articulo2 + " = " + precioArt2 + "$\n" + articulo3 + " = " + precioArt3 + "$\n" + articulo4 + " = " + precioArt4 + "$\nTotal a pagar: " + precioTotal + "$");
        alert("Muchas gracias por su visita, vuelva pronto.");
        break;
    case 2:
        precioTotal = precioArt1+precioArt2+precioArt3+precioArt4
        alert("A continuación se muestran los artículos que el usuario desea comprar con su respectivo precio: \n" + articulo1 + " = " + precioArt1 + "$\n" + articulo2 + " = " + precioArt2 + "$\n" + articulo3 + " = " + precioArt3 + "$\n" + articulo4 + " = " + precioArt4 + "$\nTotal a pagar: " + precioTotal + "$");
        descuentoArt1 = precioArt1*0.2;
        descuentoArt2 = precioArt2*0.2;
        descuentoArt3 = precioArt3*0.2;
        descuentoArt4 = precioArt4*0.2;

        precioArt1 = precioArt1-descuentoArt1;
        precioArt2 = precioArt2-descuentoArt2;
        precioArt3 = precioArt3-descuentoArt3;
        precioArt4 = precioArt4-descuentoArt4;
        precioTotal = precioArt1+precioArt2+precioArt3+precioArt4;
        alert("Como el método de pago va a ser a contado, los artículos han recibido un descuento del 20%. A continuación se visualizan los precios finales y el total a pagar: \n" + articulo1 + " = " + precioArt1 + "$\n" + articulo2 + " = " + precioArt2 + "$\n" + articulo3 + " = " + precioArt3 + "$\n" + articulo4 + " = " + precioArt4 + "$\nTotal a pagar: " + precioTotal + "$");
        alert("Muchas gracias por su visita, vuelva pronto.");
        break;
    default:
        alert("Ha ocurrido un error inesperado. Intentelo nuevamente.");
        break;
}