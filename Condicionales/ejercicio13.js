/**Realice un programa que me indique en que estacion del año se encuentra, teniendo en cuenta el número del mes ingresado por consola*/

let mes= Number(prompt("Ingrese el numero del mes que desea saber la estacion"));

if (isNaN(mes) || mes >12 || mes<1){
    alert("Ingrese un dato valido");
}else if (mes <3){
    alert("Invierno");
}else if( mes >=3 && mes <7){
    alert("Primavera");
}else if (mes >=7 && mes <9){
    alert("Verano");
}else if( mes >=9 && mes<=12){
    alert("Otoño")
}