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
for(let x=0;x<vector.length;x++){
    for(let k=0;k<(vector.length-x);k++){
        if(vector[x]>vector[x+1]){
            control=vector[x]
            vector[x]=vector[x+1]
            vector[x+1]=control
        }
    }
}
 
alert("Vector ordenado"+vector)