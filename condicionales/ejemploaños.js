let año = parseInt(prompt("ingrese el año"))
if (isNaN(año)) {
    alert("Error")
}else if ((año%4==0) && (año%100==0) && (año%400==0)){
    alert("el año es bisiesto")
}else if (año%100==0 && año%400===0){
    alert("el año no es bisiesto")
}
