/*articulos y precios con descuento*/

let articulo1 = prompt("por favor digitar el primer articulo a comprar:");
let precio1 = parseInt(prompt("por favor digitar el precio del articulo: "+articulo1));
while (precio1<=0 || isNaN(precio1)){
    console.log("por favor digite un valor valido");
    precio1 = parseInt(prompt("por favor digitar el precio del articulo: "+articulo1));
}

let articulo2 = prompt("por favor digitar el segundo articulo a comprar:");
let precio2 = parseInt(prompt("por favor digitar el precio del articulo: "+articulo2));
while (precio2<=0 || isNaN(precio2)){
    console.log("por favor digite un valor valido");
    precio2 = parseInt(prompt("por favor digitar el precio del articulo: "+articulo2));
}

let articulo3 = prompt("por favor digitar el tercer articulo a comprar:");
let precio3 = parseInt(prompt("por favor digitar el precio del articulo: "+articulo3));
while (precio3<=0 || isNaN(precio3)){
    console.log("por favor digite un valor valido");
    precio3 = parseInt(prompt("por favor digitar el precio del articulo: "+articulo3));
}

let articulo4 = prompt("por favor digitar el cuarto articulo a comprar:");
let precio4 = parseInt(prompt("por favor digitar el precio del articulo: "+articulo4));
while (precio4<=0 || isNaN(precio4)){
    console.log("por favor digite un valor valido");
    precio4 = parseInt(prompt("por favor digitar el precio del articulo: "+articulo4));
}

do{

let n = parseInt(prompt("por favor digitar el metodo de pago a realizar: \n"+
                            "\n"+
                            "(1) contado \n"+
                            "(2) credito \n"));

while (isNaN(n)){
    console.log("por favor digite un valor numerico del menú de opciones");
    n = parseInt(prompt("por favor digitar el metodo de pago a realizar: \n"+
                            "\n"+
                            "(1) contado \n"+
                            "(2) credito \n"));
}

switch (n) {
    case 1:
        descuento1 = precio1 - (precio1 * 0.1);
        descuento2 = precio2 - (precio2 * 0.1);
        descuento3 = precio3 - (precio3 * 0.1);
        descuento4 = precio4 - (precio4 * 0.1);

        alert("Los articulos que compraras son: \n"+
                articulo1 + " con precio de: " + descuento1 + "\n" +
                articulo2 + " con precio de: " + descuento2 + "\n" +
                articulo3 + " con precio de: " + descuento3 + "\n" +
                articulo4 + " con precio de: " + descuento4);
        break;
    case 2:
        descuento1 = precio1 - (precio1 * 0.2);
        descuento2 = precio2 - (precio2 * 0.2);
        descuento3 = precio3 - (precio3 * 0.2);
        descuento4 = precio4 - (precio4 * 0.2);

        alert("Los articulos que compraras son: \n"+
                articulo1 + " con precio de: " + descuento1 + "\n" +
                articulo2 + " con precio de: " + descuento2 + "\n" +
                articulo3 + " con precio de: " + descuento3 + "\n" +
                articulo4 + " con precio de: " + descuento4);
    break;
    default:
        alert("El numero ingresado es invalido de acuerdo al menú del metodo de pagos");
        break;
}
}while (n != 1 || n !=2);