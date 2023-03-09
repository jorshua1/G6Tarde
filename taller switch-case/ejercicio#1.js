let numero1 = prompt ("ingrese el primer numero");
let numero2 = prompt ("ingrese el segundo numero");

if(isNaN(numero1 && numero2)){
    alert("ERROR, alguno de los dos datos no es un número");
}else if(numero1>numero2){
    alert("el primer numero mayor es: " + numero1 + " y el segundo numero es " + numero2);
}else if(numero1<numero2){
    alert("el primer numero mayor es: " + numero2 + " y el segundo numero es " + numero1);
}else if(numero1=numero2){
    alert("Los numeros son iguales")
}