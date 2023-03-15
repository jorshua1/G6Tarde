let numero = parseInt(prompt("Ingrese un numero"));
let factorial = 1; 

for(let i = numero;i > 0; i--){
    factorial *= i;
}

console.log("El factorial de: " + numero + " es: " + factorial);