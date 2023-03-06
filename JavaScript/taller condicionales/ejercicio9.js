//Haga un ejercicio con if (y) B)  (Cree un algoritmo, el cual le pida por teclado la edad a un usuario, seguiido debera asignarle los siguientes rangos, si el usuario tiene entre 0 y 5 años, debera asignarle la categoria bb, si tiene entre 6 y 10 años, tiene la categoria adolex ente, si tiene entre 11 y 18 años, debera asignarle la categoria casi maduro, si tiene de 19 a 25 anos, debera asignarle maduro, si tiene de 26 a 50 pertenecera a casi pensionado, si tiene entre 51 y 70, tiene por categoria penxionadox, y si tiene de 71 en adelante pertenecera al grupo amigo de matusalen, debera mostrarle al usuario en que categoria se encuentra.  )
 let edad=Number(prompt("Ingrese su edad"));
 if (edad<=5){
    alert("Categoria BB")
 }else if (edad>5 && edad<=10){
    alert("Categoria adolex")
 }else if (edad>10 && edad<=18){
    alert("Categoria Casi maduro")
 }else if (edad>18 && edad<=25){
    alert("Cateogoria Maduro")
 }else if (edad>25 && edad<=50){
    alert("Categoria casi pensionado")
 }else if (edad>50 && edad<=70){
    alert("Categoria pensionado")
 }else if (edad>70){
    alert("Categoria Amigo de matusalen")
 }
