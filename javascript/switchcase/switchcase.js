/*let dato = 3

switch(dato){
    case 1:
        console.log("Ingresó el número uno");
        break;
    case "1":
        console.log("Ingresó el número uno pero como string");
        break;
        default:
            console.log("Ingresó un número que no se encuentra en los casos");
            break;
}*/

let mes = "NOviemBRE"
switch (mes.toLowerCase()) {
    case "diciembre":
    case "enero":
    case "febrero":
        console.log("invierno");
        break;
    case "marzo":
    case "abril":
    case "mayo":
        console.log("privamera");
        break;
    case "junio":
    case "julio":
    case "agosto":
        console.log("verano");
        break;
    case "septiembre":
    case "octubre":
    case "noviembre":
        console.log("otoño");
        break;
    default:
        console.log("Por favor, ingrese un valor válido");
        break;
}