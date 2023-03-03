let edad = Number(prompt("Ingrese su edad en años"));
if(isNaN(edad)|| edad<=0){
   console.log("El dato que ingreso es invalido, intente nuevamente")
}
else if(edad>0 && edad<=18){
    console.log("Es menor de edad")
}
else{
    console.log("Es mayor de edad")
}

// Ejercicio 2

let num = Number(prompt("Ingrese un numero"));
if(isNaN(num)){
   console.log("El dato que ingreso es invalido, intente nuevamente")
}
else if(num%2==0){
    console.log("Es par")
}
else{
    console.log("Es impar")
}

// Ejercicio 3 - Propuesta de clase


let estatura = parseFloat(prompt("Ingrese su estatura en metros"));
let genero = parseFloat(prompt("Ingrese 1 si la participante es mujer y 2 si es hombre"));
if(isNaN(estatura)||estatura<=0){
   console.log("El dato que ingreso es invalido, intente nuevamente(DEBE AGREGAR NUMEROS)")
}else if(genero == 1){
    if(estatura>0 && estatura<=1.0){
        console.log("La categoria es para este participarte es FEMENINO JUNIOR")
    }
    else if(estatura>1.0 && estatura<=1.60){
        console.log("La categoria es para este participarte es FEMENINO MEDIA")
    }
    else{
        console.log("La categoria es para este participarte es FEMENINO ADULTOS")
    }
}else if(genero == 2){
    if(estatura>0 && estatura<=1.20){
        console.log("La categoria es para este participarte es MASCULINO JUNIOR")
    }
    else if(estatura>1.20 && estatura<=1.70){
        console.log("La categoria es para este participarte es FEMENINO MEDIA")
    }
    else{
        console.log("La categoria es para este participarte es MASCULINO ADULTOS")
    }
}