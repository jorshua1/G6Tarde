//Que es una validacion?
//Es un requerimiento especifico que establecemos para acceder al siguiente paso
//Limitar a un usuario bajo una condicion requerida
//Para que se usa?
//Para certificar que es el valor que estamos pidiendo o solicitando este corecto segun los parametros que pone el sistema

//Validacion con el ciclo condicional WHILE 
nombre = prompt("por favor digite su nombre");
while (!isNaN(nombre)){
    console.log("Error, por favor ingresar valor de tipo texto");
    nombre = prompt("por favor digite su nombre");
}
alert(nombre);

edad = parseInt(prompt("Por favor digite su edad"));
while (isNaN(edad) || edad < 0){
    console.log("Error, por favor ingresar valor de tipo numerico y mayor que 0");
    edad = prompt("por favor digite su edad");  
}
alert(edad);

// Validacion con if y else
nombreUsuario=prompt("Por favor digite su nombre");
if (isNaN(nombreUsuario)){
    edadUsuario=prompt("Por favor digite su edad");
    if (!isNaN(edadUsuario)&&edadUsuario>1){
        alert("El usuario "+nombreUsuario+" tiene "+edadUsuario+" años");
    }else{
            alert("La edad del usuario "+nombreUsuario+" no es valida ");
        }
}else{
    alert("El nombre de usuario no es valido");
}

// validacion con for 
edad = parseInt(prompt("ingrese su numero de edad"));
for (edad;isNaN(edad) || edad < 0;){
    edad = parseInt(prompt("ingrese su numero de edad"));
}
alert(edad);

nombrexd = prompt("INgrese su nombre");
for (nombrexd;!isNaN(nombrexd);){
    nombrexd = prompt("Ingrese un nombre valido");
}

//Nota adicional


!Number.isInteger("Variable aquí");


//Esta validacion sirve para cuando queremos numeros que no sean decimales :3

