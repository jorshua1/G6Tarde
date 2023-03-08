dato=prompt("dijite un numero que sea uno")

switch(dato){

    case 1:
        console.log("su numero es el 1") 
    break;

    case "1": 
        console.log("SU NUMERO ES 1 EN STRING")
    break;
    default:
        console.log("ingrese 1")
    break;    

}


//ejercicio estaciones con switch case

mes= prompt("dijite el mes en minusculas :")
mes= mes.toLowerCase()

switch(mes){
    case "enero":
    case "frebrero":
    case "diciembre":

        console.log("La estacion es Invierno")

    break;
    case "marzo":
    case "abril":
    case "mayo":

        console.log("La estacion es primavera")

    break;
    case "junio":
    case "julio":
    case "agosto":

        console.log("La estacion es verano")

    break;
    case "septiembre":
    case "octubre":
    case "noviembre":

        console.log("La estacion es otoño")

    break;
    default:
        console.log("ingrese un mes valido")
    break
}
 
