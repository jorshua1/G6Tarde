/*Crear un programa que me identifique a cual categoría de natación pertenece una persona según su estatura, 
teniendo en cuenta que para las mujeres estaría representado de la siguiente manera: 
Hasta 1m de altura pertenece a la categoría Junior, 
luego hasta 1,60m su categoría es Media y mas de 1.60 pertenece a Adultos. 
Para los hombres esta representada de la siguiente manera: Hasta 1,2m de altura pertenece a la categoría Junior, 
luego hasta 1,70m su categoría es Media y mas de 1.70m pertenece a Adultos.*/

let sexo = (prompt("Ingrese su sexo"));
let altura = Number(prompt("Ingrese su altura"));
if(isNaN(altura)){
    console.log("¡ERROR!");
}else if(sexo === "mujer" && altura <= 1){
    console.log("Pertenece a la categoria junior");
}else if(sexo === "mujer" && altura > 1 && altura <= 1.60){
    console.log("Pertence a la categoria mediana");
}else if(sexo === "mujer" && altura > 1.60){
    console.log("Pertenece a la categoria de los adultos");
}else if(sexo === "hombre" && altura <= 1.2){
    console.log("Pertenece a la categoria junior");
}else if(sexo === "hombre" && altura > 1.2 && altura <= 1.70){
    console.log("Pertence a la categoria mediana");
}else if(sexo === "hombre" && altura > 1.70){
    console.log("Pertenece a la categoria de los adultos");
}