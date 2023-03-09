/*Haga un ejercicio con if (y) B)  (Cree un algoritmo, el cual le pida por teclado la edad a un 
usuario, seguiido debera asignarle los siguientes rangos, si el usuario tiene entre 0 y 5 años, 
debera asignarle la categoria bb, si tiene entre 6 y 10 años, tiene la categoria adolex ente, 
si tiene entre 11 y 18 años, debera asignarle la categoria casi maduro, si tiene de 19 a 25 anos, 
debera asignarle maduro, si tiene de 26 a 50 pertenecera a casi pensionado, si tiene entre 51 y 70, 
tiene por categoria penxionadox, y si tiene de 71 en adelante pertenecera al grupo amigo de matusalen, 
debera mostrarle al usuario en que categoria se encuentra)*/

let edad = parseInt(prompt("Ingrese su edad"));
 if(isNaN(edad)|| edad<0){
    console.log("Ingrese un dato valido")
 }
 else if(edad>=0 && edad<=5){
    console.log("Está en la categoria BB")
 }
 else if(edad>=6 && edad<=10){
    console.log("Está en la categoria ADOLEXENTE")
 }
 else if(edad>=11 && edad<=18){
    console.log("Está en la categoria CASI MADURO")
 }
 else if(edad>=19 && edad<=25){
    console.log("Está en la categoria MADURO")
 }
 else if(edad>=26 && edad<=50){
    console.log("Está en la categoria CASI PENSIONADO")
 }
 else if(edad>=51 && edad<=70){
    console.log("Está en la categoria PENXIONADOX")
 }
 else{
    console.log("Está en la categoria AMIGO DE MATUSALEN")
 }

 /*Escribir un programa para una empresa que tiene salas de juegos para todas las edades y quiere calcular 
 de forma automática el precio que debe cobrar a sus clientes por entrar. El programa debe preguntar al 
 usuario la edad del cliente y mostrar el precio de la entrada. Si el cliente es menor de 4 años puede entrar 
 gratis, si tiene entre 4 y 18 años debe pagar 5€ y si es mayor de 18 años, 10€.*/