/*crear un algoritmo que compruebe la estacion en la que se encuentra un mes, para saber si el mes esta en verano, otoño, primavera, invierno.*/

let mes = prompt("Digite el mes en el que se encuentra");

if(!isNaN(mes) === "diciembre"){
    alert("es Invierno");
}else if (mes === "enero"){
    alert("es Invierno");
}else if (mes === "febrero"){
    alert("es Invierno");
}else if (mes === "marzo"){
    alert("es primavera");
}else if (mes === "abril"){
    alert("es primavera");
}else if (mes === "mayo"){
    alert("es primavera");
}else if (mes === "junio"){
    alert("es verano");
}else if (mes === "julio"){
    alert("es verano");
}else if (mes === "agosto"){
    alert("es verano");
}else if (mes === "septiembre"){
    alert("es otoño");
}else if (mes === "octubre"){
    alert("es otoño");
}else if (mes === "noviembre"){
    alert("es otoño");
}else {
    alert("por favor digitar un mes del año y no valores por fuera")
}


