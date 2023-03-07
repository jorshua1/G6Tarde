/*Haga un ejercicio con if (y) B)  (Cree un algoritmo, el cual le pida por teclado la edad a un usuario, 
seguido deberá asignarle los siguientes rangos, si el usuario tiene entre 0 y 5 años, 
debera asignarle la categoria bb, si tiene entre 6 y 10 años, 
tiene la categoria adolecente, si tiene entre 11 y 18 años, 
debera asignarle la categoria casi maduro, si tiene de 19 a 25 años, 
debera asignarle maduro, si tiene de 26 a 50 pertenecera a casi pensionado, 
si tiene entre 51 y 70, tiene por categoria pensionados y 
si tiene de 71 en adelante pertenecera al grupo amigo de matusalen, 
debera mostrarle al usuario en que categoria se encuentra.)*/

let edad = Number(prompt("Ingrese su edad"));
if (isNaN(edad)){
    console.log("¡ERROR!");
}else if(edad >=0 && edad <= 5){
    console.log("Pertenece a la categoria bebé");
}else if(edad >= 6 && edad <= 10){
    console.log("Pertenece a la categoria adolecente");
}else if(edad >= 11 && edad<= 18){
    console.log("Pertenece a la categoria casi maduro");
}else if(edad >= 19 && edad <= 25){
    console.log("Pertenece a la categoria maduro");
}else if(edad >= 26 && edad <= 50){
    console.log("Pertenece a la categoria casi pensiondo");
}else if(edad >= 51 && edad <= 70){
    console.log("Pertenece a la categoria pensionado");
}else if(edad > 71){
    console.log("Pertenece a la categoria amigo de matusalen");
}