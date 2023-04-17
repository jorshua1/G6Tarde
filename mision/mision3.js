let nota1=[]
let nota2=[]
let nota3=[]
let nivelFinal=[]
let continuar=0
let cantidadTalentos=0
let menu=0




while(menu!==11){
    menu=Number(prompt(`Menu Inicial:
1.Registrar la cantidad de Talentos
2.Registrar datos de Talentos
3. Registrar nota de mision 1, 2 y 3
4. Registrar prueba de nivel final
5. Mostrar nombre y nota del talento con la mejor nota de la mision 1
6. Mostrar nombre y nota del talento con la mejor nota de la mision 2
7.  Mostrar nombre y nota del talento con la mejor nota de la mision 3
8.  Mostrar nombre y promedio de cada talento
9.Mostrar codigo, nombre, mision 1, mision 2, mision 3 y prueba final
10.Nombre del desarrollador del ejercicio
11. Salir


`))

while(isNaN(menu)||menu<=0||menu>12){

   menu=Number(prompt(`
   VALOR INVALIDO
   Menu Inicial:

   1.Registrar la cantidad de Talentos
   2.Registrar datos de Talentos
   3. Registrar nota de mision 1, 2 y 3
   4. Registrar prueba de nivel final
   5. Mostrar nombre y nota del talento con la mejor nota de la mision 1
   6. Mostrar nombre y nota del talento con la mejor nota de la mision 2
   7.  Mostrar nombre y nota del talento con la mejor nota de la mision 3
   8.  Mostrar nombre y promedio de cada talento
   9.Mostrar codigo, nombre, mision 1, mision 2, mision 3 y prueba final
   10.Nombre del desarrollador del ejercicio
   11. Salir
   `))
}

switch(menu){
 case 1:
 while(continuar!==2){

continuar=Number(prompt(`SOLO PODRA INGRESAR DATOS HASTA VOLVER AL MENU INICIAL
1. continuar
2. volver
`))
while(isNaN(continuar)||continuar<1||continuar>2){
continuar=Number(prompt(`ERROR
SOLO PODRA INGRESAR DATOS HASTA VOLVER AL MENU INICIAL
1. continuar
2. volver
`))

}

switch(continuar){

    case 1:
 
        
            cantidadTalentos=Number(prompt("ingrese la cantidad de taletos que desea registrar"))
            while(isNaN(cantidadTalentos)||cantidadTalentos<0){
                cantidadTalentos=Number(prompt("ingrese la cantidad de taletos que desea registrar"))
            }
        
}
 }
break


case 2:
continuar=0
 while(continuar!==2){

continuar=Number(prompt(`
1. continuar
2. volver
`))
while(isNaN(continuar)||continuar<1||continuar>2){
continuar=Number(prompt(`
1. continuar
2. volver
`))
}

switch(continuar){
case 1:

    let tabla= new Array()
    for(fila=0;fila<cantidadTalentos;fila++){
        console.log(`creando fila ${fila}`)
    tabla[fila]=new Array()
    for(columna=0;columna<2;columna++){
        console.log(`se estan ingresando datos en la fila ${fila} y columna ${columna}`)
        tabla[fila][columna]= prompt("ingrese sus datos primero el codigo, luego su nombre")
    }
    console.log(`se agregaron datos a la fila ${fila}`)
    
    }
    console.log(tabla)

}



 }


break

case 3 :
continuar=0
 while(continuar!==2){

continuar=Number(prompt(`
1. continuar
2. volver
`))
while(isNaN(continuar)||continuar<1||continuar>2){
continuar=Number(prompt(`
1. continuar
2. volver
`))
}
switch(continuar){
    case 1:
        let tabla= new Array()
        for(fila=0;fila<cantidadTalentos;fila++){
            console.log(`creando fila ${fila}`)
        tabla[fila]=new Array()
        for(columna=0;columna<3;columna++){
            console.log(`se estan ingresando datos en la fila ${fila} y columna ${columna}`)
            tabla[fila][columna]= prompt("ingrese el valor de las misiones 1, luego 2 y luego  3")
            while(isNaN(tabla[fila][columna])||tabla[fila][columna]<=0||tabla[fila][columna]>100){

                tabla[fila][columna]= prompt("ingrese el valor de las misiones 1, luego 2 y luego  3")
            }
        }
        console.log(`se agregaron datos a la fila ${fila}`)
        
        }
        console.log(tabla)

}
 }


break


case 4:
continuar=0
 while(continuar!==2){

continuar=Number(prompt(`
1. continuar
2. volver
`))
while(isNaN(continuar)||continuar<1||continuar>2){
continuar=Number(prompt(`error
1. continuar
2. volver
`))
}
switch(continuar){
    case 1:

for(i=0;i<cantidadTalentos;i++){

nivelFinal[i]=Number(prompt("ingrese la prueba de nivel final"))
while(isNaN(nivelFinal[i])||nivelFinal[i]<=0||nivelFinal[i]>100){
    nivelFinal[i]=Number(prompt("ingrese la nota de la tercera mision"))
}
}

}

 }


break

case 5:

    
    for(i=0;i<cantidadTalentos;i++){
    for(j=0;j<cantidadTalentos;j++){
while(nota1[j]>nota1[j+1]){

    temp=nota1[j]
    nota1[j]=nota1[j+1]
    nota1[j]=temp
}


    }
}





alert(`la nota mas alta es ${nota1[cantidadTalentos-1]}`)


break

case 6:

        
        for(i=0;i<cantidadTalentos;i++){
        for(j=0;j<cantidadTalentos;j++){
    while(nota2[j]>nota2[j+1]){
    
        temp=nota2[j]
        nota2[j]=nota2[j+1]
        nota2[j]=temp
    }
    
    
        }
    }
    
    
    alert(`la nota mas alta es ${nota2[cantidadTalentos-1]}`)
    
break

case 7:
  
    for(i=0;i<cantidadTalentos;i++){
        for(j=0;j<cantidadTalentos;j++){
    while(nota3[j]>nota3[j+1]){
    
        temp=nota3[j]
        nota3[j]=nota3[j+1]
        nota3[j]=temp
    }
    
    
        }
    }
    
    
    alert(`la nota mas alta es ${nota3[cantidadTalentos-1]}`)
break

case 8 :
    continuar=0
     while(continuar!==2){
    
    continuar=Number(prompt(`
    1. continuar
    2. volver
    `))
    while(isNaN(continuar)||continuar<1||continuar>2){
    continuar=Number(prompt(`
    1. continuar
    2. volver
    `))
    }
     }
    

    break
    
case 9 :
continuar=0
 while(continuar!==2){

continuar=Number(prompt(`
1. continuar
2. volver
`))
while(isNaN(continuar)||continuar<1||continuar>2){
continuar=Number(prompt(`
1. continuar
2. volver
`))
}
 }


break

case 10 :

alert(`
Nombre del desarrollador: Luis Alejandro Castillo

`)
}

}




/////////////////////////




















