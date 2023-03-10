//Elaborar un algoritmo que lea el importe bruto de una factura y
//determine el importe neto según los siguientes criterios:
//· Importe bruto menor de 20.000 -> sin descuento
//· Importe bruto mayor de 20.000 -> 15% de descuento


var importe = Number(prompt("Ingrese importe"))
var dcto;

if (importe > 20.000){
    dcto = (importe * 0.15) - importe
    alert("Importe a pagar con  dcto = " + dcto )
}else{
    dcto = importe + 0 
     alert("sin descuento pagara = " +  dcto)
}