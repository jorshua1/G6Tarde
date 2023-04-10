var numImpar = Number(prompt("Ingrese el numero"));
while ((numImpar <= 0) || (isNaN(numImpar))) {
    console.log("El numero que ingreso no es un numero positivo o es una letra.");
    numImpar = Number(prompt("Ingrese el numero"));
}for(let i= 1;i<=numImpar;i++){
    if(i%2 !=0){
    console.log("Los numeros impares son: " + i)
    }
}