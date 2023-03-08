/*Elabore un programa que calcule el salario a cancelar a un trabajador que se le paga por hora.
Considere que si se pasa de 40 horas, estas se cancelan al doble, y si las horas trabajadas superan
48, estas se cancelan al triple. Ejemplo: valor hora 10000 horas trabajadas 50; el valor a cancelar
es 400000+160000+60000=620000. */

let hora = parseInt(prompt("Ingrese la cantidad de horas trabajadas esta semana "));
let precioHora = parseInt(prompt("Ingrese el precio por hora "));
let saldo = 0;
if (isNaN(hora) || hora<0 || precioHora <0){
    alert("Ingrese datos validos para continuar con el proceso")
}else if (hora < 40 ){
    saldo = precioHora * hora;
    alert("El sueldo total a cobrar es de: " + saldo)
}else if (hora >= 40 && hora <= 48){
    precioHora = precioHora * 2;
    saldo = precioHora * hora;
    alert("El sueldo total a cobrar es de: " + saldo)
}else if (hora > 48){
    precioHora = precioHora * 3;
    saldo = precioHora * hora;
    alert("El sueldo total a cobrar es de: " + saldo)
}
