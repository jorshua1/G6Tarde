let estudiantes = 0;
let cantidadEstudiantes = 0;
let nombreDelEstudiante = 0;
let codigoDelEstudiante = 0;
let nivelDelEstudiante = 0;
let listadoNombres = [];
let listadoCodigo = [];
let listadoNivel = [];
let notaEstudiante1 = [];
let notaEstudiante2 = [];
let notaEstudiante3 = [];
let notas = [notaEstudiante1, notaEstudiante2, notaEstudiante3];
let listado = [listadoNombres, listadoCodigo, listadoNivel];
var promedio = 0;
let menu;
do {
  let menu = parseInt(
    prompt(
      "menu\n (1) definir cantidad de estudiantes \n (2) registrar datos estudiantes  \n(3) mostrar listado de estudiantes \n (4) registrar notas estudiantes \n (5) imprimir notas estudiantes \n (6) acerca del autor \n (7) salir "
    )
  );
  if (menu <= 7 && menu > 0) {
    switch (menu) {
      case 1:
        cantidadEstudiantes = parseInt(
          prompt("por favor digite la cantidad de estudiantes")
        );
        while (cantidadEstudiantes < 0 || isNaN(cantidadEstudiantes)) {
          cantidadEstudiantes = parseInt(
            prompt(
              "la cantidad de estudiantes ingresada es incorrecta, porfavor, ingrese de nuevo los datos"
            )
          );
        }
        alert("la cantidad ingresada es " + cantidadEstudiantes);
        break;
      case 2:
        for (let i = 0; i < cantidadEstudiantes; i++) {
          alert("Por favor ingrese los datos del estudiante" + (i + 1));

          nombreDelEstudiante = prompt(
            "ingrese el nombre del estudiante " + (i + 1)
          );
          listadoNombres.push(nombreDelEstudiante);

          codigoDelEstudiante = parseInt(
            prompt("ingrese el codigo del estudiante" + (i + 1))
          );
          listadoCodigo.push(codigoDelEstudiante);
          while (codigoDelEstudiante < 0 || isNaN(codigoDelEstudiante)) {
            codigoDelEstudiante = parseInt(
              prompt(
                "el codigo ingresado es incorrecto, porfavor, ingrese de nuevo el codigo"
              )
            );
            for (let i = 0; i < listadoCodigo.length; i++) {
              console.log(listadoCodigo[0]);
              if (codigoDelEstudiante === listadoCodigo[i])
                codigoDelEstudiante = parseInt(
                  prompt("El codigo ya existe, ingrese el correcto")
                );
            }
          }
          nivelDelEstudiante = parseInt(
            prompt(
              "que nivel es el estudiante\n (1) beginner\n (2) junior \n (3) senior " +
                (i + 1)
            )
          );
          listadoNivel.push(nivelDelEstudiante);
          while (
            nivelDelEstudiante < 0 ||
            nivelDelEstudiante > 3 ||
            isNaN(nivelDelEstudiante)
          ) {
            nivelDelEstudiante = parseInt(
              prompt(
                "digite correctamente el nivel\n (1) beginner\n (2) junior \n (3) senior"
              )
            );
          }
          if (nivelDelEstudiante === 1) {
            alert("el estudiante es de nivel beginner");
          } else if (nivelDelEstudiante === 2) {
            alert("el estudiante es junior");
          } else if (nivelDelEstudiante === 3) {
            alert("el estudiante es nivel senior");
          }

          while (codigoDelEstudiante < 0 || isNaN(codigoDelEstudiante)) {
            codigoDelEstudiante = parseInt(
              prompt(
                "el codigo ingresado es incorrecto, porfavor, ingrese nuevamente el codigo"
              )
            );
          }
        }
        break;
      case 3:
        console.table(listado);
        break;
      case 4:
        alert("ingrese las notas");
        for (let i = 0; i < cantidadEstudiantes; i++) {

          notaEstudiante1[i] = parseFloat(  
            prompt("Ingrese la nota 1" + " del estudiante" + (i + 1)));
          console.log("estudiante 1 " + notaEstudiante1[i])
          while (
            (notaEstudiante1[i] < 0 || notaEstudiante1[i]  > 5) ||
            isNaN(notaEstudiante1)
          ) {
            notaEstudiante1 = parseFloat(
              prompt(
                "la nota ingresada es incorrecta, porfavor, ingrese nuevamente la nota"
              )
            );
          
          }

          notaEstudiante2[i] = parseFloat(
            prompt("Ingrese la nota 2" + " del estudiante" + (i + 1)));
          console.log("estudiante 2 " +notaEstudiante2[i])
          while (
            (notaEstudiante2[i]  < 0 || notaEstudiante2[i] > 5) ||
            isNaN(notaEstudiante2)
          ) {
            notaEstudiante2 = parseFloat(
              prompt(
                "la nota ingresada es incorrecta, porfavor, ingrese nuevamente la nota"
              )
            );
          
          }

          notaEstudiante3[i] = parseFloat(
            prompt("Ingrese la nota 3" + " del estudiante" + (i + 1)));
          console.log("estudiante 3 " + notaEstudiante3[i])
          while (
            (notaEstudiante3[i] < 0 || notaEstudiante3[i]  > 5) ||
            isNaN(notaEstudiante3)
          ) {
            notaEstudiante3 = parseFloat(
              prompt(
                "la nota ingresada es incorrecta, porfavor, ingrese nuevamente la nota"
              )
            );
           
           }
          
  
         // console.log (promedio/3) 
        }
        break;
      case 5:
        console.table(notas);
        break;

      case 6:
        alert(
          "Hola, esto lo hizo arley gg, tengo 22 años, estudio economía, vivo en piedecuesta siuuuu"
        );
      case 7:
        alert("Eso fue todo, gracias");
        break;
    }
    if (menu === 7) {
      break;
    }
  }
} while (menu !== 7);



////////////////////////////////////////////////////////////////////////////

alert ("IMC");
var salirMenú=1;
var familiares = [];

while(salirMenú===1){
    while(true){
    var opMenú=parseFloat(prompt("---Menú---\n1.Ingresar familiares\n2.Ingresar datos para realizar el IMC\n3.Salir"));
    if(!isNaN(opMenú)){
        break;
    }else alert("Ingrese un valor valido");
    }
    if (opMenú===1){
        while(true){
        var nombre=prompt("Ingrese el nombre del familiar");
        if(!isNaN(nombre)){
            alert("Ingrese un valor valido");
        }else {
            familiares.push(nombre);
            break;
        }
        } 
    }
    else if (opMenú===2){
        if(familiares.length==0){
            alert("No ha ingresado familiares, vuelva al menú");
        }
        else{
            for(i=0;i<=(familiares.length-1);i++){
                alert(i+". "+familiares[i]);
            }
            var opFamiliar=0;
            var opTrue=0;
            while(opTrue===0){
                while(true){
                    opFamiliar=parseFloat(prompt("Seleccione el familiar del que desea ingresar los datos"));
                    if(!isNaN(opFamiliar)){
                        break;
                    }else alert("Ingrese un valor valido");
                    }
                if(opFamiliar<=(familiares.length-1)){
                    opTrue=1;
                }else{ 
                    alert("Ingrese una opción correcta");
                }
            }

            while(true){
            var altura=parseFloat(prompt("Ingrese la altura de "+familiares[opFamiliar]));     
            if(!isNaN(altura)){
                break;
            }else alert("Ingrese un valor valido");
            }
            while(true){
            var peso=parseFloat(prompt("Ingrese el peso de "+familiares[opFamiliar]));   
            if(!isNaN(peso)){
                break;
            }else alert("Ingrese un valor valido");
            }
            alert("El IMC de "+familiares[opFamiliar]+ " es: "+(peso/(altura*altura)));
            console.log("El IMC de "+familiares[opFamiliar]+ " es: "+(peso/(altura*altura)))
        }
        familiares.splice(opFamiliar,1);
    }
    else if(opMenú===3){
        alert("Finalizado");
        salirMenú=2;
    }
    else{
        alert("No es una opción valida del menú, por favor seleccione otra vez");
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////7

alert ("inventario")

var Samsung = parseFloat(prompt("Ingrese la cantidad de samsung que tenemos disponibles"));
console.log("tenemos " + Samsung + " samsung dispobiles")
var Iphone = parseFloat(prompt("Ingrese la cantidad de Iphone que tenemos disponibles"));
console.log("tenemos " + Iphone + " Iphone dispobiles")
var Xiaomi = parseFloat(prompt("Ingrese la cantidad de xiaomi que tenemos disponibles"));
console.log("tenemos " + Xiaomi + " Xiaomi dispobiles")
var Motorola = parseFloat(prompt("Ingrese la cantidad de Motorola que tenemos disponibles"));
console.log("tenemos " + Motorola + " Motorola dispobiles")
var Huawei = parseFloat(prompt("Ingrese la cantidad de Huawei que tenemos disponibles"));
console.log("tenemos " + Huawei + " Huawei dispobiles")
var OPPO = parseFloat(prompt("Ingrese la cantidad de OPPO que tenemos disponibles"));
console.log("tenemos " + OPPO + " OPPO dispobiles")

var rta=1;
alert("Venta de celular")
while(rta==1){
    alert("¿Que marca de celular se vendió?");
    var vendido=parseFloat(prompt("1. Samsung\n2. Iphone\n3. Xiaomi\n4. Motorola\n5. Huawei\n6. OPPO"));
    if(vendido==1){
        if(Samsung>=1){
            Samsung-=1;
            alert("Se vendió un celular de marca Samsung\nEl inventario restante de Samsung es: "+Samsung); 
        }
        else{
            alert("No quedan más celulares Samsung")
        }
    }
    if(vendido==2){
        if(Iphone>=1){
            Iphone-=1;
            alert("Se vendió un celular de marca Iphone\nEl inventario restante de Iphone es: "+Iphone); 
        }
        else{
            alert("No quedan más celulares Iphone")
        }
    }
    if(vendido==3){
        if(Xiaomi>=1){
            Xiaomi-=1;
            alert("Se vendió un celular de marca Xiaomi\nEl inventario restante de Xiaomi es: "+Xiaomi); 
        }
        else{
            alert("No quedan más celulares Xiaomi")
        }
    }
    if(vendido==4){
        if(Motorola>=1){
            Motorola-=1;
            alert("Se vendió un celular de marca Motorola\nEl inventario restante de Motorola es: "+Motorola); 
        }
        else{
            alert("No quedan más celulares Motorola")
        }
    }
    if(vendido==5){
        if(Huawei>=1){
            Huawei-=1;
            alert("Se vendió un celular de marca Huawei\nEl inventario restante de Huawei es: "+Huawei); 
        }
        else{
            alert("No quedan más celulares Huawei")
        }
    }
    if(vendido==6){
        if(OPPO>=1){
            OPPO-=1;
            alert("Se vendió un celular de marca OPPO\nEl inventario restante de OPPO es: "+OPPO); 
        }
        else{
            alert("No quedan más celulares OPPO")
        }
    }
    rta=parseFloat(prompt("¿Desea hacer otra venta?\n1. Si\n2. No")); 
}