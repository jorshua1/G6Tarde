//let numero = parseInt(prompt("Ingrese un numero "));

if(!isNaN(numero)){
    while(multiplicador<=10){
        resultado = multiplicador * numero;
        tabla += ("\n"+multiplicador+" x "+numero+" = "+resultado); 
        multiplicador++
    }
    alert(tabla);
}else{
    alert("ingrese un valor valido");
}
//----------------------------------------------------------------------
let numero = parseInt(prompt("Ingrese un numero "));
let multiplicador = 1;
let resultado = 0;
let tabla;

while (isNaN(numero) || numero <= 0){
     numero = parseInt(prompt("Ingrese un numero valido"));  
}
for (multiplicador; multiplicador <= 10; multiplicador++){
    resultado = multiplicador * numero;
    tabla = ("\n"+numero+" x "+multiplicador+" = "+resultado); 
    console.log(tabla);
}
