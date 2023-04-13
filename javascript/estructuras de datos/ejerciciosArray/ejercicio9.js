let temperaturas = new Array(5);
let eleccion = 0;
let menu = ""

for(let i = 0; i<temperaturas.length; i++){
    temperaturas[i] = new Array(2);
    temperaturas[i][0] = Number(prompt(`Ingrese la temperatura mínima del día Nº${i+1}.`));
    while((isNaN(temperaturas[i][0]))||(temperaturas[i][0]<-100)||(temperaturas[i][0]>55)){
        alert("Por favor, ingrese una temperatura válida.");
        temperaturas[i][0] = Number(prompt(`Ingrese la temperatura mínima del día Nº${i+1}.`));
    }
    temperaturas[i][1] = Number(prompt(`Ingrese la temperatura máxima del día Nº${i+1}.`));
    while((isNaN(temperaturas[i][1]))||(temperaturas[i][1]<-100)||(temperaturas[i][1]>55)){
        alert("Por favor, ingrese una temperatura válida.");
        temperaturas[i][1] = Number(prompt(`Ingrese la temperatura mínima del día Nº${i+1}.`));
    }
}

do{
    menu = `Qué desea hacer?\n1.Ver la temperatura media de cada día.\n2.Ver los días con menos temperatura.\n3. Buscar temperatura máxima.\n4. Modificar temperaturas.\n 5. Salir.`;
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
                if(tem)
            }
            break;
        case 3:

            break;
        case 4:

            break;
        case 5:

            break;
    }
}while(eleccion!==5)