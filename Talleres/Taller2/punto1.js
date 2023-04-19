/*Leer dos numero sy que los imprima de forma ascendente*/

let num1 = parseInt(prompt("por favor ingresar el primer numero"));
let num2 = parseInt(prompt("por favor ingresar el segundo numero"));

if (num1 < num2) {
    alert("el ordes quedaria: " + num1 + num2);
}else{
    alert("el ordes quedaria: " + num2 + num1);
}
