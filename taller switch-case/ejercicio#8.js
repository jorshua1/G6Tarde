let presupuestoanual= parseFloat(prompt("Ingrese el valor del presupuesto anual en pesos ($) del Hospital (Mis primeros Muertos)"));
let prePsicologia= parseFloat(prompt("Ingrese el numero del % para el presupuesto del area de Psicologia"));
let prePediatria= parseFloat(prompt("Ingrese el numero del % para el presupuesto del area de Pediatria"));
let preTraumatologia= parseFloat(prompt("Ingrese el numero del % para el presupuesto del area de Traumatologia"));
let sumadeporcentajes = (prePsicologia+prePediatria+preTraumatologia);

if ((isNaN(presupuestoanual)|| isNaN (prePsicologia)|| isNaN(prePediatria)|| isNaN(preTraumatologia))){
    alert("ERROR, alguno de los dos datos ingresados no son numeros");
}else if(sumadeporcentajes===100){
    alert("El porcentaje para el area de Psicologia fue de: "+prePsicologia+"%" + "El porcentaje para el area de Pediatria fue de: "+prePediatria+"%" + "El porcentaje para el area de Traumatologia fue de: "+preTraumatologia+"%");
}else{
    alert("El valor de las notas que esta ingresando no cumple los criterios de Nota Minima >=1.0 y Nota Maxima <=5.0 verifique nuevamente");
}