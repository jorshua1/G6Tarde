/*determinar el tipo de triangulo segun la medida de sus lados: escaleno, iscoceles o equilatero*/

let lado1 = Number(prompt("Ingrese el valor del lado 1"));
let lado2 = Number(prompt("Ingrese el valor del lado 2"));
let lado3= Number(prompt("Ingrese el valor del lado 3"));
if(isNaN(lado1, lado2, lado3)){
    console.log("¡ERROR!");
}else if(lado1 !==lado2 && lado1 !==lado3 && lado2 !== lado3){
    console.log("El triangulo es ESCALENO");
}else if(lado1 == lado2 && lado1 == lado3 && lado1 !== lado2 || lado1 !== lado3 || lado2 !== lado3){
    console.log("El triangulo es ISÓSCELES" );
}else if(lado1 == lado2 && lado1 == lado3 && lado2 == lado3){
    console.log("El triangulo es EQUILATERO");
}