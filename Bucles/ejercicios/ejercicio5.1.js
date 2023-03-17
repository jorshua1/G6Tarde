// hacer un algoritmo que imprima el nombre de 4 articulos, precio original y su precio con descuento. el dctgo lo hace en base a la forma de pago, si es a conatado sera (1), y dcto es del 10% y si la forma de pago es a credito sera (2) y su dcto es del 20% (solo existen dos claves)

/*var articulo1 = prompt ("ingrese el nombre del articulo 1")
while (!isNaN (articulo1) || articulo1 == " "){
    alert ("ingrese dato valido")
    var articulo1 = prompt ("ingrese el nombre del articulo 1")
}if (articulo1 = String){
    precioArticulo1 = Number (prompt("Ingrese precio articulo 1"))
}while(isNaN(precioArticulo1) || precioArticulo1 == (" ")){
    alert ("ingrese dato valido")
    precioArticulo1 = Number (prompt("Ingrese precio articulo 1"))
}if (precioArticulo1 = Number){
    var medioPago = ("ingrese medio de pago")
}
var articulo1 = prompt ("ingrese el nombre del articulo 2")

var articulo1 = prompt ("ingrese el nombre del articulo 3")

var articulo1 = prompt ("ingrese el nombre del articulo 4")
var precioSinDcto = parseInt (prompt("ingrese precio del articulo"))
var dcto ;*/
var dcto10;
var dcto20;

var articulo1 = prompt ("ingrese el nombre del articulo 1")
while (!isNaN (articulo1) || articulo1 == " "){
    alert ("ingrese dato valido")
    articulo1 = prompt ("ingrese el nombre del articulo 1")
}var precioArticulo1 = Number (prompt("Ingrese precio articulo 1"))
while (isNaN (precioArticulo1) || precioArticulo1 == " "){
    alert ("ingrese dato valido")
    precioArticulo1 = Number (prompt("Ingrese precio articulo 1"))
}var medioPago1 = prompt("Ingrese medio de pago de articulo 1")
while (medioPago1 !== "contado" && medioPago1 !== "credito"){
    alert ("ingrese dato valido")
    medioPago1 = prompt("Ingrese medio de pago de articulo 1")
}if (medioPago1==="contado"){
     dcto10 = precioArticulo1 * 0.10
     alert("Articulo 1" + '\n' + "Precio sin dcto = " + precioArticulo1 + '\n' + "Precio con dcto = " + (precioArticulo1 - dcto10) )
}else if (medioPago1==="credito"){
     dcto20 = precioArticulo1 * 0.20
     alert("Articulo 1" + '\n' + "Precio sin dcto = " + precioArticulo1 + '\n' + "Precio con dcto = " + (precioArticulo1 - dcto20) )
}
var articulo2 = prompt ("ingrese el nombre del articulo 2")
while (!isNaN (articulo2) || articulo2 == " "){
    alert ("ingrese dato valido")
    articulo2 = prompt ("ingrese el nombre del articulo 2")
}var precioArticulo2 = Number (prompt("Ingrese precio articulo 2"))
while (isNaN (precioArticulo2) || precioArticulo2 == " "){
    alert ("ingrese dato valido")
    precioArticulo2 = Number (prompt("Ingrese precio articulo 2"))
}var medioPago2 =  prompt("Ingrese medio de pago de articulo 2")
while (medioPago2 !== "contado" &&  medioPago2 !== "credito"){
    alert ("ingrese dato valido")
    medioPago2 = prompt("Ingrese medio de pago de articulo 2")
}if (medioPago2==="contado"){
    dcto10 = precioArticulo2 * 0.10
    alert("Articulo 2" + '\n' + "Precio sin dcto = " + precioArticulo2 + '\n' + "Precio con dcto = " + (precioArticulo2 - dcto10) )
}else if (medioPago2==="credito"){
     dcto20 = precioArticulo2 * 0.20
     alert("Articulo 2" + '\n' + "Precio sin dcto = " + precioArticulo2 + '\n' + "Precio con dcto = " + (precioArticulo2 - dcto20) )
}
var articulo3 = prompt ("ingrese el nombre del articulo 3")
while (!isNaN (articulo3) || articulo3 == " "){
    alert ("ingrese dato valido")
    articulo3 = prompt ("ingrese el nombre del articulo 3")
}var precioArticulo3 = Number (prompt("Ingrese precio articulo 3"))
while (isNaN (precioArticulo3) || precioArticulo3 == " "){
    alert ("ingrese dato valido")
    precioArticulo3 = Number (prompt("Ingrese precio articulo 3"))
}var medioPago3 =  prompt("Ingrese medio de pago de articulo 3")
while (medioPago3 !== "contado" &&  medioPago3 !== "credito"){
    alert ("ingrese dato valido")
    medioPago3 = prompt("Ingrese medio de pago de articulo 3")
}if (medioPago3==="contado"){
    dcto10 = precioArticulo3 * 0.10
    alert("Articulo 3" + '\n' + "Precio sin dcto = " + precioArticulo3 + '\n' + "Precio con dcto = " + (precioArticulo3 - dcto10) )
}else if(medioPago3==="credito"){
     dcto20 = precioArticulo3 * 0.20
     alert("Articulo 3" + '\n' + "Precio sin dcto = " + precioArticulo3 + '\n' + "Precio con dcto = " + (precioArticulo3 - dcto20) )
}
var articulo4 = prompt ("ingrese el nombre del articulo 4")
while (!isNaN (articulo4) || articulo4 == " "){
    alert ("ingrese dato valido")
    articulo4 = prompt ("ingrese el nombre del articulo 4")
}var precioArticulo4 = Number (prompt("Ingrese precio articulo 4"))
while (isNaN (precioArticulo4) || precioArticulo4 == " "){
    alert ("ingrese dato valido")
    precioArticulo4 = Number (prompt("Ingrese precio articulo 4"))
}var medioPago4 =  prompt("Ingrese medio de pago de articulo 4")
while (medioPago4 != "contado" &&  medioPago4 !== "credito"){
    alert ("ingrese dato valido")
    medioPago4 = prompt("Ingrese medio de pago de articulo 4")
}if (medioPago4==="contado"){
    dcto10 = precioArticulo4 * 0.10
    alert("Articulo 4" + '\n' + "Precio sin dcto = " + precioArticulo4 + '\n' + "Precio con dcto = " + (precioArticulo4 - dcto10) )
}else if(medioPago4==="credito"){
     dcto20 = precioArticulo4 * 0.20
     alert("Articulo 4" + '\n' + "Precio sin dcto = " + precioArticulo4 + '\n' + "Precio con dcto = " + (precioArticulo4 - dcto20) )
}





/*


if (medioPago1 === "contado" || medioPago2 === "contado" || medioPago3 === "contado" || medioPago4 === "contado"){
    var dcto10 = 0.10
    alert ("Articulo 1" + precioArticulo1 + "con dcto" + ((precioArticulo1*dcto10)- precioArticulo1) + '\n' + "Articulo 2" + "con dcto" + ((precioArticulo2)))
}else if (medioPago1 === "credito" || medioPago2 === "credito" || medioPago3 === "credito" || medioPago4 === "credito"){ 
    var dcto20 = 0.20
    alert("tiene dcto de 20")
}






if (medioPago1 === "contado" ||  medioPago2 === "contado"){
    if(){
        if(medioPago3 === "contado"){
            if (medioPago4 === "contado"){
                var dct10 = 0.10
                alert ("tiene dcto del 10")
            }
        }

    }
}if (medioPago1 === "credito"){
    if (medioPago2 === "credito"){
        if (medioPago3 === "credito"){
            if (medioPago4 === "credito"){
                alert ("tiene dcto del 20")
            }
        }
    }
}


*/






