let numeros = []
for (let i = 0; i <100;i++){
    let numero = Number(prompt("Ingrese el numero" + (i+1)))
    while(isNaN(numero) || !Number.isInteger(numero) ){
        alert("Ingrese un dato  valido")
        let numero = Number(prompt("Ingrese el numero" + (i+1)))
    }
    numeros[i]=numero
}
contador=0;
for(let x=0;x<numeros.length;x++){
    if(numeros[x]<0){
        contador=contador+1
    }
}
alert("Cantidad de numeros positivos:" + contador)


//con numeros al azar

numeros = []

for (let i = 0; i <100;i++){
    var random= Math.floor(Math.random()*(100 - (-100)))+(-100)
    numeros[i]=random
}
contador=0;
for(let x=0;x<numeros.length;x++){
    if(numeros[x]<0){
        contador=contador+1
    }
}
alert("Cantidad de numeros positivos:" + contador)

