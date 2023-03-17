let descArt1=0;
let descArt2=0;
let descArt3=0;
let descArt4=0;

let articulo1= prompt("Ingrese el articulo 1");
while (articulo1==""){
    articulo1=prompt("Ingrese un nombre para el articulo 1")
}
let precioArt1=Number(prompt("Ingrese el precio original del artículo 1"));
while (isNaN(precioArt1)|| precioArt1<=0|| precioArt1==""){
    precioArt1=Number(prompt("Dato no válido.\nIngrese nuevamente el valor."));
}
let formaPagoArt1=Number(prompt("Ingrese la forma de pago del artículo 1. Para contado ingresar '1', para pago a crédito ingresar '2'"));

while(isNaN(formaPagoArt1)|| ((formaPagoArt1!=1)&& (formaPagoArt1!=2))){
    formaPagoArt1=Number(prompt("Dato inválido.\nIngrese la forma de pago del artículo 1. Para contado ingresar '1', para pago a crédito ingresar '2'"));

}

let articulo2= prompt("Ingrese el articulo 2");
while (articulo2==""){
    articulo2=prompt("Ingrese un nombre para el articulo 2")
}
let precioArt2=Number(prompt("Ingrese el precio original del artículo 2"));
while (isNaN(precioArt2)|| precioArt2<=0|| precioArt2==""){
    precioArt2=Number(prompt("Dato no válido.\nIngrese nuevamente el valor."));
}
let formaPagoArt2=Number(prompt("Ingrese la forma de pago del artículo 2. Para contado ingresar '1', para pago a crédito ingresar '2'"));

while(isNaN(formaPagoArt2)|| ((formaPagoArt2!=1)&& (formaPagoArt2!=2))){
    formaPagoArt2=Number(prompt("Dato inválido.\nIngrese la forma de pago del artículo 2. Para contado ingresar '1', para pago a crédito ingresar '2'"));
}

let articulo3= prompt("Ingrese el articulo 3");
while (articulo2==""){
    articulo2=prompt("Ingrese un nombre para el articulo 3")
}
let precioArt3=Number(prompt("Ingrese el precio original del artículo 3"));
while (isNaN(precioArt3)|| precioArt3<=0|| precioArt3==""){
    precioArt3=Number(prompt("Dato no válido.\nIngrese nuevamente el valor."));
}
let formaPagoArt3=Number(prompt("Ingrese la forma de pago del artículo 3. Para contado ingresar '1', para pago a crédito ingresar '2'"));

while(isNaN(formaPagoArt3)|| ((formaPagoArt3!=1)&& (formaPagoArt3!=2))){
    formaPagoArt3=Number(prompt("Dato inválido.\nIngrese la forma de pago del artículo 3. Para contado ingresar '1', para pago a crédito ingresar '2'"));
}

let articulo4= prompt("Ingrese el articulo 4");
while (articulo4==""){
    articulo4=prompt("Ingrese un nombre para el articulo 4")
}
let precioArt4=Number(prompt("Ingrese el precio original del artículo 4"));
while (isNaN(precioArt4)|| precioArt4<=0|| precioArt4==""){
    precioArt4=Number(prompt("Dato no válido.\nIngrese nuevamente el valor."));
}
let formaPagoArt4=Number(prompt("Ingrese la forma de pago del artículo 4. Para contado ingresar '1', para pago a crédito ingresar '2'"));

while(isNaN(formaPagoArt4)|| ((formaPagoArt4!=1)&& (formaPagoArt4!=2))){
    formaPagoArt4=Number(prompt("Dato inválido.\nIngrese la forma de pago del artículo 4. Para contado ingresar '1', para pago a crédito ingresar '2'"));
}

if(formaPagoArt1==1){
    descArt1=precioArt1-(precioArt1*0.1);
}else{
    descArt1=precioArt1-(precioArt1*0.2);
}

if(formaPagoArt2==1){
    descArt2=precioArt2-(precioArt2*0.1);
}else{
    descArt2=precioArt2-(precioArt2*0.2);
}

if(formaPagoArt3==1){
    descArt3=precioArt3-(precioArt3*0.1);
}else{
    descArt3=precioArt3-(precioArt3*0.2);
}

if(formaPagoArt4==1){
    descArt4=precioArt4-(precioArt4*0.1);
}else{
    descArt4=precioArt4-(precioArt4*0.2);
}


alert(`NOMBRE      ORIGINAL RG4L     DESCUENTO
${articulo1}          ${precioArt1}         ${descArt1}
${articulo2}          ${precioArt2}          ${descArt2}
${articulo3}          ${precioArt3}          ${descArt3}
${articulo4}          ${precioArt4}          ${descArt4}`);
