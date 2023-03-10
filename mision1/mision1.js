let examen1 = Number(prompt("¿Qué nota sacó en el 1er exámen? (Un valor de 0 a 5)"));
let examen2 = 0;
let examen3 = 0;
let promedioExamenes = 0;

let trabajo1 = 0;
let trabajo2 = 0;
let promedioTrabajos = 0;

let examenFinal= 0;

let autoevaluacion = 0;
let coevaluacion = 0;
let promedioAutoCoevaluacion = 0;

let notaDefinitiva = 0;

if((isNaN(examen1)) || (examen1<0) || (examen1>5)){
    alert("Error, la nota ingresada no es válida, el programa se reiniciará. Por favor ingrese únicamente valores entre 0 y 5"); 
}else{
    examen2 = Number(prompt("¿Qué nota sacó en el 2do exámen? (Un valor de 0 a 5)"));
    if((isNaN(examen2)) || (examen2<0) || (examen2>5)){
        alert("Error, la nota ingresada no es válida, el programa se reiniciará. Por favor ingrese únicamente valores entre 0 y 5");  
    }else{
        examen3 = Number(prompt("¿Qué nota sacó en el 3er exámen? (Un valor de 0 a 5)"));
        if((isNaN(examen3)) || (examen3<0) || (examen3>5)){
            alert("Error, la nota ingresada no es válida, el programa se reiniciará. Por favor ingrese únicamente valores entre 0 y 5");  
        }else{
            promedioExamenes = ((examen1+examen2+examen3)/3)*0.55
            alert("La nota promedio del estudiante obtenida en exámenes es de: " + promedioExamenes)
            trabajo1 = Number(prompt("¿Qué nota sacó en el 1er trabajo? (Un valor de 0 a 5)"));
            if((isNaN(trabajo1)) || (trabajo1<0) || (trabajo1>5)){
                alert("Error, la nota ingresada no es válida, el programa se reiniciará. Por favor ingrese únicamente valores entre 0 y 5"); 
            }else{
                trabajo2 = Number(prompt("¿Qué nota sacó en el 2do trabajo? (Un valor de 0 a 5)"));
                if((isNaN(trabajo2)) || (trabajo2<0) || (trabajo2>5)){
                    alert("Error, la nota ingresada no es válida, el programa se reiniciará. Por favor ingrese únicamente valores entre 0 y 5"); 
                }else{
                    promedioTrabajos = ((trabajo1+trabajo2)/2)*0.15
                    alert("La nota promedio del estudiante obtenida en trabajos es de: " + promedioTrabajos)
                    examenFinal = Number(prompt("¿Qué nota sacó en el exámen final? (Un valor de 0 a 5)"));
                    if((isNaN(examenFinal)) || (examenFinal<0) || (examenFinal>5)){
                        alert("Error, la nota ingresada no es válida, el programa se reiniciará. Por favor ingrese únicamente valores entre 0 y 5"); 
                    }else{
                        examenFinal = examenFinal*0.20
                        alert("La nota promedio del estudiante obtenida en el exámen final es de: " + examenFinal)
                        autoevaluacion = Number(prompt("¿Qué nota se le asignó en su autoevaluación con el docente? (Un valor de 0 a 5)"));
                        if((isNaN(autoevaluacion)) || (autoevaluacion<0) || (autoevaluacion>5)){
                            alert("Error, la nota ingresada no es válida, el programa se reiniciará. Por favor ingrese únicamente valores entre 0 y 5"); 
                        }else{
                            coevaluacion = Number(prompt("¿Qué nota se le asignó en su coevaluación con todo el grupo? (Un valor de 0 a 5)"));
                            if((isNaN(coevaluacion)) || (coevaluacion<0) || (coevaluacion>5)){
                                alert("Error, la nota ingresada no es válida, el programa se reiniciará. Por favor ingrese únicamente valores entre 0 y 5");  
                            }else{
                                promedioAutoCoevaluacion = ((autoevaluacion+coevaluacion)/2)*0.10
                                alert("La nota promedio del estudiante obtenida en la auto y coevaluacion es de " + promedioAutoCoevaluacion)
                                notaDefinitiva = promedioExamenes + promedioTrabajos + examenFinal + promedioAutoCoevaluacion
                                if(notaDefinitiva >= 4.7){
                                    alert("Promedio exámenes: " + promedioExamenes + "\nPromedio trabajos: " + promedioTrabajos + "\nPromedio examen final: " + examenFinal + "\nPromedio AutoCoevalaución: " + promedioAutoCoevaluacion + "\n\nEl estudiante se encuentra en el nivel Superior con una definitiva de: " + notaDefinitiva + "\nEl estudiante aprueba el curso.")
                                }else if((notaDefinitiva >= 4.0) && (notaDefinitiva < 4.7)){
                                    alert("Promedio exámenes: " + promedioExamenes + "\nPromedio trabajos: " + promedioTrabajos + "\nPromedio examen final: " + examenFinal + "\nPromedio AutoCoevalaución: " + promedioAutoCoevaluacion + "\n\nEl estudiante se encuentra en el nivel Alto con una definitiva de: " + notaDefinitiva + "\nEl estudiante aprueba el curso.")
                                }else if((notaDefinitiva >= 3.0) && (notaDefinitiva < 4.0)){
                                    alert("Promedio exámenes: " + promedioExamenes + "\nPromedio trabajos: " + promedioTrabajos + "\nPromedio examen final: " + examenFinal + "\nPromedio AutoCoevalaución: " + promedioAutoCoevaluacion + "\n\nEl estudiante se encuentra en el nivel Básico con una definitiva de: " + notaDefinitiva + "\nEl estudiante aprueba el curso.")
                                }else if((notaDefinitiva >= 2.0) && (notaDefinitiva < 3.0)){
                                    alert("Promedio exámenes: " + promedioExamenes + "\nPromedio trabajos: " + promedioTrabajos + "\nPromedio examen final: " + examenFinal + "\nPromedio AutoCoevalaución: " + promedioAutoCoevaluacion + "\n\nEl estudiante se encuentra en el nivel Bajo con una definitiva de: " + notaDefinitiva + "\nEl estudiante reprueba el curso.") 
                                }else if(notaDefinitiva < 2.0){
                                    alert("Promedio exámenes: " + promedioExamenes + "\nPromedio trabajos: " + promedioTrabajos + "\nPromedio examen final: " + examenFinal + "\nPromedio AutoCoevalaución: " + promedioAutoCoevaluacion + "\n\nEl estudiante se encuentra en el nivel Muy bajo con una definitiva de: " + notaDefinitiva + "\nEl estudiante reprueba el curso.") 
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
