let compras = Number(prompt("Ingrese el valor de su compra"));
let descuento1=(compras*0.30);
let descuento2=(compras*0.20);
let totalpagar1=(compras-descuento1);
let totalpagar2=(compras-descuento2);

if(isNaN(compras)){
    alert("ERROR, alguno de los dos datos no es un número");
}else if(compras>=25000){
    alert("el total de su descuento es " + descuento1 + "y el total a pagar con descuento es: " + totalpagar1);
}else if(compras >=20000 && compras <25000){
    alert("el total de su descuento es " + descuento2 + "y el total a pagar con descuento es: " + totalpagar2);
}else if(compras<=20000){
    alert("Apreciado usuario, no tiene descuento por que su valar de la compra es meno a $20.000 el total a pagar es " + compras)
}
