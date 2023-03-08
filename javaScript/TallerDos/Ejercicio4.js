let llamada = parseInt(prompt("Ingrese el tiempo que duro la llamda "));
let cobro = 0;

if (isNaN(llamada) || llamada<=0){
    alert("Ingrese datos validos")
}else if(llamada <= 3 ){
    cobro += 200;
    alert("El coste de la llamada tiene un cobro de " + cobro);
}else{
    cobro = 200 + ((llamada - 3 )*100);
    alert("El coste de la llamada tiene un cobro de " + cobro);
}