let hospital = prompt("Ingrese el nombre del hospital");
let presupuestoAnual = Number(prompt("Indique cuál es el presupuesto anual del hospital " + hospital));
let porPsiquiatría = 0;
let porPediatría = 0;
let porTraumatología = 0;

let presupuestoPsiquiatría = 0;
let presupuestoPediatría = 0;
let presupuestoTraumatología = 0;

if((isNaN(presupuestoAnual)) || (presupuestoAnual<=0)){
    alert("Por favor, ingrese un presupuesto válido");
}else{
    porPsiquiatría = Number(prompt("¿Cuál es el porcentaje de presupuesto para el área de Psiquiatría? \n(Un número entre 0 y 100)"));
    porPediatría = Number(prompt("¿Cuál es el porcentaje de presupuesto para el área de Pediatría? \n(Un número entre 0 y 100)"));
    porTraumatología = Number(prompt("¿Cuál es el porcentaje de presupuesto para el área de Traumatología? \n(Ingrese un número entre 0 y 100)"));
    if((isNaN(porPsiquiatría)) || (isNaN(porPediatría)) || (isNaN(porTraumatología)) || (porPsiquiatría<0) || (porPediatría<0) || (porTraumatología<0) || (porPsiquiatría>100) || (porPediatría>100) || (porTraumatología>100)){
        alert("ERROR. Alguno de los porcentajes indicados es inválido. \nPor favor, ingrese un porcentaje válido");
    }else{
        presupuestoPsiquiatría = presupuestoAnual*(porPsiquiatría/100);
        presupuestoPediatría = presupuestoAnual*(porPediatría/100);
        presupuestoTraumatología = presupuestoAnual*(porTraumatología/100);
        if((presupuestoPsiquiatría+presupuestoPediatría+presupuestoTraumatología) !== presupuestoAnual){
            alert("La suma de los porcentajes indicados por área no coinciden con el 100% del presupuesto anual total. Por favor, inténtelo de nuevo.");
        }else{
            alert("Psiquiatría\nPorcentaje del presupuesto anual: " + porPsiquiatría + "% \nPresupuesto del área: " + presupuestoPsiquiatría + "$ \n\nPediatría\nPorcentaje del presupuesto anual: " + porPediatría + "% \nPresupuesto del área: " + presupuestoPediatría + "$ \n\nTraumatología\nPorcentaje del presupuesto anual: " + porTraumatología + "% \nPresupuesto del área: " + presupuestoTraumatología + "$\n\nPresupuesto total: " + presupuestoAnual + "$")
        }
    }
}