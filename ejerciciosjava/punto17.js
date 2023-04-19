/*crear un algoritmo que compruebe la estacion en la que se encuentra un mes,
para saber si el mes esta en verano,otoño,primavera,invierno. CON SHWITCH CASE*/

let mes ="Ingrese un mes del año";
switch (mes) {
    case "diciembre":
        case "enero":
            case "febrero":
            console.log("La temporada del año es invierno");
        break;
    case "marzo":
        case "abril":
            case "mayo":
                console.log("La temporada del año es primavera");
        break;
    case "junio":
        case "julio":
            case "agosto":
                console.log("La temporada del año es verano");
        break;
    case "septiembre":
        case "octubre":
            case "noviembre":
                console.log("La temporada del año es otoño");
        break;                

    default:
        console.log("Ingrese un mes valido");
        break;
}