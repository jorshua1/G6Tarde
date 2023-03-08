//crear un algoritmo que compruebe la estacion en la que se encuentra un mes, para saber si el mes esta en verano, otoño, primavera, invierno.

    alert ("Este programa determina la estacion del año dependiendo del mes introducido")

var mes = prompt("Ingrese el mes del año")

if (mes === "marzo" || mes === "abril" || mes === "mayo" || mes === "3" || mes === "4" || mes === "5"  ){
    alert("Primavera")
}else if (mes === "junio" || mes === "julio" || mes === "agosto" || mes === "6" || mes === "7" || mes === "8" ){
    alert("Verano")
}else if (mes  === "septiembre" || mes === "octubre" || mes === "noviembre"|| mes ==="9" || mes === "10" || mes === "11" ){
    alert("Otoño")
}else if (mes === "diciembre" || mes === "enero" || mes === "febrero" || mes === "12" || mes === "1" || mes === "2"){
    alert("Invierno")
}else {
    alert("Ingrese valor valido")
}
