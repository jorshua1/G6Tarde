//una persona dbe realizar un muestreo con 20 personas para determinar el promedio de peso de los niños, jovenes, adultos, y viejos, que existen en su zona habitacional. se determinan las categorias con base en:
//categoria     edad 
//niños        0-12
//jovenes      13-29
//adultos      30-59
//viejos       60 en adelante 


var i, edad, nino, jovenes, adultos, viejos = Number(parseInt)
var peso, pesoNinos, pesoJovenes, pesoAdultos, PesoViejos = Number(parseFloat)
var promedioPesoNinos, promedioPesoJovenes, promedioPesoAdultos, PromedioPesoviejos = Number(parseFloat)

pesoNinos = 0
pesoJovenes = 0
pesoAdultos = 0
PesoViejos = 0 
promedioPesoNinos = 0 
promedioPesoJovenes = 0 
promedioPesoAdultos = 0 
PromedioPesoviejos = 0

for (i = 1; i<=20; i++){
   edad = prompt ("Participante" + i + '\n' + "Ingrese su edad" )
   peso = prompt ("Ingrese su peso")
  if(isNaN(edad) || edad == 0 || edad == " "){ 
    alert("ingrese dato valido ")
    }else{
          if( edad <= 12){
            pesoNinos = pesoNinos + peso 
            nino = nino + 1
            promedioPesoNinos = promedioPesoNinos / nino
          }else{
            if (edad <= 29){
                pesoJovenes = pesoJovenes + peso
                joven = joven + 1 
                promedioPesoJovenes = promedioPesoJovenes / joven
            }else{
                if (edad <= 59){
                    pesoAdultos = promedioPesoAdultos + peso
                    adultos = adultos + 1 
                    promedioPesoAdultos = promedioPesoAdultos / adultos
                }else{
                    PesoViejos = PesoViejos + peso
                    viejos = viejos + 1 
                    PromedioPesoviejos = PromedioPesoviejos / viejos
                }
            }  
        } 

    }
}
alert("El promedio de peso de ninos es = " + promedioPesoNinos)
alert("El promedio de peso de jovenes es = " + promedioPesoJovenes)
alert("El promedio de peso de adultos es = " + promedioPesoAdultos)
alert("El promedio de peso de viejos es = " + PromedioPesoviejos)

