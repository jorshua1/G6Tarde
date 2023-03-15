//Ingresar su edad y la forma en la que se desplaza, validar si se desplaza a pie o trasporte(moto, carro, pie, bicicleta) y con la edad que sea mayor o igual a +16 años lo cual si cumple dar la información de su trasporte(forma de desplazarse) y la edad, sino dar un aviso (“no tiene edad para conducir”, esto en caso de que maneja siendo menor, a la edad correspondiente). Añadido a ese, validar si tiene el carnet de conducción sino lo tiene dar  el mensaje, lo mismo ocurre si lo tiene renovado o vencido “Lo van a multar XD”.Recuerde que debe rectificar datos de error, en ese caso se debe dar un mensaje “PELIGRO DATOS INCORRECTOS, NO SABE LEER NI ESCRIBIR”, y se vuelve a ejecutar o colocar la información de manera correcta.

//cumple : imprimir edad y medio de transporte
//si es menor y conduce imprimir 
//validar si tiene carnet de conduccion, si no tiene o si no esta renovado o vencido imprimir multa  
//datos erroneos intentar de nuevo
// moto o carro o pie o bicicleta
// si es mayor de edad y tiene transporte cumple condicion


var edad = parseInt (prompt("Ingrese su edad"))
if (edad <=200){{
    var medioTransporte = prompt ("Ingrese su medio de transporte")
     }
if (medioTransporte !== "pie" && medioTransporte !== "moto" && medioTransporte !== "carro" && medioTransporte !== "bicicleta"){
    alert("no es medio de transporte valido")
}if (edad >= 16 && medioTransporte == "moto" || medioTransporte == "carro" || medioTransporte == "bicicleta" ){
    alert("Cumple " + '\n' + "Edad = " + edad + '\n' + "medio de transporte = " + medioTransporte)  
   }if (edad < 16 && medioTransporte == "moto" || medioTransporte == "carro" || medioTransporte == "bicicleta"){
       alert("No tiene edad para coducir")
   }if (edad > 16){
    var carnetConduccion = prompt ("Tiene lisencia de conduccion")
   }if (carnetConduccion == "si"){
    var estadoLisencia = prompt("ingrese el estado de su lisencia")
   }if (estadoLisencia == "vigente"){
    alert("muy bien")
   }else if (estadoLisencia == "vencido"){
         alert("lo van a multar")
   }   else if (carnetConduccion == "no"){
      alert ("es momento de sacar lisencia")
   }
}
else {
    alert("no es valido")
}

