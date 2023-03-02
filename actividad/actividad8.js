 let mateExamen =parseInt(prompt("ingrese su calificacion del examen de matematicas"))
 let fisicaExamen= parseInt(prompt("ingrese su calificacion del examen de fisica"))
 let quimicaExamen= parseInt(prompt("ingrese su calificacion del examen de quimica"))

 examresultmate=mateExamen*0.9
 examresultfisic=fisicaExamen*0.8
 examresultquimica=quimicaExamen*0.85

 let notaUnoMatematica =parseInt(prompt("nota uno matematic"))
 let notaDosmatematica =parseInt(prompt("nota dos matematic"))
 let notaTresMatematica =parseInt(prompt("not tres matematic"))

 let notaUnofisica= parseInt(prompt("nota uno fisica"))
 let notaDosfisica= parseInt(prompt("nota dos fisica"))
 

 let notaUnoquimica= parseInt(prompt("nota uno quimica"))
let notaDosquimica= parseInt(prompt("nota dos quimica"))
let notaTresquimica= parseInt(prompt("not tres quimica"))

notaMatematicaTotal= ((notaUnoMatematica+notaDosmatematica+notaTresMatematica)/3)*0.1
notaFisicaTotal= ((notaUnofisica+notaDosfisica)/2)*0.2
notaQimicaTotal= ((notaUnoquimica+notaDosquimica+notaTresquimica)/3)*0.15

resultadocompletomatematicas =examresultmate+notaMatematicaTotal
resultadocompletofisica=examresultfisic+notaFisicaTotal
resultadocompletoquimica=examresultquimica+notaQimicaTotal

alert("su promedio en matematicas es de " + resultadocompletomatematicas+" su promedio de fisica es de " + resultadocompletofisica+" su promedio de quimica es de " + resultadocompletoquimica)