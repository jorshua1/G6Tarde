let canttelefonossamsung = parseInt(
  prompt("ingrese cuantos telefonos samsung hay")
);
while (canttelefonossamsung < 0 || isNaN(canttelefonossamsung)) {
  canttelefonossamsung = parseInt(prompt("ingrese un valor valido"));
}
let preciodetelefonossamsung = parseInt(
  prompt("¿que valor por unidad tiene este producto?")
);
while (preciodetelefonossamsung < 0 || isNaN(preciodetelefonossamsung)) {
  preciodetelefonossamsung = parseInt(prompt("ingrese un valor valido"));
}

let canttelefonosiphone = parseInt(
  prompt("ingrese la cantidad de telefonos iphone")
);
while (canttelefonosiphone < 0 || isNaN(canttelefonosiphone)) {
  canttelefonosiphone = parseInt(prompt("ingrese un valor valido"));
}
let preciodetelefonosiphone = parseInt(
  prompt("¿que valor por unidad tiene este producto?")
);
while (preciodetelefonosiphone < 0 || isNaN(preciodetelefonosiphone)) {
  preciodetelefonosiphone = parseInt(prompt("ingrese un valor valido"));
}

let canttelefonosxiaomi = parseInt(
  prompt("ingrese la cantidad de telefonos xiaomi")
);
while (canttelefonosxiaomi < 0 || isNaN(canttelefonosxiaomi)) {
  canttelefonosxiaomi = parseInt(prompt("ingrese un valor valido"));
}
let preciodetelefonosxiaomi = parseInt(
  prompt("¿que valor por unidad tiene este producto?")
);
while (preciodetelefonosxiaomi < 0 || isNaN(preciodetelefonosxiaomi)) {
  preciodetelefonosxiaomi = parseInt(prompt("ingrese un valor valido"));
}
let canttelefonoshuawei = parseInt(
  prompt("ingrese la cantidad de telefonos huawei")
);
while (canttelefonoshuawei < 0 || isNaN(canttelefonoshuawei)) {
  canttelefonoshuawei = parseInt(prompt("ingrese un valor valido"));
}
let preciodetelefonoshuawei = parseInt(
  prompt("¿que valor por unidad tiene este producto?")
);
while (preciodetelefonoshuawei < 0 || isNaN(preciodetelefonoshuawei)) {
  preciodetelefonoshuawei = parseInt(prompt("ingrese un valor valido"));
}
let canttelefonosmotorola = parseInt(
  prompt("ingrese la cantidad de telefonos motorola")
);
while (canttelefonosmotorola < 0 || isNaN(canttelefonosmotorola)) {
  canttelefonosmotorola = parseInt(prompt("ingrese un valor valido"));
}
let preciodetelefonosmotorola = parseInt(
  prompt("¿que valor por unidad tiene este producto?")
);
while (preciodetelefonosmotorola < 0 || isNaN(preciodetelefonosmotorola)) {
  preciodetelefonosmotorola = parseInt(prompt("ingrese un valor valido"));
}
let canttelefonosoppo = parseInt(
  prompt("ingrese la cantidad de telefonos oppo")
);
while (canttelefonosoppo < 0 || isNaN(canttelefonosoppo)) {
  canttelefonosoppo = parseInt(prompt("ingrese un valor valido"));
}
let preciodetelefonosoppo = parseInt(
  prompt("¿que valor por unidad tiene este producto?")
);
while (preciodetelefonosoppo < 0 || isNaN(preciodetelefonosoppo)) {
  preciodetelefonosoppo = parseInt(prompt("ingrese un valor valido"));
}
let opciones = 4;
while (opciones =>4) {
  let contadorsamsung = 0;
  let contadoriphone = 0;
  let contadorhuawei = 0;
  let contadorxiaomi = 0;
  let contadormotorola = 0;
  let contadoroppo = 0;
  
  switch (opciones) {
    case 1:
      let cambiarcantidad = parseInt(
        prompt(
          "de que marca desea hacer el cambio?.\n 1. samsung.\n 2. iphone.\n 3. xiaomi.\n 4. huawei\n 5. motorola.\n 6. oppo"
        )
      );
      while (
        cambiarcantidad < 0 ||
        cambiarcantidad > 6 ||
        isNaN(cambiarcantidad)
      ) {
        cambiarcantidad = parseInt(
          prompt(
            "valor invalido, ingrese uno de los siguientes: 1. samsung.\n 2. iphone.\n 3. xiaomi.\n 4. huawei\n 5. motorola.\n 6. oppo"
          )
        );
      }
      if (cambiarcantidad === 1) {
        canttelefonossamsung = parseInt(
          prompt("ingrese cuantos telefonos samsung hay")
        );
        while (canttelefonossamsung < 0 || isNaN(canttelefonossamsung)) {
          canttelefonossamsung = parseInt(prompt("ingrese un valor valido"));
        }
      } else if (cambiarcantidad === 2) {
        canttelefonosiphone = parseInt(
          prompt("ingrese la cantidad de telefonos iphone")
        );
        while (canttelefonosiphone < 0 || isNaN(canttelefonosiphone)) {
          canttelefonosiphone = parseInt(prompt("ingrese un valor valido"));
        }
      } else if (cambiarcantidad === 3) {
        canttelefonosxiaomi = parseInt(
          prompt("ingrese la cantidad de telefonos xiaomi")
        );
        while (canttelefonosxiaomi < 0 || isNaN(canttelefonosxiaomi)) {
          canttelefonosxiaomi = parseInt(prompt("ingrese un valor valido"));
        }
      } else if (cambiarcantidad === 4) {
        canttelefonoshuawei = parseInt(
          prompt("ingrese la cantidad de telefonos huawei")
        );
        while (canttelefonoshuawei < 0 || isNaN(canttelefonoshuawei)) {
          canttelefonoshuawei = parseInt(prompt("ingrese un valor valido"));
        }
      } else if (cambiarcantidad === 5) {
        canttelefonosmotorola = parseInt(
          prompt("ingrese la cantidad de telefonos motorola")
        );
        while (canttelefonosmotorola < 0 || isNaN(canttelefonosmotorola)) {
          canttelefonosmotorola = parseInt(prompt("ingrese un valor valido"));
        }
      } else {
        canttelefonosoppo = parseInt(
          prompt("ingrese la cantidad de telefonos oppo")
        );
        while (canttelefonosoppo < 0 || isNaN(canttelefonosoppo)) {
          canttelefonosoppo = parseInt(prompt("ingrese un valor valido"));
        }
      }
      console.log(
        "hay " +
          canttelefonossamsung +
          " telefonos samsung, y su precio por unidad es " +
          preciodetelefonossamsung
      );
      console.log(
        "hay " +
          canttelefonosiphone +
          " telefonos iphone y su precio por unidad es" +
          preciodetelefonosiphone
      );
      console.log(
        "hay " +
          canttelefonosmotorola +
          " telefonos motorola y su precio por unidad es" +
          preciodetelefonosmotorola
      );
      console.log(
        "hay " +
          canttelefonoshuawei +
          " telefonos huawei y su precio por unidad es " +
          preciodetelefonoshuawei
      );
      console.log(
        "hay " +
          canttelefonosoppo +
          " telefonos oppo y su precio por unidad es " +
          preciodetelefonosoppo
      );
      console.log(
        "hay " +
          canttelefonosxiaomi +
          " telefonos xiaomi y su precio por unidad es " +
          preciodetelefonosxiaomi
      );
      break;
    case 2:
      do {
        let contadorsamsung = 0;
        let contadoriphone = 0;
        let contadorhuawei = 0;
        let contadorxiaomi = 0;
        let contadormotorola = 0;
        let contadoroppo = 0;

        let ventaaregistrar = parseInt(
          prompt(
            "que marca de telefono vendio(selecione):\n 1 para samsung.\n 2 para iphone.\n 3 para huawei.\n 4 para xiaomi.\n 5 para motorola.\n 6 para oppo"
          )
        );
        while (
          ventaaregistrar < 0 ||
          ventaaregistrar > 6 ||
          isNaN(ventaaregistrar)
        ) {
          ventaaregistrar = parseInt(
            prompt(
              "porfavor ingrese una opcion valida(selecione):\n 1 para samsung.\n 2 para iphone.\n 3 para huawei.\n 4 para xiaomi.\n 5 para motorola.\n 6 para oppo"
            )
          );
        }
        if (ventaaregistrar === 1) {
          alert("se ha registrado correctamente una venta de samsung ");
          canttelefonossamsung--;
          contadorsamsung++;
        } else if (ventaaregistrar === 2) {
          alert("se ha registrado correctamente una venta de iphone");
          canttelefonosiphone--;
          contadoriphone++;
        } else if (ventaaregistrar === 3) {
          alert("se ha registrado correctamente una venta de huawei");
          canttelefonoshuawei--;
          contadorhuawei++;
        } else if (ventaaregistrar === 4) {
          alert("se ha registrado correctamente una venta de xiaomi");
          canttelefonosxiaomi--;
          contadorxiaomi++;
        } else if (ventaaregistrar === 5) {
          alert("se ha registrado correctamente una venta de motorola");
          canttelefonosmotorola--;
          contadormotorola++;
        } else if (ventaaregistrar === 6) {
          alert("se ha registrado correctamente una venta de oppo");
          canttelefonosoppo--;
          contadoroppo++;
        }
        let cerrar = parseInt(
          prompt("¿desea registrar una compra mas?.\n 1. si.\n 2. no")
        );
        if (cerrar === 2) {
          break;
        }
      } while ((cerrar = 2));
      break;
    case 3:
      let ventastotales =
        contadorsamsung * preciodetelefonossamsung +
        contadoriphone * preciodetelefonosiphone +
        contadorhuawei * preciodetelefonoshuawei +
        contadormotorola * preciodetelefonosmotorola +
        contadoroppo * preciodetelefonosoppo;
      alert("el total de las ventas es " + ventastotales);
      break;
    case 4:
       let opciones=5
  }
}
