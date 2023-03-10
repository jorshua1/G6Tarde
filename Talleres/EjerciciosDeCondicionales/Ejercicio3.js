/*determinar el tipo de triangulo segun la medida de sus lados: escaleno, iscoceles o equilatero*/

let triangulo;
let lado1 = Number(prompt("Ingrese la medida del lado 1"));
let lado2 = Number(prompt("Ingrese la medida del lado 2"));
let lado3 = Number(prompt("Ingrese la medida del lado 3"));

if (lado1 == lado2 && lado2 == lado3){
    alert("El triangulo es Equilatero");
}else if (lado1 == lado2 || lado3 == lado1 || lado2 == lado3){
    alert("El triangulo es Isoceles");
}else{
    alert("El triangulo es Escaleno")
}

