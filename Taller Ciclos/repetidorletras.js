var letras = (prompt("Ingrese la letra a repetir"));
contador=0;
cadena="";
var cantidad = Number(prompt("Ingrese la cantidad de veces a repetir a repetir"));
while (cantidad < 0 || isNaN(cantidad)) {
    alert("Debe ingresar la cantidad de letras a repetir en numeros");
    cantidad = Number(prompt("Ingrese la cantidad de veces a repetir a repetir"));
}for(contador=0;contador<cantidad;contador++){
cadena+=letras
}
alert(cadena);
