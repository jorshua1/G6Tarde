/* 	Haga un ejercicio con if (y) B) (Cree un algoritmo, el cual le pida por teclado 
la edad a un usuario, seguiido debera asignarle los siguientes rangos, si el usuario
tiene entre 0 y 5 años, debera asignarle la categoria bb, si tiene entre 6 y 10 años, 
tiene la categoria adolex ente, si tiene entre 11 y 18 años, debera asignarle la 
categoria casi maduro, si tiene de 19 a 25 anos, debera asignarle maduro, si tiene de 
26 a 50 pertenecera a casi pensionado, si tiene entre 51 y 70, tiene por categoria 
penxionadox, y si tiene de 71 en adelante pertenecera al grupo amigo de matusalen, 
debera mostrarle al usuario en que categoria se encuentra. )*/

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