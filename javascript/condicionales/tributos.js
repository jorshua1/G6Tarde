//Ejercicio de Michael Afanador

let edad = Number(prompt("¿Qué edad tiene el usuario?"));
let ingresos = 0;

if((isNaN(edad))||(edad<0)){
    alert("Por favor, ingrese un valor válido de edad");
}else if(edad<16){
    alert("El usuario no debe tributar (Edad insuficiente)");
}else{
    let ingresos = Number(prompt("¿Cuánto es su ingreso mensual?"));
    if((isNaN(ingresos))||(ingresos<0)){
        alert("Por favor, ingrese un válido de ingresos");
    }else if(ingresos<1000){
        alert("El usuario no debe tributar (Ingresos insuficientes)");
    }else{
        alert("El usuario si debe pagar tributo");
    }
}