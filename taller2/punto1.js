let num1 = Number(prompt("Ingrese el primer numero"));
let num2 = Number(prompt("Ingrese el segundo numero"));
if(isNaN(num1, num2)){
    console.log("¡ERROR!");
}else if(num1===num2){
    console.log("Los numeros son iguales");
}else if(num1>num2){
    console.log(num2,  num1);
}else{
    console.log(num1, num2);
}