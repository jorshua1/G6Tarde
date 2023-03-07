let genero = prompt("Ingrese su genero: coloque (M) para masculino, (F) para femenino ")
let estatura = parseFloat(prompt("Ingrese su estarura "))

if (isNaN(estatura)){
    alert("Ingrese valores validos")
}else if ((genero == "F" || genero == "f") && estatura <= 1){
    alert("Su categoria de natacion es: Junior ")
}else if ((genero == "F" || genero == "f") && estatura >1 && estatura <= 1.60 ){
    alert("Su categoria de natacion es: Media ")
}else if ((genero == "F" || genero == "f") && estatura >1.60){
    alert("Su categoria de natacion es: Adultos ")
}else if((genero == "M" || genero == "m") && estatura <= 1.2 ){
    alert("Su categoria de natacion es: Junior ")
}else if ((genero == "M" || genero == "m") && estatura >1.2 && estatura <= 1.70 ){
    alert("Su categoria de natacion es: Media ")
}else if((genero == "M" || genero == "m") && estatura > 1.70 ){
    alert("Su categoria de natacion es: Adultos ")
}else {
    alert("Ingrese valores validos")
}