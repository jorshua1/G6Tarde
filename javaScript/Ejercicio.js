let opcion = 0;
let subOpcion1 = 0;
let subOpcion2 = 0;

while (opcion !== 4) {
  //alert("=== Menú principal === \n1. Opción 1 \n2. Opción 2 \n3. Opción 3 \n4. Salir");

  opcion = parseInt(prompt("=== Menú principal === \n¿Que articulo desea elegir? \n1. Tecnologia 1 \n2. Ropa 2 \n3. Hogar 3 \n4. Salir"));

  switch (opcion) {
    case 1:
      //alert("=== Primer submenú === \n1. Subopción 1 \n2. Subopción 2 \n3. Volver al menú principal");

      subOpcion1 = parseInt(prompt("=== Primer submenú === \n1. Computadores 1 \n2. Telefonos 2 \n3. Volver al menú principal"));

      switch (subOpcion1) {
        case 1:
          alert("Seleciono la opcion de computadores");
          break;
        case 2:
          alert("Seleciono la opcion de telefonos");
          break;
        case 3:
          alert("Volviendo al menú principal...");
          break;
        default:
          alert("Opción inválida");
          break;
      }

      break;
    case 2:
        //alert("=== Segundo submenú === \n1. Subopción 1 \n2. Subopción 2 \n3. Volver al menú principal");
      
      subOpcion2 = parseInt(prompt("=== Segundo submenú === \n1. Prenda superior 1 \n2. Prenda inferior 2 \n3. Volver al menú principal"));

      switch (subOpcion2) {
        case 1:
          alert("Ha seleccionado la prenda superior ");
          break;
        case 2:
          alert("Ha seleccionado la Prenda inferior");
          break;
        case 3:
          alert("Volviendo al menú principal...");
          break;
        default:
          alert("Opción inválida");
          break;
      }

      break;
    case 3:
      alert("No hay articulos disponibles");
      break;
    case 4:
      alert("Saliendo del programa...");
      break;
    default:
      alert("Opción inválida");
      break;
  }
}



let alto = 0;
let ancho = 0;
let linea = 0;
let cadena = 0;
alto = parseInt(prompt("Teclea un número N"));
for(linea=0; linea<alto;linea++){
    cadena=" "
    for(ancho=0; ancho<=linea;ancho++){
        cadena +="*";
    }
    console.log(`${cadena}`);
}



