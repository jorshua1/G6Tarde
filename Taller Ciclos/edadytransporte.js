var edad = Number(prompt("Ingrese su edad"));
while ((edad <= 0) || (isNaN(edad))) {
    console.log("Su edad no es coherente por favor ingrese su edad.");
    edad = Number(prompt("Ingrese su edad"));
}
var transporte = (prompt("Cual es su medio de transporte \n Moto \n Carro \n Pie \n Bici "));
if (edad >= 16) {
    console.log("\n " + "Su edad es : " + edad + "\n" + "Su medio de transporte es: " + transporte);
} else {
    console.log("Tu edad no te pemrite adquirir informacion debe ser mayor a 16 años");
}
if ((edad < 16) && ((transporte = "Carro") || (transporte = "Moto"))) {
    console.log("Usted no tiene permiso para conducir")
} else {
    if ((transporte = "Carro") || (transporte = "Moto")) {
        var licencia = Number(prompt("tiene usted licencia de conduccion? " + "\n Si = Marque 1" + "\n No = Marque 2"))
        while (((licencia != 1) && (licencia != 2)) || isNaN(licencia)) {
            console.log("Su respuesta es incorrecta, la respuesta es Si marque 1 o si la respuesta es No marque el numero 2");
            licencia = (prompt("tiene usted licencia de conduccion? " + "\n Si = Marque 1" + "\n No = Marque 2"))
        }
        if (licencia === 1) {
            var estadolicencia = Number(prompt("En que estado esta su licencia " + "\n Renovada = Marque 1" + "\n No renovada = Marque 2"))
            while (((estadolicencia != 1) && (estadolicencia != 2)) || isNaN(estadolicencia)) {
                console.log("Su respuesta es incorrecta, en que estado esta su licencia " + "\n Renovada = Marque 1" + "\n No renovada = Marque 2");
                estadolicencia = (prompt("En que estado esta su licencia " + "\n Renovada = Marque 1" + "\n No renovada = Marque 2"));
            }
        }else{
            console.log("NO tiene licencia para conducir");
        }if(licencia === 1 && estadolicencia === 2) {
            console.log("OJO lo van a multar por tener su licencia vencida");
        }
    }
}