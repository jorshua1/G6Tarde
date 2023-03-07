//Año bisiesto

let año = Number(prompt("Escriba un año"));

if(isNaN(año)){
    console.log("Ingrese un año");
}else if((año%4 == 0) && ((año%100 != 0) || (año%400 == 0))){
    console.log("El año es bisiesto");
}else{
    console.log("El año no es bisiesto");
}
