let nombre = (prompt("Cual es tu Nombre"));
let genero = (prompt("¿Cuál es tu sexo (M o H)"));
if((genero=="M")&&(nombre.toLowerCase()<'m')||((genero == "H")&&(nombre.toLowerCase()>'n'))){
    grupo = "A";
}else{
    grupo = "B";
    alert("Tu grupo es " + grupo)
}

