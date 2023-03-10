let nombre = prompt("Ingrese el nombre del estudiante. ");
let examen1 = parseFloat(prompt("Ingrese la nota de su primer examen: "));
if (examen1<0 || examen1 >=6||isNaN(examen1)) {
    alert("La nota de su examen que ingreso es invalida, el rango es de 0 a 5 intentelo de nuevo");
} else {
    let examen2 = parseFloat(prompt("Ingrese la nota de su segundo examen: "));
    if (isNaN(examen2)||examen2<0||examen2>=6) {
        alert("La nota de su examen que ingreso es invalida, el rango es de 0 a 5 intentelo de nuevo");
    } else {
        let examen3 = parseFloat(prompt("Ingrese la nota de su tercer examen: "));
        if (isNaN(examen3)||examen3<0||examen3>=6) {
            alert("La nota de su examen que ingreso es invalida, el rango es de 0 a 5 intentelo de nuevo");
        } else {
            let trabajo1 = parseFloat(prompt("Ingrese la nota de su primer trabajo: "));
            if (isNaN(trabajo1)||trabajo1<0||trabajo1>=6) {
                alert("La nota de su trabajo que ingreso es invalida, el rango es de 0 a 5 intentelo de nuevo");
            } else {
                let trabajo2 = parseFloat(prompt("Ingrese la nota de su segundo trabajo: "));
                if (isNaN(trabajo2)||trabajo2<0||trabajo2>=6) {
                    alert("La nota de su trabajo que ingreso es invalida, el rango es de 0 a 5 intentelo de nuevo");
                } else {
                    let notaExamenFinal = parseFloat(prompt("Ingrese la nota de su Examen Final: "));
                    if (isNaN(notaExamenFinal)||notaExamenFinal<0||notaExamenFinal>=6) {
                        alert("La nota de su Examen Final que ingreso es invalida, el rango es de 0 a 5 intentelo de nuevo");
                    } else {
                        let notaAutoEva = parseFloat(prompt("Estimado estudiante ingrese la Nota de Autoevaluacion"));
                        if (isNaN(notaAutoEva)||notaAutoEva<0||notaAutoEva>=6) {
                            alert("La nota de AutoEvaluacion que ingreso es invalida, el rango es de 0 a 5 intentelo de nuevo");
                        } else {
                            let notaCoeEva = parseFloat(prompt("Estimado Docente ingrese la nota de Co-Evaluacion"));
                            if (isNaN(notaCoeEva)||notaCoeEva<0||notaCoeEva>=6) {
                                alert("La nota de Coe-Evaluacion que ingreso es invalida, el rango es de 0 a 5 intentelo de nuevo");
                            } else {
                                let promExamen = ((examen1 + examen2 + examen3)/3)*0.55;
                                let promTrabajos = ((trabajo1 + trabajo2)/2)*0.15;
                                notaExamenFinal = (notaExamenFinal*0.20);
                                let promAutoEvaCoEva = ((notaAutoEva + notaCoeEva)/2)*0.10;
                                let promNotas = (promExamen + promTrabajos + notaExamenFinal + promAutoEvaCoEva);
                                if (promNotas>=4.7 && promNotas<=5.0) {
                                    alert("Estimado Estudiante " + nombre + " Curso con un nivel Muy Superior \n Su nota final es de: " + promNotas);
                                } else if (promNotas>=4.0 && promNotas<=4.6) {
                                    alert("Estimado Estudiante " + nombre + " Curso con un nivel Alto \n Su nota final es de: " + promNotas);
                                } else if (promNotas>=3.0 && promNotas<=3.9) {
                                    alert("Estimado Estudiante " + nombre + " Curso con un nivel Basico \n Su nota final es de: " + promNotas);
                                } else if (promNotas>=2.0 && promNotas<=2.9) {
                                    alert("Estimado Estudiante " + nombre + " Curso con un nivel Bajo \n Su nota final es de: " + promNotas);
                                } else if (promNotas>=0 && promNotas<=1.9) {
                                    alert("Estimado Estudiante " + nombre + " Curso con un nivel Muy Bajo \n Su nota final es de: " + promNotas);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

