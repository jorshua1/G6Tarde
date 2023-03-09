let numero1=Number(prompt("Ingrese un numero"));
let numero2= Number(prompt("Ingrese un segundo numero"))
if (isNaN(numero1)||isNaN(numero2)){
    alert("Ingrese un numero valido");
}else if (numero1>numero2){
    alert(numero2+","+numero1);
}else{
    alert(numero1+","+numero2);
}