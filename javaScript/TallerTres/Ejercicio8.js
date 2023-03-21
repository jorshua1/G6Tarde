let animal = prompt("Ingrese el nombre del animal del que desea tomar las muestras:\n1. elefantes \n2. jirafas \n3. chimpances");
let cantidad = 0;
let edad = 0;
let cantidadUno = 0;
let cantidadDos = 0;
let cantidadTres = 0;
while(animal !== "elefantes" && animal !== "jirafas" && animal !== "chimpances" ){
    animal = prompt("Por favor. Ingrese un nombre valido para tomar las muestras:\n1. elefantes \n2. jirafas \n3. chimpances");
}

switch (animal) {
    case "elefantes":
        cantidad = 20;
        break;
    case "jirafas":
        cantidad = 15;
        break;
    case "chimpances":
        cantidad = 40;
        break;
    default:
        break;
}

for (i = 1; i <= cantidad; i  ++){
    edad = parseFloat(prompt("Ingrese la edad del " + animal + "."));
    while(isNaN(edad) || edad <0){
        edad = parseFloat(prompt("Por favor ingrese una edad valida."));
    }
    if (edad >=0 && edad <= 1){
        cantidadUno++
    } else if (edad > 1 && edad < 3){
        cantidadDos++
    } else if (edad >= 3){
        cantidadTres++
    } 
}

alert("El prcentaje correspondiente de los " + animal + " en el ragno de 0 a 1 año es de: " + (cantidadUno/cantidad)*100 +" %");
alert("El prcentaje correspondiente de los " + animal + " en el ragno de 1 a 3 año es de: " + (cantidadDos/cantidad)*100 +" %");
alert("El prcentaje correspondiente de los " + animal + " de mas de 3 años es de: " + (cantidadTres/cantidad)*100 +" %");