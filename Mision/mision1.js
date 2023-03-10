// En la escuela Pequeños Brocolitos, se desea registrar y calcular la nota de cada estudiante. Para calcular la nota definitiva de un estudiante y aber si aprueba, se toma en cuenta las notas de la siguiente manera:
//• El promedio de las notas de 3 Exámenes que corresponde al 55%
//• El promedio de las notas de 2 Trabajos que corresponde al 15%
//• La nota del examen final que será el 20%
//• El promedio de la nota de autoevaluación y co-evaluación realizada por el estudiante y el profesor respectivamente que será del 10%. 
//Realice un programa que permita registrar las notas que deben estar en un rango de 0-5. En caso de que una de las notas, se encuentre por fuera de este rango, se debe mostrar un mensaje que indique error. Luego, debe evaluar, según la nota definitiva obtenida por el estudiante, e informar el nivel en el que se encuentra y si aprueba el curso. Para aprobar el curso la nota definitiva debe ser igual o superior a 3. Los niveles que los estudiantes pueden alcanzar son los siguientes:
//Nivel Rango
//Superior 4.7 a 5.0
//Alto 4.0 a 4.6
//Básico 3.0 a 3.9
//Bajo 2.0 a 2.9
//Muy bajo 0 a 1.9
     alert (("PEQUEÑOS BROCOLITOS") + '\n' + ("Este programa determina el promedio de calificaciones y el promedio final") + '\n' + ("De esta manera se determina si aprueba o no"))
//Notas
var nota1;
var nota2;
var nota3;
var promedioNotas;
//Examenes
var trabajo1;
var trabajo2;
var promedioTrabajo;
//Nota examen final 
var notaExamenFi;
var promedioExamenFi;
//Nota autoevaluación y co-evaluación 
var notaAutoEva;
var notaCoEva;
var promedioEva;
//final
var final;

var nota1 = Number (prompt("Ingrese Valor nota 1"))
if (nota1 > 0 && nota1 <= 5.0){
    nota2 = Number (prompt("Ingrese valor nota 3"))
    }if (nota2 > 0 && nota2 <= 5.0){
    nota3 = Number (prompt("Ingrese valor nota 3"))
    }if (nota3 > 0 && nota3 <= 5.0){
    promedioNotas = ((nota1 + nota2 + nota3)/3) * 0.55
       alert ("Promedio de notas = " + promedioNotas)
       trabajo1 = Number (prompt("Ingrese valor trabajo 1"))
    }if (trabajo1 > 0 && trabajo1 <= 5.0){
        trabajo2 = Number (prompt("Ingrese valor trabajo 1"))
    }if (trabajo2 > 0 && trabajo2 <= 5.0){
    promedioTrabajo = ((trabajo1+ trabajo2)/2) * 0.15
        alert ("Promedio de trabajos = " + promedioTrabajo)
        notaExamenFi = Number (prompt("Ingrese valor Examen final"))
    }if (notaExamenFi > 0 && notaExamenFi <= 5.0){
    promedioExamenFi = notaExamenFi * 0.20
        alert ("Promedio de examen final = " + promedioExamenFi)
        notaAutoEva = Number (prompt("Ingrese valor de autoevaluacion"))
    }if (notaAutoEva > 0 && notaAutoEva <= 5.0){
        notaCoEva = Number(prompt("Ingrese valor nota co evaluacion"))
    }if (notaCoEva > 0 && notaCoEva <= 5.0){
    promedioEva = ((notaCoEva + notaAutoEva)/2) * 0.10
        alert ("Promedio de evaluacion y coevalucion = " + promedioEva)
    }if (notaCoEva > 0 && notaCoEva <= 5.0){
    final = (promedioNotas + promedioTrabajo + promedioEva + promedioEva)
        alert("Nota final = " + final)
            }if (final == 0 || final <= 1.9){
                alert ("Reprobado" + '\n' + "Rango muy bajo")            
            }else if (final == 2.0 || final <= 2.9){
                alert("Reprobado" + '\n' + "Rango bajo")            
            }else if (final == 3.0 || final <= 3.9){
                alert("Aprobado" + '\n' + "Rango basico")
            }else if (final == 4.0 || final <= 4.6){
                alert("Aprobado" + '\n' + "Rango alto")
            }else if (final == 4.7 || final <= 5.0 ){
                alert("Aprobado" + '\n' + "Rango superior")
    }
    else {
        alert ("error")
    }