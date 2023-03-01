let x = parseInt(prompt("introduzca el primer número"));
let y = parseInt(prompt("introduzca el segundo número"));
let z = x + y;
console.log("la suma de ambos números es de " + z) ; 
/*Muestro el resultado en la consola*/

let x = parseInt(prompt("introduzca el primer número"));
let y = parseInt(prompt("introduzca el segundo número"));
let z = x + y;
alert("la suma de ambos números es de " + z) ; 
//muestro el resultado en una alerta 

//lo intenté hacer usando funciones
let x = parseInt(prompt("introduzca el primer número"));
let y = parseInt(prompt("introduzca el segundo número"));
suma(x,y);  
function suma(a,b) {
     
    return alert("la suma es de "+ (a+b));
}

    