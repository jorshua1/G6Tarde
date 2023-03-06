/*	crear un algoritmo que compruebe la estacion en la que se encuentra 
un mes,para saber si el mes esta en verano, otoño, primavera, invierno. */

let mes = parseInt(prompt("Ingrese un numero del 1-12 de acuardo al mes segun su poscicion en el calendario "))

if (isNaN(mes)){
    alert("Digite un valor valido")
}else if (mes == 1 || mes == 2 || mes == 3){
    alert("El mes que ingreso esta en invierno")
}else if (mes == 4 || mes == 5 || mes == 6){
    alert("El mes que ingreso esta en primavera")
}else if (mes == 7 || mes == 8 || mes == 9){
    alert("El mes que ingreso esta en verano")
}else if (mes == 10 || mes == 11 || mes == 12){
    alert("El mes que ingreso esta en otoño")
}