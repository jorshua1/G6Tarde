//ejercicio 3 Nicolas Ruiz triangulos equilatero, isoceles, escalenos
let a=Number(prompt("Ingrese longitud 1 (lado mayor)"));
let b=Number(prompt("Ingrese longitud 2"));
let c=Number(prompt("Ingrese longitud 3"));
if(a>=b && a>=c){
    alert("Si es un triangulo")
    if (a==b && a==c){
        alert("Es un triangulo equilatero")
    }else if(a==b || a==c){
        alert("Es un triangulo isoceles")
    }else{
        alert("Es un triangulo escaleno")
    }
}else {
    alert("No es un triangulo")
}