//Diseñe un algoritmo que permita calcular la nota definitiva para los estudiantes, determinada sobre las siguientes condiciones;
//NOTA PREVIOS:sera el promedio de los predios sobre 60%. cada estudiante tendra 3 evaluaciones.
//NOTA TRABAJOS: sera el promdeio de los trabajos por el 40%.cada estudiante presentara 2 trabajos.
//NOTA FINAL: serala suma de la nota de os previos y nota de los trabajos.
//nota minima 1.0, nota maxina 5.0


     alert("Este programa determina su promedio y nota final " + '\n' + "Tenga en cuenta que los valores aceptados son de 1.0 a 5" )
//EVALUACION
    alert("PREVIOS")
var evaluacion1 = Number(prompt ("Ingrese nota evalucion 1"))
var evaluacion2 = Number(prompt ("Ingrese nota evalucion 2"))
var evaluacion3 = Number(prompt ("Ingrese nota evalucion 3"))
var promedioPre = ((evaluacion1 + evaluacion2 + evaluacion3) / 3) * 0.60
    if (evaluacion1 >= 5.1 || evaluacion2 >= 5.1 || evaluacion3 >= 5.1 || evaluacion1 == 0 || evaluacion2 == 0.9 || evaluacion3 == 0.9){
        alert("Ingrese un valor valido")
    }else {
        alert("La nota promedio de Previos es = " + promedioPre)
    }

//TRABAJOS
    alert("TRABAJOS")
var trabajo1 = Number (prompt("Ingrese nota de trabajo 1"))
var trabajo2 = Number (prompt("Ingrese nota de trabajo 2"))
var promedioTra = ((trabajo1 + trabajo2)/2) * 0.40
    if (trabajo1 >= 5.1 || trabajo2 >= 5.1 || trabajo1 == 0.9 || trabajo2 == 0.9){
        alert("Ingrese un valor valido")
    }else {
        alert("La nota promedio de Trabajos es = " + promedioTra)
    }
    
    alert("NOTA FINAL")
var notaFinal = promedioPre + promedioTra
        alert("Su nota definitiva es = "+ notaFinal)