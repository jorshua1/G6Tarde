//1
nombre= prompt("porfavor dijite el nombre del estudiante")
examen1= parseFloat(prompt("porfavor dijite la nota del primer examen: "))
    if(examen1<0 || examen1>5 || isNaN(examen1)){
        console.log("porfavor dijite una nota valida para el examen 1 esta debe ser numerica (0 a 5)")
    }else{
        examen2= parseFloat(prompt("porfavor dijite la nota del segundo examen: "))
        if(examen2<0 || examen2>5 || isNaN(examen2)){
            console.log("porfavor dijite una nota valida para el examen 2 esta debe ser numerica (0 a 5)")
        }else{
            examen3= parseFloat(prompt("porfavor dijite la nota del tercer examen: "))
            if(examen3<0 || examen3>5 || isNaN(examen3)){
            console.log("porfavor dijite una nota valida para el examen 3 esta debe ser numerica (0 a 5)")
        }else{
            trabajo1= parseFloat(prompt("porfavor dijite la nota del primer trabajo: "))    
            if(trabajo1<0 || trabajo1>5 || isNaN(trabajo1)){
                console.log("porfavor dijite una nota valida para el trabajo 1 esta debe ser numerica (0 a 5)")
            }else{
                trabajo2= parseFloat(prompt("porfavor dijite la nota del segundo trabajo: "))
                if(trabajo2<0 || trabajo2>5 || isNaN(trabajo2)){
                    console.log("porfavor dijite una nota valida para el trabajo 2 esta debe ser numerica (0 a 5)")
                }else{
                    parcial= parseFloat(prompt("porfavor dijite la nota del examen final: "))   
                    if(parcial<0 || parcial>5 || isNaN(parcial)){
                        console.log("porfavor dijite una nota valida para el examen final esta debe ser numerica (0 a 5)")
                    }else{
                        autoevaluacion= parseFloat(prompt("porfavor dijite la nota de la auto-evaluacion: "))
                        if(autoevaluacion<0 || autoevaluacion>5 || isNaN(autoevaluacion)){
                            console.log("porfavor dijite una nota valida para la auto evaluacion esta debe ser numerica (0 a 5)")
                        }else{
                            coevaluacion= parseFloat(prompt("porfavor dijite la nota de la coevaluacion por parte del docente: "))
                            if(coevaluacion<0 || coevaluacion>5 || isNaN(coevaluacion)){
                                console.log("porfavor dijite una nota valida para la coevaluacion esta debe ser numerica (0 a 5)")
                            }else{
                                promedioexamen= ((examen1+examen2+examen3)/3)*(55/100)
                                promediotrabajos=((trabajo1+trabajo2)/2)*(15/100)
                                final=parcial*(20/100)
                                autofinal=((autoevaluacion+coevaluacion)/2)*(10/100)
                                definitiva=promedioexamen+final+autofinal+promediotrabajos

                                console.log("promedio de examenes: "+promedioexamen)
                                console.log("promedio de trabajos: "+promediotrabajos)
                                console.log("examen final: "+final)
                                console.log("promedio de auto evaluaciones: "+autofinal)
                                console.log("Nota Definitiva:"+definitiva)

                                }if(definitiva>=0 && definitiva<=1.9){
                                    console.log("el estudiante "+nombre+" tiene un nivel MUY BAJO")
                                }else if(definitiva>=2 && definitiva<=2.9){
                                    console.log("el estudiante "+nombre+" tiene un nivel BAJO")
                                }else if(definitiva>=3 && definitiva<=3.9){
                                    console.log("el estudiante "+nombre+" tiene un nivel BASICO")
                                }else if(definitiva>=4 && definitiva<=4.6){
                                    console.log("el estudiante "+nombre+" tiene un nivel ALTO")
                                }else if(definitiva>=4.7 && definitiva<5){
                                    console.log("el estudiante "+nombre+" tiene un nivel SUPERIOR")
                                }
                            }
                        } 
                    }
                }
            }
        }
    }



      

      

      
        
     

      
    
     
    
    


