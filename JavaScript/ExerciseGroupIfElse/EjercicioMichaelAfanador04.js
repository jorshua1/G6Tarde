/*Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos ingresos iguales 
o superiores a 1000 € mensuales. Escribir un programa que pregunte al usuario su edad y sus ingresos 
mensuales y muestre por pantalla si el usuario tiene que tributar o no.*/

let vAge = Number(prompt("Ingrese su edad"));
let vCash = parseInt(prompt("Ingrese su salario mensual"));

if ((vAge > 16) & (vCash >= 1000)) {
    alert("Estimado usuario tiene una edad de "+ vAge +"\n Con un salario de = $"+ vCash +"\n DEBE TRIBUTAR");
}
else {
    alert("Estimado usuario tiene una edad de "+ vAge +"\n Con un salario de = $"+ vCash +"\n NO DEBE TRIBUTAR");
}