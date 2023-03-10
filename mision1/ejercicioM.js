/*En la escuela Pequeños Brocolitos, se desea registrar y calcular la nota
de cada estudiante. Para calcular la nota definitiva de un estudiante y
saber si aprueba, se toma en cuenta las notas de la siguiente manera:
• El promedio de las notas de 3 Exámenes que corresponde al 55%
• El promedio de las notas de 2 Trabajos que corresponde al 15%
• La nota del examen final que será el 20%
• El promedio de la nota de autoevaluación y co-evaluación realizada por el estudiante y el profesor respectivamente que será del 10%.
Realice un programa que permita registrar las notas que deben estar en
un rango de 0-5. En caso de que una de las notas, se encuentre por
fuera de este rango, se debe mostrar un mensaje que indique error.
Luego, debe evaluar, según la nota definitiva obtenida por el estudiante,
e informar el nivel en el que se encuentra y si aprueba el curso.
Para aprobar el curso la nota definitiva debe ser igual o superior a 3.
Los niveles que los estudiantes pueden alcanzar son los siguientes: */

let notaEx1 = Number(prompt("INGRESE LA NOTA DEL PRIMER EXAMEN"));
if (isNaN(notaEx1) || notaEx1 < 0 || notaEx1 >5){
    console.log("¡ERROR! La nota valida es de 0-5 ");
}else{
    let notaEx2 = Number(prompt("INGRESE LA NOTA DEL SEGUNDO EXAMEN"));
    if (isNaN(notaEx2) || notaEx2 < 0 || notaEx2 > 5){
        console.log("¡ERROR! La nota valida es de 0-5 ");
    }else{
        let notaEx3 = Number(prompt("INGRESE LA NOTA DEL TERCER EXAMEN"));  
        if (isNaN(notaEx3) || notaEx3 < 0 || notaEx3 > 5){
            console.log("¡ERROR! La nota valida es de 0-5 ")
        }else{
            let notaTRA1 = Number(prompt("INGRESE LA NOTA DEL PRIMER TRABAJO"));
            if (isNaN(notaTRA1) || notaTRA1 < 0 || notaTRA1 > 5){
                console.log("¡ERROR! La nota valida es de 0-5 ")
            }else{
                let notaTRA2 = Number(prompt("INGRESE LA NOTA DEL PRIMER TRABAJO"));
                if (isNaN(notaTRA2) || notaTRA2 < 0 || notaTRA2 > 5){
                    console.log("¡ERROR! La nota valida es de 0-5 ")
                }else{
                    let exaFIN = Number(prompt("INGRESE LA NOTA DE EL EXAMEN FINAL"));
                    if (isNaN(exaFIN) || exaFIN < 0 || exaFIN > 5){
                        console.log("¡ERROR! La nota valida es de 0-5 ")
                    }else{
                        let notaAUT = Number(prompt("INGRESE LA NOTA DE SU AUTOEVALUCION"));
                        if (isNaN(notaAUT) || notaAUT < 0 || notaAUT > 5){
                            console.log("¡ERROR! La nota valida es de 0-5 ")
                        }else{
                            let notaCOE = Number(prompt("INGRESE LA NOTA DE SU CO-EVALUCION"));
                            if (isNaN(notaCOE) || notaCOE < 0 || notaCOE > 5){
                                console.log("¡ERROR! La nota valida es de 0-5 ")
                            }else{
                                let notaexa = (notaEx1+notaEx2+notaEx3)/3;
                                let notaexaF = notaexa*0.55;
                                let notatra = (notaTRA1+notaTRA2)/2;
                                let notatraF = notatra*0.15;
                                let notaFinal = exaFIN*0.20;
                                let dosnotas = ((notaAUT+notaCOE)/2)*0.10;
                                let definitiva = notaexaF+notatraF+notaFinal+dosnotas;
                                if(definitiva >= 0 && definitiva <= 1.9){
                                    console.log("Usted reprobó con un nivel muy bajo con una nota de: "+definitiva);
                                }else if (definitiva >= 2.0 && definitiva <= 2.9){
                                    console.log("Usted reprobó con un nivel bajo con una nota de: "+definitiva);
                                }else if (definitiva >= 3.0 && definitiva <= 3.9){
                                    console.log("Usted aprobó con un nivel básico con una nota de: "+definitiva);
                                }else if (definitiva >= 4.0 && definitiva <= 4.6){
                                    console.log("Usted aprobó con un nivel alto con una nota de: "+definitiva);
                                }else if (definitiva >= 4.7 && definitiva <= 5.0){
                                    console.log("Usted aprobó con un nivel superior con una nota de: "+definitiva);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}   

