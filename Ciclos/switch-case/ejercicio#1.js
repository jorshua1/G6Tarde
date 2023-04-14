let mes = prompt("ingrese el mes");
switch (mes.toLowerCase()) {
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
    case "julio":
    case "agosto":
        console.log("Verano");
        break;
    case "septiembre":
    case "octubre":
    case "noviembre":
        console.log("otoño");
        break;
    default:
        console.log("por favor ingrese un valor logico")
}   

//ejercicio #2 operador ternario

let nombre = prompt ("ingrese su nombre");
let saludo = nombre==="" ? " ingrese un valor valido" : "hola" + nombre;

console.log(saludo);

// otro ejercicio con conectores
let nombres = prompt ("ingrese su nombre");
nombres==="" || nombres==="." || typeof nombres ==="Number" ? "ingrese un nombre valido" : nombres ==="Sergio" ? "Bienvenido " : "Bienvenido Invitado";

// ejercicio si es par o impar


let numero = Number(prompt("Ingrese un número"));

if (isNaN(numero)){
    console.log("ERROR, el dato ingresado no es número");
}else if(numero%2 === 1){
    console.log(numero + " es un número impar");
}else{
    console.log(numero + " es un número par");
}
