let cateto1= Number(prompt("ingrese el cateto 1"))
let cateto2= Number(prompt("ingrese el cateto 2"))
let altura= Number(prompt("ingrese el altura"))
areaUno= cateto1**2-altura**2
let area1=(Math.sqrt(areaUno))
areatotal1=(area1*altura)/2

areaDos= cateto2**2-altura**2
let area2=(Math.sqrt(areaDos))
areatotal2=(area2*altura)/2

resultado = areatotal1+areatotal2
alert(resultado)




