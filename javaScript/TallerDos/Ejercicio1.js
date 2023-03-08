let numero1 = parseFloat(prompt("Ingrese el primer numero"));
let numero2 = parseFloat(prompt("Ingrese el segundo numero"));

if (isNaN(numero1) || isNaN(numero2)){
    alert("Ingrese datos validos ");
}else if (numero1 < numero2){
    alert(numero1 + " " + numero2);
}else{
    alert(numero2 + " " + numero1);
}