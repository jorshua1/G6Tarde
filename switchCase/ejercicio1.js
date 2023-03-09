/**
let mes= Number(prompt("Ingrese el numero del mes que desea saber la estacion"));

if (isNaN(mes) || mes >12 || mes<1){
    alert("Ingrese un dato valido");
}else if (mes <3){
    alert("Invierno");
}else if( mes >=3 && mes <7){
    alert("Primavera");
}else if (mes >=7 && mes <9){
    alert("Verano");
}else if( mes >=9 && mes<=12){
    alert("Otoño")
} */

let mes = "";

switch(mes){
    case "enero":
    case "diciembre":
    case "febrero":
        alert("invierno");
        break;
    case "marzo":
    case "abril":
    case "mayo":
    case "junio":
        alert("primavera");
        break;
    case "julio":
    case "agosto":
    case "septiembre":
        alert("verano");
        break;
    case "octubre":
    case "noviembre":
        alert("otoño");
        break;
    default:
        alert("ingreso un dato no valido");
        break;
}