/*Crear un programa que me identifique a cual categoría de natación pertenece una
persona según su estatura, teniendo en cuenta que para las mujeres estaría
representado de la siguiente manera: Hasta lm de altura pertenece a la categoría
Junior, luego hasta 1 ,60m su categoría es Media y mas de 1.60 pertenece a Adultos.
Para los hombres esta representada de la siguiente manera: Hasta 1 ,2m de altura
pertenece a la categoría Junior, luego hasta 1,70m su categoría es Media y mas de
1.70m pertenece a Adultos. */

let genero = prompt("Ingrese su genero: \n (M) para masculino \n (F) para femenino ")
let estatura = parseFloat(prompt("Ingrese su estarura "))

if (isNaN(estatura) || estatura <=0){
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