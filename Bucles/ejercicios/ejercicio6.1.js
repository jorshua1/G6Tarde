//una persona dbe realizar un muestreo con 20 personas para determinar el promedio de peso de los niños, jovenes, adultos, y viejos, que existen en su zona habitacional. se determinan las categorias con base en:
//categoria     edad 
//niños        0-12
//jovenes      13-29
//adultos      30-59
//viejos       60 en adelante 

    alert("Este programa determina el promedio de peso en kg de los datos recabados de 20 usuarios")


var i, edad, nino, jovenes, adultos, viejos;
var peso, pesoNinos, pesoJovenes, pesoAdultos, PesoViejos ;
var promedioPesoNinos, promedioPesoJovenes, promedioPesoAdultos, PromedioPesoviejos ;
nino = 0
jovenes = 0
adultos = 0 
viejos = 0
pesoNinos = 0
pesoJovenes = 0
pesoAdultos = 0
PesoViejos = 0 
promedioPesoNinos = 0 
promedioPesoJovenes = 0 
promedioPesoAdultos = 0 
PromedioPesoviejos = 0

for (i = 1; i<=20; i++){
    edad = parseInt(prompt ("Participante" + i + '\n' + "Ingrese su edad" ))
   while (edad <=0 || isNaN(edad) ){
    alert("Ingrese dato correcto")
    edad = parseInt(prompt ("Participante" + i + '\n' + "Ingrese su edad" ))
   }
   peso = Number(prompt ("Ingrese su peso"))
   while (peso <=0 || isNaN(peso) ){
    alert("Ingrese dato correcto")
    peso = Number(prompt ("Ingrese su peso"))
   }
    if( edad <= 12){
            pesoNinos += peso 
            nino += 1
            promedioPesoNinos = pesoNinos/ nino
          }else{
            if (edad <= 29){
                pesoJovenes +=  peso
                jovenes += 1 
                promedioPesoJovenes = pesoJovenes / jovenes
            }else{
                if (edad <= 59){
                    pesoAdultos += peso
                    adultos += 1 
                    promedioPesoAdultos = pesoAdultos / adultos
                }else{
                    PesoViejos += peso
                    viejos += 1 
                    PromedioPesoviejos = PesoViejos / viejos
                }
            }  
        } 

    }
alert("El promedio de peso de ninos es = " + promedioPesoNinos + " " + "Kg")
alert("El promedio de peso de jovenes es = " + promedioPesoJovenes + " " + "Kg")
alert("El promedio de peso de adultos es = " + promedioPesoAdultos + " " + "Kg")
alert("El promedio de peso de viejos es = " + PromedioPesoviejos + " " + "Kg")

