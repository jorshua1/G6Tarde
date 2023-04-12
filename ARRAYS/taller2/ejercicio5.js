let cantidad = Number(prompt("Ingrese cantidad de numeros que desea generar"))
while (isNaN(cantidad) || cantidad <0 || !Number.isInteger(cantidad) ){
    alert("Error, ingrese un dato valido")
    cantidad = Number(prompt("Ingrese cantidad de numeros que desea generar"))
}
let vector=[];
for(let i=0;i<cantidad;i++){
    var random= Math.floor(Math.random()*(100 - (-100)))+(-100)
    vector[i]=random
}
alert("Datos del vector: " + vector)
let control = 0;
let largoVector = vector.length;
for(let x=1;x<largoVector;x++){
    for(let k=0;k<(largoVector-x);k++){
        if(vector[k]>vector[k+1]){
            control=vector[k]
            vector[k]=vector[k+1]
            vector[k+1]=control
        }
    }
}
 
alert("Vector ordenado"+vector)