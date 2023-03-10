let examen1 = Number(prompt("Ingrese la nota del primer examen"));
if (!isNaN(examen1) && (examen1 >= 0 && examen1 <= 5)) {
    let examen2 = Number(prompt("Ingrese la nota del segundo examen"));
    if (!isNaN(examen2) && (examen2 >= 0 && examen2 <= 5)) {
        let examen3 = Number(prompt("Ingrese la nota del tercer examen"));
        if (!isNaN(examen3) && (examen3 >= 0 && examen3 <= 5)) {
            let trabajo1 = Number(prompt("Ingrese la nota del primer trabajo"));
            if (!isNaN(trabajo1) && (trabajo1 >= 0 && trabajo1 <= 5)) {
                let trabajo2 = Number(prompt("Ingrese la nota del segundo trabajo"));
                if (!isNaN(trabajo2) && (trabajo2 >= 0 && trabajo2 <= 5)) {
                    let examenf = Number(prompt("Ingrese la nota del examen final"));
                    if (!isNaN(examenf) && (examenf >= 0 && examenf <= 5)) {
                        let autoevaluacion = Number(prompt("Ingrese la nota de la autoevaluacion"));
                        if (!isNaN(autoevaluacion) && (autoevaluacion >= 0 && autoevaluacion <= 5)) {
                            let coevaluacion = Number(prompt("Ingrese la nota de la coevaluacion"));
                            if (!isNaN(coevaluacion) && (coevaluacion >= 0 && coevaluacion <= 5)) {
                                let examenesP = (((examen1 + examen2 + examen3) / 3) * 0.55);
                                console.log(examenesP);
                                let trabajosP = (((trabajo1 + trabajo2) / 2) * 0.15);
                                let examenF = (examenf * 0.20);
                                let autoevaluacionesP = (((autoevaluacion + coevaluacion) / 2) * 0.10)
                                let notaFinal = (examenesP + trabajosP + examenF + autoevaluacionesP)
                                alert(notaFinal)
                                if (notaFinal >= 0 && notaFinal <= 1.9) {
                                    alert("El estudiante reprobó con un nivel muy bajo")
                                } else if (notaFinal > 2 && notaFinal <= 2.9) {
                                    alert("El estudiante reprobó con un nivel bajo")
                                } else if (notaFinal > 3 && notaFinal <= 3.9) {
                                    alert("El estudiante aprobó con un nivel basico")
                                } else if (notaFinal > 4 && notaFinal <= 4.6) {
                                    alert("El estudiante aprobó con un nivel alto")
                                } else if (notaFinal > 4.7 && notaFinal <= 5) {
                                    alert("El estudiante aprobó con un nivel Superior")
                                }
                            }
                        } else {
                            alert("error, ingrese una nota valida");
                        }
                    } else {
                        alert("error, ingrese una nota valida");
                    }
                } else {
                    alert("error, ingrese una nota valida");
                }
            } else {
                alert("error, ingrese una nota valida");
            }
        } else {
            alert("error, ingrese una nota valida");
        }
    } else {
        alert("error, ingrese una nota valida");
    }
} else {
    alert("error, ingrese una nota valida");
}