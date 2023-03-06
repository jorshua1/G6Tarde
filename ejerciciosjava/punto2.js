//Año bisiesto

let año = parseInt(prompt("Ingrese el año"));
if (año % 4==0 && año % 400==0 && año % 100!==0){
    console.log("El año es bisiesto");
}else if(año % 100==0 && año % 400 !==0){
    console.log("El año no es bisiesto");
}