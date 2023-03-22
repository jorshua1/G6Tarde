/* diseñar un algoritmo con diagrama de flujo de datos y pseudocodigo que permita registrar
un inventario de celulares de las siguientes marcas: samsung, iphone, xiaomi, motorola,
huawei, OPPO. El algoritmo debe permitir descontar del inventario los equipos vendidos
segun su marca y actualizar la cantidad de telefonos disponibles, ademas debe calcular el 
total de dinero recaudado por las ventas. */
let empezar = prompt("quieres registrar inventario, revisar ventas y equipos? escribe si o no")
let totaldecelulares = 0;
let contadorsamsung = 0;
let contadoriphone = 0;
let contadorxiaomi = 0;
let contadormotorola = 0;
let contadorhuawei = 0;
let contadoroppo = 0;
if(empezar == "no" || empezar == "No" || empezar == "NO"){
    alert("sistema cerrado")
}else if(empezar == "si" || empezar == "Si" || empezar == "SI"){

    alert("bienvenido acontinuacion digite el numero de la marca segun su interes 1.samsung 2.iphone 3.xiaomi 4.motorola 5.huawei 6.oppo")

let marca = parseInt(prompt("ingrese el numero segun la marca (1,2,3,4,5,6)"));
switch(marca){
    case 1:
        alert("por favor digite el numero segun el proceso que necesita realizar" + "\n 1.registro de ventas" + "\n 2.registrar inventario" + "\n 3.volver ")
        let proceso1 = parseInt(prompt("digite el numero de la accion que quiere realizar (1,2,3)"))
        while(isNaN(proceso1) || proceso1<0){
            proceso1 = parseInt(prompt("digite el numero de la accion que quiere realizar (1,2,3)"))
        }if(proceso1 == 1){ 
        let ventassamsung = parseInt(prompt("ingrese la cantidad de celulares de marca samsung"));
        let preciosamsung = parseInt(prompt("ingrese el precio del celular samsung por unidad"))
        while(isNaN(ventassamsung) || ventassamsung<0 || isNaN(preciosamsung) || preciosamsung<0 ){
            cantidadsamsung = parseInt(prompt("ingrese la cantidad de celulares de marca samsung"))
            preciosamsung = parseInt(prompt("ingrese el precio del celular samsung por unidad"))
        }  }
        break;
    case 2:
        alert("por favor digite el numero segun el proceso que necesita realizar" + "\n 1.registro de ventas" + "\n 2.registrar inventario" + "\n 3.volver ")
        let proceso2 = parseInt(prompt("digite el numero de la accion que quiere realizar (1,2,3)"))
        while(isNaN(proceso2) || proceso2<0){
            proceso2 = parseInt(prompt("digite el numero de la accion que quiere realizar (1,2,3)"))
        }
        let cantidadiphone = parseInt(prompt("ingrese la cantidad de celulares de marca iphone"))
        let precioiphone = parseInt(prompt("ingrese el precio del celular iphone por unidad"))
        while(isNaN(cantidadiphone) || cantidadiphone<0 || isNaN(precioiphone) || precioiphone<0 ){
            cantidadiphone = parseInt(prompt("ingrese la cantidad de celulares de marca iphone"))
            precioiphone = parseInt(prompt("ingrese el precio del celular iphone por unidad"))
        }
        break;
    case 3:
        alert("por favor digite el numero segun el proceso que necesita realizar" + "\n 1.registro de ventas" + "\n 2.registrar inventario" + "\n 3.volver ")
        let proceso3 = parseInt(prompt("digite el numero de la accion que quiere realizar (1,2,3)"))
        while(isNaN(proceso3) || proceso3<0){
            proceso3 = parseInt(prompt("digite el numero de la accion que quiere realizar (1,2,3)"))
        }
        let cantidadxiaomi = parseInt(prompt("ingrese la cantidad de celulares de marca xiaomi"))
        let precioxiaomi = parseInt(prompt("ingrese el precio del celular xiaomi por unidad"))
        while(isNaN(cantidadxiaomi) || cantidadxiaomi<0 || isNaN(precioxiaomi) || precioxiaomi<0){
            cantidadxiaomi = parseInt(prompt("ingrese la cantidad de celulares de marca xiaomi"))
            precioxiaomi = parseInt(prompt("ingrese el precio del celular xiaomi por unidad"))
        }
        break;
    case 4:
        alert("por favor digite el numero segun el proceso que necesita realizar" + "\n 1.registro de ventas" + "\n 2.registrar inventario" + "\n 3.volver ")
        let proceso4 = parseInt(prompt("digite el numero de la accion que quiere realizar (1,2,3)"))
        while(isNaN(proceso4) || proceso4<0){
            proceso4 = parseInt(prompt("digite el numero de la accion que quiere realizar (1,2,3)"))
        }
        let cantidadmotorola = parseInt(prompt("ingrese la cantidad de celulares de marca motorola"))
        let preciomotorola = parseInt(prompt("ingrese el precio del celular motorola por unidad"))
        while(isNaN(cantidadmotorola) || cantidadmotorola<0 || isNaN(preciomotorola) || preciomotorola<0){
            cantidadmotorola = parseInt(prompt("ingrese la cantidad de celulares de marca motorola"))
            preciomotorola = parseInt(prompt("ingrese el precio del celular motorola por unidad"))
        }
        break;
    case 5:
        alert("por favor digite el numero segun el proceso que necesita realizar" + "\n 1.registro de ventas" + "\n 2.registrar inventario" + "\n 3.volver ")
        let proceso5 = parseInt(prompt("digite el numero de la accion que quiere realizar (1,2,3)"))
        while(isNaN(proceso5) || proceso5<0){
            proceso5 = parseInt(prompt("digite el numero de la accion que quiere realizar (1,2,3)"))
        }
        let cantidadhuawei = parseInt(prompt("ingrese la cantidad de celulares de marca huawei"))
        let preciohuawei = parseInt(prompt("ingrese el precio del celular huawei por unidad"))
        while(isNaN(cantidadhuawei) || cantidadhuawei<0 || isNaN(preciohuawei) || preciohuawei<0){
            cantidadhuawei = parseInt(prompt("ingrese la cantidad de celulares de marca huawei"))
            preciohuawei = parseInt(prompt("ingrese el precio del celular huawei por unidad"))
        }
        break;
    case 6:
        alert("por favor digite el numero segun el proceso que necesita realizar" + "\n 1.registro de ventas" + "\n 2.registrar inventario" + "\n 3.volver ")
        let proceso6 = parseInt(prompt("digite el numero de la accion que quiere realizar (1,2,3)"))
        while(isNaN(proceso6) || proceso6<0){
            proceso6 = parseInt(prompt("digite el numero de la accion que quiere realizar (1,2,3)"))
        }
        
        let cantidadoppo = parseInt(prompt("ingrese la cantidad de celulares de marca oppo"));
        let preciooppo = parseInt(prompt("ingrese el precio del celular oppo por unidad"))
        while(isNaN(cantidadoppo) || cantidadoppo<0 || isNaN(preciooppo) || preciooppo<0){
            cantidadoppo = parseInt(prompt("ingrese la cantidad de celulares de marca oppo"))
            preciooppo = parseInt(prompt("ingrese el precio del celular oppo por unidad"))
        }
        break;
    default:
        console.log("ingrese una marca valida que se encuentre en el inventario (1.samsung 2.iphone 3.xiaomi 4.motorola 5.huawei 6.oppo)");
}
}
}
