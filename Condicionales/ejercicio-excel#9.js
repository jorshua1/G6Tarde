let edad = parseFloat(prompt("Ingrese la edad"))

if (isNaN(edad)){
    alert("Ingrese datos validos ")
}else if(edad < 4){
    alert("El valor de la entrada es gratis ")
}else if(edad >= 4 && edad <= 18){
    alert("El valor de la etrada es de 5€ ")
}else {
    alert("El valor de la etrada es de 10€ ")
}