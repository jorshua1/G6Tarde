var edad = Number(prompt("Ingrese la edad"));
if (isNaN(edad) || edad <=0){
    console.log("No valido");
}else if (edad>=18){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}

