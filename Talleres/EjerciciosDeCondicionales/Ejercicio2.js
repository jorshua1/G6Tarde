/*crear un algoritmo que compruebe la estacion en la que se encuentra un mes, 
para saber si el mes esta en verano, otoño, primavera, invierno.*/

let mes = Number(prompt("ingrese el numero del mes"));

if (isNaN(mes)){
    alert("error, ingrese el numero del mes");
}else if (mes >=1 && mes <3){
    alert ("estas en invierno")
}else if (mes >=4 && mes <7){
    alert("estas en primavera")
}else if (mes >=7 && mes <9){
    alert("estas en verano")
}else if (mes >=9 && mes <12){
    alert("estas en otoño")
}