let opcion = 0
let opcionSubmenu = 0
let numeroFamiliares = 0
let totalIMCfamiliares = 0
let peso = 0
let imcPromedioFamiliares = 0
let IMC;
let altura = 0
while (opcion !== 4){
    opcion = parseInt(prompt(
        `selecciona una opcion del menú:
    1. ingresar familiares
    2. ingresar datos necesarios para realizar los cálculos
    3. ver resultados
    4. salir
    
    `))
        while (isNaN(opcion) || opcion > 4 || opcion < 0){
            opcion = parseInt(prompt(
                `ERROR, por favor selecciona una opcion del menú:
            1. ingresar familiares
            2. ingresar datos necesarios para realizar los cálculos
            3. ver resultados
            4. salir
            
            `))
        }
          switch (opcion) {

        case 1: 
         
            numeroFamiliares = parseInt(prompt("ingrese el numero de familiares que desea ingresar"))
            while (isNaN(numeroFamiliares)  || numeroFamiliares < 0 ) {
                numeroFamiliares = parseInt(prompt("ERROR, ingrese el numero de familiares que desea ingresar"))
                }
                break
                
        case 2: subOpcion1 = parseInt(prompt(
            `1. continuar
             2. volver`))
              switch (subOpcion1){
                case 1:
                if (numeroFamiliares > 0) {
                for (i = 0 ; i <= numeroFamiliares ; i ++ ){
                     nombre = prompt ("ingrese el nombre de la persona")
                    
                    
                     peso = parseInt(prompt("ingrese el peso de la persona en kg"))
                    while (peso <= 0 || isNaN(peso)){
                        peso = parseInt(prompt("ERROR, ingrese el peso de la persona en kg"))
                    }
                    
                        altura = parseInt(prompt("ingrese la estatura de la persona"))
                    while (altura <= 0 || isNaN(altura)){
                        altura = parseInt(prompt("ERROR, ingrese la estatura de la persona"))
                    }
                    IMC = peso/(altura**2)
                    
                    console.log(`${nombre} tiene un imc de ${IMC}  `)
                    if (IMC < 18.5 ){
                        console.log(`y se encuentra en un rango de bajo peso`)
                    }
                    else if (IMC >= 18.5 && IMC <= 24.9 ){
                        console.log(`y se encuentra en un rango de peso normal `)
                    }
                    else if (IMC >= 24.5 && IMC <= 28.9){
                        console.log(`y se encuentra en un rango de sobrepeso`)
                    }
                    else if (IMC >= 29 && IMC <= 34.9 ){
                        console.log(`y se encuentra en un rango de obeso 1`)
                    }else { console.log(`y se encuentra en un rango de obeso 2`)}
                    
                    totalIMCfamiliares += IMC
                    
                
                }
             
            }else {alert("no hay familiares registrados") }
            break
                case 2 : alert ("volviendo...")
                default:
                    break
            

            }
            
        case 3 : subOpcion2 = parseInt(prompt(
            `1. continuar
             2. volver `))
             switch(subOpcion2){
                case 1 : if (numeroFamiliares > 0){
                    imcPromedioFamiliares = totalIMCfamiliares / numeroFamiliares
                    if (imcPromedioFamiliares < 18.5){
                        alert (`el promedio del imc de su familia es de ${imcPromedioFamiliares} y se encuentra en un nivel bajo`)
                    }
                    else if (imcPromedioFamiliares > 18.5 && imcPromedioFamiliares <= 24.9){ 
                        alert (`el promedio del imc de su familia es de ${imcPromedioFamiliares} y se encuentra en un nivel normal`)
                }else if (imcPromedioFamiliares > 24.9 && imcPromedioFamiliares <= 28.9){
                    alert (`el promedio del imc de su familia es de ${imcPromedioFamiliares} y se encuentra en un nivel de sobre peso`)
                }else if (imcPromedioFamiliares > 28.9 && imcPromedioFamiliares <= 34.9) {
                    alert (`el promedio del imc de su familia es de ${imcPromedioFamiliares} y se encuentra en un nivel obesidad I`)
                }else { alert (`el promedio del imc de su familia es de ${imcPromedioFamiliares} y se encuentra en un nivel de obesidad II`)}
               
             }else { alert (" no hay familiares registrados")}

        }

               
}
      

            
}
s 

