let exa1 = Number(prompt("Ingrese su nota del examen 1"));
let exa2 = Number(prompt("Ingrese su nota del examen 2"));
let exa3 = Number(prompt("Ingrese su nota del examen 3"));
let traba1 = Number(prompt("Ingrese su nota del primer trabajo"));
let traba2 = Number(prompt("Ingrese su nota del segundo trabajo"));
let notaexa = ((exa1+exa2+exa3)/3)*(0.6);
let notatraba = ((traba1+traba2)/2)*(0.4);
let notaFinal = notaexa+notatraba;
if(isNaN(exa1) || exa1 < 0){
    console.log("ERROR");
}else if(isNaN(exa2) || exa2 < 0){
    console.log("ERROR");
}else if(isNaN(exa3) || exa3 < 0 ){
    console.log("ERROR");
}else if(isNaN(traba1) || traba1 < 0){
    console.log("ERROR");
}else if(isNaN(traba2) || traba2 < 0){
    console.log("ERROR");
}else{
    console.log("Su nota final es: "+notaexa );
    console.log("Su nota de trabajos es: "+notatraba);
    console.log("Su nota final es: "+notaFinal);
}