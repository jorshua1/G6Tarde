/*if(condicion){
    //Codigo a ejecutar si es true la condición
}else{
    //Codigo a ejecutar si es false la condición
}*/

/*let edad = Number(prompt("Ingrese su edad"));

if(edad > 0){
    if(edad >= 18){
        console.log("Es mayor de edad")
    } else{
        console.log("Es menor de edad")
    }
} else{
    console.log("Ingrese una edad válida")
}*/

/*let edad = Number(prompt("Ingrese su edad"));

if (isNaN(edad)){
    console.log("Error, ingrese un valor válido");
}else if(edad>=1 && edad>=18){
    console.log("Es mayor de edad");
}else if(edad>=1 && edad<=18){
    console.log("Es menor de edad");
}else{
    console.log("Ingrese una edad válida")
}*/

// edad

let edad = Number(prompt("Ingrese su edad"));
if (isNaN(edad) || edad<0){
    console.log("Error, ingrese un valor válido");
}else if(edad>=18){
    console.log("Es mayor de edad")
}else{
    console.log("Es menor de edad")
}
