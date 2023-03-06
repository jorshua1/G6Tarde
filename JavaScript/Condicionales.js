let edad = Number(prompt("Ingrese su edad"));
if(isNaN(edad)){
    console.log ("error")
}else if (edad >=18){
    console.log ("Es mayor de edad");
}else if (edad >= 1 && edad <=17){
console.log ("Es menor de edad");
} else{
    console.log ("Ingrese una edad valida");
}


//
let num = Number(prompt("Ingrese un número"));
if(isNaN(num)){
    console.log ("error")
}else if (num %2){
    console.log ("Es impar")

}else{ 
    console.log ("Es par")
}
 // 
 let diametro = Number(prompt("digite el diametro de la rueda"));
 if (isNaN(diametro)|| (diametro <=0)){
    console.log ("ingrese un valor valido")
 }else if (diametro > 1.4 ){
    console.log ("la rueda es para un vehiculo grade")
 }else if (diametro > 0.8 && diametro <= 1.4){
    console.log ("la rueda es para un vehiculo mediano")
 }else {
    console.log ("la rueda es para un vehiculo pequeño")
 }
 //
 let calculadora = Number(prompt())