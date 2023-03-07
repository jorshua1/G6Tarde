let genero = prompt("¿Cuál es su género? \n M para masculino \n F para femenino");
let estatura = Number(prompt("¿Cuál es su estatura en metros?"));

if(((genero === "F") || (genero === "f")) && ((estatura<=1) && (estatura>=0.1))){
    alert("El usuario pertenece a la categoría Junior");
}else if(((genero === "F") || (genero === "f")) && ((estatura<=1.60) && (estatura>=1.1))){
    alert("El usuario pertenece a la categoría Media");
}else if(((genero === "F") || (genero === "f")) && (estatura>1.60)){
    alert("El usuario pertenece a la categoría Adultos");
}else if(((genero === "M") || (genero === "m")) && ((estatura<=1.20) && (estatura>=0.1))){
    alert("El usuario pertenece a la categoría Junior");
}else if(((genero === "M") || (genero === "m")) && ((estatura<=1.70) && (estatura>=1.21))){
    alert("El usuario pertenece a la categoría Media");
}else if(((genero === "M") || (genero === "m")) && (estatura>1.70)){
    alert("El usuario pertenece a la categoría Adultos");
}else{
    alert("ERROR, alguno de los dos válores indicados no son válidos");
}