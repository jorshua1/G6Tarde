/*Se necesita registrar el género de la persona que ingresé; 
el cuál solo acepte, hombre, mujer y indefinido además debe 
leerlos tanto la palabra en mayúscula y en minúscula, además 
solo deberá leer esos tres géneros en caso de agregar algo 
que no sea eso deberá aparecer un mensaje que diga "dijite 
un valor válido", y si ha ingresado el género dar un mensaje 
con el género que ingreso */

let genero = prompt("Ingrese su genero: coloque (M) para masculino, (F) para femenino y (I) para indefinido ")

if (genero == "M" || genero == "m"){
    alert("El genero ingresado fue (MASCULINO)")
}else if (genero === "F" || genero == "f"){
    alert("El genero ingresado fue (FEMENINO)")
}else if (genero === "I" || genero === "i"){
    alert("El genero ingresado fue (INDEFINIDO)")
}else {
    alert("Digite un valor valido")
}
