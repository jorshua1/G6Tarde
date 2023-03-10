// MISIÓN 

let examen1 = parseFloat(prompt("ingrese la nota del primer examen"));
  if (isNaN(examen1)||(examen1<0)||(examen1>5)){
    console.log ("error");
  }else{
    let examen2 = parseFloat(prompt("ingrese la nota del segundo examen"));
    if (isNaN(examen2)||(examen2<0)||(examen2>5)){
        console.log ("error");
    }else {
        let examen3 = parseFloat(prompt("ingrese la nota del tercer examen"));
        if (isNaN(examen3)||(examen3<0)||(examen3>5)){
            console.log ("error");
        }else {
            let trabajo1 = parseFloat(prompt("ingrese la nota del primer trabajo"));
                if (isNaN(trabajo1)||(trabajo1<0)||(trabajo1>5)){
                    console.log ("error");
                }else {
                    let trabajo2 = parseFloat(prompt("ingrese la nota del segundo trabajo"));
                    if (isNaN(trabajo2)||(trabajo2<0)||(trabajo2>5)){
                        console.log ("error");
                     }else {
                        let examenfinal = parseFloat(prompt("ingrese la nota del examen final"));
                        if (isNaN(examenfinal)||(examenfinal<0)||(examenfinal>5)){
                            console.log ("error");
                         }else {
                            let autoevaluE = parseFloat(prompt("ingrese la nota de la autoevalución del estudiante"));
                            if (isNaN(autoevaluE)||(autoevaluE<0)||(autoevaluE>5)){
                                console.log ("error");
                             }else {
                                let coevaluacion = parseFloat(prompt("ingrese la nota de co-evalucion del estudiante" ));
                                if (isNaN(examenfinal)||(examenfinal<0)||(examenfinal>5)){
                                    console.log ("error");
                                 }else {
                                    let notaFinal = ((((examen1+examen2+examen3)/3)*0.55)+(((trabajo1+trabajo2)/2)*0.15)+(examenfinal*0.20)+(((autoevaluE+coevaluacion)/2)*0.10))
                                        console.log ("la nota final del estudiante", notaFinal)
                                        if(notaFinal<=5 && notaFinal>=4.7){
                                            console.log ("El estudiante aprobo, y se encuentra en nivel superior")
                                        }else if(notaFinal<=4.6 && notaFinal>=4){
                                            console.log ("El estudiante aprobo, y se encuentra en nivel alto")
                                        }else if(notaFinal<=3.9 && notaFinal>=3){
                                            console.log ("El estudiante aprobo, y se encuentra en nivel basico")
                                        }else if(notaFinal<=2.9 && notaFinal>=2){
                                            console.log ("El estudiante reprobo, y se encuentra en nivel bajo")
                                        }else{
                                            console.log ("El estudiante reprobo, y se encuentra en nivel muy bajo")


                                    }

                                 }
                             }

                         }
                     }
                
                }
            }    
        }
    }
  
    
                    
                                
                                            
                                        
                                     
                                 
                            
                         
                    
                 
             
            
         
                
                 
                        
                                
                               
                                
                             

                         
                     

                 

             
            
 
        
  
    
 
    
  



