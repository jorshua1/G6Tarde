//ejercicio factorial
let x=Number(prompt("Ingrese un numero para calcular el factorial"));
let acumulador=1;
while(isNaN(x) || x<0){
    alert("Error")
    x=Number(prompt("Ingrese un dato valido"))
}for(let i=x;i>0;i--){
    acumulador *= i;
}
alert("El factorial de " + x + " es: " + acumulador)
