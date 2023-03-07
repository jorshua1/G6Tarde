
let genero = prompt("¿Cuál es su género? Escriba M para masculino, F para femenino o I para indefinido");

if((genero === "M") || genero === "m"){
    alert("El usuario es de género masculino");
}else if((genero === "F") || genero === "f"){
    alert("El usuario es de género femenino");
}else if((genero === "I") || genero === "i"){
    alert("El usuario es de género indefinido");
}else{
    alert("Por favor, ingrese un valor de género válido");
}