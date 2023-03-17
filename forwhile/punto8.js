/////////////////////////////////////////////////////////////////////////////

let articulo1 = (prompt("INGRESE EL NOMBRE DEL PRIMER ARTICULO"));
while(!isNaN(articulo1)){
    articulo1 = (prompt("INGRESE EL NOMBRE DEL PRIMER ARTICULO"));
}

/////////////////////////////////////////////////////////////////////////////

let articulo2 = (prompt("INGRESE EL NOMBRE DEL SEGUNDO ARTICULO"));
while(!isNaN(articulo2)){
    articulo2 = (prompt("INGRESE EL NOMBRE DEL SEGUNDO ARTICULO"));
}

/////////////////////////////////////////////////////////////////////////////

let articulo3 = (prompt("INGRESE EL NOMBRE DEL TERCER ARTICULO"));
while(!isNaN(articulo3)){
    articulo3 = (prompt("INGRESE EL NOMBRE DEL TERCER ARTICULO"));
}

/////////////////////////////////////////////////////////////////////////////

let articulo4 = (prompt("INGRESE EL NOMBRE DEL CUARTO ARTICULO"));
while(!isNaN(articulo3)){
    articulo4 = (prompt("INGRESE EL NOMBRE DEL CUARTO ARTICULO"));
}

/////////////////////////////////////////////////////////////////////////////

let precio1 = Number(prompt("INGRESE EL PRECIO DEL PRIMER ARTICULO"));
while(isNaN(precio1) || precio1 < 0){
    precio1 = (prompt("INGRESE EL PRECIO DEL PRIMER ARTICULO"));
}

/////////////////////////////////////////////////////////////////////////////

let precio2 = Number(prompt("INGRESE EL PRECIO DEL SEGUNDO ARTICULO"));
while(isNaN(precio2) || precio1 < 0){
    precio2 = (prompt("INGRESE EL PRECIO DEL SEGUNDO ARTICULO"));
}

/////////////////////////////////////////////////////////////////////////////

let precio3 = Number(prompt("INGRESE EL PRECIO DEL TERCER ARTICULO"));
while(isNaN(precio3) || precio1 < 0){
    precio3 = (prompt("INGRESE EL PRECIO DEL TERCER ARTICULO"));
}

/////////////////////////////////////////////////////////////////////////////

let precio4 = Number(prompt("INGRESE EL PRECIO DEL CUARTO ARTICULO"));
while(isNaN(precio4) || precio1 < 0){
    precio4 = (prompt("INGRESE EL PRECIO DEL CUARTO ARTICULO"));
}

/////////////////////////////////////////////////////////////////////////////

let clave = Number(prompt("INGRESE LA CLAVE"));
while(isNaN(clave) || clave < 1 || clave > 2){
    clave = Number(prompt("INGRESE LA CLAVE"));
}

/////////////////////////////////////////////////////////////////////////////

switch (clave) {
    case 1:
        
        let   descuentoT1 = precio1*0.1;
            console.log("Su precio original del primer articulo es de " + precio1 +  "y su descuento es de " + descuentoT1);

        let   descuentoT2 = precio2*0.1;
            console.log("Su precio original del segundo articulo es de " + precio2 +  "y su descuento es de " + descuentoT2);

        let    descuentoT3 = precio3*0.1;
            console.log("Su precio original del tercer articulo es de " + precio3 +  "y su descuento es de " + descuentoT3);

        let    descuentoT4 = precio4*0.1;
            console.log("Su precio original del cuarto articulo es de " + precio4 +  "y su descuento es de " + descuentoT4);
        
        break;
    case 2:
        let    descuentoTL1 = precio1*0.2;
            console.log("Su precio original del primer articulo es de " + precio1 +  "y su descuento es de " + descuentoTL1);

        let    descuentoTL2 = precio2*0.2;
            console.log("Su precio original del segundo articulo es de " + precio2 +  "y su descuento es de " + descuentoTL2);

        let    descuentoTL3 = precio3*0.2;
            console.log("Su precio original del tercer articulo es de " + precio3 +  "y su descuento es de " + descuentoTL3);

        let    descuentoTL4 = precio4*0.2;
            console.log("Su precio original del cuarto articulo es de " + precio4 +  "y su descuento es de " + descuentoTL4);
        break;

    default:
        console.log('');
        break;
}
