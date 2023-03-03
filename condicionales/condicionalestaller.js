let edad = Number(prompt("ingrese su edad"));
if(isNaN(edad)){
    console.log("error")
}else if(edad>=1 && edad>=18){
    console.log("es mayor de edad");
}else if(edad>=1 && edad>=17){
    console.log("es menor de edad")
}else{
    console.log("ingrese una edad valida");
}

let edad1 = Number(prompt("ingrese su edad"));
if(isNaN(edad1) || edad1<0){
    console.log("ingrese un valor valido")
}else if(edad1>=0 && edad1>=18){
    console.log("es mayor de edad");
}else{
    console.log("es menor de edad")
}

let numero = Number(prompt("ingrese un numero"));
if(isNaN(numero)||numero<0){
    console.log("error")
}else if(numero%2==0){
    console.log(numero + "es par")
}else{
    console.log("es impar")
}

//pedir dos numero y decir si son multiplos o no
let numero1 = Number(prompt("ingrese el primer numero"));
let numero2 = Number(prompt("ingrese el segundo numero"));
if(isNaN(numero1) || isNaN(numero2)){
    console.log("error");
}else if(numero1%numero2==0 || numero2%numero1==0){
    console.log("son multiplos");
}else{
    console.log("no son multiplos");
}


let numero1 = Number(prompt("ingrese el primer numero"));
let numero2 = Number(prompt("ingrese el segundo numero"));

if(numero1%numero2==0 || numero2%numero1==0){
    console.log("son multiplos");
}else{
    console.log("no son multiplos");
}

/*pedi al usuario el diametro de una rueda y su grosor en mt
y atraves de condicionales realice las siguientes operaciones
- si el diametro es superior a 1.4 debe mostrar "la rueda es paraun vehiculo grande"
- si <=1.4 y >0.8 debe mostrar "la rueda es para un vehiculo medio"
- si no se cumple ninguna condicion debe mostrar "la rueda es para un vehiculo pequeño"
*/
let diametro = Number(prompt("ingrese el diametro"));
if(isNaN(diametro) || diametro<0){
    console.log("error")
}else if(diametro>1.4){
    console.log("la rueda es para un vehiculo grande")
}else if(diametro<=1.4 && diametro>0.8){
    console.log("la rueda es para un vehiculo medio")
}else{
    console.log("la rueda es para un vehiculo pequeño")
}
