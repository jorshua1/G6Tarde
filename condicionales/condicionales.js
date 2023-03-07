let edad = Number(prompt("ingrese si edad"))

if(isNaN(edad)){


console.log("error")

}else if ( edad >=1 && edad >=18){
    console.log("es mayor de edad")

}else if (edad >=1 && edad < 18){
    console.log("es menor de edad")
}else{
    console.log("ingrese una edad valida")

}