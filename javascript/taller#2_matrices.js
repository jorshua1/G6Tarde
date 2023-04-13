//metodo burbuja
notas=[]


for (let i = 0; i < 10; i++) {
    notas[i]=Math.floor(Math.random()*10-1) // generar un numero aleatorio y meterlo en la posicion del array (del 1 al 10)
    
}

console.log(notas)

for (let i = 0; i < 10; i++) {   
    for (let i = 0; i < 10; i++) {
        if(notas[i]>notas[i+1]){

            aux=notas[i]
            notas[i]=notas[i+1]
            notas[i+1]=aux

        }
        
    }

}
console.log(notas)


//Realizar un programa que defina un vector llamado “vector_numeros” de 10 enteros, a continuación lo inicialice con valores aleatorios 
//(del 1 al 10) y posteriormente muestre en pantalla cada elemento del vector junto con su cuadrado y su cubo.


vectorNumeros=[]
vectorCuadrado
vectorCubo=[]
for (let i = 0; i < 10; i++) {
    vectorNumeros[i]=Math.floor(Math.random()*10-1) // generar un numero aleatorio y meterlo en la posicion del array (del 1 al 10)
    
}

console.log("array "+vectorNumeros)

for (let i = 0; i < 10; i++) {
    vectorCuadrado[i]=Math.pow((vectorNumeros[i]),2) //con match.pow puedo elevar cosas al cuadrado
    
}

console.log("array al cuadrado "+vectorNumeros)
for (let i = 0; i < 10; i++) {
    vectorCubo[i]=Math.pow((vectorNumeros[i]),2)
    
}
console.log("array al cubo "+vectorCubo)

//////////////////////////////////////////////////////////////////

//Crear un vector de 5 elementos de cadenas de caracteres, inicializa el vector con datos leídos por el teclado. Copia los elementos del vector 
//en otro vector pero en orden inverso, y muéstralo por la pantalla.

vector=[]

for (let i = 0; i < 5; i++) {
    dato=prompt("dijite el caracter numero"+(i+1))
    while(!isNaN(dato)){
        dato=prompt("dijite un caracter valido")
    }
    vector[i]=dato
}
console.log(vector)



//invertir el vector de forma manual
aux=0
vectorInverso=[]

for (let i = 4; i >= 0; i--) {
    
    vectorInverso[aux]= vector[i]
console.log(vectorInverso)

    aux=aux+1
}
console.log(vectorInverso)

console.log(vector.reverse()) //con esta funcion invierto el vector


//////////////////////////////////////////////////////////////////

//Se quiere realizar un programa que lea por teclado las 5 notas obtenidas por un alumno (comprendidas entre 0 y 10). 
//A continuación debe mostrar todas las notas, la nota media, la nota más alta que ha sacado y la menor.

notas=[]
notasAcumuladas=0
aux=0
for (let i = 0; i < 5; i++) {
    
    dato=parseInt(prompt("dijite la nota numero"+(i+1)))
    while(isNaN(dato) || dato>10 || dato < 0){
        dato=parseInt(prompt("dijite una nota valida"))
    }
    notasAcumuladas=notasAcumuladas+dato
    notas[i]=dato

    for (let i = 0; i < 5; i++) {
        for (let i = 0; i < 5; i++) {
            
            if(notas[i]>notas[i+1]){

                aux=notas[i]
                notas[i]=notas[i+1]
                notas[i+1]=aux
    
            }
        }    
    }
}


promedio=(notasAcumuladas)/5
console.log("notas registradas: "+notas)
console.log("el promedio de las notas es: " +promedio)
console.log("la nota mas baja es: " +notas[0])
console.log("la nota mas alta es: " +notas[4])

/////////////////////////////////////////////////////////////////////////

//Programa que declare un vector de diez elementos enteros y pida números para rellenarlo hasta que se llene el vector
// o se introduzca un número negativo. Entonces se debe imprimir el vector (sólo los elementos introducidos).

numerosArray=[]
for (let i = 0; i < 10; i++) {

    
    
    dato=parseInt(prompt("dijite la nota numero"+(i+1)))
    while(isNaN(dato)){
        dato=parseInt(prompt("dijite una nota valida"))
    }
    if(dato>=0){
        numerosArray[i]=dato
    }else{
        i=10
    }
    
}
console.log(numerosArray)



//////////////////////////////////////////////////////////////////////////////////
//Hacer un programa que inicialice un vector de números con valores aleatorios, y posterior ordene los elementos de menor a mayor.


notas=[]
dato=parseInt(prompt("dijite el tamaño del vector"))
while(isNaN(dato)){
    dato=parseInt(prompt("dijite valor valido"))
}

for (let i = 0; i < dato; i++) {
    notas[i]=Math.floor(Math.random()*10-1) // generar un numero aleatorio y meterlo en la posicion del array (del 1 al 10)
    
}

console.log(notas)

for (let i = 0; i < dato; i++) {   
    for (let i = 0; i < dato; i++) {
        if(notas[i]>notas[i+1]){

            aux=notas[i]
            notas[i]=notas[i+1]
            notas[i+1]=aux

        }
        
    }

}
console.log(notas)

//////////////////////////////////////////////////////////////////////////////////
//Hacer un programa que inicialice un vector de números con valores aleatorios, y posterior ordene los elementos de mayor a menor.


notas=[]
dato=parseInt(prompt("dijite el tamaño del vector"))
while(isNaN(dato)){
    dato=parseInt(prompt("dijite valor valido"))
}

for (let i = 0; i < dato; i++) {
    notas[i]=Math.floor(Math.random() * 10 - 1) // generar un numero aleatorio y meterlo en la posicion del array (del 1 al 10)
    
}

console.log(notas)

for (let i = 0; i < dato; i++) {   
    for (let i = 0; i < dato; i++) {
        if(notas[i]<notas[i+1]){

            aux=notas[i]
            notas[i]=notas[i+1]
            notas[i+1]=aux

        }
        
    }

}
console.log(notas)

/////////////////////////////////////////////////////////////////////////////
//Crea un programa que pida un número al usuario un número de mes (por ejemplo, el 4) y diga cuántos días tiene (por ejemplo, 30) y 
//el nombre del mes. Debes usar un vector. Para simplificarlo vamos a suponer que febrero tiene 28 días.

dato= parseInt(prompt("porfavor dijite el numero del mes"))
while (isNaN(dato) || dato>12 || dato<=0) {
    alert("Error")
    dato= parseInt(prompt("recuerde que el mes dbe estar entre 1 y 12"))
}

dia=[0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
mes=[0, "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

alert("su numero es: "+dato+" el cual corresponde al mes "+mes[dato]+" el cual tiene "+dia[dato]+" dias")

//Programa que declare tres vectores ‘vector1’, ‘vector2’ y ‘vector3’ de cinco enteros cada uno, pida valores para ‘vector1’ y ‘vector2’
// y calcule vector3=vector1+vector2.

vector1=[]
vector2=[]
vector3=[]

alert("dijite los numeros para el primer vector")

for (let i = 0; i < 5; i++) {
    
    dato= parseInt(prompt("porfavor dijite el numero del mes"))
        while (isNaN(dato)) {
            dato= parseInt(prompt("dijite un NUMERO valido"))
        }

        vector1[i]=dato

}
alert(vector1)
alert("dijite los numeros para el segundo vector vector")

for (let i = 0; i < 5; i++) {
    
    dato= parseInt(prompt("porfavor dijite el numero del mes"))
        while (isNaN(dato)) {
            dato= parseInt(prompt("dijite un NUMERO valido"))
        }

        vector2[i]=dato

}
alert(vector2)

alert("generando el tercer vector")


for (let i = 0; i < 5; i++) {
    vector3[i]=(vector1[i]+vector2[i])
}
alert(vector3)


/////////////////////////////////////////////////////////////////
//Queremos guardar los nombres y la edades de los alumnos de un curso. Realiza un programa que introduzca el nombre y la edad de cada alumno. 
//El proceso de lectura de datos terminará cuando se introduzca como nombre un asterisco (*) Al finalizar se mostrará los siguientes datos:

//Todos lo alumnos mayores de edad.
//Los alumnos mayores (los que tienen más edad)


tabla=[]
activador=true
incrementador=0
while(activador){
   
    alert("ingrese el alumno")

    nombre=prompt("dijite el nombre")
    while (!isNaN(nombre)) {
        nombre=prompt("dijite un nombre valido")
    }
   


    if (nombre === "*"){

        activador=false

    }else{
        tabla[incrementador]=nombre
        
        for (let i = 0; i < 1; i++) {//en este for vamos a crear las columnas y vamos a proceder a llenarlo               
            edad=parseInt(prompt("ingrese la edad del alumno"))               
            while (isNaN(edad) || edad <=0 || edad >100) {
                edad=parseInt(prompt("ingrese una edad valida"))
            }
            tabla[incrementador][i+1]= edad//aqui decimos que en la posicion 0/0 para el primer ciclo, vamos a asignar un valor para esa posicion de la matriz
        }
                
        
            
        
             //aqui estamos diciendo que que el la posicion de fila vamos a hacer un array, el cual correspondera a las columnas

            
    }
incrementador++
}
console.log(tabla)

















for (let i = 0; i < 1; i++) {//en este for vamos a crear las columnas y vamos a proceder a llenarlo               
    edad=parseInt(prompt("ingrese la edad del alumno"))               
    while (isNaN(edad) || edad <=0 || edad >100) {
        edad=parseInt(prompt("ingrese una edad valida"))
    }
    tabla[incrementador][i]= edad//aqui decimos que en la posicion 0/0 para el primer ciclo, vamos a asignar un valor para esa posicion de la matriz
}

