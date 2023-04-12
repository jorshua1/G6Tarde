let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
let CantidadDiasPorMes=[31,29,31,30,31,30,31,31,30,31,30,31]
let dato=Number(prompt("Ingrese numero del mes que desea ver el nombre y cantidad de dias"));
while (isNaN(dato) || dato<1 || dato >12){
    alert("Error, ingrese dato valido")
    dato=Number(prompt("Ingrese numero del mes que desea ver el nombre y cantidad de dias"));
}
alert(`Nombre del mes: ${meses[dato]}
Cantidad de dias de ${meses[dato]} es ${CantidadDiasPorMes[dato]}`)