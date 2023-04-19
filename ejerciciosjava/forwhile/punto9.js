var promedioNiños = 0;
var promedioJóvenes = 0;
var promedioAdultos = 0;
var promedioViejos = 0;
//////////////////////////////////////////////////////////////////////////////////////////

var contaNiños = 0;
var contadorJovenes = 0;
var contadorAdultos = 0;
var contadorViejos = 0;

//////////////////////////////////////////////////////////////////////////////////////////

var pesoNiño = 0;
var pesoJoven = 0;
var pesoAdulto = 0;
var pesoViejo = 0;

//////////////////////////////////////////////////////////////////////////////////////////

for(contador = 1; contador <= 5; contador++){

var edad = Number(prompt("INGRESE SU EDAD"));

while(isNaN(edad) || edad <= 0){
    edad = Number(prompt("INGRESE UNA EDAD VALIDA"));
}

//////////////////////////////////////////////////////////////////////////////////////////

if( edad > 0 && edad <= 12){
    console.log("USTED ENTRA EN LA CATEGORIA DE LOS NIÑOS");
    var peso = Number(prompt("INGRESE SU PESO"));
while(isNaN(peso) || peso <= 0){
    peso = Number(prompt("INGRESE UN PESO VALIDO"));
}

    pesoNiño = peso + pesoNiño;
    contaNiños++;

}

//////////////////////////////////////////////////////////////////////////////////////////

else if( edad >= 13 && edad <= 29){
    console.log("USTED ENTRA EN LA CATEGORIA DE LOS JÓVENES");
    var peso = Number(prompt("INGRESE SU PESO"));
while(isNaN(peso) || peso <= 0){
    peso = Number(prompt("INGRESE UN PESO VALIDO"));
}

pesoJoven = peso + pesoJoven;
contadorJovenes++;

}

//////////////////////////////////////////////////////////////////////////////////////////

else if( edad >= 30 && edad <= 59){
    console.log("USTED ENTRA EN LA CATEGORIA DE LOS ADULTOS");
    var peso = Number(prompt("INGRESE SU PESO"));
while(isNaN(peso) || peso <= 0){
    peso = Number(prompt("INGRESE UN PESO VALIDO"));
}

pesoAdulto = peso +pesoAdulto;
contadorAdultos++;

}

//////////////////////////////////////////////////////////////////////////////////////////

else if( edad > 60){
    console.log("USTED ENTRA EN LA CATEGORIA DE LOS VIEJOS");
    var peso = Number(prompt("INGRESE SU PESO"));
while(isNaN(peso) || peso <= 0){
    peso = Number(prompt("INGRESE UN PESO VALIDO"));
}

pesoViejo = peso + pesoAdulto;
contadorViejos++;

}
}

promedioNiños = pesoNiño/contaNiños;
console.log(promedioNiños);

//////////////////////////////////////////////////////////////////////////////////////////

promedioJóvenes = pesoJoven/contadorJovenes;
console.log(promedioJóvenes);

//////////////////////////////////////////////////////////////////////////////////////////

promedioAdultos = pesoAdulto/contadorAdultos;
console.log(promedioAdultos);

//////////////////////////////////////////////////////////////////////////////////////////

promedioViejos = pesoViejo/contadorViejos;
console.log(promedioViejos);
