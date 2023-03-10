let examen1 = parseInt(prompt("Ingrese la nota del primer examen"));

if (isNaN(examen1) || examen1<0 || examen1>5) {
    console.log("Error digito una nota invalida (0-5)");
} else {
    let examen2 = parseInt(prompt("Ingrese la nota del segundo examen"));
    if (isNaN(examen2) || examen2<0 || examen2>5) {
        console.log("Error digito una nota invalida (0-5)");
    } else {
        let examen3 = parseInt(prompt("Ingrese la nota del tercer examen"));
        if (isNaN(examen3) || examen3<0 || examen3>5) {
            console.log("Error digito una nota invalida (0-5)");
        } else {
            let trabajo1 = parseInt(prompt("Ingrese la nota del primer trabajo"));
            if (isNaN(trabajo1) || trabajo1<0 || trabajo1>5) {
                console.log("Error digito una nota invalida (0-5)");
            } else {
                let trabajo2 = parseInt(prompt("Ingrese la nota del segundo trabajo"));
                if (isNaN(trabajo2) || trabajo2<0 || trabajo2>5) {
                    console.log("Error digito una nota invalida (0-5)");
                } else {
                    let examenFinal = parseInt(prompt("Ingrese la nota del examen final"));
                    if (isNaN(examenFinal) || examenFinal<0 || examenFinal>5) {
                        console.log("Error digito una nota invalida (0-5)");
                    } else {
                        let autoEvaluacionEstudiate = parseInt(prompt("Ingrese la nota de la Autoevaluacion del alumno"));
                        if (isNaN(autoEvaluacionEstudiate) || autoEvaluacionEstudiate<0 || autoEvaluacionEstudiate>5 ) {
                            console.log("Error digito una nota invalida (0-5)");
                        } else {
                            let autoEvaluacionProfesor = parseInt(prompt("Ingrese la nota de la Co-evaluacion del profesor"));
                            if (isNaN(autoEvaluacionProfesor) || autoEvaluacionProfesor<0 || autoEvaluacionProfesor>5) {
                                console.log("Error digito una nota invalida (0-5)");
                            } else {
                                let promedioExamenes = (examen1+examen2+examen3)/3;
                                promedioExamenes = promedioExamenes*0.55;

                                let promedioTrabajos = (trabajo1+trabajo2)/2;
                                promedioTrabajos = promedioTrabajos*0.15;

                                let notaExamenFinal = examenFinal*0.2;

                                let promedioAutoevaluacion = (autoEvaluacionEstudiate+autoEvaluacionProfesor)/2;
                                promedioAutoevaluacion = promedioAutoevaluacion*0.1;

                                let notaFinal = promedioExamenes+promedioTrabajos+notaExamenFinal+promedioAutoevaluacion;

                                if (notaFinal >=0 && notaFinal <= 1.9) {
                                    console.log("Su nota es de: " +notaFinal);
                                    console.log("Su nivel es Muy bajo, no aprobo el curso");
                                } else {
                                    if (notaFinal >=2 && notaFinal <=2.9) {
                                        console.log("Su nota es de: " +notaFinal);
                                        console.log("Su nivel es Bajo, no aprobo el curso");
                                    } else {
                                        if (notaFinal >=3 && notaFinal <=3.9) {
                                            console.log("Su nota es de: " +notaFinal);
                                            console.log("Su nivel es Basico, aprobo el curso");
                                        } else {
                                            if (notaFinal >=4 && notaFinal <=4.6) {
                                                console.log("Su nota es de: " +notaFinal);
                                                console.log("Su nivel es Alto, aprobo el curso");
                                            } else {
                                                console.log("Su nota es de: " +notaFinal);
                                                console.log("Su nivel es Superior, aprobo el curso");
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                }
            }
        }
    }
}




