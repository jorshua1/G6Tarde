/*Escribir una función en JavaScript que tome como parámetro un número y muestre por consola los números del 1 al número ingresado, pero si el número es múltiplo de 3 mostrar "Fizz" en lugar del número y si el número es múltiplo de 5 mostrar "Buzz" en lugar del número.*/

function contar(variable){
    if (variable > 0 && variable != 3 && variable != 5){
        for (var i = 1; i <= variable; i++){
            console.log(i);
        }
    }else if(variable < 0 && variable != 3 && variable != 5){
        for (var i = 1; i >= variable; i--){
        console.log(i);}
    }else if(variable % 3 ===0){
        console.log("Fizz");
    }else if(variable %5 === 0){
        console.log("Buzz");
    }else{
        console.log("Error");
    }
}

let variable = parseInt(prompt("por favor ingresar un numero"));
console.log(contar(variable));