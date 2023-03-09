let articulo=prompt("ingrese el nombre del articulo")
let clave=Number(prompt("ingrese la clave 1 o 2"))
let precio=Number(prompt("ingrese el precio"))
let cantidad=Number(prompt("ingrese la cantidad"))
let des=cantidad*precio
let descuento1=des-(des*0.1)
let descuento2=des-(des*0.2)


switch (clave) {
    case 1:
        console.log(precio, descuento1,articulo, cantidad);      
        break;
    case 2:
        console.log(precio, descuento2, articulo, cantidad);
        break;
    default:
        console.log("ingrese tados validos");
        break;
}