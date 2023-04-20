//ejercicio #1

let a= 2;
let b= 5;
let c= 1;

resultado = 3*a-4*b/a**2;

console.log(resultado)

resultado2 = (((b+c)/2*a+10)*3*b)-6

console.log(resultado2)




let cantidad = prompt("Ingresa la cantidad de estudiantes a ingresar:");
let estudiantes = [];
for (let i = 0; i < cantidad; i++) {
    let codigo = prompt("Ingresa el código del estudiante:");
    let nombre = prompt("Ingresa el nombre del estudiante:");
  
    // Validar que el código no se repita
    let codigoRepetido = estudiantes.find(estudiante => estudiante.codigo === codigo);
    if (codigoRepetido) {
      alert(`El código "${codigo}" ya existe para el estudiante "${codigoRepetido.nombre}". Ingresa uno nuevo.`);
      i--;
    } else {
      estudiantes.push({ codigo, nombre });
    }
  }
  console.log(estudiantes);