/*
Cree un algoritmo, el cual le pida por teclado la edad a un usuario, 
seguido debera asignarle los siguientes rangos.
si el usuario tiene entre 0 y 5 años, debera asignarle la categoria bb, 
si tiene entre 6 y 10 años, tiene la categoria adolecente
si tiene entre 11 y 18 años, debera asignarle la categoria casi maduro, 
si tiene de 19 a 25 anos, debera asignarle maduro.
si tiene de 26 a 50 pertenecera a casi pensionado, 
si tiene entre 51 y 70, tiene por categoria penxionadox.
si tiene de 71 en adelante pertenecera al grupo amigo de matusalen, 
debera mostrarle al usuario en que categoria se encuentra.  )
*/

let edadPersona = 135;
let categoriaEdad;

if (edadPersona >= 0 && edadPersona <= 5) {
    categoriaEdad = "Bebe";
    console.log(categoriaEdad);

} else if (edadPersona >= 6 && edadPersona <= 10) {
    categoriaEdad = "Adolecente";
    console.log(categoriaEdad);

} else if (edadPersona >= 11 && edadPersona <= 18) {
    categoriaEdad = "Casi maduro";
    console.log(categoriaEdad);

} else if (edadPersona >= 19 && edadPersona <= 25) {
    categoriaEdad = "Maduro";
    console.log(categoriaEdad);

} else if(edadPersona>=26 && edadPersona<=50) {
    categoriaEdad="Casi pesionado";
    console.log(categoriaEdad);

}else if(edadPersona>=51 && edadPersona<=70) {
    categoriaEdad="Pesionado";
    console.log(categoriaEdad);
}else{
    categoriaEdad="Amigo de Matusalem";
    console.log(categoriaEdad);
}
