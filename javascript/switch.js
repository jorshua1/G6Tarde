let valor = parseInt(prompt("Digite un numero"))
switch (valor) {
    case 1:
        console.log("Su valor es 1");
        break;
    case 2:
        console.log("Su valor es 2");
        break;
    default:
        break;
}

//estacion
esternocleidomastoideo = prompt("dijite el mes en minusculas :")
esternocleidomastoideo = mes.toLowerCase()

switch(esternocleidomastoideo){
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


let nombre = prompt("Ingrese su nombre");
let saludo = nombre===""? "Escriba algo pendejo!" : "Hola veneco " +nombre;
console.log(saludo);


nombre === "" || nombre === "." || typeof nombre === "Number" ? "Ingrese un nombre valido" : nombre === "diego" ? "Bienvenido" : "Bienvenido invitado";

let num = parseInt(prompt("Ingrese el numero para saber si es par o impar"));
let rta = num==="" || isNaN(num) ? "Ingrese un numero valido" : num%2==0 ? "El numero es par" : "El numero es impar";
console.log(rta);


if (isNaN(num) || num === "") {
    console.log("Escriba un numero valido");
} else {
    if (num%2==0) {
        console.log("El numero es par");
    } else {
        console.log("El numero es impar");
    }
}

