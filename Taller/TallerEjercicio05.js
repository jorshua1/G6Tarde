//-------------------------EJERCICIO #5----------------------------

{
    let vPromedio, vSumNotas; 
    let vNota01 = parseFloat(prompt("Ingrese la primera nota"));
    let vNota02 = parseFloat(prompt("Ingrese la segunda nota"));
    let vNota03 = parseFloat(prompt("Ingrese la tercera nota"));
    let vNota04 = parseFloat(prompt("Ingrese la cuarta nota"));
    let vPorcentajeImportante;// = 0.6;
    let vPorcentajeRegular;// = 0.4;

    vPorcentajeImportante = (vNota01 + vNota02) * 0.6;
    vPorcentajeRegular = (vNota03 + vNota04) * 0.4;

        vSumNotas = (vPorcentajeImportante + vPorcentajeRegular) / 2;

        alert("El promedio total de las calificaciones es = " + vSumNotas);
}
    