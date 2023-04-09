/*
Se necesita registrar el género de la persona que ingresé; el cuál solo acepte, hombre, mujer e indefinido 
además debe leerlos tanto la palabra en mayúscula y en minúscula, 
además solo deberá leer esos tres géneros en caso de agregar algo que no sea
eso deberá aparecer un mensaje que diga "dijiste un valor no válido", y si ha ingresado el género dar un mensaje con el género que ingreso
*/

let generoPersona = "mujer";/*prompt("Por favor ingrese genero de la persona, si es mujer, hombre o indefinido.")*/

if (generoPersona == "hombre" ||
    generoPersona == "Hombre" ||
    generoPersona == "HOMBRE" ||
    generoPersona == "mujer" ||
    generoPersona == "Mujer" ||
    generoPersona == "MUJER" ||
    generoPersona == "inefinido" ||
    generoPersona == "Indefinido" ||
    generoPersona == "INDEFINIDO") {
        
    console.log("Has ingresado el genero : " + generoPersona);

} else {
    console.log("Digiste un valor no valido");
}