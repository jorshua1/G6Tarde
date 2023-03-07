let topping = Number(prompt("Por favor, seleccione una opción de helado \n 0. Helado sin topping 1.90$ \n 1. Helado con topping de Oreo 1$ \n 2. Helado con topping de Kitkat 1.50$ \n 3. Helado con topping de Brownie 0.75$ \n 4. Helado con topping de Lacasitos 0.95$"));
let precio = 0;
let heladoBase = 1.90;

if(topping === 0){
    precio = heladoBase;
    alert("El usuario eligió helado sin topping, su costo es de: " + precio + "$");
}else if(topping === 1){
    precio = heladoBase+1.0
    alert("El usuario eligió helado con topping de Oreo, su costo es de: " + precio + "$");
}else if(topping === 2){
    precio = heladoBase+1.5
    alert("El usuario eligió helado con topping de Kitkat, su costo es de: " + precio + "$");
}else if(topping === 3){
    precio = heladoBase+0.75
    alert("El usuario eligió helado con topping de Brownie, su costo es de: " + precio + "$");
}else if(topping === 4){
    precio = heladoBase+0.95
    alert("El usuario eligió helado con topping de Lacasitos, su costo es de: " + precio + "$");
}else{
    alert("No tenemos el topping deseado, lo sentimos. \nEl precio del helado sin ningún topping es de " + heladoBase + "$")
}