let nombre="";
let edad=0;
let contador=0;
let edades=[];
let nombres=[];
let mayoresEDAD =[];
let mayoresNOM = [];
let mayor=0;
let nombreMayor="";
while(nombre!="*"){
    nombre = prompt("Ingrese nombre del estudiante" + (contador+1))
    while(!isNaN(nombre)){
        alert("Error, ingrese un nombre valido")
        nombre = prompt("Ingrese nombre del estudiante" + (contador+1))
    }
    if(nombre=="*"){
        break;
    }
    nombres[contador]=nombre
    edad = Number(prompt("Ingrese edad del estudiante" + (contador+1)))
    while(isNaN(edad)|| edad<0){
        alert("Error, ingrese una edad valida")
        edad = Number(prompt("Ingrese edad del estudiante" + (contador+1)))
    }
    edades[contador]=edad
    contador +=1
}




let cont=0;
for(let x=0; x<edades.length; x++){
    if(edades[x]>=18){
        mayoresEDAD[cont]=edades[x]
        mayoresNOM[cont]=nombres[x]
        cont +=1
    }
    if(edades[x]>mayor){
        mayor=edades[x]
        nombreMayor=nombres[x]
    }
}
alert("Estudiantes mayores de edad:")
for(let j=0; j<mayoresEDAD.length; j++){
    alert(`estudiante ${j+1}
    Nombre: ${mayoresNOM[j]}
    Edad: ${mayoresEDAD[j]}`)
}
alert(`Estudiante con mas edad:
Nombre: ${nombreMayor}
Edad: ${mayor}`)