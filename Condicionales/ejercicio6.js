/**determinar el tipo de triangulo segun la medida de sus lados: escaleno, iscoceles o equilatero */

let lado1=Number(prompt("Ingrese lado 1"));
let lado2=Number(prompt("Ingrese lado 2"));
let lado3=Number(prompt("Ingrese lado 3"));

if (isNaN(lado1)||isNaN(lado2)||isNaN(lado3)||lado1<=0||lado2<=0||lado3<=0){
    alert("Ingrese un dato válido");
}else if(lado1===lado2 && lado2===lado3){
    alert("El triangulo es equilatero");
}else if (lado1===lado2 || lado1===lado3 || lado2===lado3){
    alert("El triangulo es isosceles");
}else{
    alert("El triangulo es escaleno");
}