alert('algoritmo para inventario de celulares')

cantidadSamsung = parseInt(prompt('cantidad de dispositivos de Samsung'))
while (isNaN(cantidadSamsung) || cantidadSamsung < 0) {
  alert('ingrese un valor valido')
  cantidadSamsung = parseInt(prompt('cantidad de dispositivos de Samsung'))
}

valorSamsung = parseInt(prompt('ingrese el valor de un dispositivo Samsung'))
while (isNaN(valorSamsung) || valorSamsung < 0) {
  alert('ingrese un valor valido')
  valorSamsung = parseInt(prompt('ingrese el valor de un dispositivo Samsung'))
}

cantidadIphone = parseInt(prompt('cantidad de dispositivos de Iphone'))
while (isNaN(cantidadIphone) || cantidadIphone < 0) {
  alert('ingrese un valor valido')
  cantidadIphone = parseInt(prompt('cantidad de dispositivos de Iphone'))
}
valorIphone = parseInt(prompt('ingrese el valor de un dispositivo Iphone'))
while (isNaN(valorIphone) || valorIphone < 0) {
  alert('ingrese un valor valido')
  valorIphone = parseInt(prompt('ingrese el valor de un dispositivo Iphone'))
}

cantidadXiaomi = parseInt(prompt('cantidad de dispositivos de Xiaomi'))
while (isNaN(cantidadXiaomi) || cantidadXiaomi < 0) {
  alert('ingrese un valor valido')
  cantidadXiaomi = parseInt(prompt('cantidad de dispositivos de Xiaomi'))
}
valorXiaomi = parseInt(prompt('ingrese el valor de un dispositivo Xiaomi'))
while (isNaN(valorXiaomi) || valorXiaomi < 0) {
  alert('ingrese un valor valido')
  valorXiaomi = parseInt(prompt('ingrese el valor de un dispositivo Xiaomi'))
}
cantidadMotorola = parseInt(prompt('cantidad de dispositivos de Motorola'))
while (isNaN(cantidadMotorola) || cantidadMotorola < 0) {
  alert('ingrese un valor valido')
  cantidadMotorola = parseInt(prompt('cantidad de dispositivos de Motorola'))
}
valorMotorola = parseInt(prompt('ingrese el valor de un dispositivo Motorola'))
while (isNaN(valorMotorola) || valorMotorola < 0) {
  alert('ingrese un valor valido')
  valorMotorola = parseInt(
    prompt('ingrese el valor de un dispositivo Motorola'),
  )
}
cantidadHuawei = parseInt(prompt('cantidad de dispositivos de Huawei'))
while (isNaN(cantidadHuawei) || cantidadHuawei < 0) {
  alert('ingrese un valor valido')
  cantidadHuawei = parseInt(prompt('cantidad de dispositivos de Huawei'))
}
valorHuawei = parseInt(prompt('ingrese el valor de un dispositivo Huawei'))
while (isNaN(valorHuawei) || valorHuawei < 0) {
  alert('ingrese un valor valido')
  valorHuawei = parseInt(prompt('ingrese el valor de un dispositivo Huawei'))
}

cantidadOPPO = parseInt(prompt('cantidad de dispositivos de OPPO'))
while (isNaN(cantidadOPPO) || cantidadOPPO < 0) {
  alert('ingrese un valor valido')
  cantidadOPPO = parseInt(prompt('cantidad de dispositivos de OPPO'))
}

valorOPPO = parseInt(prompt('ingrese el valor de un dispositivo OPPO'))
while (isNaN(valorOPPO) || valorOPPO < 0) {
  alert('ingrese un valor valido')
  valorOPPO = parseInt(prompt('ingrese el valor de un dispositivo OPPO'))
}

valortotal =
  cantidadSamsung * valorSamsung +
  cantidadIphone * valorIphone +
  cantidadXiaomi * valorXiaomi +
  cantidadMotorola * valorMotorola +
  cantidadHuawei * valorHuawei +
  cantidadOPPO * valorOPPO

alert('el total de dinero por todos los dispositivo es ' + valortotal)

let yes=parseInt(prompt('ingresar 1 si desea hacer una compra, otra tecla si desea finalizar'))
if (yes=1){alert(' calculadora de compra')
let si = parseInt(
  prompt(
    'ingrese 1 para continuar la compra al final del proceso y otra tecla para cancelar ',
  ))
  
  while ((si =1)) {
  let tipoDispositivo = parseInt(
    prompt(
      'ingrese 1, para Samsug. 2, para Iphone. 3, para Xiaomi. 4, para Motorola. 5, para Huawei, 6, para OPPO',
    ),
  )
  while (isNaN(tipoDispositivo)) {
    alert(
      'ingrese un valor valido, ingrese 1, para Samsug. 2, para Iphone. 3, para Xiaomi. 4, para Motorola. 5, para Huawei, 6, para OPPO ',
    )
    tipoDispositivo = parseInt(
      prompt(
        'ingrese 1, para Samsug. 2, para Iphone. 3, para Xiaomi. 4, para Motorola. 5, para Huawei, 6, para OPPO',
      ),
    )
  }

  switch (tipoDispositivo) {
    case 1:
      compraSamsung = parseInt(
        prompt('ingrese la cantidad de dispositivos Samsung que desea comprar'),
      )

      if (
        isNaN(compraSamsung) ||
        compraSamsung < 0 ||
        compraSamsung > cantidadSamsung
      ) {
        alert('ingrese un valor valido')
      } else {
        totalSamsung = compraSamsung * valorSamsung
        alert('total a pagar por los/el dispositivo ' + totalSamsung)
      }

      break

    case 2:
      compraIphone = parseInt(
        prompt('ingrese la cantidad de dispositivos Iphone que desea comprar'),
      )

      if (
        isNaN(compraIphone) ||
        compraIphone < 0 ||
        compraIphone > cantidadIphone
      ) {
        alert('ingrese un valor valido')
      } else {
        totalIphone = compraIphone * valorIphone
        alert('total a pagar por los/el dispositivo ' + totalIphone)
      }

      break

    case 3:
      compraXiaomi = parseInt(
        prompt('ingrese la cantidad de dispositivos Xiaomi que desea comprar'),
      )

      if (
        isNaN(compraXiaomi) ||
        compraXiaomi < 0 ||
        compraXiaomi > cantidadXiaomi
      ) {
        alert('ingrese un valor valido')
      } else {
        totalXiaomi = compraXiaomi * valorXiaomi
        alert('total a pagar por los/el dispositivo ' + totalXiaomi)
      }

      break

    case 4:
      compraMotorola = parseInt(
        prompt('ingrese la cantidad de dispositivos Motorola que desea comprar'),
      )

      if (
        isNaN(compraMotorola) ||
        compraMotorola < 0 ||
        compraMotorola > cantidadMotorola
      ) {
        alert('ingrese un valor valido')
      } else {
        totalMotorola = compraMotorola * valorMotorola
        alert('total a pagar por los/el dispositivo ' + totalMotorola)
      }

      break
    case 5:
      compraHuawei = parseInt(
        prompt('ingrese la cantidad de dispositivos Huawei que desea comprar'),
      )

      if (
        isNaN(compraHuawei) ||
        compraHuawei < 0 ||
        compraHuawei > cantidadHuawei
      ) {
        alert('ingrese un valor valido')
      } else {
        totalHuawei = compraHuawei * valorHuawei
        alert('total a pagar por los/el dispositivo ' + totalXiaomi)
      }

      break
    case 6:
      compraOPPO = parseInt(
        prompt('ingrese la cantidad de dispositivos OPPO que desea comprar'),
      )

      if (isNaN(compraOPPO) || compraOPPO < 0 || compraOPPO > cantidadOPPO) {
        alert('ingrese un valor valido')
      } else {
        totalOPPO = compraOPPO * valorOPPO
        alert('total a pagar por los/el dispositivo ' + totalOPPO)
      }

      break
  }
  
  
  si = parseInt(
    prompt(
      'ingrese 1 para continuar la compra al final del proceso y otra tecla para cancelar ',
    ),
  
)

}

restantesSamsung = cantidadSamsung - compraSamsung
restantesIphone = cantidadIphone - compraIphone
restantesXiaomi = cantidadXiaomi - compraXiaomi
restantesMotorola = cantidadMotorola - compraMotorola
restantesHuawei = cantidadHuawei - compraHuawei
restantesOPPO = cantidadOPPO - compraOPPO

alert(
  'los Dispositivos restantes de Samsung son ' +
    restantesSamsung +
    ' los dispositivos restantes de Iphone son ' +
    restantesIphone +
    'los dispositivos restantes de Xiaomi son ' +
    restantesXiaomi +
    'los dispositivo restantes de Motorola son ' +
    restantesMotorola +
    'los dispositivos restantes de Huawei son ' +
    restantesHuawei +
    'los dispositivo restantes de OPPO son ' +
    restantesOPPO,
)

valorVentaTotal =(totalXiaomi+totalHuawei+totalSamsung+totalIphone+totalMotorola+totalOPPO)

alert

}else{
alert("sistema cerrado")

}
