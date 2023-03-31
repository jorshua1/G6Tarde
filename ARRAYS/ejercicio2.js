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
    if(numeros[x]%2==0){
        contador=contador+1
    }
}
alert("Cantidad de numeros pares:" + contador)