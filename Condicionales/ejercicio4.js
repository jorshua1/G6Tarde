/**Algoritmo para determinar el mayor entre 3 números; suponga que estos números son de valores
diferentes. */

let num1=Number(prompt("Ingrese numero 1"));
let num2=Number(prompt("Ingrese numero 2"));
let num3= Number(prompt("Ingrese número 3"));

if (isNaN(num1)||isNaN(num2)|| isNaN(num3)){
    alert("ERROR. Ingrese un dato válido");
}else if (num1>num2&& num1 >num3){
    alert("El numero mayor es el numero 1: '"+num1+"'");
}else if (num2>num1 && num2>num3){
    alert("El numero mayor es el numero 2: '"+num2+"'");
}else {
    alert("El numero mayor es el numero 3: '"+num3+"'");
}