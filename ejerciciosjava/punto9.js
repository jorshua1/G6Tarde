/*Se necesita registrar el género de la persona que ingresé; 
el cuál solo acepte,hombre,mujer e indefinido además debe leerlos tanto la palabra en mayúscula y en minúscula,
además solo deberá leer esos tres géneros en caso de agregar algo que no sea eso
deberá aparecer un mensaje que diga "dijite un valor válido", y si ha ingresado el género dar un mensaje
con el género que ingreso*/

let genero = (prompt("Ingrese su genero"));
if(genero === "HOMBRE" || genero === "hombre" || genero === "MUJER" || genero === "mujer" || genero === "INDEFINIDO" || genero === "indefinido"){
    console.log("Su genero es "+genero);
}else{
    console.log("Dijite un valor Válido");
}