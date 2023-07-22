/*una empresa tiene una promocion donde por compras mayores o iguales a 250000 da un 30% de descuento a la compra, por compras mayores o 
iguales a 200000 da un 20 % de descuento a la compra, si la compra es menor a 200000
 no hay descuento y toca notificarle al usuario, si la compra es menor a 50000 agregar 2000 por Parqueadero*/

 let compra= Number(prompt("ingrese el precio de la compra"));
 let Total
 if(compra>=250000){
    Total=compra-(compra*0.3) ;   
} else if(compra>=200000){
    Total=compra-(compra*0.2) ;
} else if(compra<200000 && compra>=50000){
    alert("no hay descuento su compra tiene un valor de"+Total);
} else if(compra<50000){
    Total=compra+2000
}alert("Su compra tiene un valor de "+Total);

/*crear un algoritmo que compruebe la estacion en la que se encuentra un mes, para saber si el mes esta en verano, otoño, primavera, invierno.*/
let mes=prompt("ingrese el mes");
if(mes=="marzo" || mes=="abril" || mes=="mayo"){
    alert("el mes esta en primavera");
} else if(mes=="junio" || mes=="julio" || mes=="agosto"){
    alert("el mes esta en verano");
} else if(mes=="septiembre" || mes=="octubre" || mes=="noviembre"){
    alert("el mes esta en otoño");
} else if (mes=="diciembre"|| mes=="enero" || mes=="febrero"){
    alert("el mes esta en invierno");
}

/*determinar el tipo de triangulo segun la medida de sus lados: escaleno, iscoceles o equilatero*/
let lado1=Number(prompt("ingrese el lado 1"));