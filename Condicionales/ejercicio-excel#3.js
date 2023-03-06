let lado1 = Number(prompt("Ingrese el valor del lado 1 del triangulo"));
let lado2 = Number(prompt("Ingrese el valor del lado 2 del triangulo"));
let lado3 = Number(prompt("Ingrese el valor del lado 3 del triangulo"));

if((isNaN(lado1))||(isNaN(lado2))||(isNaN(lado3))){
    alert("Alguno de los datos solicitados no es un numero");
}else if((lado1==lado2)&&(lado2==lado3)&&(lado3==lado1)){
    alert("El triangulo es Equilatero");
}else if((lado1!=lado2)&&(lado2!=lado3)&&(lado3!=lado1)){
    alert("El triangulo es Escaleno");
}else{
    alert("El triangulo es Isosceles");
}