//par o impar

let numero = Number(prompt("Ingrese un número"));

if (isNaN(numero)){
    console.log("ERROR, el dato ingresado no es número");
}else if(numero%2 === 1){
    console.log(numero + " es un número impar");
}else{
    console.log(numero + " es un número par");
}