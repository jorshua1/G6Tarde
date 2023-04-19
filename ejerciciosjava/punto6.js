/*crear un algoritmo que compruebe la estacion en la que se encuentra un mes,
para saber si el mes esta en verano,otoño,primavera,invierno.*/
let periodoaño = parseInt(prompt("Ingrese el numero del mes"));
if(isNaN(periodoaño)){
    console.log("¡ERROR!");
}else if(periodoaño>=3 && periodoaño<=6){
    console.log("Estamos en Primavera");
}else if(periodoaño>6 && periodoaño<=9){
    console.log("Estamos en Verano");
}else if(periodoaño>9 && periodoaño<=12){
    console.log("Estamos en Otoño");
}else if(periodoaño<3){
    console.log("Estamos en Invierno");
}else{
    console.log("Ponga eso bien");
}