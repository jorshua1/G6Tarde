//Mision 3
//Daniel Andres Pinzon Jay - G6Tarde
let opcion=0;
let submenu=0;
let cont=1;
let cantidadTalentos=0;
let codigo=1;
let nombre="";
let matriz=[];
let nombres=[];
let notaMision1=0;
let notaMision2=0;
let notaMision3=0;
let mision1=[];
let mision2=[];
let mision3=[];
let prueba4=0;
let pruebaFinal=[];
let mayor1=0;
let nombre1="";
let mayor2=0;
let nombre2="";
let mayor3=0;
let nombre3="";
let prom=[];
let promedio=0;
let cod1=0;
let cod2=0;
let cod3=0;
let nombresMayores1=[];
let nombresMayores2=[];
let nombresMayores3=[];
let cont1=0;
let cont2=0;
let cont3=0;
let ejecutador7=0;
let ejecutador8=0;
let ejecutador9=0;
while(opcion!==13){opcion=Number(prompt(`Selecicona una opcion del menu
1. Registro cantidad de talentos
2. Registrar nombre y codigo de talentos
3. Registrar nota de mision 1
4. Registrar nota de mision 2
5. Registrar nota de mision 3
6. Registrar prueba final
7. Ver talento con mejor nota (mision 1)
8. Ver talento con mejor nota (mision 2)
9. Ver talento con mejor nota (mision 3)
10. Calcular promedio final de talentos
11. Mostrar resultados de talento (cada nota individual)
12. Informacion personal talento coex
13. Salir`))

while(isNaN(opcion)||opcion<0||opcion>13||!Number.isInteger(opcion)){
  alert("Ingrese un dato valido")
  opcion=Number(prompt(`Selecicona una opcion del menu
1. Registro cantidad de talentos
2. Registrar nombre y codigo de talentos
3. Registrar nota de mision 1
4. Registrar nota de mision 2
5. Registrar nota de mision 3
6. Registrar prueba final
7. Ver talento con mejor nota (mision 1)
8. Ver talento con mejor nota (mision 2)
9. Ver talento con mejor nota (mision 3)
10. Calcular promedio final de talentos
11. Mostrar resultados de talento (cada nota individual)
12. Informacion personal talento coex
13. Salir`))
}
switch(opcion){


     case 1:
        if(cantidadTalentos===0){
           cantidadTalentos=Number(prompt("Ingrese cantidad de talentos del grupo"))
           while(isNaN(cantidadTalentos)||cantidadTalentos<0||!Number.isInteger(cantidadTalentos)){
              alert("Ingrese un dato valido")
              cantidadTalentos=Number(prompt("Ingrese cantidad de talentos del grupo"))
           }
        }else{
            alert(`Ya se ha ingresado la cantidad de talentos
            Numero de talentos: ${cantidadTalentos}`)
        }
        break;


    case 2:
        if(cantidadTalentos!==0){
            if(matriz.length===0){
                let codigos =new Array(cantidadTalentos);
                for(let i=0;i<cantidadTalentos;i++){
                    codigo=Number(prompt("Ingrese codigo del usuario"+cont))
                    while(isNaN(codigo)||codigo<0||!Number.isInteger(codigo)||codigo===0){
                        alert("Ingrese un codigo valido, solo se permiten enteros positivos")
                        codigo=Number(prompt("Ingrese codigo del talento"+cont))
                    }
                    for(let q=0;q<codigos.length;q++){
                       while(codigos[q]===codigo){
                            alert(`El codigo ${codigo} ya ha sido digitado`)
                            codigo=Number(prompt("Ingrese codigo del talento"+cont))
                            while(isNaN(codigo)||codigo<0||!Number.isInteger(codigo)||codigo===0){
                                alert("Ingrese un codigo valido, solo se permiten enteros positivos")
                                codigo=Number(prompt("Ingrese codigo del talento"+cont))
                            }
                        }
                    }
                    codigos[i]=codigo
                    nombre=prompt("Ingrese nombre del usuario"+cont)
                                while(!isNaN(nombre)||nombre===""){
                                    alert("Ingrese un nombre valido")
                                    nombre=prompt("Ingrese nombre del estudiante"+cont)
                                }
                    nombres[i]=nombre
                    cont+=1
                }
                let contadorCod=0;
                let contadorNom=0;
                for(let fila=0;fila<cantidadTalentos;fila++){
                    matriz[fila]=[]
                    for(let columna=0;columna<2;columna++){
                        if(columna===0){
                            matriz[fila][columna]=codigos[contadorCod]
                            contadorCod+=1
                        }else if(columna===1){
                            matriz[fila][columna]=nombres[contadorNom]
                            contadorNom+=1
                        }
                    }
                }
                console.log(matriz)
                    }else{
                        alert("Ya se ha guardado nombre/codigo de talentos")
                    }
        }else{
            alert("Error, digite primero la cantidad de talentos")
        }
        break;




    case 3:
        if(cantidadTalentos!==0){
            if(matriz.length!==0){
         if(notaMision1===0){

           for(let x=0;x<cantidadTalentos;x++){
            let uno=(prompt(`Ingrese nota Mision 1 de ${matriz[x][1]} con codigo ${matriz[x][0]}`))
            while(uno.length===0 ){
                alert("Error, ingrese una nota valida (0 a 100)")
                uno=(prompt(`Ingrese nota Mision 1 de ${matriz[x][1]} con codigo ${matriz[x][0]}`))
            }
            notaMision1=Number(uno)
            while(isNaN(notaMision1)||notaMision1<0||notaMision1>100){
                alert("Error, ingrese una nota valida (0 a 100)")
                uno=(prompt(`Ingrese nota Mision 1 de ${matriz[x][1]} con codigo ${matriz[x][0]}`))
                while(uno.length===0 ){
                    alert("Error, ingrese una nota valida (0 a 100)")
                    uno=(prompt(`Ingrese nota Mision 1 de ${matriz[x][1]} con codigo ${matriz[x][0]}`))
                }
                notaMision1=Number(uno);
            }
           mision1[x]=notaMision1
        }
         }else{
            alert("Ya se ha registrado las notas de la mision 1")
         }
        }else{
            alert("Digite primero nombre y codigo de talentos")
        }
        }else{
            alert("Error, digite primero la cantidad de talentos")
        }
        break;



    case 4:
        if(cantidadTalentos!==0){
            if(matriz.length!==0){
            if(notaMision2===0){
                for(let b=0;b<cantidadTalentos;b++){
                    let dos=(prompt(`Ingrese nota Mision 2 de ${matriz[b][1]} con codigo ${matriz[b][0]}`))
                    while(dos.length===0 ){
                    alert("Error, ingrese una nota valida (0 a 100)")
                 dos=(prompt(`Ingrese nota Mision 2 de ${matriz[b][1]} con codigo ${matriz[b][0]}`))
                }
                notaMision2=Number(dos)
                while(isNaN(notaMision2)||notaMision2<0||notaMision2>100){
                alert("Error, ingrese una nota valida (0 a 100)")
                dos=(prompt(`Ingrese nota Mision 2 de ${matriz[b][1]} con codigo ${matriz[b][0]}`))
                while(dos.length===0 ){
                    alert("Error, ingrese una nota valida (0 a 100)")
                    dos=(prompt(`Ingrese nota Mision 2 de ${matriz[b][1]} con codigo ${matriz[b][0]}`))
                }
                notaMision2=Number(dos)
               }
               mision2[b]=notaMision2
                }
            }else{
                    alert("Ya se han ingresado las notas de la mision 2")
                }
            }else{
                alert("Digite primero nombre y codigo de talentos")
            }
            }else{
              alert("Error, digite primero la cantidad de talentos")
            }
            break;


    case 5:
        if(cantidadTalentos!==0){
            if(matriz.length!==0){
            if(notaMision3===0){
                for(let p=0;p<cantidadTalentos;p++){
                    let tres=(prompt(`Ingrese nota Mision 3 de ${matriz[p][1]} con codigo ${matriz[p][0]}`))
                    while(tres.length===0 ){
                    alert("Error, ingrese una nota valida (0 a 100)")
                 tres=(prompt(`Ingrese nota Mision 3 de ${matriz[p][1]} con codigo ${matriz[p][0]}`))
                }
                notaMision3=Number(tres)
                while(isNaN(notaMision3)||notaMision3<0||notaMision3>100){
                alert("Error, ingrese una nota valida (0 a 100)")
                tres=(prompt(`Ingrese nota Mision 3 de ${matriz[p][1]} con codigo ${matriz[p][0]}`))
                while(tres.length===0 ){
                    alert("Error, ingrese una nota valida (0 a 100)")
                    tres=(prompt(`Ingrese nota Mision 3 de ${matriz[p][1]} con codigo ${matriz[p][0]}`))
                }
                notaMision3=Number(tres);
            }
                mision3[p]=notaMision3
            }
                }else{
                    alert("Ya se han ingresado las notas de la mision 3")
                }
            }else{
                alert("Digite primero nombre y codigo de talentos")
            }
            }else{
              alert("Error, digite primero la cantidad de talentos")
            }
            break;


    case 6:
        if(cantidadTalentos!==0){
            if(matriz.length!==0){
            if(prueba4===0){
                for(let r=0;r<cantidadTalentos;r++){
                    let cuatro=(prompt(`Ingrese nota prueba final de ${matriz[r][1]} con codigo ${matriz[r][0]}`))
            while(cuatro.length===0 ){
                alert("Error, ingrese una nota valida (0 a 100)")
                cuatro=(prompt(`Ingrese nota prueba final de ${matriz[r][1]} con codigo ${matriz[r][0]}`))
            }
            prueba4=Number(cuatro)
            while(isNaN(prueba4)||prueba4<0||prueba4>100){
                alert("Error, ingrese una nota valida (0 a 100)")
                cuatro=(prompt(`Ingrese nota prueba final de ${matriz[r][1]} con codigo ${matriz[r][0]}`))
                while(cuatro.length===0 ){
                    alert("Error, ingrese una nota valida (0 a 100)")
                    cuatro=(prompt(`Ingrese nota prueba final de ${matriz[r][1]} con codigo ${matriz[r][0]}`))
                }
                prueba4=Number(cuatro);
            }
           pruebaFinal[r]=prueba4
                }
                }else{
                    alert("Ya se han ingresado las notas de la prueba final")
                }
            }else{
                alert("Digite primero nombre y codigo de talentos")
            }
            }else{
              alert("Error, digite primero la cantidad de talentos")
            }
            break;


    case 7:
        if(cantidadTalentos!==0){
            if(mision1.length!==0){
                if(ejecutador7===0){
         for(let z=0;z<cantidadTalentos;z++){
            if(mision1[z]>mayor1){
                mayor1=mision1[z]
                nombresMayores1=[];
                cont1=0
                nombresMayores1[cont1]=matriz[z][1]
            }else if(mision1[z]===mayor1){
                cont1+=1
               nombresMayores1[cont1]=matriz[z][1]
            }
         }
        }
        ejecutador7+=1
         if(nombresMayores1.length>1){
         alert(`Los estudiantes con maxima nota en la mision 1 fueron:
        Nombres: 
        ${nombresMayores1}
        
        Nota: ${mayor1}`)
         }else{
            alert(`El estudiante con maxima nota en la mision 1 fue:
            Nombre: ${nombresMayores1}
            Nota: ${mayor1}`)
         }
            }else{
                alert("Error, debe digitar primero las notas de la mision 1")
            }
        }else{
            alert("Error, digite primero la cantidad de talentos")
        }
        break;


    case 8:
        if(cantidadTalentos!==0){
            if(mision2.length!==0){
                if(ejecutador8===0){
            for(let w=0;w<cantidadTalentos;w++){
               if(mision2[w]>mayor2){
                   mayor2=mision2[w]
                   nombresMayores2=[];
                   cont2=0
                   nombresMayores2[cont2]=matriz[w][1]
               }else if(mision2[w]===mayor2){
                cont2+=1
                nombresMayores2[cont2]=matriz[w][1]
               }
            }
        }
        ejecutador8+=1
            if(nombresMayores2.length>1){
            alert(`Los estudiantes con maxima nota en la mision 2 fueron:
           Nombres: 
           ${nombresMayores2}
           Nota: ${mayor2}`)
        }else{
            alert(`El estudiante con maxima nota en la mision 2 fue:
            Nombre: ${nombresMayores2}
            Nota: ${mayor2}`)
        }
        }else{
            alert("Error, digite primero las notas de la mision 2")
        }
           }else{
               alert("Error, digite primero la cantidad de talentos")
           }
           break;

    case 9:
        if(cantidadTalentos!==0){
            if(mision3.length!==0){
                if(ejecutador9===0){
            for(let d=0;d<cantidadTalentos;d++){
               if(mision3[d]>mayor3){
                   mayor3=mision3[d]
                   nombresMayores3=[];
                   cont3=0
                   nombresMayores3[cont3]=matriz[d][1]
               }else if(mision3[d]===mayor3){
                cont3+=1
                nombresMayores3[cont3]=matriz[d][1]
               }
            }
        }
        ejecutador9+=1
            if(nombresMayores3.length>1){
            alert(`Los estudiantes con maxima nota en la mision 3 fueron:
           Nombres:
           ${nombresMayores3}
           Nota: ${mayor3}`)
        }else{
            alert(`El estudiante con maxima nota en la mision 3 fue:
            Nombre: ${nombresMayores3}
            Nota: ${mayor3}`)
        }
        }else{
            alert("Error, digite primero las notas de la mision 3")
        }
           }else{
               alert("Error, digite primero la cantidad de talentos")
           }
           break;



    case 10:
        if(cantidadTalentos!==0){
            if(mision1.length!==0 && mision2.length!==0 && mision3.length!==0 && pruebaFinal.length!==0){
        for(let y=0;y<cantidadTalentos;y++){
            promedio=(mision1[y]+mision2[y]+mision3[y]+pruebaFinal[y])/4
            alert(`Promedio Talento ${y+1}
            Nombre: ${matriz[y][1]}
            Promedio final: ${promedio}`)
            prom[y]=promedio
        }
    }else {
        if(mision1.length===0 && mision2.length===0 && mision3.length===0 && pruebaFinal.length===0){
            alert(`Error, no se puede calcular promedio porque faltan los siguientes datos:
            Mision 1
            Mision 2
            Mision 3
            Prueba final`)
        }else if(mision1.length!==0 && mision2.length===0 && mision3.length===0 && pruebaFinal.length===0){
            alert(`Error, no se puede calcular promedio porque faltan los siguientes datos:
            Mision 2
            Mision 3
            Prueba final`)
        }else if(mision1.length!==0 && mision2.length!==0 && mision3.length===0 && pruebaFinal.length===0){
            alert(`Error, no se puede calcular promedio porque faltan los siguientes datos:
            Mision 3
            Prueba final`)
        }else if(mision1.length!==0 && mision2.length!==0 && mision3.length!==0 && pruebaFinal.length===0){
            alert(`Error, no se puede calcular promedio porque faltan los siguientes datos:
            Prueba final`)
        }else if(mision1.length===0 && mision2.length!==0 && mision3.length!==0 && pruebaFinal.length!==0){
            alert(`Error, no se puede calcular promedio porque faltan los siguientes datos:
            Mision 1
            `)
        }else if(mision1.length!==0 && mision2.length===0 && mision3.length!==0 && pruebaFinal.length!==0){
            alert(`Error, no se puede calcular promedio porque faltan los siguientes datos:
            Mision 2`)
        }else if(mision1.length!==0 && mision2.length!==0 && mision3.length===0 && pruebaFinal.length!==0){
            alert(`Error, no se puede calcular promedio porque faltan los siguientes datos:
            Mision 3`)
        }else if(mision1.length===0 && mision2.length===0 && mision3.length!==0 && pruebaFinal.length!==0){
            alert(`Error, no se puede calcular promedio porque faltan los siguientes datos:
            Mision 1
            Mision 2`)
        }else if(mision1.length===0 && mision2.length!==0 && mision3.length===0 && pruebaFinal.length!==0){
            alert(`Error, no se puede calcular promedio porque faltan los siguientes datos:
            Mision 1
            Mision 3`)
        }
        else if(mision1.length===0 && mision2.length!==0 && mision3.length!==0 && pruebaFinal.length===0){
            alert(`Error, no se puede calcular promedio porque faltan los siguientes datos:
            Mision 1
            Prueba final`)
        }else if(mision1.length!==0 && mision2.length===0 && mision3.length!==0 && pruebaFinal.length===0){
            alert(`Error, no se puede calcular promedio porque faltan los siguientes datos:
            Mision 2
            Prueba final`)
        }else if(mision1.length===0 && mision2.length===0 && mision3.length===0 && pruebaFinal.length!==0){
            alert(`Error, no se puede calcular promedio porque faltan los siguientes datos:
            Mision 1
            Mision 2
            Mision 3`)
        }else if(mision1.length!==0 && mision2.length===0 && mision3.length===0 && pruebaFinal.length!==0){
            alert(`Error, no se puede calcular promedio porque faltan los siguientes datos:
            Mision 2
            Mision 3`)
        }
    }
    }else{
        alert("Error, digire primero la cantidad de talentos")
    }
    break;


    

    case 11:
        if(cantidadTalentos!==0){ 
            if(mision1.length!==0 && mision2.length!==0 && mision3.length!==0 && pruebaFinal.length!==0){
            for(let t=0;t<cantidadTalentos;t++){
                alert(`Datos finales del talento ${t+1}
                Nombre: ${matriz[t][1]}
                Codigo: ${matriz[t][0]}
                Mision 1: ${mision1[t]}
                Mision 2: ${mision2[t]}
                Mision 3: ${mision3[t]}
                Prueba final: ${pruebaFinal[t]}
                Promedio: ${prom[t]}`)
            }
        }else{
            if(mision1.length===0 && mision2.length===0 && mision3.length===0 && pruebaFinal.length===0){
                alert(`Error, no se puede mostrar las notas porque faltan los siguientes datos:
                Mision 1
                Mision 2
                Mision 3
                Prueba final`)
            }else if(mision1.length!==0 && mision2.length===0 && mision3.length===0 && pruebaFinal.length===0){
                alert(`Error, no se puede mostrar las notas porque faltan los siguientes datos:
                Mision 2
                Mision 3
                Prueba final`)
            }else if(mision1.length!==0 && mision2.length!==0 && mision3.length===0 && pruebaFinal.length===0){
                alert(`Error, no se puede mostrar las notas porque faltan los siguientes datos:
                Mision 3
                Prueba final`)
            }else if(mision1.length!==0 && mision2.length!==0 && mision3.length!==0 && pruebaFinal.length===0){
                alert(`Error, no se puede mostrar las notas porque faltan los siguientes datos:
                Prueba final`)
            }else if(mision1.length===0 && mision2.length!==0 && mision3.length!==0 && pruebaFinal.length!==0){
                alert(`Error, no se puede mostrar las notas porque faltan los siguientes datos:
                Mision 1
                `)
            }else if(mision1.length!==0 && mision2.length===0 && mision3.length!==0 && pruebaFinal.length!==0){
                alert(`Error, no se puede mostrar las notas porque faltan los siguientes datos:
                Mision 2`)
            }else if(mision1.length!==0 && mision2.length!==0 && mision3.length===0 && pruebaFinal.length!==0){
                alert(`Error, no se puede mostrar las notas porque faltan los siguientes datos:
                Mision 3`)
            }else if(mision1.length===0 && mision2.length===0 && mision3.length!==0 && pruebaFinal.length!==0){
                alert(`Error, no se puede mostrar las notas porque faltan los siguientes datos:
                Mision 1
                Mision 2`)
            }else if(mision1.length===0 && mision2.length!==0 && mision3.length===0 && pruebaFinal.length!==0){
                alert(`Error, no se puede mostrar las notas porque faltan los siguientes datos:
                Mision 1
                Mision 3`)
            }
            else if(mision1.length===0 && mision2.length!==0 && mision3.length!==0 && pruebaFinal.length===0){
                alert(`Error, no se puede mostrar las notas porque faltan los siguientes datos:
                Mision 1
                Prueba final`)
            }else if(mision1.length!==0 && mision2.length===0 && mision3.length!==0 && pruebaFinal.length===0){
                alert(`Error, no se puede mostrar las notas porque faltan los siguientes datos:
                Mision 2
                Prueba final`)
            }else if(mision1.length===0 && mision2.length===0 && mision3.length===0 && pruebaFinal.length!==0){
                alert(`Error, no se puede mostrar las notas porque faltan los siguientes datos:
                Mision 1
                Mision 2
                Mision 3`)
            }else if(mision1.length!==0 && mision2.length===0 && mision3.length===0 && pruebaFinal.length!==0){
                alert(`Error, no se puede mostrar las notas porque faltan los siguientes datos:
                Mision 2
                Mision 3`)
            }
        }
        
        }else{
            alert("Error, digite primero la cantidad de talentos")
        }
        break;



    case 12:
        if(cantidadTalentos!==0){
        alert(`Datos de talento Coex
        Nombre: Daniel Andres Pinzon Jay
        Edad: 19 años
        C.C: 1005296913
        Fecha de nacimiento: 16/08/2003
        Grupo: G6Tarde`)
        break;
        }else{
            alert("Error, primero digite cantidad de usuarios")
        }
    default:
        break;
}
}

alert("Gracias por preferirnos")
