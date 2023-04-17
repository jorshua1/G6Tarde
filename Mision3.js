    //Variables de procesos
    let cantidadTalentos=0;
    let matriz = [];
    let nombre ="";
    let codigo = 0;
    let valoresUnicos =[];
    let promedio =[];
    let notaMayorMision1=[];
    let notaMayorMision2=[];
    let notaMayorMision3=[];
    let notasRepetidasMision1 =[];
    let notasRepetidasMision2 = [];
    let notasRepetidasMision3 = [];
    //Notas
    let notaMision1=0;
    let notaMision2=0;
    let notaMision3=0;
    let pruebaNivelFinal=0;
    //Opcion del Menú
    let opcionMenu =0;

    function ordenamiento(matriz,matrizOrdenar,posicionNota,posicionNombre){//Funcion para ordenar la matriz de Mision 1

        for (let i = 0; i < matriz.length; i++) {
            matrizOrdenar[i]=[]
        for (let j = 0; j < matriz.length; j++) {
            matrizOrdenar[i][j] = matriz[i][posicionNombre]
            matrizOrdenar[i][1] = matriz[i][posicionNota]               
          }
        }
        let valorMaximo = matrizOrdenar[0][1];
        for (let i = 1; i < matrizOrdenar.length; i++) {
            if(matrizOrdenar[i][1]>valorMaximo){
            valorMaximo = matrizOrdenar[i][1]
            }
        }
        let maxIndex=0;
        for (let i = 0; i < matrizOrdenar.length; i++) {
            if(matrizOrdenar[i][1] === valorMaximo){
                maxIndex = i;
                break;
            }
        }

        let variableTemporal = matrizOrdenar[0]
        matrizOrdenar[0] = matrizOrdenar[maxIndex]
        matrizOrdenar[maxIndex] = variableTemporal;

     return matrizOrdenar   
    }

    function llenarMatrizNotasIguales(matriz,matrizLlenar,posicionNombre,posicionNota){//Funcion para mostrar notas iguales

        for (let i = 0; i < matriz.length; i++) {
            matrizLlenar[i]=[]
            for (let j = 0; j< matriz.length; j++) {
            matrizLlenar[i][0] = matriz[i][posicionNombre]
            matrizLlenar[i][1] = matriz[i][posicionNota]      
        }
    } 
    let notaMayor = matrizLlenar[0][1]
    let estudiantesNotaMayor =[]

    for (let i = 0; i < matrizLlenar.length; i++) {
        for (let j = i + 1; j < matrizLlenar.length; j++) {
          if (matrizLlenar[i][1] === matrizLlenar[j][1]) {
             break;  
          }
        }
        if (matrizLlenar[i][1] > notaMayor) {
            notaMayor = matrizLlenar[i][1]; 
            estudiantesNotaMayor = matrizLlenar[i][0]; 
          } else if (matrizLlenar[i][1] === notaMayor) {
            estudiantesNotaMayor.push(matrizLlenar[i][0]);
          }
        }
        if (estudiantesNotaMayor.length === 1) {
            alert(`El estudiante con la nota mayor es ${estudiantesNotaMayor} con una nota de: ${notaMayor}`);
          } else {
            for (let i = 0; i < estudiantesNotaMayor.length; i++) {
                alert(`Los estudiantes con la nota mayor (${notaMayor}) son: ${estudiantesNotaMayor}`);
            }
          }
  
            }
            
    do{
    opcionMenu = Number(prompt("Ingrese la opción que desea realizar:\n1.Registrar Cantidad de Talentos\n2.Registrar datos de cada Talento\n3.Registrar nota de misón 1\n4.Registrar nota de misión 2\n5.Registrar nota de misión 3\n6.Registrar prueba de nivel final\n7.Talento con mejor nota en misión 1\n8.Talento con mejor nota en misión 2\n9.Talento con mejor nota en misión 3\n10.Promedio de cada talento\n11.Registros de cada talento\n12.Nombre\n13.Salir"))
    switch(opcionMenu){
        case 1://opcion 1 
        if(cantidadTalentos==0){
            cantidadTalentos = parseInt(prompt("Ingrese la cantidad de talentos a registrar"))
            while(isNaN(cantidadTalentos) || cantidadTalentos<0 || cantidadTalentos% 1!==0 || cantidadTalentos==0){
                alert("Ingreso valores invalidos, solo se admiten números positivos")
                cantidadTalentos = parseInt(prompt("Ingrese la cantidad de talentos a registrar"))
            }
            }else{
            alert("Ya se registrarón los talentos")
        }    
         break;
         case 2://opcion 2
         if(cantidadTalentos>0){
            if(codigo == 0 && nombre == ""){
         for (let i = 0; i < cantidadTalentos; i++) {//for de Filas
            let encontrado = false;
            codigo = parseInt(prompt("Ingrese el código del talento"))
            while(isNaN(codigo) || codigo<0 || codigo % 1 !== 0 || codigo == 0){
                alert("Ingreso valores erroneos, solo se admiten valores positivos y enteros")
                codigo = parseInt(prompt("Ingrese el código del talento"))
            }
            nombre = prompt("Ingrese el nombre del Talento")
            while(nombre == 0 || !isNaN(nombre)){
            alert("Ingresó un valor vacio o añadio números, recuerde que solo admiten nombres con letras")
            nombre = prompt("Ingrese el nombre del Talento")
            }
            for (let j = 0; j < matriz.length; j++) {//for de Columnas
                if (matriz[j][0] === codigo) {//Validador de existencia
                    encontrado = true;
                    alert(`Error: El código ${codigo} ya existe`);
                    break;
                  }
        }
        if (!encontrado) { //Validador de números
            valoresUnicos.push(codigo);
            matriz.push([codigo, nombre]);
          } else {
            i--;
          }
         }
        }else{
            alert("Ya se registrarón los Talentos")
            for (let i = 0; i < matriz.length; i++) {
                    alert(`Talento ${i+1}\nNombre: ${matriz[i][1]}\nCódigo: ${matriz[i][0]}`)
                }
        }
        }else{
                alert("No se han ingresado la cantidad de Talentos")
                break;
        }
         break;
         
         case 3: //opcion 3
           if(cantidadTalentos>0){
            if(codigo>0 || nombre!=0){
            if(notaMision1>=0 && notaMision1<=100 ){
            notaMision1 = Number(prompt(`Ingrese la nota de la misión 1 de ${matriz[i][1]} con código: ${matriz[i][0]}`))
            while(isNaN(notaMision1) || notaMision1<0 || notaMision1 % 1!==0 || notaMision1>100){
                alert("Ingreso valores erroneos, solo se adminten valores entre 1 y 100 para esta calificación")
                notaMision1 = Number(prompt(`Ingrese la nota de la misión 1 de ${matriz[i][1]} con código: ${matriz[i][0]}`))
            }
            matriz[i][2] = notaMision1
        }}else{
            for(let i=0;i<matriz.length;i++){
            alert(`Ya se registraron las notas de la Misión 1\nFueron las siguientes:\n${matriz[i][1]} con código: ${matriz[i][0]} ingresó una nota de: ${matriz[i][2]}`)
            }
        }
    }else{
            alert("No se han ingresado la cantidad de Talentos")
            break;
        }
            break;
         case 4: //opcion 4
         if(cantidadTalentos >0 ){
            if(codigo>0 || nombre!=0){
            if(notaMision2==0){
                if(notaMision2>0 && notaMision2<=100){
         for(let i = 0 ; i <matriz.length; i++){
            notaMision2 = Number(prompt(`Ingrese la nota de la misión 2 de ${matriz[i][1]} con código: ${matriz[i][0]}`))
            while(isNaN(notaMision2) || notaMision2<0 || notaMision2 % 1!==0 || notaMision2>100){
                alert("Ingreso valores erroneos, solo se adminten valores entre 1 y 100 para esta calificación")
                notaMision2 = Number(prompt(`Ingrese la nota de la misión 2 de ${matriz[i][1]} con código: ${matriz[i][0]}`))
            }
            matriz[i][3] = notaMision2
        }
    }else{
         
    }
}else{
        for(let i=0;i<matriz.length;i++){
            alert(`Ya se registraron las notas de la Misión 2\nFueron las siguientes:\n${matriz[i][1]} con código: ${matriz[i][0]} ingresó una nota de: ${matriz[i][3]}`)
            }
    }
}else{
    alert("No ha registrado Talentos")
}
}else{
        alert("No se han ingresado la cantidad de Talentos")
        break;
    }

            break;
         case 5: //opcion 5
         if(cantidadTalentos>0){
            if(codigo>0 || nombre!=0){
            if(notaMision3==0){
         for(let i = 0 ; i <matriz.length; i++){
         notaMision3 = Number(prompt(`Ingrese la nota de la misión 3 de ${matriz[i][1]} con código: ${matriz[i][0]}`))
         while(isNaN(notaMision3) || notaMision3<0 || notaMision3 % 1!==0 || notaMision3>100 ){
             alert("Ingreso valores erroneos, solo se adminten valores entre 1 y 100 para esta calificación")
             notaMision3 = Number(prompt(`Ingrese la nota de la misión 3 de ${matriz[i][1]} con código: ${matriz[i][0]}`))
         }
         matriz[i][4] = notaMision3
         
        }
    }else{
        for(let i=0;i<matriz.length;i++){
            alert(`Ya se registraron las notas de la Misión 3\nFueron las siguientes:\n${matriz[i][1]} con código: ${matriz[i][0]} ingresó una nota de: ${matriz[i][4]}`)
            }
    }
}else{
    alert("No se han registrado talentos")
}
}else{
        alert("No se ha ingresado la cantidad de Talentos")
        break;
    }
         break;
         case 6: //opcion 6
         if(cantidadTalentos){
            if(codigo>0 || nombre!=0){
            if(pruebaNivelFinal==0){
         for(let i = 0 ; i <matriz.length; i++){
         pruebaNivelFinal = Number(prompt(`Ingrese nota de la prueba nivel Final de ${matriz[i][1]} con código: ${matriz[i][0]}`))
         while(isNaN(pruebaNivelFinal) || pruebaNivelFinal<0 || pruebaNivelFinal % 1!==0 || pruebaNivelFinal>100){
             alert("Ingreso valores erroneos, solo se adminten valores entre 1 y 100 para esta calificación")
             pruebaNivelFinal = Number(prompt(`Ingrese nota de la prueba nivel Final de ${matriz[i][1]} con código: ${matriz[i][0]}`))

         }
         matriz[i][5] = pruebaNivelFinal
        
        }}else{
            for(let i=0;i<matriz.length;i++){
                alert(`Ya se registraron las notas de la Prueba Final\nFueron las siguientes:\n${matriz[i][1]} con código: ${matriz[i][0]} ingresó una nota de: ${matriz[i][5]}`)
                }
        }
    }else{
        alert("No se han registrado talentos")
    }
}else{
            alert("No se ha ingresado la cantidad de Talentos")
            break;
        }
        break;
         case 7: //opcion 7
         if(cantidadTalentos>0){
            if(codigo>0 || nombre!=0){
                if(notaMision1>0){
           ordenamiento(matriz,notaMayorMision1,1,2) // los números son las posiciones de columna-Nombre
           llenarMatrizNotasIguales(matriz,notasRepetidasMision1,1,2)  // los números son las posiciones de columna Nombre
        }else{
             alert("No se han registrado Notas")
        }}else{
            alert("No se han registrado Talentos")
        }}else{
        alert("No se ha ingresado la cantidad de Talentos")
        break;
    }
        break;
         case 8: //opcion 8
         if(cantidadTalentos>0){
            if(codigo>0 || nombre!=0){
                if(notaMision2>0){
          ordenamiento(matriz,notaMayorMision2)
          llenarMatrizNotasIguales(matriz,notasRepetidasMision2,1,3)
        }
    else{
       alert("No se han ingresado Notas")
    }}else{
            alert("No se han registrado Talentos")
        }}else{
        alert("No se ha ingresado la cantidad de Talentos")
        break;
    }
        break;
        case 9: //opcion 9
         if(cantidadTalentos>0){
            if(codigo>0 || nombre!=0){
                if(notaMision3>0){
            ordenamiento(matriz,notaMayorMision2)
            llenarMatrizNotasIguales(matriz,notasRepetidasMision2,1,4)
    }else{
        alert("No se han ingresado Notas")
    }}else{
        alert("No se han registrado Talentos")
    }
}else{
        alert("No se ha ingresado la cantidad de Talentos")
    }
        break;
        case 10: //opcion 10
        if(cantidadTalentos>0){
            if(codigo>0 || nombre!=0){
                if(notaMision1>0 && notaMision2>0 && notaMision3>0 && pruebaNivelFinal>0){
        for (let i = 0; i < matriz.length; i++) {
            promedio[i] = (matriz[i][2]+matriz[i][3]+matriz[i][4]+matriz[i][5])/4
            alert(`El promedio de ${matriz[i][1]} fue de: ${promedio[i]}`)
        }
        
    }else{
        alert("No se han ingresado todas las notas para poder calcular el promedio")
    }
}else{
    alert("No se han registrato Talentos")
}}else{
        alert("No se ha ingresado la cantidad de Talentos")
    }
        break;
        case 11: //opcion 11
        if(cantidadTalentos>0){
         if(codigo>0 || nombre!=0){
          if(notaMision1 > 0 && notaMision2 > 0 && notaMision3 >0 && pruebaNivelFinal >0){
            for (let i = 0; i < matriz.length; i++) {
                let contadorTalentos =i+1
                alert(`En total se registraron ${cantidadTalentos} Talentos en el sistema\nEl talento ${contadorTalentos} con Código: ${matriz[i][0]} Nombre: ${matriz[i][1]}\nNota Misión 1: ${matriz[i][2]}\nNota Misión 2: ${matriz[i][3]}\nNota Misión 3: ${matriz[i][4]}\nNota Prueba Nivel Final: ${matriz[i][5]}`)
              }
          }else{
            alert("No se han ingresado las notas de los talentos")
        }
        }else{
            alert("No se han registrado Talentos")
        }}else{
            alert("No se han ingresado la cantidad de Talentos")
        }
        break;
        case 12: //opcion 12
        alert("JEFFERSON STEVEN MUÑOZ DELGADO")
            break;
        case 13:
            alert("Hasta pronto")
            break;
        default:
            alert("Ingreso valores invalidos, solo se adminten valores de 1 a 13")
            break;
    }  
}while(opcionMenu !==13)  