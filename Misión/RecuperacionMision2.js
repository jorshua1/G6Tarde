let opcion = 0;
let opcionSubMenu = 0;
let cantidadDeFamiliares = 0;
let nombreFamiliar;
let parentescoFamiliar;
let pesoFamiliares = 0;
let estaturaFamiliares = 0;
let imcFamiliares = 0;
let totalImcFamiliares = 0;
let imcPormedioFamiliares = 0;
do{
    opcion = parseInt(prompt(" (1) Ingresar cantidad de familiares \n (2) Ingresar datos para los calculos del IMC \n (3) Mostrar resultados generales \n (4) Salir"));
        while(isNaN(opcion)|| opcion<1 || opcion > 4){
            opcion = parseInt(prompt("ERROR \n (1) Ingresar familiares \n (2) Ingresar datos para los calculos del IMC \n (3) Mostrar resultados \n (4) Salir"));
        }
        switch(opcion){
            case 1:
                if(cantidadDeFamiliares==0){
                cantidadDeFamiliares = parseInt(prompt("Ingrese la cantidad de Familiares"));
                while(isNaN(cantidadDeFamiliares)|| cantidadDeFamiliares<0){
                    cantidadDeFamiliares = parseInt(prompt("ERROR \n Ingrese la cantidad de Familiares"));
                }}
                else{
                    alert("Ya tiene datos registrados")
                }
                break;
            case 2:
                if(cantidadDeFamiliares>0){
                for(i=0; i<cantidadDeFamiliares; i++){
                    nombreFamiliar = prompt("Ingrese el nombre de su "+ i +" familiar");
                    parentescoFamiliar = prompt("Ingrese el parentesco de su "+ i +" familiar");
                    pesoFamiliares = parseFloat(prompt("Ingrese el peso en Kilogramos de su "+ i +" familiar"));
                    while(isNaN(pesoFamiliares)|| pesoFamiliares<=0){
                        pesoFamiliares = parseFloat(prompt("ERROR \n Ingrese el peso en Kilogramos de su "+ i +" familiar"));
                    }
                    estaturaFamiliares = parseFloat(prompt("Ingrese la estatura en Metros de su "+ i +" familiar"));
                    while(isNaN(estaturaFamiliares)|| estaturaFamiliares<=0){
                        estaturaFamiliares = parseFloat(prompt("Ingrese la estatura en Metros de su "+ i +" familiar"));
                    }
                    imcFamiliares = pesoFamiliares/(estaturaFamiliares**2);
                    if(imcFamiliares<18.5){
                        console.log("Su ", parentescoFamiliar , " ", nombreFamiliar , " tiene un IMC de ", imcFamiliares ,", está BAJO DE PESO")
                    }
                    else if(imcFamiliares>=18.5 && imcFamiliares<25){
                        console.log("Su ", parentescoFamiliar , " ", nombreFamiliar , " tiene un IMC de ", imcFamiliares ,", está NORMAL")
                    }
                    else if(imcFamiliares>=25 && imcFamiliares<29){
                        console.log("Su ", parentescoFamiliar , " ", nombreFamiliar , " tiene un IMC de ", imcFamiliares ,", está en SOBRE PESO")
                    }
                    else if(imcFamiliares>=29 && imcFamiliares<35){
                        console.log("Su ", parentescoFamiliar , " ", nombreFamiliar , " tiene un IMC de ", imcFamiliares ,", está en OBESO I")
                    }
                    else{
                        console.log("Su ", parentescoFamiliar , " ", nombreFamiliar , " tiene un IMC de ", imcFamiliares ,", está en OBESO II")
                    }
                    totalImcFamiliares+=imcFamiliares;
                }
                }
                else{
                    alert("No hay familiares registrados")
                }
                break;
            case 3:
                if(cantidadDeFamiliares>0){
                imcPormedioFamiliares = totalImcFamiliares/cantidadDeFamiliares;
                if(imcPormedioFamiliares<18.5){
                    alert("El promedio general del IMC de toda su familia es "+ imcPormedioFamiliares +" están en un nivel: BAJO DE PESO")
                }
                else if(imcPormedioFamiliares>=18.5 && imcPormedioFamiliares<25){
                    alert("El promedio general del IMC de toda su familia es "+ imcPormedioFamiliares +" están en un nivel: NORMAL")
                }
                else if(imcPormedioFamiliares>=25 && imcPormedioFamiliares<29){
                    alert("El promedio general del IMC de toda su familia es "+ imcPormedioFamiliares +" están en un nivel: SOBRE PESO")
                }
                else if(imcPormedioFamiliares>=29 && imcPormedioFamiliares<35){
                    alert("El promedio general del IMC de toda su familia es "+ imcPormedioFamiliares +" están en un nivel: OBESO I")
                }
                else{
                    alert("El promedio general del IMC de toda su familia es "+ imcPormedioFamiliares +" están en un nivel: OBESO II")
                }
                }
                else{
                    alert("No hay familiares registrados")
                }

                break;
            case 4:
                alert("Saliendo");
                break;
                default:
                    alert("Saliendo");
                break;

        }
}
while(opcion!==4)

