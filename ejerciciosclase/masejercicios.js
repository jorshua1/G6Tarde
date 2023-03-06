/*
impuesto
*/

let edad=Number(prompt("Ingrese su edad:"))
let ingresos=Number(prompt("Ingrese sus ingresos:"))
if(isNaN(edad)|| isNaN(ingresos)||edad<=0||ingresos<0){
    console.log("Ingrese un valor valido");
}else if(edad>16 && ingresos>=1000){
    console.log("Tiene que tributar")
}else{
    console.log("No tiene que tributar")
}

/*

*/