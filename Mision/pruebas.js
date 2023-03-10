let exam_1 = parseInt(prompt("por favor digitar la nota obtenida del primer examen"));
if(!isNaN(exam_1) && (exam_1>=0 && exam_1<=5)){
    alert("paso!!!!!!!!!!");
}else {
    alert("Error!!. El valor registrado no es numero y esta fuera de los parametros [0 y 5]");
}

/*let exam_1 = parseInt(prompt("por favor digitar la nota obtenida del primer examen"));
if(!isNaN(exam_1)>0 && !isNaN(exam_1)<=5){
    let exam_2 = parseInt(prompt("por favor digitar la nota obtenida del segundo examen"));
    if(!isNaN(exam_2)>0 && !isNaN(exam_2)<=5){
        let exam_3 = parseInt(prompt("por favor digitar la nota obtenida del tercer examen"));
        if(!isNaN(exam_3)>0 && !isNaN(exam_3)<=5){
            let trab_1 = parseInt(prompt("por favor digitar la nota del primer trabajo realizado"));
            if(!isNaN(trab_1)>0 && !isNaN(trab_1)<=5){
                let trab_2 = parseInt(prompt("por favor digitar la nota del segundo trabajo realizado"));
                if(!isNaN(trab_2)>0 && !isNaN(trab_2)<=5){
                    let exam_fin = parseInt(prompt("por favor digitar la nota obtenida del examen final"));
                    if(!isNaN(exam_fin)>0 && !isNaN(exam_fin)<=5){
                        let autoevaluacion_estudiante = parseInt(prompt("por favor digitar la nota de la autoevaluacion del estudiante"));
                        if(!isNaN(autoevaluacion_estudiante)>0 && !isNaN(autoevaluacion_estudiante)<=5){
                            let evaluacion_profesor = parseInt(prompt("por favor digitar la nota de la evaluacion que da el profesor al estudiante"));
                            if(!isNaN(evaluacion_profesor)>0 && !isNaN(evaluacion_profesor)<=5){
                                alert("paso los filtros");
                            }
                        }else{
                            alert("Error!!. El valor registrado no es numero y esta fuera de los parametros [0 y 5]");
                        }
                    }else{
                        alert("Error!!. El valor registrado no es numero y esta fuera de los parametros [0 y 5]");
                    }
                }else{
                    alert("Error!!. El valor registrado no es numero y esta fuera de los parametros [0 y 5]");
                }
            }else{
                alert("Error!!. El valor registrado no es numero y esta fuera de los parametros [0 y 5]");
            }
        }else{
            alert("Error!!. El valor registrado no es numero y esta fuera de los parametros [0 y 5]");
        }
    }else {
        alert("Error!!. El valor registrado no es numero y esta fuera de los parametros [0 y 5]");
    }
}else {
    alert("Error!!. El valor registrado no es numero y esta fuera de los parametros [0 y 5]");
}
*/