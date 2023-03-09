let presupuesto= parseFloat(prompt("Ingrese el valor del presupuesto anual"));
let Psicologia= parseFloat(prompt("Ingrese el porcentaje para el presupuesto del area de Psicologia"));
let Pediatria= parseFloat(prompt("Ingrese el porcentaje para el presupuesto del area de Pediatria"));
let Traumatologia = parseFloat(prompt("Ingrese el porcentaje para el presupuesto del area de Traumatologia"));
let total = (Psicologia+Pediatria+Traumatologia);
let presupuestoPsicologia = ((Psicologia*presupuesto)/100);
let presupuestoPediatria = ((Pediatria*presupuesto)/100);
let presupuestoTraumatologia = ((Traumatologia*presupuesto)/100);

if ((isNaN(presupuesto)|| isNaN (Psicologia)|| isNaN(Pediatria)|| isNaN(Traumatologia) || presupuesto<=0 || presupuestoPediatria <0 || presupuestoPsicologia < 0 || presupuestoTraumatologia <0 )){
    alert("ERROR, alguno de los datos ingresados no son numeros");
}else if(total===100){
    alert("El porcentaje para el area de Psicologia fue de: "+Psicologia+" % con un valor de: " + presupuestoPsicologia+"\n\nEl porcentaje para el area de Pediatria fue de: "+Pediatria+" % con un valor de: " + presupuestoPediatria + "\n\nEl porcentaje para el area de Traumatologia fue de: "+Traumatologia+" % con un valor de: " + presupuestoTraumatologia);
}else{
    alert("El presupuesto repartido en las tres areas no corresponde al 100% del presupuesto anual \n\nEl porcentaje de Psicologia es: " + presupuestoPsicologia + "\nEl area de Pediatria es: " + presupuestoPediatria + "\nEl area de Traumatologia es: " + presupuestoTraumatologia)
}