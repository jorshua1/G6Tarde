/*Condicional para saber si es mayor de edad o no  */
let edad = Number(prompt("Ingrese su edad "))

if( isNaN(edad) || edad<0){
        console.log("Erro ingrese una edad valida")
    }else if (edad >= 18){
        console.log("Es mayor de edad")
    }else {
    console.log("Es menor de edad")
}

if(isNaN(edad)){
    console.log("Error ") 
}else if (edad >=1 && edad >=18) {
    console.log("Es mayor de edad ")
}else if (edad >= 1 && edad <= 17){
    console.log("Es menor de edad")
}else {
    console.log("Ingrese una edad valida ")
}
/*Codigo que determina si un numero es par o impar */
let numero = Number(prompt("Ingrese un numero"));

if (isNaN(numero)){
    alert("Ingrese un numero valido");
}else if (numero % 2==0){
    alert("el numero es par");
}else
    alert("El numero es impar");