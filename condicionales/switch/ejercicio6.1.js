alert("Este programa determina su promedio y nota final " + '\n' + "Tenga en cuenta que los valores aceptados son de 1.0 a 5" )
//EVALUACION
    alert("PREVIOS")
var evaluacion1 = Number(prompt ("Ingrese nota evalucion 1"))
var evaluacion2 = Number(prompt ("Ingrese nota evalucion 2"))
var evaluacion3 = Number(prompt ("Ingrese nota evalucion 3"))
var promedioPre = ((evaluacion1 + evaluacion2 + evaluacion3) / 3) * 0.60
//TRABAJOS
    alert("TRABAJOS")
var trabajo1 = Number (prompt("Ingrese nota de trabajo 1"))
var trabajo2 = Number (prompt("Ingrese nota de trabajo 2"))
var promedioTra = ((trabajo1 + trabajo2)/2) * 0.40
    alert("NOTA FINAL")
var notaFinal = promedioPre + promedioTra
    if(evaluacion1 >= 5.1 || evaluacion2 >= 5.1 || evaluacion3 >= 5.1 || evaluacion1 <= 0.9 || evaluacion2 <= 0.9 || evaluacion3 <= 09 || trabajo1 >= 5.1 || trabajo2 >= 5.1 || trabajo1 <= 0.9 || trabajo2 <= 0.9 || notaFinal >= 5.1 || notaFinal <= 0.9){
        alert("Ingrese un valor valido")
    }else{
        alert("La nota promedio de Previos es = " + promedioPre + '\n' + "La nota promedio de Trabajos es = " + promedioTra + '\n' + "Su nota definitiva es = "+ notaFinal) 
    }



