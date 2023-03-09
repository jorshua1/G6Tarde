let año = Number(prompt("Ingrese un año"));

if (isNaN(año)|| año <=0){
    console.log("Ingrese un dato valido");
}else if (año %100 ===0 && año %400===0){
    console.log("El año es bisiesto")
}else if(año%4===0){
    console.log("El año es bisiesto");
}else{
    console.log("El año no es bisiesto");
}