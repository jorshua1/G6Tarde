/* crear un algoritmo que compruebe la estacion en la que se encuentra un mes, para saber si el mes 
esta en verano, otoño, primavera, invierno.*/

let vMonth = prompt("Ingrese solo el nombre en minuscula o el número del mes el cual desea saber su estación");

if (vMonth == 1 || vMonth == 2 || vMonth == 3 || vMonth == "enero" || vMonth == "febrero" || vMonth == "marzo") {
    alert("Es Primavera");
}
else if (vMonth == 4 || vMonth == 5 || vMonth == 6 || vMonth == "abril" || vMonth == "mayo" || vMonth == "junio") {
    alert("Es Verano");
}
else if (vMonth == 7 || vMonth == 8 || vMonth == 9 || vMonth == "julio" || vMonth == "agosto" || vMonth == "septiembre") {
    alert("Es Otoño");
}
else if (vMonth == 10 || vMonth == 11 || vMonth == 12 || vMonth == "octubre" || vMonth == "noviembre" || vMonth == "diciembre") {
    alert("Es Invierno");
}