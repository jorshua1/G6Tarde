/*Para tributar un determinado impuesto se debe ser mayor de 16 años
y tener unos ingresos iguales o superiores a 1000 € mensuales. 
Escribir un programa que pregunte al usuario su edad y sus ingresos mensuales 
y muestre por pantalla si el usuario tiene que tributar o no.*/

let edad = parseInt(prompt("Ingrese su edad"));
let ingresoM = Number(prompt("Ingrese el valor de su iongreso mensual"));
if(isNaN(edad, ingresoM)){
    console.log("¡ERROR!");
}else if(edad>16 && ingresoM>=1000){
    console.log("Usted tiene que tributar");
}else{
    console.log("No tiene que tributar");
}