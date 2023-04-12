let numeroMes = new Array();

numeroMes[i] = Number(prompt(`Ingrese el numero del mes que quiere investigar`))
while (isNaN(numeroMes[i]) || (numeroMes[i]) < 0) {
    alert("Por favor, ingrese un valor valido");
    numeroMes[i] = Number(prompt(`Ingrese el numero del mes que quiere investigar`))
}
switch (numeroMes[i]) {
    case 1:
        alert(`El numero que ingreso fue: ${(numeroMes[i])} y el la cantidad de dias que tiene Enero son 31 dias`);
        break;
    case 2:
        alert(`El numero que ingreso fue: ${(numeroMes[i])} y el la cantidad de dias que tiene Febrero son 28 dias`);
        break;
    case 3:
        alert(`El numero que ingreso fue: ${(numeroMes[i])} y el la cantidad de dias que tiene Marzo son 31 dias`);
        break;
    case 4:
        alert(`El numero que ingreso fue: ${(numeroMes[i])} y el la cantidad de dias que tiene Abril son 30 dias`);
        break;
    case 5:
        alert(`El numero que ingreso fue: ${(numeroMes[i])} y el la cantidad de dias que tiene Mayo son 31 dias`);
        break;
    case 6:
        alert(`El numero que ingreso fue: ${(numeroMes[i])} y el la cantidad de dias que tiene Junio son 30 dias`);
        break;
    case 7:
        alert(`El numero que ingreso fue: ${(numeroMes[i])} y el la cantidad de dias que tiene Julio son 31 dias`);
        break;
    case 8:
        alert(`El numero que ingreso fue: ${(numeroMes[i])} y el la cantidad de dias que tiene Agosto son 31 dias`);
        break;
    case 9:
        alert(`El numero que ingreso fue: ${(numeroMes[i])} y el la cantidad de dias que tiene Septiembre son 30 dias`);
        break;
    case 10:
        alert(`El numero que ingreso fue: ${(numeroMes[i])} y el la cantidad de dias que tiene Octubre son 31 dias`);
        break;
    case 11:
        alert(`El numero que ingreso fue: ${(numeroMes[i])} y el la cantidad de dias que tiene Noviembre son 30 dias`);
        break;
    case 12:
        alert(`El numero que ingreso fue: ${(numeroMes[i])} y el la cantidad de dias que tiene Diciembre son 31 dias`);
        break;
}