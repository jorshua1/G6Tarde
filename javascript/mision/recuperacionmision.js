let imc=0;
let parentesco = 0;
let cantidaddefamiliares = 0;
let primermenú = 0;
let a = 0;
primermenú = prompt(
  "bienvenido a su algoritmo para calcular si IMC\n porfavor selecione una de las siguientes opciones:\n 1.ingresar cantidad de familiares\n 2.salir"
);
while (isNaN(cantidaddefamiliares) || cantidaddefamiliares < 0) {
  primermenú = prompt(
    "dato invalido\n porfavor selecione una de las siguientes opciones:\n 1.ingresar cantidad de familiares\n 2.salir"
  );
}
let opcion;
if (primermenú == 2) {
  alert("hasta la proxima");
}
if (primermenú == 1) {
  cantidaddefamiliares = parseInt(
    prompt("ingrese la cantidad de familiares que desea registar")
  );
  while (cantidaddefamiliares < 0 || isNaN(cantidaddefamiliares)) {
    cantidaddefamiliares = parseInt(
      prompt(
        "dato invalido\n porfavor ingrese la cantidad de familiares que desea registar"
      )
    );
  }
  for (a; a < cantidaddefamiliares; a++) {
    parentesco = parseInt(prompt(
        "escriba su parentesco\n 1.papá\n 2.mamá\n 3.hermanos \n 4.tios \n 5.abuelos \n 6.otro \n 7.salir"));
    if (parentesco == 7) {
      a = cantidaddefamiliares;
    } else {

      peso = parseInt(prompt("ingrese el peso en kilogramos de esta persona"));
      while (peso < 0 || isNaN(peso)) {
        peso=parseInt(prompt(
          "valor invalido ingrese el peso en kilogramos de esta persona"
        ));
      }
      altura = parseInt(prompt("ingrese la altura de esta persona"));
      while (altura < 0 || isNaN(altura)) {
        altura = parseInt(prompt("dato invalido porfavor ingrese la altura de esta persona"));
      }
      alert(imc);
    
  while (opcion !== 3) {
      opcion=parseInt(prompt("bienvenido \n elige una de las siguientes opciones \n 1. ingresar los datos para empezar los calculos \n 2.mostrar resultados\n 3.salir"));
      while(opcion<0 || isNaN(opcion) || opcion>3){
      opcion=parseInt(prompt("dato invalido \n porfavor elige una de las siguientes opciones \n 1. ingresar los datos para empezar los calculos \n 2.mostrar resultados\n 3.salir"));
      }
      switch(opcion){
        case 1:
            let nombre=prompt("ingrese el nombre");
            while(!isNaN(nombre)){
                nombre=prompt("ingrese un nombre valido nombre");
            }
            let parentesco=prompt("ingrese el parentesco");
            while(!isNaN(parentesco)){
                parentesco=prompt("ingrese parentesco valido");
            }
            let peso=parseFloat(prompt("ingrese el peso de la persona"));
            while(isNaN(peso) || peso<0){
                peso=parseFloat(prompt("ingrese el peso de la persona"));
            }
            let altura=parseFloat(prompt("dato invalido\n ingrese la altura de la persona"));
            while(isNaN(altura)||altura<0){
                altura=parseFloat(prompt("dalto invalido\n ingrese la altura de la persona"));
            }
            let imc=peso/(altura**2);

            if(imc<18.5){
                alert("el indice de masa corporal de "+nombre+" "+parentesco+" es "+imc+ "y esta bajo" );
            }
            else if(imc<18.5 && imc>24.9){
                alert("el indice de masa corporal de "+nombre+" "+parentesco+" es "+imc+ "y es normal" );
            }
            else if(imc<25 && imc>28.9){
                alert("el indice de masa corporal de "+nombre+" "+parentesco+" es "+imc+ "y esta en sobrepeso" );
            }
            else if(imc<29 && imc>34.9){
                alert("el indice de masa corporal de "+nombre+" "+parentesco+" es "+imc+ "y esta en obesidad 1" );
            }
            else if(imc>35){
                alert("el indice de masa corporal de "+nombre+" "+parentesco+" es "+imc+ "y esta en obesidad 2" );
            }
            break;
        case 2:
            alert(":(")

        case 3:
            break;



      }

    }
  }
}}
