//ejercicio andres rueda 
let nombre=prompt("Ingrese nombre");
let genero=prompt("Ingrese generó (H o M)");
if (genero == "M"){//mujeres
    if (nombre[0] <= "m"){
        group="A"
    }else{
        group="B"
    }
}
if (genero == "H"){//hombres
    if (nombre[0] >= "n"){
        group="A"
    }else{
        group="B"
    }
}alert("Su grupo es el grupo"+group)

