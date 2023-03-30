let vendedores = parseInt(prompt("Ingrese la cantidad de vendedores para hacer el calculo de comisiones por ventas"));
let sueldoBase = parseFloat(prompt("Ingrese el valor del sueldo base "));
let venta = 0;
let comision = 0;
let pagoTotal = 0;
while(isNaN(sueldoBase) || sueldoBase <=0){
    sueldoBase = parseFloat(prompt("Porfavor ingrese datos validos  "));
}
for (i = 1; i <= vendedores; i++){
    let nombre = prompt("Ingrese el nombre del vendedor Nº"+i);
    for (j = 1; j <= 3; j++){
        venta = parseFloat(prompt("Ingrese el valor de la venta Nº"+j+" del vendedor "+nombre+" en la semana"));
        comision += venta;
    }
    comision = comision * 0.1;
    pagoTotal = sueldoBase + comision;
    alert("El vendedor "+nombre+" tuvo una comision de: "+comision+" y un sueldo total por las tres ventas de: "+pagoTotal);
}