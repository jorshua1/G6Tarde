let repetir = 0;
let contadorVendedores = 0;
let vendedor = "";
let sueldoBase = 0;
let venta1 = 0;
let venta2 = 0;
let venta3 = 0;
let comision = 0;
let pagoTotal = 0;

do{
    vendedor = prompt("Ingrese nombre del vendedor.");
    sueldoBase = Number(prompt("Ingrese el sueldo base semanal del trabajador"));
    while((isNaN(sueldoBase))||(sueldoBase<=0)){
        sueldoBase = Number(prompt("Por favor, ingrese un sueldo base válido"));
    }
    venta1 = Number(prompt("Ingrese el valor de la primera venta realizada por el trabajador en la semana"));
    while((isNaN(venta1))||(venta1<=0)){
        venta1 = Number(prompt("Por favor, ingrese un valor de venta válido"));
    }
    venta2 = Number(prompt("Ingrese el valor de la segunda venta realizada por el trabajador en la semana"));
    while((isNaN(venta2))||(venta2<=0)){
        venta2 = Number(prompt("Por favor, ingrese un valor de venta válido"));
    }
    venta3 = Number(prompt("Ingrese el valor de la tercera venta realizada por el trabajador en la semana"));
    while((isNaN(venta3))||(venta3<=0)){
        venta3 = Number(prompt("Por favor, ingrese un valor de venta válido"));
    }
    comision = (venta1+venta2+venta3)*0.1;
    pagoTotal = sueldoBase+comision;
    alert("Vendedor: " + vendedor + "\n\nEl pago por concepto de comisiones será de: " + comision + "$\nEl pago total semanal para este trabajador será de: " + pagoTotal + "$");
    contadorVendedores++;
    repetir = Number(prompt("¿Desea calcular el pago de otro trabajador?\nEscriba 1 para calcular otro.\nEscriba 2 para cerrar el programa."));
    while((repetir!=1)&&(repetir!=2)){
        repetir = Number(prompt("Por favor, seleccione una opción válida.\nEscriba 1 para calcular otro.\nEscriba 2 para cerrar el programa."))
    }
}while(repetir===1);
alert("Se calculó el pago semanal de " + contadorVendedores + " vendedor(es).");
