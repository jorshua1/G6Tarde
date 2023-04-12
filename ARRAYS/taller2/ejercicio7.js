vector1=[];
vector2=[];
vector3=[];
let numero=0;
let numero2=0;
alert("Llenaremos el vector1")
for(let i=0;i<5;i++){
    numero=Number(prompt("Ingrese dato "+(i+1)+" del vector1"))
    while(isNaN(numero) || numero<0 || !Number.isInteger(numero) ){
        alert("Error, ingrese un dato valido")
        numero=Number(prompt("Ingrese dato "+(i+1)+" del vector1"))
    }
    vector1[i]=numero
}
alert("Llenaremos el vector2")
for(let x=0;x<5;x++){
    numero2=Number(prompt("Ingrese dato "+(x+1)+" del vector2"))
    while(isNaN(numero2) || numero2<0 || !Number.isInteger(numero2) ){
        alert("Error, ingrese un dato valido")
        numero2=Number(prompt("Ingrese dato "+(x+1)+" del vector2"))
    }
    vector2[x]=numero2
}
for(let j=0;j<5;j++){
    vector3[j]=vector1[j]+vector2[j]
}
alert(`Vector 1: ${vector1}
Vector 2: ${vector2}
Vector 3: ${vector3}`)