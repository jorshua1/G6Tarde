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







