/*
Elabore un programa que calcule el salario a cancelar a un trabajador que se le paga por hora.
Considere que:
si se pasa de 40 horas, estas se cancelan al doble,
si las horas trabajadas superan 48, estas se cancelan al triple.

Ejemplo: 
valor hora 10000 
horas trabajadas 50
el valor a cancelar es 400000+160000+60000=620000.
*/
let horasTrabajadas = 41;
let valorHora = 5000;
let pagoNomina = 0;

if (horasTrabajadas > 0 && horasTrabajadas <=40) {
    pagoNomina = (horasTrabajadas * valorHora);

} else if(horasTrabajadas >40  && horasTrabajadas <=48){
    pagoNomina = (horasTrabajadas * valorHora) * 2;
    
}else {
    pagoNomina = (horasTrabajadas * valorHora) * 3;

}
console.log(`
Su liquidacion de nomina es:
${horasTrabajadas} Trabajadas
Su pago es :$${pagoNomina}`)