var sumatoriaSamsung = 0;
var sumatoriaIphone = 0;
var sumatoriaXiaomi = 0;
var sumatoriaMotorola = 0;
var sumatoriaHuawei = 0;
var sumatoriaOPPO = 0;
var sumatoriaTotalSamsung = 0;
var sumatoriaTotalIphone = 0;
var sumatoriaTotalXiaomi = 0;
var sumatoriaTotalMotorola = 0;
var sumatoriaTotalHuawei = 0;
var sumatoriaTotalOPPO = 0;

do {
  console.log("Menu Principal Inventario");
  console.log("Registrar Celulares: [1]");
  console.log("Venta de Celulares:  [2]");
  console.log("Dinero recaudado:    [3]");
  opcion = parseInt(prompt("Digite la opcion que desee realizar:"));
  while (isNaN(opcion) || opcion <= 0 || opcion > 3) {
    opcion = parseInt(prompt("Digite una opcion valida que desee realizar:"));
  }

  switch (opcion) {
    case 1:
      cantidadSamsung = parseInt(
        prompt("Digite la cantidad de celulares Samsung")
      );
      while (isNaN(cantidadSamsung) || cantidadSamsung <= 0) {
        cantidadSamsung = parseInt(
          prompt("Digite la cantidad valida de celulares Samsung")
        );
        sumatoriaSamsung = sumatoriaSamsung + cantidadSamsung;
      }

      cantidadIphone = parseInt(
        prompt("Digite la cantidad de celulares Iphone")
      );
      while (isNaN(cantidadIphone) || cantidadIphone <= 0) {
        cantidadIphone = parseInt(
          prompt("Digite la cantidad valida de celulares Iphone")
        );
        sumatoriaIphone = sumatoriaIphone + cantidadIphone;
      }

      cantidadXiaomi = parseInt(
        prompt("Digite la cantidad de celulares Xiaomi")
      );
      while (isNaN(cantidadXiaomi) || cantidadXiaomi <= 0) {
        cantidadXiaomi = parseInt(
          prompt("Digite la cantidad valida de celulares Xiaomi")
        );
        sumatoriaXiaomi = sumatoriaXiaomi + cantidadXiaomi;
      }

      cantidadMotorola = parseInt(
        prompt("Digite la cantidad de celulares Motorola")
      );
      while (isNaN(cantidadMotorola) || cantidadMotorola <= 0) {
        cantidadMotorola = parseInt(
          prompt("Digite la cantidad valida de celulares Motorola")
        );
        sumatoriaMotorola = sumatoriaMotorola + cantidadMotorola;
      }

      cantidadHuawei = parseInt(
        prompt("Digite la cantidad de celulares Huawei")
      );
      while (isNaN(cantidadHuawei) || cantidadHuawei <= 0) {
        cantidadHuawei = parseInt(
          prompt("Digite la cantidad valida de celulares Huawei")
        );
        sumatoriaHuawei = sumatoriaHuawei + cantidadHuawei;
      }

      cantidadOPPO = parseInt(prompt("Digite la cantidad de celulares OPPO"));
      while (isNaN(cantidadOPPO) || cantidadOPPO <= 0) {
        cantidadOPPO = parseInt(
          prompt("Digite la cantidad valida de celulares OPPO")
        );
        sumatoriaOPPO = sumatoriaOPPO + cantidadOPPO;
      }
      break;

    case 2:
      console.log("Digite la opcion para la marca respectiva:");
      console.log("Samsung   [1]");
      console.log("Iphone    [2]");
      console.log("Xiaomi    [3]");
      console.log("Motorola  [4]");
      console.log("Huawei    [5]");
      console.log("OPPO      [6]");

      celular = parseInt(prompt("Digite la opcion:"));
      while (isNaN(celular) || celular <= 0 || celular > 6) {
        celular = parseInt(prompt("Digite la opcion valida:"));
      }

      switch (celular) {
        case 1:
          ventaSamsung = parseInt(
            prompt("Digite la cantidad de celulares Samsung que vendio")
          );
          while (
            isNaN(ventaSamsung) ||
            ventaSamsung <= 0 ||
            ventaSamsung > cantidadSamsung
          ) {
            ventaSamsung = parseInt(
              prompt(
                "Digite la cantidad valida de celulares Samsung que vendio"
              )
            );
          }

          precioSamsung = parseInt(
            prompt("Digite el valor por unidad de celular Samsung")
          );
          while (isNaN(precioSamsung) || precioSamsung <= 0) {
            precioSamsung = parseInt(
              prompt("Digite el valor por unidad valido de celular Samsung")
            );
          }

          sumatoriaTotalSamsung =
            ventaSamsung * precioSamsung + sumatoriaTotalSamsung;
          cantidadSamsung = cantidadSamsung - ventaSamsung;
          console.log("Quedan: " + cantidadSamsung + " Samsung");

          break;

        case 2:
          ventaIphone = parseInt(
            prompt("Digite la cantidad de celulares Iphone que vendio")
          );
          while (
            isNaN(ventaIphone) ||
            ventaIphone <= 0 ||
            ventaIphone > cantidadIphone
          ) {
            ventaIphone = parseInt(
              prompt("Digite la cantidad valida de celulares Iphone que vendio")
            );
          }

          precioIphone = parseInt(
            prompt("Digite el valor por unidad de celular Iphone")
          );
          while (isNaN(precioIphone) || precioIphone <= 0) {
            precioIphone = parseInt(
              prompt("Digite el valor por unidad valido de celular Iphone")
            );
          }

          sumatoriaTotalIphone =
            ventaIphone * precioIphone + sumatoriaTotalIphone;
          cantidadIphone = cantidadIphone - ventaIphone;
          console.log("Quedan: " + cantidadIphone + " Iphone");

          break;

        case 3:
          ventaXiaomi = parseInt(
            prompt("Digite la cantidad de celulares Xiaomi que vendio")
          );
          while (
            isNaN(ventaXiaomi) ||
            ventaXiaomi <= 0 ||
            ventaXiaomi > cantidadXiaomi
          ) {
            ventaXiaomi = parseInt(
              prompt("Digite la cantidad valida de celulares Xiaomi que vendio")
            );
          }

          precioXiaomi = parseInt(
            prompt("Digite el valor por unidad de celular Xiaomi")
          );
          while (isNaN(precioXiaomi) || precioXiaomi <= 0) {
            precioXiaomi = parseInt(
              prompt("Digite el valor por unidad valido de celular Xiaomi")
            );
          }

          sumatoriaTotalXiaomi =
            ventaXiaomi * precioXiaomi + sumatoriaTotalXiaomi;
          cantidadXiaomi = cantidadXiaomi - ventaXiaomi;
          console.log("Quedan: " + cantidadXiaomi + " Xiaomi");

          break;

        case 4:
          ventaMotorola = parseInt(
            prompt("Digite la cantidad de celulares Motorola que vendio")
          );
          while (
            isNaN(ventaMotorola) ||
            ventaMotorola <= 0 ||
            ventaMotorola > cantidadMotorola
          ) {
            ventaMotorola = parseInt(
              prompt(
                "Digite la cantidad valida de celulares Motorola que vendio"
              )
            );
          }

          precioMotorola = parseInt(
            prompt("Digite el valor por unidad de celular Motorola")
          );
          while (isNaN(precioMotorola) || precioMotorola <= 0) {
            precioMotorola = parseInt(
              prompt("Digite el valor por unidad valido de celular Motorola")
            );
          }

          sumatoriaTotalMotorola =
            ventaMotorola * precioMotorola + sumatoriaTotalMotorola;
          cantidadMotorola = cantidadMotorola - ventaMotorola;
          console.log("Quedan: " + cantidadMotorola + " Motorola");

          break;

        case 5:
          ventaHuawei = parseInt(
            prompt("Digite la cantidad de celulares Huawei que vendio")
          );
          while (
            isNaN(ventaHuawei) ||
            ventaHuawei <= 0 ||
            ventaHuawei > cantidadHuawei
          ) {
            ventaHuawei = parseInt(
              prompt("Digite la cantidad valida de celulares Huawei que vendio")
            );
          }

          precioHuawei = parseInt(
            prompt("Digite el valor por unidad de celular Huawei")
          );
          while (isNaN(precioHuawei) || precioHuawei <= 0) {
            precioHuawei = parseInt(
              prompt("Digite el valor por unidad valido de celular Huawei")
            );
          }

          sumatoriaTotalHuawei =
            ventaHuawei * precioHuawei + sumatoriaTotalHuawei;
          cantidadHuawei = cantidadHuawei - ventaHuawei;
          console.log("Quedan: " + cantidadHuawei + " Huawei");

          break;

        case 6:
          ventaOPPO = parseInt(
            prompt("Digite la cantidad de celulares OPPO que vendio")
          );
          while (
            isNaN(ventaOPPO) ||
            ventaOPPO <= 0 ||
            ventaOPPO > cantidadOPPO
          ) {
            ventaOPPO = parseInt(
              prompt("Digite la cantidad valida de celulares OPPO que vendio")
            );
          }

          precioOPPO = parseInt(
            prompt("Digite el valor por unidad de celular OPPO")
          );
          while (isNaN(precioOPPO) || precioOPPO <= 0) {
            precioOPPO = parseInt(
              prompt("Digite el valor por unidad valido de celular OPPO")
            );
          }

          sumatoriaTotalOPPO = ventaOPPO * precioOPPO + sumatoriaTotalOPPO;
          cantidadOPPO = cantidadOPPO - ventaOPPO;
          console.log("Quedan: " + cantidadOPPO + " OPPO");

          break;

        default:
          console.log("Digite una opcion valida");
          break;
      }

      break;

    case 3:
      gananciaTotal =
        sumatoriaTotalSamsung +
        sumatoriaTotalIphone +
        sumatoriaTotalXiaomi +
        sumatoriaTotalMotorola +
        sumatoriaTotalHuawei +
        sumatoriaTotalOPPO;
      console.log("Las ganancias por las ventas son de: " + gananciaTotal);
      break;

    default:
      break;
  }

  bandera = prompt("Desea volver a realizar otra opcion? Digite Si o No");
  while (bandera != "Si" && bandera != "No") {
    bandera = prompt(
      "Desea volver a realizar otra opcion? Digite Si o No, solamente"
    );
  }
} while (bandera === "Si");
