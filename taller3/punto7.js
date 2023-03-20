let vendedor = prompt("Ingrese nombre del vendedor");

let salarioBase = 950000;
let autosVendidos = Number(prompt("¿Cuántos autos vendió el trabajador?"));
let valorAuto = 0;
let contadorAutos = 1
let comisionesVentas = 0;
let comisionTotal = 0;

while((isNaN(autosVendidos))||(autosVendidos<0)||(!Number.isInteger(autosVendidos))){
    autosVendidos = Number(prompt("Por favor, ingrese una cantidad de autos vendidos válida"));
}
for(autosVendidos;autosVendidos>0;autosVendidos--){
    valorAuto = Number(prompt("Ingrese el valor de la venta realizada. (Auto " + contadorAutos + ")."));
    while((isNaN(valorAuto))||(valorAuto<=0)){
        valorAuto = Number(prompt("Ingrese un valor de venta válido. (Auto " + contadorAutos + ")."));
    }
    comisionesVentas = 170000 + (valorAuto*0.05);
    comisionTotal = comisionTotal + comisionesVentas;
    contadorAutos++;
}
contadorAutos--
if(contadorAutos===0){
    alert("El salario mensual del vendedor(a) " + vendedor + " será de " + (salarioBase+comisionTotal) + "$.\nParece ser que no vendiste ningún auto, " + vendedor + ", sigue así y serás despedido :)");
}else{
    alert("El salario mensual del vendedor(a) " + vendedor + " será de " + (salarioBase+comisionTotal) + "$. \n" + vendedor + ", vendiste " + contadorAutos + " autos, buen trabajo, sigue así para aumentar tu salario.");
}


