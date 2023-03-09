let nomarti = (prompt("Nombre del articulo"));
let preciOri = Number(prompt("Ingrese el precio del articulo"));
let cantidad = Number(prompt("Ingrese la cantidad"));
let clave = Number(prompt("Ingrese una opcion 1 o 2"));
let descuento = 0;
let total = 0;
let totalpagar = 0;
if(isNaN(preciOri) || preciOri<0){
    console.log("ERROR");
}else if(isNaN(cantidad) || cantidad<0){
    console.log("ERROR");
}else if(isNaN(clave) || clave<0){
    console.log("ERROR");
}else{

    switch (clave) {
        case 1:
            total = cantidad*preciOri;
            descuento = total*0.1;
            totalpagar = total-descuento
            console.log("Nombre del articulo: "+nomarti);
            console.log("Clave: "+clave);
            console.log("Precio original del articulo: "+preciOri);
            console.log("Cantidad: "+cantidad);
            console.log("Su total a pagar es: "+totalpagar);
        console.log("Su descuento es: "+descuento);
        break;
        case 2:
            total = cantidad*preciOri;
            descuento = total*0.2;
        totalpagar = total-descuento
        console.log("Nombre del articulo: "+nomarti);
        console.log("Clave: "+clave);
        console.log("Precio original del articulo: "+preciOri);
        console.log("Cantidad: "+cantidad);
        console.log("Su total a pagar es: "+totalpagar);
        console.log("Su descuento es de: "+descuento);
        break;
        default:
            console.log("Ingrese un valor valido");
            break;
        }
    }