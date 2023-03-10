let mes = "marzo";

switch (mes) {
    case "diciembre":
    case "enero":
    case "febrero":
        console.log("invierno");
        break;
    case "marzo":
    case "abril":
    case "mayo":
        console.log("primavera");
        break;
    case "junio":
    case "julio":
    case "agosto":
        console.log("verano");
        break;
    case "septiembre":
    case "octubre":
    case "novembre":
        console.log("otoño");
        break;
    default:
        console.log("lo escrito no es un mes");
}