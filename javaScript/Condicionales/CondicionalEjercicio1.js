/*Programa que determine el tipo de triangulo: escaleno, iscoceles o equlatero segun sus lados */
let a=parseFloat(prompt('Introduzca lado 1'));
let b=parseFloat(prompt('Introduzca lado 2'));
let c=parseFloat(prompt('Introduzca lado 3'));

if(isNaN(a , b ,c)){
    alert("Ingrese valores valido")
    } else if(a==b || b==c || a==c) {
        alert(' El triangulo es isosceles ');      
    } else if(a==b && b==c) {
        alert(' El triangulo es equilatero ');
}else { 
    alert(' El triangulo es escaleno ');
}