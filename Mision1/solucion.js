

    let examen1 = Number(prompt("ingrese la nota del primer examen")) 
    if (!isNaN(examen1) && examen1 > 0  && examen1 <=  5) {

            let examen2 = Number(prompt("ingrese la nota del segundo examen"))   
            if ((!isNaN(examen2)) && examen2 <= 5 && examen2 > 0 ) {
                let examen3 = Number(prompt("ingrese la nota del tercer examen"))
                if (!isNaN(examen3) && examen3 > 0 && examen3 <= 5) {
                        
                            let trabajo1 = Number(prompt("ingrese la nota del primer trabajo"))
                            if (!isNaN(trabajo1) && trabajo1 <= 5 && trabajo1 > 0) {

                                    let trabajo2 = Number(prompt("ingrese la nota del segundo trabajo"))
                                    if (!isNaN (trabajo2) && trabajo2 <= 5 && trabajo2 > 0 ){

                                        let examenFinal = Number(prompt("ingrese la nota del examen final"))
                                        if (!isNaN (examenFinal) && examenFinal <= 5 && examenFinal > 0 ){

                                             let autoEvaluacion = Number(prompt("ingrese la nota de la auto evaluacion"))
                                            if (!isNaN(autoEvaluacion) && autoEvaluacion <= 5 && autoEvaluacion > 0){

                                                let CoEvaluacion = Number (prompt("ingrese la nota de co-evaluacion"))
                                                if (!isNaN(CoEvaluacion) && CoEvaluacion <= 5 && CoEvaluacion > 0){
                                                    
                                                    let promedioT = ((trabajo1 + trabajo2)/ 2) * 0.15
                                                    let promedioE = ((examen1 + examen2 + examen3)/ 3)  * 0.55
                                                    let promedioA = ((autoEvaluacion + CoEvaluacion)/ 2)  * 0.10
                                                    let examen = examenFinal * 0.20 
                                                    let notaFinal = ( promedioE + promedioA + promedioT + examen)
                                                     alert(notaFinal)

                                                    if (notaFinal >= 0  && notaFinal <= 1.9){
                                                     alert ("el estudiante reprobó con un nivel muy bajo")
                                                    }else if (notaFinal > 1.9 && notaFinal <= 2.9  ){
                                                     alert ("el estudiante reprobó con un nivel bajo")
                                                    }else if (notaFinal > 2.9  && notaFinal <= 3.9 ){
                                                     alert ("el estudiante aprobó con un nivel basico")
                                                    }else if ( notaFinal > 3.9 && notaFinal <= 4.6){
                                                    alert("el estudiante aprobó con un nivel alto")
                                                    }else if ( notaFinal > 4.6 && notaFinal <= 5){
                                                      alert("el estudiante aprobó con un nivel superior")}

                                                  
                                                } else { alert("error, ingrese una nota valida")}     
                                                
                                             
                                            } else { alert("error, ingrese una nota valida")}      
                                       
                                        } else { alert("error, ingrese una nota valida")}    
                                    
                                    } else { alert("error, ingrese una nota valida")}    
                                
                                } else { alert("error, ingrese una nota valida")}  
                            
                            } else { alert("error, ingrese una nota valida")}   
                        
                        } else { alert("error, ingrese una nota valida")} 
                    
                    } else { alert("error, ingrese una nota valida")}        
                
                
