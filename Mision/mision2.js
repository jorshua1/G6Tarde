//Diseñar un algoritmo con diagrama de flujo de datos y pseudocodigo que permita reguistrar un inventario de celulares de las soguientes marcas : samsung, iphone, xiaomi, motorola, huawei, oppo, el articulo debe permitir, el algoritmo debe permitir descontar del inventario los equipos vendidos segun su marca y actualizar la cantidad de telfonso disponibles, ademas debe calcualar el total de dinero recaudado por las ventas.

var precioSamsung 
var precioTotalSamsung = 0
var precioIphone
var precioTotalIphone = 0
var precioXiaomi
var precioTotalXiaomi = 0
var precioMotorola
var precioTotalMotorola = 0 
var precioHuawei
var precioTotalHuawei = 0
var precioOppo
var precioTotalOppo = 0

var marca = prompt("Ingrese marca de equipo")
while (marca != "samsung" && marca != "iphone" && marca != "xiaomi" && marca != "motorola" && marca != "huawei" && marca != "oppo"){
    alert("Ingrese dato correcto")
    var marca = prompt("Ingrese marca de equipo")
}
var cantidad = Number(prompt("Ingrese cantidad de equipos"))
while (isNaN(cantidad) || cantidad == " "){
    alert("Ingrese dato correcto")
    var cantidad = Number(prompt("Ingrese cantidad de equipos"))
}if (marca === "samsung"){
    for(var i = 1; i <= cantidad; i++){
        precioSamsung = Number(prompt("Ingrese precio de equipo "+ i ))
        precioTotalSamsung += precioSamsung 
        } }
if (marca === "iphone"){
            for(var j = 1; j <= cantidad; j++){
                precioIphone = Number(prompt("Ingrese precio de equipo "+ j ))
                precioTotalIphone += precioIphone
             } }
if (marca === "xiaomi"){
                for(var k = 1; k <= cantidad; l++){
                precioXiaomi = Number(prompt("Ingrese precio de equipo "+ k ))
                precioTotalXiaomi += precioXiaomi
            } }
if (marca === "motorola"){
                for (var l = 1; l <= cantidad; l++){
                    precioMotorola = Number(prompt("Ingrese precio de equipo "+ l ))
                    precioTotalMotorola += precioMotorola
                } }
if (marca === "huawei"){
                    for (var m = 1; m <= cantidad; m++){
                        precioHuawei = Number(prompt("Ingrese precio de equipo "+ m ))
                        precioTotalHuawei += precioHuawei
                    } }
if (marca === "oppo"){
                 for (var n = 1; n <= cantidad; n++){
                        precioOppo = Number(prompt("Ingrese precio de equipo "+ n ))
                        precioTotalOppo += precioOppo
                    }      }            

console.log (precioTotalSamsung)
console.log  (precioTotalIphone)
console.log  (precioTotalXiaomi)
console.log  (precioTotalMotorola)
console.log  (precioTotalHuawei)
console.log  (precioTotalOppo)