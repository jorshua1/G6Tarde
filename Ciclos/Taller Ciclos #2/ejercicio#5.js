let articulo1 = (prompt("Ingrese el nombre del primer articulo"));
let precioarti1 = Number(prompt("Ingrese el precio del Primer Articulo en Pesos"));
while ((precioarti1 <= 0) || (isNaN(precioarti1))) {
    alert("Por favor ingrese un numero positivo.");
    precioarti1 = Number(prompt("Ingrese el precio del Primer Articulo en Pesos"));
}
let articulo2 = (prompt("Ingrese el nombre del segundo articulo"));
let precioarti2 = Number(prompt("Ingrese el precio del Segundo Articulo en Pesos"));
while ((precioarti2 <= 0) || (isNaN(precioarti2))) {
    alert("Por favor ingrese un numero positivo.");
    precioarti2 = Number(prompt("Ingrese el precio del Segundo Articulo en Pesos"));
}
let articulo3 = (prompt("Ingrese el nombre del tercer articulo"));
let precioarti3 = Number(prompt("Ingrese el precio del tercer Articulo en Pesos"));
while ((precioarti3 <= 0) || (isNaN(precioarti3))) {
    alert("Por favor ingrese un numero positivo.");
    precioarti3 = Number(prompt("Ingrese el precio del tercer Articulo en Pesos"));
}
let articulo4 = (prompt("Ingrese el nombre del cuarto articulo"));
let precioarti4 = Number(prompt("Ingrese el precio del cuarto Articulo en Pesos"));
while ((precioarti4 <= 0) || (isNaN(precioarti4))) {
    alert("Por favor ingrese un numero positivo.");
    precioarti4 = Number(prompt("Ingrese el precio del cuarto Articulo en Pesos"));
}
let formadepago11 = Number(prompt("Ingrese su Forma de Pago para Primer Articulo \n Marque 1 si es de Contado \n Marque 2 si es Credito"));
while ((formadepago11 != 1 && formadepago11 != 2) || (isNaN(formadepago11))) {
    alert("Su forma de pago no es Valida por favor intentelo de nuevo.");
    formadepago11 = Number(prompt("Ingrese su Forma de Pago para Primer Articulo \n Marque 1 si es de Contado \n Marque 2 si es Credito"));
}
if (formadepago11 === 1) {
    let descuento11 = ((precioarti1) * 0.10);
    precioarti1 = (precioarti1 - descuento11);
    alert("El total a pagar es de: " + precioarti1 + " Y su forma de pago fue Contado");
} else if (formadepago11 === 2) {
    let descuento11 = ((precioarti1) * 0.20);
    precioarti1 = (precioarti1 - descuento11);
    alert("El total a pagar es de: " + precioarti1 + " Y su forma de pago fue Credito");
}
let formadepago12 = Number(prompt("Ingrese su Forma de Pago para el Segundo Articulo \n Marque 1 si es de Contado \n Marque 2 si es Credito"));
while ((formadepago12 != 1 && formadepago12 != 2) || (isNaN(formadepago12))) {
    alert("Su forma de pago no es Valida por favor intentelo de nuevo.");
    formadepago12 = Number(prompt("Ingrese su Forma de Pago para el Segundo Articulo \n Marque 1 si es de Contado \n Marque 2 si es Credito"));
}
if (formadepago12 === 1) {
    let descuento12 = ((precioarti2) * 0.10);
    precioarti2 = (precioarti2 - descuento12);
    alert("El total a pagar es de: " + precioarti2 + " Y su forma de pago fue Contado");
} else if (formadepago12 === 2) {
    let descuento12 = ((precioarti2) * 0.20);
    precioarti2 = (precioarti2 - descuento12);
    alert("El total a pagar es de: " + precioarti2 + " Y su forma de pago fue Credito");
}
let formadepago13 = Number(prompt("Ingrese su Forma de Pago para el Tercer Articulo \n Marque 1 si es de Contado \n Marque 2 si es Credito"));
while ((formadepago13 != 1 && formadepago13 != 2) || (isNaN(formadepago13))) {
    alert("Su forma de pago no es Valida por favor intentelo de nuevo.");
    formadepago13 = Number(prompt("Ingrese su Forma de Pago para el Tercer Articulo \n Marque 1 si es de Contado \n Marque 2 si es Credito"));
}
if (formadepago13 === 1) {
    let descuento13 = ((precioarti3) * 0.10);
    precioarti3 = (precioarti3 - descuento13);
    alert("El total a pagar es de: " + precioarti3 + " Y su forma de pago fue Contado");
} else if (formadepago13 === 2) {
    let descuento13 = ((precioarti3) * 0.20);
    precioarti3 = (precioarti3 - descuento13);
    alert("El total a pagar es de: " + precioarti3 + " Y su forma de pago fue Credito");
}
let formadepago14 = Number(prompt("Ingrese su Forma de Pago para el Cuarto Articulo \n Marque 1 si es de Contado \n Marque 2 si es Credito"));
while ((formadepago14 != 1 && formadepago14 != 2) || (isNaN(formadepago14))) {
    alert("Su forma de pago no es Valida por favor intentelo de nuevo.");
    formadepago14 = Number(prompt("Ingrese su Forma de Pago para el Cuarto Articulo \n Marque 1 si es de Contado \n Marque 2 si es Credito"));
}
if (formadepago14 === 1) {
    let descuento14 = ((precioarti4) * 0.10);
    precioarti4 = (precioarti4 - descuento14);
    alert("El total a pagar es de: " + precioarti4 + " Y su forma de pago fue Contado");
} else if (formadepago14 === 2) {
    let descuento14 = ((precioarti4) * 0.20);
    precioarti4 = (precioarti4 - descuento14);
    alert("El total a pagar es de: " + precioarti4 + " Y su forma de pago fue Credito");
}
alert("\n El total a pagar de su primer articulo fue: " + precioarti1 +"\n El total a pagar de su segundo articulo fue: " + precioarti2 + " \n El total a pagar de su tercer articulo fue: " + precioarti3 + " \n El total a pagar de su cuarto articulo fue: " + precioarti4);
