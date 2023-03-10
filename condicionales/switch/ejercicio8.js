//en un hospital existen 2 areas 
    alert("Recuerde que el valor total de porcentaje es 100 porciento, si ingresa valor superior o inferior mostrara error")

var presAnual = Number (prompt ("Ingrese presupuesto anual"))
var porcenPsi = Number (prompt("Ingrese porcentaje correspondiente a Psiquiatria"))
var porcenPedi = Number (prompt("Ingrese porcentaje correspondiente a Pedriatria"))
var porcenTrau = Number (prompt("Ingrese porcentaje Traumatologia"))

if (isNaN(presAnual) || isNaN(porcenPsi) || isNaN(porcenPedi) || isNaN(porcenTrau)){
    alert("Ingrese un valor valido")
} else if ((porcenPsi + porcenPedi + porcenTrau) <= 0.100){
    alert("El presupuesto anual es = " + presAnual + '\n' + "A Psiquitria le corresponde " + porcenPsi + " = " + (presAnual * porcenPsi) + '\n' + "A a pediatria corresponde " + porcenPedi + " = " + (presAnual * porcenPedi) + '\n' + "A Traumatologia corresponde " + porcenTrau + " = " + (presAnual * porcenTrau))
}else {
    alert("Error, porcentaje debe sumar 100 porciento")
}