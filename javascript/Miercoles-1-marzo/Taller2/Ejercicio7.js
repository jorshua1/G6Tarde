let nombre = prompt("indique el nombre del articulo");
let precio = Number(prompt("indique el precio del articulo"));
let clave = Number(prompt("indique la clave"));
let cantidad = Number(prompt("indique la cantidad de articulos"));
let total;
 
switch (clave) {
    case 1:
        total = (precio * cantidad)-(precio * cantidad * 0.1);
        alert("El articulo " +nombre+" se compraron "+cantidad+" unidades de valor $"+precio+" pesos y el total sin descuento de "
        +(precio*cantidad)+" pesos y un total con descuento de $"+total+" pesos");
        break;
    case 2:
        total = (precio * cantidad)-(precio * cantidad * 0.2);
        alert("El articulo " +nombre+" se compraron "+cantidad+" unidades de valor $"+precio+" pesos y el total sin descuento de "
        +(precio*cantidad)+" pesos y un total con descuento de $"+total+" pesos");
    default:
        alert("Ingrese una clave valida");
}