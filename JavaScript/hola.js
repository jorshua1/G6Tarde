console.log("Hola mundo");
console.log("Hola mundo");

//Condicionales 

if (condicion){
    //codigo a ejecutar si es verdadera la
    condicion

}else{
    //codigo a ejecuta si es falsa la
    condicion
}

//et edad = Number(prompt("Ingrese la edad"));

if( edad>= 18){
    console.log("es mayor de edad");
}else{
    console.log("es menor de edad");
}
/////////////////////////////////////////////////////////////////////////////
if(edad>0 && edad<=18){
    console.log("es mayor de edad");

}else if(edad<=0){
    console.log("error, ingrese un valor valido");
}else{
    console.log("es menor de edad");
}


/*let edad = Number(prompt("Ingrese la edad"));
if(isNaN(edad)){
    console.log("Error");
}else if(edad>=1 && edad >= 18){
    console.log ("es mayor de edad");
}else if(edad>=1 && edad >=17){
    console.log("Es menor de edad")
}else{
    console.log("ingrese una edad valida")
}*/

let n = Number(prompt("Ingrese un numero"));
if(n % 2 == 0){
    alert(n + " es par")
}else{
    alert(n + " es impar")
}