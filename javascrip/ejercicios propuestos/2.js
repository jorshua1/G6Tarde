/*crear un algoritmo que compruebe la estacion en la que se encuentra un mes, para saber si el mes esta en verano, otoño, primavera, invierno.*/

let mes= Number(prompt("ingrese el numero del mes "));


if(mes=12 || mes<=2){
    console.log("La temporada es invierno ");

}else if(mes>=3 || mes<=5){
    console.log("La temporada es primavera");

}else if(mes>=6 || mes<=8){
    console.log("La temporada es verano");

}else if(mes>=9 || mes<=11){
    console.log("La temporada es otoño");
}