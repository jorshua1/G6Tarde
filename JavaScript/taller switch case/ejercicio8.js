let preA=Number(prompt("Ingrese el presupuesto anual"));
let prPsi=parseFloat(prompt("Ingrese el presupuesto de psiquiatria"));
let prPed=parseFloat(prompt("Ingrese el presupuesto de pediatria"));
let prTra=parseFloat(prompt("Ingrese el presupuesto de traumatologia"));
if ((prPsi+prPed+prTra)<100){
    alert("ERROR")
}else{
    totalPsi=(preA*prPsi)/100
    totalPed=(preA*prPed)/100
    totalTra=(preA*prTra)/100
    alert("presupuesto de psiquiatria: " + prPsi + "%")
    alert("presupuesto total de psiquiatria: " + totalPsi)
    alert("presupuesto de peadiatria: " + prPed + "%")
    alert("presupuesto total de pediatria: " + totalPed)
    alert("presupuesto de traumatologia: " + prTra + "%")
    alert("presupuesto total de traumatologia: " + totalTra)
}