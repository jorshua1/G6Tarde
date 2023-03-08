//Se necesita registrar el género de la persona que ingresé; el cuál solo acepte, hombre, mujer y indefinido además debe leerlos tanto la palabra en mayúscula y en minúscula, además solo deberá leer esos tres géneros en caso de agregar algo que no sea eso deberá aparecer un mensaje que diga "dijite un valor válido", y si ha ingresado el género dar un mensaje con el género que ingreso

alert(
  "Ingrese su tipo de sexo" +
    "\n" +
    "Datos permitidos: hombre, mujer, indefinido "
);

var sexo = prompt("Ingrese su tipo de sexo");

if (!isNaN(sexo) || sexo >= 0) {
  console.log("Ingrese valor valido");
}
if ((sexo === "hombre") || (sexo === "HOMBRE")) {
  alert("Hombre");
}if ((sexo === "mujer") || (sexo === "MUJER")){
    alert("Mujer")
}if ((sexo === "indefinido") || (sexo === "INDEFINIDO")){
    alert ("Indefinido")
}else {
    alert ("Ingrese valor valido")
}
