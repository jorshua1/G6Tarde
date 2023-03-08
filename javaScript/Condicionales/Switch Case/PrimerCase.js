/*let dato = 1;

switch (dato){
    case 1: 
    console.log("Ingreso el numero uno");
    break;

    case "1":
    consº.log("Ingreso el numero uno como string");
    break;

    default: 

    console.log("Ingreso un munero que no se encuentra en los casos")
    break;
}*/

let mes = prompt("Ingrese un mes");

switch (mes.toLocaleLowerCase()) {
    case "diciembre":
    case "enero":
    case "febrero":
        console.log("Invierno");
        break;
    case "marzo":
    case "abril":
    case "mayo":
        console.log("Primavera");
        break;
    case "junio":
    case "junio":
    case "agosto":
        console.log("verano");
        break;
    case "septiembre":
    case "octubre":
    case "noviembre":
        console.log("otoño");
        break;
    default:
        console.log("La opcion que dijito no se encuentra en los casos. ")
        break;
}