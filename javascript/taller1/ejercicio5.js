nota1=parseInt(prompt("ingrese la primera nota: "));
nota2=parseInt(prompt("ingrese la segunda nota: "));
nota3=parseInt(prompt("ingrese la tercera nota: "));
nota4=parseInt(prompt("ingrese la cuarta nota: "));

nota40=(nota1+nota2)*(40/100)
nota60=(nota3+nota4)*(60/100)
promedio= (nota40+nota60)/2

console.log("el promedio de las notas es: " +promedio);