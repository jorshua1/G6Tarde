let presupuesto = Number(prompt("Ingrese el presupuesto de la anual "));   
let porcentaje1 = Number(prompt("Ingrese el porcentaje de psiquiatria "));
let porcentaje2 = Number(prompt("Ingrese el porcentaje de pediatria "));
let porcentaje3 = Number(prompt("Ingrese el porcentaje de traumatologia "));
let obtenido1 , obtenido2 , obtenido3;
if(porcentaje1+porcentaje2+porcentaje3!==100){
    alert("Error.los porcentajes superan al 100%")
}else {
    obtenido1 = (presupuesto*porcentaje1)/100;
    obtenido2 = (presupuesto*porcentaje2)/100;
    obtenido3 = (presupuesto*porcentaje3)/100;
    alert("el presupuesto de la anual es de: " + presupuesto + " pesos. se le asigno un porcentaje de: " + porcentaje1 +
    "% para psiquiatria con un total de: $" + obtenido1 + " pesos. Un " + porcentaje2 + "% para pediatria y un total de" + obtenido2 +
    "y un " + porcentaje3 + "% para traumatologia con un total de: $" + obtenido3 + " pesos.");
}