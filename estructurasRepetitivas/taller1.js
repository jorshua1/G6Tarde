let articuloC = parseInt(prompt('ingrese el nombre del primer articulo'))
let articuloU = parseInt(prompt('ingrese el nombre del primer articulo'))
let articuloD = parseInt(prompt('ingrese el nombre del primer articulo'))
let articuloT = parseInt(prompt('ingrese el nombre del primer articulo'))
let precio = parseInt(prompt('ingrese el precio total de su compra'))


if (isNaN(precio)) {
  alert('error, ingrese un valor valido')
} else {
  let modoDePago = parseInt(prompt('para escoger su modo de pago ingrese 1 para efectivo o 2 para tarjeta '))
  if (isNaN(modoDePago)) {
    alert('error, ingrese un valor valido entre 1 y 2')
  } else {
    if (modoDePago < 1 || modoDePago > 2) {
      alert('error, ingrese un valor valido entre 1 y 2')
    } else {
      switch (modoDePago) {
        case 1:
          descuento = precio * 0.1

          total = precio - descuento

          alert('el total a pagar por sus articulos es de ' + total)

          break

        case 2:
          descuento = precio * 0.2

          total = precio - descuento

          alert('el total a pagar por sus articulos es de ' + total)
      }
    }
  }
}


//siguiente ejercicio//



let articuloA=parseInt(prompt("ingrese el primer articulo"))









