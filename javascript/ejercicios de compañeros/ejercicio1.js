/*una empresa tiene una promocion donde por compras mayores o iguales a 250000 da un 30% 
a la compra, por compras mayores o iguales a 200000 da un 20 % a la compra, si la compra 
es menor a 200000 no hay descuento y toca notificarle al usuario, si la compra es menor 
a 50000 agregar 2000 por Parqueadero*/
let compra=(parseInt(prompt("ingrese el valor total de la compra")));
if(isNaN(compra)){
    console.log("ingrese un valor valido")
}
    else if(compra>=250000){
        let descuento1=(compra*0.3);
        let total=compra-descuento1;
        console.log("su total a pagar es"+total)
    }
    else if(compra>=200000 && compra<=249999){
        let descuento2=(compra*0.2);
        let total1=(compra-descuento2);
        console.log("su total a pagar es"+total1)
    }
    else if(compra<200000 && compra>50000){
        console.log("su total a pagar es"+compra)
    }
    else if(compra<=50000){
        let parqueo=compra+2000;
        console.log("su total a pagar es"+parqueo)
    }

else{
    console.log("valor invalido")
    
}
