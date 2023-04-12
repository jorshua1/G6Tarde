let diasMeses = [31,28,31,30,31,30,31,31,30,31,30,31];
let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
let seleccionMes = 0;

do{
    seleccionMes = Number(prompt(`Seleccione un mes con su respectivo número (Escriba 0 para salir).
    1. Enero.
    2. Febrero.
    3. Marzo.
    4.Abril.
    5.Mayo. 
    6.Junio.
    7.Julio.
    8.Agosto.
    9.Septiembre.
    10.Octubre.
    11.Noviembre.
    12.Diciembre.`));
    while((isNaN(seleccionMes))||(!Number.isInteger(seleccionMes))||(seleccionMes<0)||(seleccionMes>12)){
        alert("Ingrese una opción válida.");
        seleccionMes = Number(prompt(`Seleccione un mes con su respectivo número (Escriba 0 para salir).
        1. Enero.
        2. Febrero.
        3. Marzo.
        4.Abril.
        5.Mayo. $
        6.Junio.
        7.Julio.
        8.Agosto.
        9.Septiembre.
        10.Octubre.
        11.Noviembre.
        12.Diciembre.`));
    }
    if(seleccionMes>0){
        alert(`El mes seleccionado es ${meses[seleccionMes-1]}. Tiene ${diasMeses[seleccionMes-1]} días.`);
    }else{
        alert("Cerrando programa.");
    }
}while(seleccionMes!==0);

