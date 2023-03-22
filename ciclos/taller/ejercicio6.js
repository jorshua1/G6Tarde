let validacion=prompt("Desea calcular salario total del trabajador?");
while(validacion == "si"){
    let nombre=prompt("Ingrese nombre del trabajador")
    let salario=prompt("Ingrese salario de "+ nombre)
    let venta1=Number(prompt("Ingrese precio venta 1"))
    while(isNaN(venta1) || venta1<0){
        venta1=Number(prompt("Ingrese un valor valido"))
    }
    let venta2=Number(prompt("Ingrese precio venta 2"))
    while(isNaN(venta2) || venta2<0){
        venta2=Number(prompt("Ingrese un valor valido"))
    }
    let venta3=Number(prompt("Ingrese precio venta 3"))
    while(isNaN(venta3) || venta3<0){
        venta3=Number(prompt("Ingrese un valor valido"))
    }
    Extra=(venta1+venta2+venta3)*0.1
    SueldoTotal=salario + Extra
    alert("El sueldo de: " + nombre + "es: " + SueldoTotal)
    validacion=prompt("Desea calcular salario total del trabajador?");
}