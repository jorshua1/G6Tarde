let tiempo = parseInt(prompt("Por favor ingresar la cantidad de tiempo registrada en minutos: "));
let operacion;
let cant;

if (tiempo <= 3){
    alert("el valor de la llamada cuesta: "+200+" pesos");
}else if (tiempo > 3){
    operacion = tiempo - 3;
    cant = 200 + (operacion * 100);
    alert("el valor de la llamada cuesta: "+cant+" pesos");
}else{
    alert("el valor ingresado es invalido");
}