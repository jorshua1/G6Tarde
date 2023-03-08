let estacion1 = "Primavera";

switch(estacion1) {
    case "Primavera":
    case "Otoño":
    case "Verano":
    case "Invierno":
        console.log("Es la estacion de " + estacion1);
        break;
        default:
            console.log(estacion1 + " no es una estacion.")
}

let estacion = "Enero"; /*parseInt(prompt("Por favor ingrese mes del año que desea consultar estacion teniendo en cuenta su orden en el calendario de  1 al 12: "))*/

switch (estacion){
    case "Diciembre":
    case "Enero":
    case "febrero":
        console.log("Es la estacion del mes " + estacion + ", es invierno.");
        break;
    case "Marzo":
    case "Abril":
    case "Mayo":
        console.log("Es la estacion del mes " + estacion + ", es primavera.");
        break;
    case "Junio":
    case "Julio":
    case "Agosto":
        console.log("Es la estacion del mes " + estacion + ", es verano.");
        break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        console.log("Es la estacion del mes " + estacion + ", es otoño.");
        break;
        default:
            console.log(estacion + " no es una estacion.");
}