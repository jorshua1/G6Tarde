let inventario = {
    samsung:300,
    iphone: 300,
    xiaomi: 300,
    motorola:300,
    huawei: 300,
    oppo: 300,
  };
  let totalDinero = 0;
  let continuar = true;
  while (continuar) {
    let marca = prompt("Ingrese la marca del celular (samsung, iphone, xiaomi, motorola, huawei, oppo):");
    
    if (marca in inventario) {
      let cantidad = parseInt(prompt(`Ingrese la cantidad de celulares de la marca ${marca} vendidos:`));
      let precioUnitario = parseFloat(prompt(`Ingrese el precio unitario de los celulares de la marca ${marca}:`));
    
      while (inventario[marca] < cantidad) {
        alert(`No hay suficientes celulares de la marca ${marca} en el inventario.`);    
            cantidad = parseInt(prompt(`Ingrese una cantidad menor o igual a ${inventario[marca]}:`));
  }
          inventario[marca] -= cantidad;
     totalDinero += cantidad * precioUnitario;
   
     alert(`${cantidad} celulares de la marca ${marca} vendidos.`);
   } else {
     alert(`La marca ${marca} no está disponible en el inventario.`);
   }
  
    continuar = confirm("¿Desea continuar vendiendo celulares?");
  }
  
  let inventarioString = "Inventario actualizado:";
  for (let marca in inventario) {
    inventarioString += `\n- ${marca}: ${inventario[marca]}`;
  }
  alert(inventarioString);
  alert(`Total de dinero recaudado: $${totalDinero}`);