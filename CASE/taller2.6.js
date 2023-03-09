alert('descuentos de su articulo')
let articulo = parseInt(prompt('ingrese el nombre del articulo'))
let clave = parseInt(prompt('ingrese la clave'))
let precio = parseInt(prompt('ingrese el precio'))
let cantidad = parseInt(prompt('ingrese la cantidad de productos del mismo articulo'))
switch (clave) {
  case 1:
    preciototal1 = cantidad * precio
    preciototal = cantidad * precio * 0.1
    alert('precio sin descuento ' + preciototal1)
    alert('total a pagar con descuento de ' + preciototal)
    break

  case 2:
    preciototal2 = cantidad * precio
    preciototal3 = cantidad * precio * 0.2
    alert('precio sin descuento ' + preciototal2)
    alert('total a pagar con descuento de ' + preciototal3)

  default:
    alert('error')
}
