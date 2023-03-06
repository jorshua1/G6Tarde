//Crear un programa que me identifique a cual categoría de natación pertenece una persona según su estatura, teniendo en cuenta que para las mujeres estaría representado de la siguiente manera: Hasta 1m de altura pertenece a la categoría Junior, luego hasta 1,60m su categoría es Media y mas de 1.60 pertenece a Adultos. Para los hombres esta representada de la siguiente manera: Hasta 1,2m de altura pertenece a la categoría Junior, luego hasta 1,70m su categoría es Media y mas de 1.70m pertenece a Adultos. Para los hombres esta representada de la siguiente manera.
 let genero= prompt("Ingrese genero (H o M)")
 let estatura= parseFloat(prompt("Ingrese altura (metros)"));
if (genero=="H"){
    if (estatura < 1){
        alert("su categoria es Junior")
    }else if(estatura>=1 && estatura<=1,60){
        alert("su categoria es Media")
    }else if(estatura>1,60){
        alert("su categoria es Adultos")
    }
}
if (genero=="M"){
    if (estatura <= 1,2){
        alert("su categoria es Junior")
    }else if(estatura>1,2 && estatura<=1,70){
        alert("su categoria es Media")
    }else if(estatura>1,70){
        alert("su categoria es Adultos")
    }
}