// Diseñar un algoritmo que determine el precio del tiquete de ida y vuelta en avión, conociniendo la distancia a recorrer, sabiendo que si el numero de dias de estancia es superior o iguual a 7 y la distancia superiror a 800km el billetetiene una reduccion del 30%. El precio por kilometro es $2.5 dolares

   alert("Este programa determina el precio de tiquete ida y vuelta en avión")

   var distancia;
   var dias;
   var dcto;
   var precioSinDcto;

   distancia = Number (prompt ("Ingrese la distancia a recorrer en km"))
   if (distancia < 1000000000000000000000 ){{
    dias = Number (prompt("Ingrese numero de dias de estancia"))  
   }if(dias < 1000000000000000000){
        precioSinDcto = distancia * 2.5
        
      }if ((dias >= 7) && (distancia > 800)){
        dcto = precioSinDcto * 0.30
        alert("Tiene dcto del 30 porcento." + '\n' + "Pagara = " + (precioSinDcto - dcto) + "Dolares")
      }else if (dias <=6 || distancia < 800) {
                   alert("No tiene dcto." + '\n' + "Pagara = " + precioSinDcto + "Dolares")
                
    }
    }else
       alert("Error")