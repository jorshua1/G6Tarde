//Haga un ejercicio con if y cree un algoritmo, el cual le pida por teclado la edad a un usuario, seguiido debera asignarle los siguientes rangos, si el usuario tiene entre 0 y 5 años, debera asignarle la categoria bb, si tiene entre 6 y 10 años, tiene la categoria adolex ente, si tiene entre 11 y 18 años, debera asignarle la categoria casi maduro, si tiene de 19 a 25 anos, debera asignarle maduro, si tiene de 26 a 50 pertenecera a casi pensionado, si tiene entre 51 y 70, tiene por categoria penxionadox, y si tiene de 71 en adelante pertenecera al grupo amigo de matusalen, debera mostrarle al usuario en que categoria se encuentra.

     alert("Este programa le informara segun su edad a que etapa del desarrollo humano petenece")

var edad = Number (prompt("Ingrese su edad"))

if (isNaN(edad) || edad <=0){
    alert("Ingrese un valor valido")
}if (edad <= 5 ){
    alert("Eres un bebe")
}else if (edad <=10){
    alert("Eres un adolescente")
}else if (edad <= 18){  
    alert("Estas madurando")
}else if (edad <= 25){
    alert("Eres todo un maduro")
}else if (edad <= 50){
    alert("Estas que te pensionas xD")
}else if(edad <= 70){
    alert("Debes estar pensionado")
}else {
    alert("Ya eres amigo de Matusalen")
}