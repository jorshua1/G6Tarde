let articulo1 = prompt("Ingrese el nombre de su primer articulo");
let precioarticulo1 = parseFloat(prompt("Ingrese el valor del "+ articulo1));
while(isNaN(precioarticulo1)|| precioarticulo1<0){
    precioarticulo1 = parseFloat(prompt("ERROR, Ingrese el valor del "+ articulo1));
}
let formapago1 = parseInt(prompt("Ingrese la forma forma de pago de: \n (1) A contado \n (2) A credito"));
while(isNaN(formapago1)|| formapago1!=1 && formapago1!=2){
    formapago1 = parseInt(prompt("ERROR, Ingrese la forma forma de pago: \n (1) A contado \n (2) A credito"));  
}
if(formapago1==1){
    let porcentajearti1 = precioarticulo1 * 0.1;
    let descuentoarti1 = precioarticulo1 - porcentajearti1;
    console.log("Su articulo ",articulo1,", tiene un precio original de ",precioarticulo1," debe pagar un total con descuento de: ", descuentoarti1)
}
else{
    let porcentajearti1 = precioarticulo1 * 0.2;
    let descuentoarti1 = precioarticulo1 - porcentajearti1;
    console.log("Su articulo ",articulo1,", tiene un precio original de ",precioarticulo1," debe pagar un total con descuento de: ", descuentoarti1)
}

let articulo2 = prompt("Ingrese el nombre de su segundo articulo");
let precioarticulo2 = parseFloat(prompt("Ingrese el valor del "+ articulo2));
while(isNaN(precioarticulo2)|| precioarticulo2<0){
    precioarticulo2 = parseFloat(prompt("ERROR, Ingrese el valor del "+ articulo2));
}
let formapago2 = parseInt(prompt("Ingrese la forma forma de pago: \n (1) A contado \n (2) A credito"));
while(isNaN(formapago2)|| formapago2!=1 && formapago2!=2){
    formapago2 = parseInt(prompt("ERROR, Ingrese la forma forma de pago: \n (1) A contado \n (2) A credito"));
    
}
if(formapago2==1){
    let porcentajearti2 = precioarticulo2 * 0.1;
    let descuentoarti2 = precioarticulo2 - porcentajearti2;
    console.log("Su articulo ",articulo2,", tiene un precio original de ",precioarticulo2," debe pagar un total con descuento de: ", descuentoarti2)
}
else{
    let porcentajearti2 = precioarticulo2 * 0.2;
    let descuentoarti2 = precioarticulo2 - porcentajearti2;
    console.log("Su articulo ",articulo2,", tiene un precio original de ",precioarticulo2," debe pagar un total con descuento de: ", descuentoarti2)
}

let articulo3 = prompt("Ingrese el nombre de su tercer articulo");
let precioarticulo3 = parseFloat(prompt("Ingrese el valor del "+ articulo3));
while(isNaN(precioarticulo3)|| precioarticulo3<0){
    precioarticulo3 = parseFloat(prompt("ERROR, Ingrese el valor del "+ articulo3));
}
let formapago3 = parseInt(prompt("Ingrese la forma forma de pago: \n (1) A contado \n (2) A credito"));
while(isNaN(formapago3)|| formapago3!=1 && formapago3!=2){
    formapago3 = parseInt(prompt("ERROR, Ingrese la forma forma de pago: \n (1) A contado \n (2) A credito"));
    
}
if(formapago3==1){
    let porcentajearti3 = precioarticulo3 * 0.1;
    let descuentoarti3 = precioarticulo3 - porcentajearti3;
    console.log("Su articulo ",articulo3,", tiene un precio original de ",precioarticulo3," debe pagar un total con descuento de: ", descuentoarti3)
}
else{
    let porcentajearti3 = precioarticulo3 * 0.2;
    let descuentoarti3 = precioarticulo3 - porcentajearti3;
    console.log("Su articulo ",articulo3,", tiene un precio original de ",precioarticulo3," debe pagar un total con descuento de: ", descuentoarti3)
}
let articulo4 = prompt("Ingrese el nombre de su cuarto articulo");
let precioarticulo4 = parseFloat(prompt("Ingrese el valor del "+ articulo4));
while(isNaN(precioarticulo4)|| precioarticulo4<0){
    precioarticulo4 = parseFloat(prompt("ERROR, Ingrese el valor del "+ articulo4));
}
let formapago4 = parseInt(prompt("Ingrese la forma forma de pago: \n (1) A contado \n (2) A credito"));
while(isNaN(formapago4)|| formapago4!=1 && formapago4!=2){
    formapago4 = parseInt(prompt("ERROR, Ingrese la forma forma de pago: \n (1) A contado \n (2) A credito"));
    
}
if(formapago4==1){
    let porcentajearti4 = precioarticulo4 * 0.1;
    let descuentoarti4 = precioarticulo4 - porcentajearti4;
    console.log("Su articulo ",articulo4,", tiene un precio original de ",precioarticulo4," debe pagar un total con descuento de: ", descuentoarti4)
}
else{
    let porcentajearti4 = precioarticulo4 * 0.2;
    let descuentoarti4 = precioarticulo4 - porcentajearti4;
    console.log("Su articulo ",articulo4,", tiene un precio original de ",precioarticulo4," debe pagar un total con descuento de: ", descuentoarti4)
}