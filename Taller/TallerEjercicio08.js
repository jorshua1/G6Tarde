//-------------------------EJERCICIO #8---------------------------
{
    let vPromedioMateriaTotal;

    let vPromedioMateria01; //Matematicas
    let vExamenMate = parseFloat(prompt("Ingrese la nota del examen de Matematicas"));
    let vPorcentajeExamenMate = vExamenMate * 0.90;
        let vTareaMate01 = parseFloat(prompt("Ingrese la tarea#1 de Matematicas"));
		let vTareaMate02 = parseFloat(prompt("Ingrese la tarea#2 de Matematicas"));
		let vTareaMate03 = parseFloat(prompt("Ingrese la tarea#3 de Matematicas"));
		    let vPromedioTareaMate = (vTareaMate01 + vTareaMate02 + vTareaMate03) / 3;
    let vPorcentajeTareaMate = vPromedioTareaMate * 0.10;
    let vPromedioMateriaMate = (vPorcentajeExamenMate + vPorcentajeTareaMate);
    

    let vPromedioMateria02; //Fisica
    let vExamenFisi = parseFloat(prompt("Ingrese la nota del examen de Fisica"));
    let vPorcentajeExamenFisi = vExamenFisi * 0.80;
        let vTareaFisi01 = parseFloat(prompt("Ingrese la tarea#1 de Fisica"));
		let vTareaFisi02 = parseFloat(prompt("Ingrese la tarea#2 de Fisica"));
		    let vPromedioTareaFisi = (vTareaFisi01 + vTareaFisi02) / 2;
    let vPorcentajeTareaFisi = vPromedioTareaFisi * 0.20;
    let vPromedioMateriaFisi = (vPorcentajeExamenFisi + vPorcentajeTareaFisi);
    

    let vPromedioMateria03; //Quimica
    let vExamenQuimi = parseFloat(prompt("Ingrese la nota del examen de Quimica"));
    let vPorcentajeExamenQuimi = vExamenQuimi * 0.85;
        let vTareaQuimi01 = parseFloat(prompt("Ingrese la tarea#1 de Quimica"));
		let vTareaQuimi02 = parseFloat(prompt("Ingrese la tarea#2 de Quimica"));
        let vTareaQuimi03 = parseFloat(prompt("Ingrese la tarea#3 de Quimica"));
		    let vPromedioTareaQuimi = (vTareaQuimi01 + vTareaQuimi02) / 2;
    let vPorcentajeTareaQuimi = vPromedioTareaQuimi * 0.15;
    let vPromedioMateriaQuimi = (vPorcentajeExamenQuimi + vPorcentajeTareaQuimi);
    

    vPromedioMateriaTotal = (vPromedioMateriaMate + vPromedioMateriaFisi + vPromedioMateriaQuimi) / 3;

    alert("El promedio de Matematicas es = " + vPromedioMateriaMate + '\n' + "El promedio de Fisica es = " + vPromedioMateriaFisi + '\n' + "El promedio de Quimica es = " + vPromedioMateriaQuimi + '\n' + "Promedio total de las Materias = " + vPromedioMateriaTotal);

}