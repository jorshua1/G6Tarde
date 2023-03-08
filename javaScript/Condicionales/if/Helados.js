/*Escribe un programa que responda a un usuario que quiere comprar un helado en una 
conocida marca de comida rápida cuanto le costará en función del helado que elija.

El helado sin topping cuesta 1.90$.
El topping de oreo cuesta 1$.
El topping de KitKat cuesta 1.50$.
El topping de brownie cuesta 0.75$.
El topping de lacasitos cuesta 0.95$.

En caso de no disponer del topping solicitado por el usuario el programa escribirá 
por pantalla «no tenemos este topping, lo sentimos. » y a continuación informar del 
precio del helado sin ningún topping. Finalmente, el programa escribe por pantalla 
el precio del helado con el topping seleccionado (o ninguno). */

let helado = prompt("Ingrese el sabor de su helado \n 1. oreo \n 2. kitkat \n 3. brownie \n 4. lacasitos");
let precioBase =1.90;
let precioTopping = 0;
let total = (precioBase+precioTopping);

if(helado=="oreo"){
    precioTopping = 1;
    alert("El precio del helado base es: " + precioTopping + " mas el valor del topping de oreo el precio total es de: " + total);
}else if(helado=="kitkat"){
    precioTopping = 1.50;
    alert("El precio del helado base es: " + precioTopping + " mas el valor del topping de kitkat el precio total es de: " + total);
}else if(helado=="brownie"){
    precioTopping = 0.75;
    alert("El precio del helado base es: " + precioTopping + " mas el valor del topping de brownie el precio total es de: " + total);
}else if(helado=="lacasitos"){
    precioTopping = 0.95;
    alert("El precio del helado base es: " + precioTopping + " mas el valor del topping de lacasitos el precio total es de: " + total);
}else{
    alert("No tenemos este topping, lo sentimos.");
}