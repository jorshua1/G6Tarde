let nombre = prompt("Ingrese el nombre del estudiante. ");
let examen1 = parseFloat(prompt("Ingrese la primer nota de los examenes correspondientes del 55%. "));

if (isNaN(examen1) || examen1 < 0 || examen1 > 5) {
    alert("Por favor revise la nota e ingresela de nuevo. \n\nRecuerde que la nota minima es de 0.0 y la nota maxima es 5.0. ")
} else {
    let examen2 = parseFloat(prompt("Ingrese la segunda nota de los examenes correspondientes del 55%. "));
    if (isNaN(examen2) || examen2 < 0 || examen2 > 5) {
        alert("Por favor revise la nota e ingresela de nuevo. \n\nRecuerde que la nota minima es de 0.0 y la nota maxima es 5.0. ");
    } else {
        let examen3 = parseFloat(prompt("Ingrese la tercer nota de los examenes correspondientes dell 55%. "));
        if (isNaN(examen3) || examen3 < 0 || examen3 > 5) {
            alert("Por favor revise la nota e ingresela de nuevo. \n\nRecuerde que la nota minima es de 0.0 y la nota maxima es 5.0. ");
        } else {
            let trabajos1 = parseFloat(prompt("Ingrese la primera nota de los trabajos correspondientes al 15%. "));
            if (isNaN(trabajos1) || trabajos1 < 0 || trabajos1 > 5) {
                alert("Por favor revise la nota e ingresela de nuevo. \n\nRecuerde que la nota minima es de 0.0 y la nota maxima es 5.0. ");
            } else {
                let trabajos2 = parseFloat(prompt("Ingrese las primera nota de los trabajos correspondientes al 15%. "));
                if (isNaN(trabajos2) || trabajos2 < 0 || trabajos2 > 5) {
                    alert("Por favor revise la nota e ingresela de nuevo. \n\nRecuerde que la nota minima es de 0.0 y la nota maxima es 5.0. ");
                } else {
                    let examenFinal = parseFloat(prompt("Ingrese la nota del examen final correspondiente al 20%. "));
                    if (isNaN(examenFinal) || examenFinal < 0 || examenFinal > 5) {
                        alert("Por favor revise la nota e ingresela de nuevo. \n\nRecuerde que la nota minima es de 0.0 y la nota maxima es 5.0. ");
                    } else {
                        let autoEva = parseFloat(prompt("Ingrese la nota de autoevaluacion (realizada por el estudiante). "));
                        if (isNaN(autoEva) || autoEva < 0 || autoEva > 5) {
                            alert("Por favor revise la nota e ingresela de nuevo. \n\nRecuerde que la nota minima es de 0.0 y la nota maxima es 5.0. ");
                        } else {
                            let coEva = parseFloat(prompt("Ingrese la nota de co-evaluacion (realizada por el docente). "));
                            if (isNaN(coEva) || coEva < 0 || coEva > 5) {
                                alert("Por favor revise la nota e ingresela de nuevo. \n\nRecuerde que la nota minima es de 0.0 y la nota maxima es 5.0. ");
                            } else {

                                let promedioExamenes = ((examen1 + examen2 + examen3) * 0.55) / 3;
                                let promedioTrabajos = ((trabajos1 + trabajos2) * 0.15) / 2;
                                examenFinal = examenFinal * 0.20;
                                let promedioAutoEvaCoEva = ((autoEva + coEva) * 0.10) / 2;
                                let notaFinal = (promedioExamenes + promedioTrabajos + examenFinal + promedioAutoEvaCoEva);

                                if (notaFinal >= 0 && notaFinal < 2) {
                                    alert("El estudiante " + nombre + " reprobo el curso, con un nivel Muy bajo \nSu nota final es de: " + notaFinal);
                                } else if (notaFinal >= 2 && notaFinal < 3) {
                                    alert("El estudiante " + nombre + " reprobo el curso, con un nivel Bajo \nSu nota final es de: " + notaFinal);
                                } else if (notaFinal >= 3 && notaFinal < 4) {
                                    alert("El estudiante " + nombre + " aprobo el curso, con un nivel Basico \nSu nota final es de: " + notaFinal);
                                } else if (notaFinal >= 4 && notaFinal <= 4.6) {
                                    alert("El estudiante " + nombre + " aprobo el curso, con un nivel Alto \nSu nota final es de: " + notaFinal);
                                } else {
                                    alert("El estudiante " + nombre + " aprobo el curso, con un nivel Superior \nSu nota final es de: " + notaFinal);
                                }

                            }
                        }
                    }
                }
            }
        }

    }
}










