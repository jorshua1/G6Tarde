/*realice un algoritmo con el que segun su edad y su indice de masa corporal indique si su peso es normal, 
tiene sobre peso, tiene obesidad*/

//20-25=normal / 30-35=sobre peso / 34-36=obesidad

let edad = Number(prompt("Indique su edad"));
let imc = (prompt("Indique su Indice de Masa Corporal(imc)"));
if (isNaN(edad)){
    console.log("¡ERROR!");
////////////////////////////////////////////////////// -DE 19 A 14 AÑOS- ///////////////////////////////////////////////////
}else if(edad >=19 && edad <= 24 && imc >= 19 && imc <= 24){
    console.log("Su peso es normal");
}else if(edad >=19 && edad <= 24 && imc >= 30 && imc <= 35){
    console.log("Tiene sobre perso");
}else if(edad >=19 && edad <= 24 && imc >= 34 && imc <= 36){
    console.log("Tiene obesidad");
////////////////////////////////////////////////////// -DE 25 A 34 AÑOS- ///////////////////////////////////////////
}else if(edad >=25 && edad <= 34 && imc >= 19 && imc <= 24){
    console.log("Su peso es normal");
}else if(edad >=25 && edad <= 34 && imc >= 30 && imc <= 35){
    console.log("Tiene sobre peso");
}else if(edad >=25 && edad <= 34 && imc >= 34 && imc <= 36){
    console.log("Tiene obesidad");
////////////////////////////////////////////////////// -DE 35 A 44 AÑOS- ///////////////////////////////////////////////
}else if(edad >=35 && edad <= 44 && imc >= 19 && imc <= 24){
    console.log("Su peso es normal");
}else if(edad >=35 && edad <= 44 && imc >= 30 && imc <= 35){
    console.log("Tiene sobre peso");
}else if(edad >=35 && edad <= 44 && imc >= 34 && imc <= 36){
    console.log("Tiene obesidad");
//////////////////////////////////////////////////////_-DE 45 A 54 AÑOS- ///////////////////////////////////////////
}else if(edad >=45 && edad <= 54 && imc >= 19 && imc <= 24){
    console.log("Su peso es normal");
}else if(edad >=45 && edad <= 54 && imc >= 30 && imc <= 35){
    console.log("Tiene sobre peso");
}else if(edad >=45 && edad <= 54 && imc >= 34 && imc <= 36){
    console.log("Tiene obesidad");
////////////////////////////////////////////////////// -DE 55 A 64 AÑOS- //////////////////////////////////////
}else if(edad >=55 && edad <= 64 && imc >= 19 && imc <= 24){
    console.log("Su peso es normal");
}else if(edad >=55 && edad <= 64 && imc >= 30 && imc <= 35){
    console.log("Tiene sobre peso");
}else if(edad >=55 && edad <= 64 && imc >= 34 && imc <= 36){
    console.log("Tiene obesidad");
////////////////////////////////////////////////////// -DE 65 EN ADELANTE- ////////////////////////////////////////
}else if(edad >=65 && imc >= 19 && imc <= 24){
    console.log("Su peso es normal");
}else if(edad >=65 && imc >= 30 && imc <= 35){
    console.log("Tiene sobre peso");
}else if(edad >=65 && imc >= 34 && imc <= 36){
    console.log("Tiene obesidad");
}
