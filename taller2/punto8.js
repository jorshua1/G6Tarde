let presupuesto = Number(prompt("INGRESE EL VALOR DEL PRESUPUESTO ANUAL"));
let psiquiatría = Number(prompt("INGRESE EL PORCENTAJE DEL PRESUPUESTO PARA EL AREA DE PSIQUIATRÍA"));
let pediatría = Number(prompt("INGRESE EL PORCENTAJE DEL PRESUPUESTO PARA EL AREA DE PEDIATRÍA"));
let traumología = Number(prompt("INGRESE EL PORCENTAJE DEL PRESUPUESTO PARA EL AREA DE TRAUMOLOGÍA"));
let porcentaje = psiquiatría+pediatría+traumología;

if(isNaN(psiquiatría) || psiquiatría < 0){
    console.log("ERROR");
}else if(isNaN(pediatría) || pediatría < 0){
    console.log("ERROR");
}else if(isNaN(traumología) || traumología < 0){
    console.log("ERROR");
}else if(presusiqui = presupuesto*psiquiatría/100){
    console.log("PORCENTAJER DEL AREA DE PSQUIATRÍA ES: "+psiquiatría);
    console.log("SU PRESUPUESTO DE ES DE: "+presusiqui);
}else if(presupedi = presupuesto*pediatría/100){
    console.log("PORCENTAJER DEL AREA DE PEDIATRÍA ES: "+pediatría);
    console.log("SU PRESUPUESTO DE ES DE: "+pediatría);
}else if(presutrau = presupuesto*traumología/100){
    console.log("PORCENTAJER DEL AREA DE TRAUMOLOGÍA ES: "+traumología);
    console.log("SU PRESUPUESTO DE ES DE: "+presutrau);
    console.log("PORCENTAJE TOTAL ES: "+porcentaje);

}else{
    console.log("ERROR");
}
