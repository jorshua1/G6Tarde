/*Se necesita registrar el género de la persona que ingresé; el cuál solo acepte, hombre, mujer y indefinido además debe leerlos tanto la palabra en mayúscula y en minúscula, además solo deberá leer esos tres géneros en caso de agregar algo que no sea eso deberá aparecer un mensaje que diga "dijite un valor válido", y si ha ingresado el género dar un mensaje con el género que ingreso*/


let genero=prompt("ingrese su genero  masculino, femenino o indefinido");


if (genero==="masculino" || genero==="MASCULINO"){
    console.log("Su genero es masculino");

}else if(genero==="femenino" || genero==="FEMENINO"){
    console.log("Su genero es femenino");

}else if (genero==="indefinido" || genero==="INDEFINIDO"){
    console.log("su gene es indefinido")
}