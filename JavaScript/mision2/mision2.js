let eva1=parseFloat(prompt("Ingrese nota evaluacion 1"));
if (isNaN(eva1) || eva1>5){
    alert("Error, digite la nota en el rango de 1 a 5")
}else{
    let eva2=parseFloat(prompt("Ingrese nota evaluacion 2"));
    if (isNaN(eva2) || eva2>5){
        alert("Error, digite la nota en el rango de 1 a 5")
    }else{
        let eva3=parseFloat(prompt("Ingrese nota evaluacion 3"));
        if(isNaN(eva3)|| eva3>5){
        alert("Error, digite la nota en el rango de 1 a 5")
    }else{
        let promEva=(((eva1+eva2+eva3)/3)*55)/100
        alert("Porcentaje nota de evaluaciones: " + promEva)
        let tra1=parseFloat(prompt("Ingrese nota trabajo1"));
        if(isNaN(tra1) || tra1>5){
            alert("Error, digite la nota en el rango de 1 a 5")
        }else{
            let tra2=parseFloat(prompt("Ingrese nota trabajo 2"));
            if(isNaN(tra2) || tra2>5){
                alert("Error, digite la nota en el rango de 1 a 5")
            }else{
                let promTra=(((tra1+tra2)/2)*15)/100
                alert("Porcetaje nota trabajos: " + promTra)
                let examFinal=parseFloat(prompt("Ingrese nota de examen final"));
                if (isNaN(examFinal) || examFinal>5){
                    alert("Error, digite la nota en el rango de 1 a 5")
                }else{
                    let promExam=((examFinal)*20)/100
                    alert("Porcentaje nota examen: " + promExam)
                    let autoEva=parseFloat(prompt("Ingrese nota de auto evaluacion del estudiante"));
                    if (isNaN(autoEva) || autoEva>5){
                        alert("Error, digite la nota en el rango de 1 a 5")
                    }else{
                          let coEva=parseFloat(prompt("Ingrese nota de co evaluacion del profesor"));
                          if (isNaN(coEva) || coEva>5){
                            alert("Error, digite la nota en el rango de 1 a 5")
                          }else{
                            let promAutoEva=((((autoEva+coEva)/2))*10)/100
                            alert("Porcentaje nota autoevaluacion: " + promAutoEva)
                            let notaFINAL=(promEva+promTra+promExam+promAutoEva)
                            if (notaFINAL>=3){
                                alert("El estudiante aprobo el curso")
                                if(notaFINAL>=4.7 && notaFINAL<=5){
                                alert("Nivel: SUPERIOR  Nota: " + notaFINAL)
                            }else if (notaFINAL>=4 && notaFINAL<=4.6){
                                alert("Nivel: AlTO  Nota: " + notaFINAL)
                            }else if(notaFINAL>=3 && notaFINAL<=3.9){
                                alert("Nivel: BASICO Nota: " + notaFINAL)
                            }
                          }else if(notaFINAL>=2 && notaFINAL<=2.9){
                            alert("Nivel: BAJO Nota: " + notaFINAL)
                          }else if(notaFINAL<=1.9){
                            alert("Nivel: MUY BAJO  Nota:" + notaFINAL)
                          }
                    }
                }
            }
        }

    }
}
}
}