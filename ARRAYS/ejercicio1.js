let numeros=[]
for(var i=0; i<10; i++){
    number=Number(prompt("Ingrese un numero"))
    while(isNaN(number) || number<0 || !Number.isInteger(number)){
        alert("Ingrese un dato valido")
        number=Number(prompt("Ingrese un numero"))
    }
    numeros[i]=number
}
let sumatoria=0;
for(x=0; x<numeros.length; x++){
    sumatoria+=numeros[x]
}

alert(`Datos: ${numeros}
Sumatoria: ${sumatoria}`)