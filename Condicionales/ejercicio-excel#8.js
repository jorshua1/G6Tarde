let edad = parseInt(prompt("Ingrese la edad "));

if (isNaN(edad)){
    alert("Ingrese datos validos ")
}else if(edad >= 0 && edad <= 5){
    alert("El rango de edad es bb ")
}else if(edad >= 6 && edad <= 10){
    alert("El rango de edad es adolecente ")
}else if(edad >= 11 && edad <= 18){
    alert("El rango de edad es casi maduro ")
}else if(edad >= 19 && edad <= 25){
    alert("El rango de edad es maduro ")
}else if(edad >= 26 && edad <= 50){
    alert("El rango de edad es casi pensionado ")
}else if(edad >= 51 && edad <= 70){
    alert("El rango de edad es pensionado ")
}else{
    alert("Pertenece la grupo de matusalen ")
}