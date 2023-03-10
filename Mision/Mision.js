alert("Ingrese notas entre 0 y 5.0")
let examen1= Number(prompt("Ingrese la nota del examen 1"));
if (isNaN(examen1)||examen1<0||examen1>5){
    alert("ERROR. Ingrese una nota válida");
}else{
    let examen2=Number(prompt("Ingrese la nota del examen 2"));
    if (isNaN(examen2)||examen2<0||examen2>5){
        alert("ERROR. Ingrese una nota válida");
    }else{
        let examen3=Number(prompt("Ingrese la nota del examen 3"));
        if(isNaN(examen3)||examen3<0||examen3>5){
            alert("ERROR. Ingrese una nota valida");
        }else{
            let trabajo1=Number(prompt("Ingrese la nota del trabajo 1"));
            if(isNaN(trabajo1)|| trabajo1<0||trabajo1>5){
                alert("ERROR. Ingrese una nota para trabajo 1 válida");
            }else{
                let trabajo2=Number(prompt("Ingrese la nota del trabajo 2"));
                if(isNaN(trabajo2)||trabajo2<0||trabajo2>5){
                    alert("ERROR. Ingrese una nota para trabajo 1 valida.");
                }else{
                    let examenFinal=Number(prompt("Ingrese la nota del exámen final"));
                    if(isNaN(examenFinal)||examenFinal<0||examenFinal>5){
                        alert("ERROR. Ingrese una nota valida para examen final.");
                    }else{
                        let autoevaluacion=Number(prompt("Ingrese la nota de autoevaluacion"));
                        if(isNaN(autoevaluacion)|| autoevaluacion<0|| autoevaluacion>5){
                            alert("ERROR. Ingrese una nota válida para autoevaluacion");
                        }else{
                            let coevaluacion=Number(prompt("INgrese la nota de co-evaluacion"));
                            if(isNaN(coevaluacion)||coevaluacion<0||coevaluacion>5){
                                alert("ERROR. Ingrese una nota válida para co-evaluacion.");
                            }else{
                                let promedioExamenes=(((examen1+examen2+examen3)/3)*0.55);
                                let promedioTrabajos=(((trabajo1+trabajo2)/2)*0.15);
                                let promedioExamenFInal=(examenFinal*0.20);
                                let promedioAutoCoe=(((autoevaluacion+coevaluacion)/2)*0.10);
                                let notaDefinitiva=promedioAutoCoe+promedioExamenFInal+promedioExamenes+promedioTrabajos;

                                if(notaDefinitiva>=4.7){
                                    alert("Su nota definitiva es "+notaDefinitiva+" y se encuentra en un nivel superior con el curso aprobado");
                                }else if(notaDefinitiva>=4 && notaDefinitiva<=4.6){
                                    alert("Su nota definitiva es "+notaDefinitiva+" y se encuentra en un nivel alto con el curso aprobado");
                                }else if(notaDefinitiva>=3.0 && notaDefinitiva<=3.9){
                                    alert("Su nota definitiva es "+notaDefinitiva+" y se encuentra en un nivel básico con el curso aprobado");
                                }else if(notaDefinitiva>=2.0 && notaDefinitiva<=2.9){
                                    alert("Su nota definitiva es "+notaDefinitiva+" y se encuentra en un nivel bajo y desaprobó el curso");
                                }else{
                                    alert("Su nota definitiva es "+notaDefinitiva+" y se encuentra en un nivel muy bajo y desaprobó el curso");
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}