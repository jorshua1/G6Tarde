/**Elabore un programa que calcule el salario a cancelar a un trabajador que se le paga por hora.
Considere que si se pasa de 40 horas, estas se cancelan al doble, y si las horas trabajadas superan
48, estas se cancelan al triple. Ejemplo: valor hora 10000 horas trabajadas 50; el valor a cancelar
es 400000+160000+60000=620000. */

let valorHora=Number(prompt("Ingrese el valor de pago por hora"));
let totalHoras=Number(prompt("Ingrese el total de horas trabajadas"));
let salario;

if (isNaN(valorHora)||isNaN(totalHoras)){
    alert("ERROR. Ingrese datos numéricos.")
}else if (totalHoras<40){
    salario=valorHora*totalHoras;
    alert("El salario pago por sus horas trabajadas fue de "+salario);
}else if (totalHoras>=40 &&totalHoras>48){
    let horasExtras=totalHoras-40;
    salario=((valorHora*40)+((valorHora*2)*horasExtras));
    alert("El salario pago por sus horas trabajadas fue de "+salario);
}else{
    let horasExtras=totalHoras-48;
    salario=((valorHora*40)+(valorHora*16)+((valorHora*3)*horasExtras));
    alert("El salario pago por sus horas trabajadas fue de "+salario);
}