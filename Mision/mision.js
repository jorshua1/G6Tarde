//calcular la calificacion de cada estudiante de la escuela Pequeños Brocolitos
alert("ANUNCIO INFORMATIVO ANTES DE INGRESAR DATOS \n"+
    "\n"+
    "Por favor ingresar los valores de las notas entre los parametros [0 y 5]")

//Se declaran las variables y se inicialian por medio de la informacion igresada por el prompt
let exam_1 = parseInt(prompt("por favor digitar la nota obtenida del primer examen"));
if(!isNaN(exam_1) && (exam_1>=0 && exam_1<=5)){
    let exam_2 = parseInt(prompt("por favor digitar la nota obtenida del segundo examen"));
    if(!isNaN(exam_2) && (exam_2>=0 && exam_2<=5)){
        let exam_3 = parseInt(prompt("por favor digitar la nota obtenida del tercer examen"));
        if(!isNaN(exam_3) && (exam_3>=0 && exam_3<=5)){
            let trab_1 = parseInt(prompt("por favor digitar la nota del primer trabajo realizado"));
            if(!isNaN(trab_1) && (trab_1>=0 && trab_1<=5)){
                let trab_2 = parseInt(prompt("por favor digitar la nota del segundo trabajo realizado"));
                if(!isNaN(trab_2) && (trab_2>=0 && trab_2<=5)){
                    let exam_fin = parseInt(prompt("por favor digitar la nota obtenida del examen final"));
                    if(!isNaN(exam_fin) && (exam_fin>=0 && exam_fin<=5)){
                        let autoevaluacion_estudiante = parseInt(prompt("por favor digitar la nota de la autoevaluacion del estudiante"));
                        if(!isNaN(autoevaluacion_estudiante) && (autoevaluacion_estudiante>=0 && autoevaluacion_estudiante<=5)){
                            let evaluacion_profesor = parseInt(prompt("por favor digitar la nota de la evaluacion que da el profesor al estudiante"));
                            if(!isNaN(evaluacion_profesor) && (evaluacion_profesor>=0 && evaluacion_profesor<=5)){
                                /*
                                Realizacion de las operaciones para sacar las notas teniendo en cuenta:
                                    El promedio de las notas de 3 Exámenes que corresponde al 55%
                                    El promedio de las notas de 2 Trabajos que corresponde al 15%
                                    La nota del examen final que será el 20%
                                    El promedio de la nota de autoevaluación y co-evaluación realizada por el estudiante y el profesor respectivamente que será del 10%.
                                */
                                prom_exam = ((exam_1 + exam_2 + exam_3)/3)*0.55;
                                prom_trab = ((trab_1 + trab_2)/2)*0.15;
                                prom_exf = (exam_fin * 0.20);
                                prom_coe = ((autoevaluacion_estudiante + evaluacion_profesor)/2)*0.10;
                                total = prom_exam + prom_trab + prom_exf + prom_coe;

                                alert("Las notas adquiridas por el estudiante son: \n"+
                                "porcentaje de examenes: "+prom_exam+"\n"+
                                "porcentaje de trabajos: "+prom_trab+"\n"+
                                "porcentaje de parcial: "+prom_exf+"\n"+
                                "porcentaje de autoevaluacion: "+prom_coe+"\n"+
                                "puntaje total: "+total);
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
