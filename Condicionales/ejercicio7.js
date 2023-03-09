let altura=Number(prompt("Ingrese su altura en metros"));
let peso=Number(prompt("Ingrese su peso en Kg"))

let IMC;
IMC= peso/(altura**2);

if (isNaN(altura)||isNaN(peso)|| altura<1 || peso< 1){
    alert("Error");
}else if (IMC <18.5){
    alert("Usted esta muy flac@")
}else if (IMC<24.9){
    alert("Usted esta normal");
}else{
    alert("Usted esta en sobrepeso");
}