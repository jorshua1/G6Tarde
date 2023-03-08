/* crear un algoritmo que compruebe la estacion en la que se encuentra un mes, para saber si el mes 
esta en verano, otoño, primavera, invierno.*/

let vMonth = prompt("Ingrese solo el nombre en minuscula del mes el cual desea saber su estación en INGLES");

switch (vMonth) {
    case "dicember":
    case "january":
    case "february":
        alert("Is Summery - Es Primavera");
    break;

    case "march":
    case "april":
    case "may":
        alert("Is Outumnal - Es Otoño");
    break;

    case "june":
    case "july":
    case "august":
        alert("Is Wintry - Es Invierno");
    break;

    case "september":
    case "octuber":
    case "november":
        alert("Is Vernal - Es Verano");
    break;
}