/* Ingresar su edad y la forma en la que se desplaza, validar si se desplaza a pie o trasporte(moto, carro, pie, bicicleta) y con la edad que sea mayor o igual a +16 años lo cual si cumple dar la información de su trasporte(forma de desplazarse) y la edad, sino dar un aviso (“no tiene edad para conducir”, esto en caso de que maneja siendo menor, a la edad correspondiente). Añadido a ese, validar si tiene el carnet de conducción sino lo tiene dar  el mensaje, lo mismo ocurre si lo tiene renovado o vencido “Lo van a multar XD”.
Recuerde que debe rectificar datos de error, en ese caso se debe dar un mensaje “PELIGRO DATOS INCORRECTOS, NO SABE LEER NI ESCRIBIR”, y se vuelve a ejecutar o colocar la información de manera correcta. */



let vCarnet;
let vCarnetRV;

let vAge = parseInt(prompt("Ingrese su edad"));
while (isNaN(vAge) || vAge < 0 || vAge > 150) {
    vAge = parseInt(prompt("Ingrese un dato valido"));
} 
let vTransportation = String(prompt("Ingrese la forma en la que se dezplaza \n Solo sera valido ingresar: moto, carro, caminando, bicicleta"));
while (vTransportation == "moto" || vTransportation == "carro" || vTransportation == "caminando" || vTransportation == "bicicleta") {
    vTransportation = String(prompt("Ingrese un dato que sea valido, de los notificados"));
} while (vAge < 16 && vTransportation == "caminando") {
    alert("Tienes " + vAge + " tranquilo se puede ir caminando");
} while (vAge >= 16 && vTransportation == "caminando") {
    alert("Ya es hora que se compre un veiculo, mire que tiene " + vAge + " años");
} while (vAge < 16 && vTransportation == "bicicleta") {
    alert("Buena su bici");
} while (vAge >= 16 && vTransportation == "bicicleta") {
    alert("Va bien haciendo ejercicio");
} while (vAge < 16 && vTransportation == "moto") {
    alert("Es menor de edad no debe conducir aún, pero puede practicar");
} while (vAge < 16 && vTransportation == "carro") {
    alert("Va bien pero aun no esta en edad de manejar estos veiculos");
} while (vCarnet !== "no carnet" || vCarnet !== "si carnet" || vCarnetRV !== "renovado" || vCarnetRV !== "vencido") {
    alert("Ingrese un dato valido")
} alert(confirm("Ahora debera ingresar si posee carnet, \n ingresar si carnet o no carnet, \n ademas si lo tiene renovado o no, \n ingresar renovado o vencido"));
vCarnet = String(prompt("Ingrese si posee su carnet"));
while (vAge >= 16 && vTransportation == "moto" && vCarnet == "no carnet") {
    alert("Le faltan papeles");
} vCarnetRV = String(prompt("Ingrese si su carnet esta renovado o vencido"));
while (vAge >= 16 && vTransportation == "moto" && vCarnet == "si carnet" && vCarnetRV == "vencido") {
    alert("Ojo lo puede atrapar la policia");
} while (vAge >= 16 && vTransportation == "moto" && vCarnet == "si carnet" && vCarnetRV == "renovado") {
    alert("Bien puede manejar en paz");
} while (vAge >= 16 && vTransportation == "carro" && vCarnet == "no carnet") {
    alert("Le faltan papeles");
} while (vAge >= 16 && vTransportation == "carro" && vCarnet == "si carnet" && vCarnetRV == "vencido") {
    alert("Ojo lo puede atrapar la policia");
} while (vAge >= 16 && vTransportation == "carro" && vCarnet == "si carnet" && vCarnetRV == "renovado") {
    alert("Bien puede manejar en paz");
}



let vNumero = 10;

if (vNumero <= 10) {
    let vNumero = "15";
}
console.log(vNumero);