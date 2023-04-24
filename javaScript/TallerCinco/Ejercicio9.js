/*Queremos guardar la temperatura mínima y máxima de 5 días. 
realiza un programa que de la siguiente información:

La temperatura media de cada día
Los días con menos temperatura
Se lee una temperatura por teclado y se muestran los días 
cuya temperatura máxima coincide con ella. si no existe ningún 
día se muestra un mensaje de información. */

let temperaturas = new Array(5);
let eleccion = 0;
let menu = ""
let continuar = 0;

for(let i = 0; i<temperaturas.length; i++){
    temperaturas[i] = new Array(3);
    temperaturas[i][0] = Number(prompt(`Ingrese la temperatura mínima (°C) del día Nº${i+1}.`));
    while((isNaN(temperaturas[i][0]))||(temperaturas[i][0]<-100)||(temperaturas[i][0]>55)){
        alert("Por favor, ingrese una temperatura válida.");
        temperaturas[i][0] = Number(prompt(`Ingrese la temperatura mínima (°C) del día Nº${i+1}.`));
    }
    temperaturas[i][1] = Number(prompt(`Ingrese la temperatura máxima (°C) del día Nº${i+1}.`));
    while((isNaN(temperaturas[i][1]))||(temperaturas[i][1]<-100)||(temperaturas[i][1]>55)){
        alert("Por favor, ingrese una temperatura válida.");
        temperaturas[i][1] = Number(prompt(`Ingrese la temperatura máxima (°C) del día Nº${i+1}.`));
    }
    temperaturas[i][2] = i+1
}

do{
    continuar = 0;
    menu = `Qué desea hacer?\n1. Ver la temperatura media de cada día.\n2. Ver los días con menos temperatura.\n3. Buscar temperatura máxima.\n4. Modificar temperaturas.\n5. Salir.`;
    eleccion = Number(prompt(menu));
    while((isNaN(eleccion))||(!Number.isInteger(eleccion))||(eleccion<0)||(eleccion>5)){
        alert("Por favor ingrese una opción válida.");
        eleccion = Number(prompt(menu));
    }
    switch (eleccion){
        case 1:
            menu = "Las temperaturas medias de cada día son: "
            for(let i = 0; i<temperaturas.length;i++){
                menu += `\nDia Nº${i+1}: ${(temperaturas[i][0]+temperaturas[i][1])/2} ºC`
            }
            alert(menu);
            break;
        case 2:
            let temperaturaMin
            menu = "Los días con temperaturas más bajas son: "
            for(let i = 0;i<temperaturas.length;i++){
                if (i===0){
                    temperaturaMin=temperaturas[i][0];
                }else if (temperaturas[i][0]<temperaturaMin){
                    temperaturaMin=temperaturas[i][0];
                }
            }
            for(let i = 0;i<temperaturas.length;i++){
                if(temperaturas[i][0] === temperaturaMin){
                    menu += `\nDia ${temperaturas[i][2]}: ${temperaturas[i][0]}°C`;
                }
            }
            alert(menu);
            break;
        case 3:
            let buscarTemperatura = 0;
            do{
                buscarTemperatura = Number(prompt("Ingrese un valor de temperatura máxima para buscarla en el el registro."));
                while((isNaN(buscarTemperatura))||(buscarTemperatura<-100)||(buscarTemperatura>55)){
                    alert("Por favor, ingrese una temperatura válida.");
                    buscarTemperatura = Number(prompt("Ingrese un valor de temperatura máxima para buscarla en el el registro."));
                }
                menu = "Se han encontrado las siguientes coincidencias de temperaturas máximas: "
                for(let i = 0;i<temperaturas.length;i++){
                    if(temperaturas[i][1] === buscarTemperatura){
                        menu += `\nDia ${temperaturas[i][2]}: ${temperaturas[i][1]}°C`;
                    }
                }
                if(menu === "Se han encontrado las siguientes coincidencias de temperaturas máximas: "){
                    menu = "No se han encontrado coincidencias con la búsqueda.";
                }
                alert(menu);
                continuar = Number(prompt("¿Deseas realizar otra búsqueda?\n1) Sí. --- 2) No."));
                while((continuar!==1)&&(continuar!==2)){
                    alert("Por favor, seleccione una opción válida.");
                    continuar = Number(prompt("¿Deseas realizar otra búsqueda?\n1) Sí. --- 2) No."))
                }
            }while(continuar !==2)
            break;
        case 4:
            eleccion = Number(prompt(`¿Qué día deseas cambiar?\n1. Día 1.\n2. Día 2.\n3. Día 3.\n4. Día 4.\n5. Día 5.\n6. Modificar todos.\n7. Cancelar.`));
            switch (eleccion){
                case 1:
                    temperaturas[0][0] = Number(prompt(`Ingrese la temperatura mínima (°C) del día Nº${temperaturas[0][2]}.`));
                    while((isNaN(temperaturas[0][0]))||(temperaturas[0][0]<-100)||(temperaturas[0][0]>55)){
                        alert("Por favor, ingrese una temperatura válida.");
                        temperaturas[0][0] = Number(prompt(`Ingrese la temperatura mínima (°C) del día Nº${temperaturas[0][2]}.`));
                    }
                    temperaturas[0][1] = Number(prompt(`Ingrese la temperatura máxima (°C) del día Nº$${temperaturas[0][2]}.`));
                    while((isNaN(temperaturas[0][1]))||(temperaturas[0][1]<-100)||(temperaturas[0][1]>55)){
                        alert("Por favor, ingrese una temperatura válida.");
                        temperaturas[0][1] = Number(prompt(`Ingrese la temperatura máxima (°C) del día Nº${temperaturas[0][2]}.`));
                    }
                    break;
                case 2:
                    temperaturas[1][0] = Number(prompt(`Ingrese la temperatura mínima (°C) del día Nº${temperaturas[1][2]}.`));
                    while((isNaN(temperaturas[1][0]))||(temperaturas[1][0]<-100)||(temperaturas[1][0]>55)){
                        alert("Por favor, ingrese una temperatura válida.");
                        temperaturas[1][0] = Number(prompt(`Ingrese la temperatura mínima (°C) del día Nº${temperaturas[1][2]}.`));
                    }
                    temperaturas[1][1] = Number(prompt(`Ingrese la temperatura máxima (°C) del día Nº$${temperaturas[1][2]}.`));
                    while((isNaN(temperaturas[1][1]))||(temperaturas[1][1]<-100)||(temperaturas[1][1]>55)){
                        alert("Por favor, ingrese una temperatura válida.");
                        temperaturas[1][1] = Number(prompt(`Ingrese la temperatura máxima (°C) del día Nº${temperaturas[1][2]}.`));
                    }
                    break;
                case 3:
                    temperaturas[2][0] = Number(prompt(`Ingrese la temperatura mínima (°C) del día Nº${temperaturas[2][2]}.`));
                    while((isNaN(temperaturas[2][0]))||(temperaturas[2][0]<-100)||(temperaturas[2][0]>55)){
                        alert("Por favor, ingrese una temperatura válida.");
                        temperaturas[2][0] = Number(prompt(`Ingrese la temperatura mínima (°C) del día Nº${temperaturas[2][2]}.`));
                    }
                    temperaturas[2][1] = Number(prompt(`Ingrese la temperatura máxima (°C) del día Nº$${temperaturas[2][2]}.`));
                    while((isNaN(temperaturas[2][1]))||(temperaturas[2][1]<-100)||(temperaturas[2][1]>55)){
                        alert("Por favor, ingrese una temperatura válida.");
                        temperaturas[2][1] = Number(prompt(`Ingrese la temperatura máxima (°C) del día Nº${temperaturas[2][2]}.`));
                    }
                    break;
                case 4:
                    temperaturas[3][0] = Number(prompt(`Ingrese la temperatura mínima (°C) del día Nº${temperaturas[3][2]}.`));
                    while((isNaN(temperaturas[3][0]))||(temperaturas[3][0]<-100)||(temperaturas[3][0]>55)){
                        alert("Por favor, ingrese una temperatura válida.");
                        temperaturas[3][0] = Number(prompt(`Ingrese la temperatura mínima (°C) del día Nº${temperaturas[3][2]}.`));
                    }
                    temperaturas[3][1] = Number(prompt(`Ingrese la temperatura máxima (°C) del día Nº$${temperaturas[3][2]}.`));
                    while((isNaN(temperaturas[3][1]))||(temperaturas[3][1]<-100)||(temperaturas[3][1]>55)){
                        alert("Por favor, ingrese una temperatura válida.");
                        temperaturas[3][1] = Number(prompt(`Ingrese la temperatura máxima (°C) del día Nº${temperaturas[3][2]}.`));
                    }
                    break;
                case 5:
                    temperaturas[4][0] = Number(prompt(`Ingrese la temperatura mínima (°C) del día Nº${temperaturas[4][2]}.`));
                    while((isNaN(temperaturas[4][0]))||(temperaturas[4][0]<-100)||(temperaturas[4][0]>55)){
                        alert("Por favor, ingrese una temperatura válida.");
                        temperaturas[4][0] = Number(prompt(`Ingrese la temperatura mínima (°C) del día Nº${temperaturas[4][2]}.`));
                    }
                    temperaturas[4][1] = Number(prompt(`Ingrese la temperatura máxima (°C) del día Nº${temperaturas[4][2]}.`));
                    while((isNaN(temperaturas[4][1]))||(temperaturas[4][1]<-100)||(temperaturas[4][1]>55)){
                        alert("Por favor, ingrese una temperatura válida.");
                        temperaturas[4][1] = Number(prompt(`Ingrese la temperatura máxima (°C) del día Nº${temperaturas[4][2]}.`));
                    }
                    eleccion = 0;
                    break;
                case 6:
                    do{
                        for(let i = 0; i<temperaturas.length; i++){
                            temperaturas[i][0] = Number(prompt(`Ingrese la temperatura mínima (°C) del día Nº${temperaturas[i][2]}.`));
                            while((isNaN(temperaturas[i][0]))||(temperaturas[i][0]<-100)||(temperaturas[i][0]>55)){
                                alert("Por favor, ingrese una temperatura válida.");
                                temperaturas[i][0] = Number(prompt(`Ingrese la temperatura mínima (°C) del día Nº${temperaturas[i][2]}.`));
                            }
                            temperaturas[i][1] = Number(prompt(`Ingrese la temperatura máxima (°C) del día Nº${temperaturas[i][2]}.`));
                            while((isNaN(temperaturas[i][1]))||(temperaturas[i][1]<-100)||(temperaturas[i][1]>55)){
                                alert("Por favor, ingrese una temperatura válida.");
                                temperaturas[i][1] = Number(prompt(`Ingrese la temperatura máxima (°C) del día Nº${temperaturas[i][2]}.`));
                            }
                        }
                        continuar = Number(prompt("¿Deseas modificar otro día??\n1) Sí. --- 2) No."));
                        while((continuar!==1)&&(continuar!==2)){
                            alert("Por favor, seleccione una opción válida.");
                            continuar = Number(prompt("¿Deseas modificar otro día??\n1) Sí. --- 2) No."))
                        }
                    }while(continuar!==2);
                    break;
                case 7:
                    alert("Volviendo al menú principal.");
            }
            break;
        case 5:
            alert("Saliendo...");
            break;
    }
}while(eleccion!==5);
