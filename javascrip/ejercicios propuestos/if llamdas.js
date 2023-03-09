let duracion=Number(prompt("ingrese la duracion de la llamada"));



if (duracion<=3){
    console.log("su llamada cuesta 200");

}else if (duracion>=4){
    console.log(((duracion*100)-300)+200);
}