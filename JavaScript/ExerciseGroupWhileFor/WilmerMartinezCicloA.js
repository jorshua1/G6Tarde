/* Ingresar su edad y la forma en la que se desplaza, validar si se desplaza a pie o trasporte(moto, carro, pie, bicicleta) y con la edad que sea mayor o igual a +16 años lo cual si cumple dar la información de su trasporte(forma de desplazarse) y la edad, sino dar un aviso (“no tiene edad para conducir”, esto en caso de que maneja siendo menor, a la edad correspondiente). Añadido a ese, validar si tiene el carnet de conducción sino lo tiene dar  el mensaje, lo mismo ocurre si lo tiene renovado o vencido “Lo van a multar XD”.
Recuerde que debe rectificar datos de error, en ese caso se debe dar un mensaje “PELIGRO DATOS INCORRECTOS, NO SABE LEER NI ESCRIBIR”, y se vuelve a ejecutar o colocar la información de manera correcta. */



var vCarnet;
var vCarnetRV;

let vAge = parseInt(prompt("Ingrese su edad"));
while (isNaN(vAge) || vAge < 0 || vAge > 150) {
    vAge = parseInt(prompt("Ingrese un dato valido de edad"));
} let vTransportation = String(prompt("Ingrese la forma en la que se dezplaza \n Solo sera valido ingresar: moto, carro, caminando, bicicleta"));
while (!isNaN(vTransportation)) {
    vTransportation = String(prompt("Ingrese la forma en la que se dezplaza \n Solo sera valido ingresar: moto, carro, caminando, bicicleta"));
}
if (vTransportation == "moto" || vTransportation == "carro" || vTransportation == "caminando" || vTransportation == "bicicleta" ) {

    if (vAge < 16 && vTransportation == "caminando") {
        alert("Tienes " + vAge + " tranquilo se puede ir caminando");
    } else if (vAge >= 16 && vTransportation == "caminando") {
        alert("Ya es hora que se compre un veiculo, mire que tiene " + vAge + " años");
    } else if (vAge < 16 && vTransportation == "bicicleta") {
        alert("Buena su bici");
    } else if (vAge >= 16 && vTransportation == "bicicleta") {
        alert("Va bien haciendo ejercicio");
    } else if (vAge < 16 && vTransportation == "moto") {
        alert("Es menor de edad no debe conducir aún, pero puede practicar");
    } else if (vAge < 16 && vTransportation == "carro") {
        alert("Va bien pero aun no esta en edad de manejar estos veiculos");
    } if (vCarnet !== "no carnet" || vCarnet !== "si carnet" || vCarnetRV !== "renovado" || vCarnetRV !== "vencido") {
        alert(confirm("Ahora debera ingresar si posee carnet, \n ingresar si carnet o no carnet, \n ademas si lo tiene renovado o no, \n ingresar renovado o vencido"));
        var vCarnet = String(prompt("Ingrese si posee su carnet"));
        if (vAge >= 16 && vTransportation == "moto" && vCarnet == "no carnet") {
            alert("Le faltan papeles");
        } else if (vAge >= 16 && vTransportation == "carro" && vCarnet == "no carnet") {
            alert("Le faltan papeles");
        } else {
            var vCarnetRV = String(prompt("Ingrese si su carnet esta renovado o vencido"));
            if (vAge >= 16 && vTransportation == "moto" && vCarnet == "si carnet" && vCarnetRV == "vencido") {
                alert("Ojo lo puede atrapar la policia");
            } else if (vAge >= 16 && vTransportation == "moto" && vCarnet == "si carnet" && vCarnetRV == "renovado") {
                alert("Bien puede manejar en paz");
            } else if (vAge >= 16 && vTransportation == "carro" && vCarnet == "si carnet" && vCarnetRV == "vencido") {
                alert("Ojo lo puede atrapar la policia");
            } else if (vAge >= 16 && vTransportation == "carro" && vCarnet == "si carnet" && vCarnetRV == "renovado") {
                alert("Bien puede manejar en paz");
            }
        }
    }

} else {
    alert("Ingrese un dato valido");
}


let vNumero = 10;

if (vNumero <= 10) {
    let vNumero = "15";
}
console.log(vNumero);