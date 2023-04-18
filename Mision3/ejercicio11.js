function parImpar(numero){
    if (isNaN(numero)){
        return("Error dato inválido");
    }else if(numero%2===0){
        return("El numero es par");
    }else{
        return("El numero es impar");
    }
}

let dato=Number(prompt("Ingrese un numero para validar si es par o impar"));
console.log(parImpar(dato));