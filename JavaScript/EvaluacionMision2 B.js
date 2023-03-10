/* En la escuela Pequeños Brocolitos, se desea registrar y calcular la nota
de cada estudiante. Para calcular la nota definitiva de un estudiante y
saber si aprueba, se toma en cuenta las notas de la siguiente manera: */

let vNotaExamen01 = parseFloat(prompt("Ingrese la nota del EXAMEN 01"));
let vNotaExamen02 = parseFloat(prompt("Ingrese la nota del EXAMEN 02"));
let vNotaExamen03 = parseFloat(prompt("Ingrese la nota del EXAMEN 03"));
let vSumaNotaExamen = (vNotaExamen01 + vNotaExamen02 + vNotaExamen03) / 3;
let vPromedioExamen = vSumaNotaExamen * 0.55;   //-----55%//

let vNotaTrabajos01 = parseFloat(prompt("Ingrese la nota del TRABAJO 01"));
let vNotaTrabajos02 = parseFloat(prompt("Ingrese la nota del TRABAJO 02"));
let vSumaNotaTrabajos = (vNotaTrabajos01 + vNotaTrabajos02) / 2;
let vPromedioTrabajos = vSumaNotaTrabajos * 0.15;  //-----15%//

let vNotaExamenFinal = parseFloat(prompt("Ingrese la nota de su EXAMEN FINAL"));           //-----20%
let vPromedioExamenFinal = vNotaExamenFinal * 0.20;

let vNotaAutoevaluacion = parseFloat(prompt("Ingrese la nota de su AUTOEVALUACIÓN"));
let vNotaCoEvaluacion = parseFloat(prompt("Ingrese la nota de la COEVALUACIÓN"));
let vSumaNotaCoAutoEvaluacion = (vNotaAutoevaluacion + vNotaCoEvaluacion) / 2;
let vPromedioCoAutoEvaluacion = vSumaNotaCoAutoEvaluacion * 0.10; //-----10%//

let vNotaDefinitiva = vPromedioExamen + vPromedioTrabajos + vPromedioExamenFinal + vPromedioCoAutoEvaluacion;



        if (isNaN(vNotaExamen01) || isNaN(vNotaExamen02) || isNaN(vNotaExamen03) || isNaN(vNotaTrabajos01) || isNaN(vNotaTrabajos02) || isNaN(vNotaExamenFinal) || isNaN(vNotaAutoevaluacion) || isNaN(vNotaCoEvaluacion)) {
            alert("Error \n Ingrese un dato valido y vuelva a ejecutar");
            
        }else if ((vNotaExamen01 < 0 || vNotaExamen01 > 5.1) || (vNotaExamen02 < 0 || vNotaExamen02 > 5.1) || (vNotaExamen03 < 0 || vNotaExamen03 > 5.1) || (vNotaTrabajos01 < 0 || vNotaTrabajos01 > 5.1) || (vNotaTrabajos02 < 0 || vNotaTrabajos02 > 5.1) || (vNotaExamenFinal < 0 || vNotaExamenFinal > 5.1) || (vNotaAutoevaluacion < 0 || vNotaAutoevaluacion > 5.1)|| (vNotaCoEvaluacion < 0 || vNotaCoEvaluacion > 5.1)) {
            alert("El dijito que esta ingresando no esta en los parametros establecidos \n Vuelva a ejecutar la operacion");

        }else if (vNotaDefinitiva < 2 || vNotaDefinitiva < 0) {
            alert("El estudiante \n HA REPROBADO \n \n Su nivel es: Muy bajo \n \n Su nota final es: " + vNotaDefinitiva);

        }else if (vNotaDefinitiva < 3 || vNotaDefinitiva <= 2) {
            alert("El estudiante \n HA REPROBADO \n \n Su nivel es: Bajo \n \n Su nota final es: " + vNotaDefinitiva);

        }else if (vNotaDefinitiva < 4 || vNotaDefinitiva <= 3) {
            alert("El estudiante \n HA APROBADO \n \n Su nivel es: Básico \n \n Su nota final es: " + vNotaDefinitiva);

        }else if (vNotaDefinitiva <= 4.6 || vNotaDefinitiva <= 4) {
            alert("El estudiante \n HA APROBADO \n \n Su nivel es: Alto \n \n Su nota final es: " + vNotaDefinitiva);

        }else if (vNotaDefinitiva <= 5 || vNotaDefinitiva <= 4.7) {
            alert("El estudiante \n HA APROBADO \n \n Su nivel es: Superior \n \n Su nota final es: " + vNotaDefinitiva);
        }else {
            alert("El dijito que esta ingresando no esta en los parametros establecidos \n Vuelva a ejecutar la operacion");
        }