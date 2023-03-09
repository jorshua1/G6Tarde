let numero=Number(prompt("Ingrese el total de su llamada"));

if (isNaN(numero)){
    alert("Ingrese un numero valido");
}else if (numero<=3){
    alert("El total a pagar es "+numero*200);
}else{
    let adicional=numero-3;
    alert("El total a pagar es "+((3*200)+(adicional*100)));
}