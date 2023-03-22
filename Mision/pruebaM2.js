let inventario = [
{marca : "samsung",
cantidad : Number (prompt("Ingrese cantidad de equipos samsumg"))},
{marca : "iphone",
cantidad : Number (prompt("Ingrese cantidad de equipos iphone"))},
{marca : "xiaomi",
cantidad : Number (prompt("Ingrese cantidad de equipos xiaomi"))},
{marca : "motorola",
cantidad : Number (prompt("Ingrese cantidad de equipos motorola"))},
{marca : "huawei",
cantidad : Number (prompt("Ingrese cantidad de equipos huawei"))},
{marca : "oppo",
cantidad : Number (prompt("Ingrese cantidad de equipos oppo"))}

] 

var marca = prompt ("Ingrese la marca del equipo vendido")
while (marca != "samsung" && marca != "iphone" && marca != "xiaomi" && marca != "motorola" && marca != "huawei" && marca != "oppo"){
    alert("Ingrese dato correcto")
    var marca = prompt("Ingrese marca de equipo")
}
var cantidad = parseInt(prompt ("Ingrese la cantidad de equipos vendidos"))
while (isNaN(cantidad) || cantidad == " "){
    alert("Ingrese dato correcto")
    var cantidad = Number(prompt("Ingrese cantidad de equipos"))
}
var totalVentas = 0
var precio

for(let i = 1; i >= inventario.length; i++){
    if(inventario[i].marca===marca){
        precio = Number("Precio de equipo")
        inventario[i].cantidad -= cantidad
        totalVentas = cantidad * precio
        console.log(inventario[i].cantidad)
        console.log(totalVentas)
    }
}

alert("Inventario actual")
for (let i = 0; i < inventario.length; i++){
    alert(inventario[i].marca + ":" + inventario[i].cantidad)
}
alert("total de dinero" + totalVentas)