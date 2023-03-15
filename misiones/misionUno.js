/*
En la escuela Pequeños Brocolitos, se desea registrar y calcular la nota de cada estudiante. 
Para calcular la nota definitiva de un estudiante y saber si aprueba, se toma en cuenta las notas de la siguiente manera:
• El promedio de las notas de 3 Exámenes que corresponde al 55%
• El promedio de las notas de 2 Trabajos que corresponde al 15%
• La nota del examen final que será el 20%
• El promedio de la nota de autoevaluación y co-evaluación realizada por el estudiante y el profesor respectivamente que será del 10%.

Realice un programa que permita registrar las notas que deben estar en un rango de 0-5. En caso de que una de las notas, 
se encuentre por fuera de este rango, se debe mostrar un mensaje que indique error.
Luego, debe evaluar, según la nota definitiva obtenida por el estudiante, e informar el nivel en el que se encuentra y
si aprueba el curso. Para aprobar el curso la nota definitiva debe ser igual o superior a 3.
Los niveles que los estudiantes pueden alcanzar son los siguientes:
Nivel            Rango
Superior        4.7 a 5.0
Alto            4.0 a 4.6
Básico          3.0 a 3.9
Bajo            2.0 a 2.9
Muy bajo          0 a 1.9
Evalúe los requerimientos de la situación planteada y determine las
variables y operaciones y condicionales requeridas para dar solución al
mismo y escriba él código.
*/

let examenUno = parseFloat(prompt("Por favor ingrese nota de examen uno."));
if (isNaN(examenUno) || examenUno < 0 || examenUno > 5) {
    console.log("Por favor ingrese un valor valido")
} else {
    let examenDos = parseFloat(prompt("Por favor ingrese nota de examen dos."));
    if (isNaN(examenDos) || examenDos < 0 || examenDos > 5) {
        console.log("Por favor ingrese un valor valido")
    } else {
        let examenTres = parseFloat(prompt("Por favor ingrese nota de examen tres."));
        if (isNaN(examenTres) || examenTres < 0 || examenTres > 5) {
            console.log("Por favor ingrese un valor valido")
        } else {
            let trabajoUno = parseFloat(prompt("Por favor ingrese nota de trabajo uno."));
            if (isNaN(trabajoUno) || trabajoUno < 0 || trabajoUno > 5) {
                console.log("Por favor ingrese un valor valido")
            } else {
                let trabajoDos = parseFloat(prompt("Por favor ingrese nota de trabajo dos."));
                if (isNaN(trabajoDos) || trabajoDos < 0 || trabajoDos > 5) {
                    console.log("Por favor ingrese un valor valido")
                } else {
                    let examenFinal = parseFloat(prompt("Por favor ingrese nota de examen uno."));
                    if (isNaN(examenFinal) || examenFinal < 0 || examenFinal > 5) {
                        console.log("Por favor ingrese un valor valido")
                    } else {
                        let autoevalEstudiante = parseFloat(prompt("Por favor ingrese nota de autoevaluación estudiante."));
                        if (isNaN(autoevalEstudiante) || autoevalEstudiante < 0 || autoevalEstudiante > 5) {
                            console.log("Por favor ingrese un valor valido")
                        } else {
                            let autoevalProfesor = parseFloat(prompt("Por favor ingrese nota de eco-evaluación profesor."));
                            if (isNaN(autoevalProfesor) || autoevalProfesor < 0 || autoevalProfesor > 5) {
                                console.log("Por favor ingrese un valor valido")
                            } else {
                                let promExamenes = (((examenUno + examenDos + examenTres) / 3) / 100) * 55;
                                let promTrabajos = (((trabajoUno + trabajoDos) / 2) / 100) * 15;
                                let promExamenFinal = (examenFinal / 100) * 20;
                                let promAutoEval = (((autoevalEstudiante + autoevalProfesor) / 2) / 100) * 10;

                                let promedioEstudiante = (promExamenes + promTrabajos + promExamenFinal + promAutoEval);

                                console.log(" la nota del estudiante es : " + promedioEstudiante);

                                if (examenUno < 0 || examenDos < 0 || examenTres < 0 || trabajoUno < 0 || trabajoDos < 0 || examenFinal < 0 || autoevalEstudiante < 0 || autoevalProfesor < 0 || examenUno > 5 || examenDos > 5 || examenTres > 5 || trabajoUno > 5 || trabajoDos > 5 || examenFinal > 5 || autoevalEstudiante > 5 || autoevalProfesor > 5) {
                                    console.log("Por favor ingre un valor valido");
                                } else if (promedioEstudiante >= 0 && promedioEstudiante <= 1.9) {
                                    console.log("Muy bajo");
                                } else if (promedioEstudiante >= 2 && promedioEstudiante <= 2.9) {
                                    console.log("Bajo");
                                } else if (promedioEstudiante >= 3 && promedioEstudiante <= 3.9) {
                                    console.log("Básico");
                                } else if (promedioEstudiante >= 4 && promedioEstudiante <= 4.6) {
                                    console.log("Alto");
                                } else if (promedioEstudiante >= 4.7 && promedioEstudiante <= 5) {
                                    console.log("Superior");
                                } else {

                                }
                            }
                        }
                    }
                }
            }
        }
    }
}