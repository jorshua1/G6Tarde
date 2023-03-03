//relacion entre dos numeros

let num1 = Number(prompt("Ingrese el primer número"));
let num2 = Number(prompt("Ingrese el segundo número"));

if (isNaN(num1) || isNaN(num2)){
    console.log("ERROR, alguno de los dos datos no es un número");
}else if(num1 === num2){
    console.log("Los dos números son iguales");
}else if(num1 > num2){
    console.log("El número 1 (" + num1 + ") es mayor que el número 2 (" + num2 + ")");
}else{
    console.log("El número 2 (" + num2 + ") es mayor que el número 1 (" + num1 + ")");
}