let notaExamen1=parseFloat(prompt("Ingrese la nota del primer examen"));
if(isNaN(notaExamen1)||notaExamen1<0 || notaExamen1>5){
    alert("Error")
}else{
    let notaExamen2=parseFloat(prompt("Ingrese la nota del segundo examen"));
    if(isNaN(notaExamen2)||notaExamen2<0 || notaExamen2>5){
      alert("Error")  
    }else{
        let notaExamen3=parseFloat(prompt("Ingrese la nota del tercer examen"));
        if(isNaN(notaExamen3)||notaExamen3<0 || notaExamen3>5){
          alert("Error")  
        }else{
            let notaTrabajo1=parseFloat(prompt("Ingrese la nota del primer trabajo"));
            if(isNaN(notaTrabajo1)||notaTrabajo1<0 || notaTrabajo1>5){
              alert("Error")  
            }else{
                let notaTrabajo2=parseFloat(prompt("Ingrese la nota del segundo trabajo"));
                if(isNaN(notaTrabajo2)||notaTrabajo2<0 || notaTrabajo2>5){
                  alert("Error")  
                }else{
                    let examenFinal=parseFloat(prompt("Ingrese la nota del examen final"));
                    if(isNaN(examenFinal)||examenFinal<0 || examenFinal>5){
                      alert("Error")  
                    }else{
                        let autoevaluacion=parseFloat(prompt("Ingrese la nota de la autoevaluacion"));
                        if(isNaN(autoevaluacion)||autoevaluacion<0 || autoevaluacion>5){
                          alert("Error")  
                        }else{
                            let coevaluacion=parseFloat(prompt("Ingrese la nota de la coevaluacion"));
                            if(isNaN(coevaluacion)||coevaluacion<0 || coevaluacion>5){
                              alert("Error")  
                            }else{
                                let notaDefinitiva=(((notaExamen1+notaExamen2+notaExamen3)/3)*0.55)+(((notaTrabajo1+notaTrabajo2)/2)*0.15)+(examenFinal*0.2)+(((autoevaluacion+coevaluacion)/2)*0.1)
                                alert("La nota definitiva del estudiante es:" + notaDefinitiva)
                                if(notaDefinitiva<=5 && notaDefinitiva>=4.7){
                                    alert("El estudiante aprobo, y se encuentra en nivel superior")
                                }else if(notaDefinitiva<=4.6 && notaDefinitiva>=4){
                                    alert("El estudiante aprobo, y se encuentra en nivel alto")
                                }else if(notaDefinitiva<=3.9 && notaDefinitiva>=3){
                                    alert("El estudiante aprobo, y se encuentra en nivel basico")
                                }else if(notaDefinitiva<=2.9 && notaDefinitiva>=2){
                                    alert("El estudiante reprobo, y se encuentra en nivel bajo")
                                }else{
                                    alert("El estudiante reprobo, y se encuentra en nivel muy bajo")
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}