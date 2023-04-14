//Salas de juegos - Costo de entrada

let edad = Number(prompt("El precio de entrada depende de su edad, ¿Cuántos años tiene?"));

if((edad>=0) && (edad<4)){
    alert("El usuario puede entrar gratis");
}else if((edad>=4) && (edad<=18)){
    alert("El costo de la entrada para el usuario es de 5$");
}else if(edad>18){
    alert("El costo de la entrada para el usuario es de 10$");
}else{
    alert("Por favor, ingrese una edad válida");
}

