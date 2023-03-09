let presupuestoAnual=Number(prompt("Ingrese su presupuesto anual"));
let porcPsiquiatria=Number(prompt("Ingrese el porcentaje que le corresponde a Psiquiatría: "));
if (isNaN(porcPsiquiatria)|| porcPsiquiatria<=0|| porcPsiquiatria>100){
    alert("Error, porcentaje no válido");
}else{
    let porcPediatria=Number(prompt("Ingrese el porcentaje que le corresponde a pediatría: "));
    if (isNaN(porcPediatria)|| porcPediatria>100||porcPediatria<=0||(porcPediatria+porcPsiquiatria)>100){
        alert("Error, porcentaje no válido.");
    }else{
        let porcTraumatologia=Number(prompt("Ingrese el porcentaje que le corresponde a traumatología: "));
        if(isNaN(porcTraumatologia)||porcTraumatologia<=0||porcTraumatologia>100||(porcPediatria+porcPsiquiatria+porcTraumatologia)>100){
            alert("Error, porcentaje no válido.");
        }else{
            alert("El presupuesto anual fue de: "+presupuestoAnual+"\nEl porcentaje de Psiquiatría fue de "+porcPsiquiatria+" y le correspondió un presupuesto de: "+((presupuestoAnual*porcPsiquiatria)/100)+"\nEl porcentaje de Pediatría fue de "+porcPediatria+" y le correspondió un presupuesto de: "+((presupuestoAnual*porcPediatria)/100)+"\nEl porcentaje de Traumatología fue de "+porcTraumatologia+" y le correspondió un presupuesto de: "+((presupuestoAnual*porcTraumatologia)/100));
        }
    }
}