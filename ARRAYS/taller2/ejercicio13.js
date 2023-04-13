opcion=0;
submenu=0;
art1=0;
art2=0;
art3=0;
art4=0;
art5=0;
sucursal=0;
suc1=0;
suc2=0;
suc3=0;
suc4=0;
suc5=0;
while(opcion!==5){
   opcion=Number(prompt(`Selecciona una opcion del menu:
   1.Ingresar precio de los 5 articulos
   2.Ingresar cantidades vendidas de cada articulo por sucursal
   3.Ver cantidades vendidas por sucursal
   4.Recaudacion total
   5.Sucursal de mayor recaudacion`))
   while(opcion<0 || opcion>5 || isNaN(opcion) || !Number.isInteger(Number)){
    alert("Ingrese una opcion del menu valida")
   opcion=Number(prompt(`Selecciona una opcion del menu:
   1.Ingresar precio de los 5 articulos
   2.Ingresar cantidades vendidas de cada articulo por sucursal
   3.Ver cantidades vendidas por sucursal
   4.Recaudacion total
   5.Sucursal de mayor recaudacion`))
   }
   switch(opcion){
    case 1:
    while(submenu!==6){
     submenu=Number(prompt(`Selecciona el articulo
     1. Articulo 1
     2. Articulo 2
     3. Articulo 3
     4. Articulo 4
     5. Articulo 5
     6. Salir`))
     switch(submenu){
        case 1:
            art1=Number(prompt(`Ingrese valor articulo 1`))
            while(isNaN(art1)||art1<0||!Number.isInteger(art1)){
                alert("Error, Ingrese dato valido")
                art1=Number(prompt(`Ingrese valor articulo 1`))
            }
            break;
        case 2:
            art2=Number(prompt(`Ingrese valor articulo 2`))
            while(isNaN(art2)||art2<0||!Number.isInteger(art2)){
                alert("Error, Ingrese dato valido")
                art2=Number(prompt(`Ingrese valor articulo 2`))
            }
            break;
        case 3:
            art3=Number(prompt(`Ingrese valor articulo 3`))
            while(isNaN(art3)||art3<0||!Number.isInteger(art3)){
                alert("Error, Ingrese dato valido")
                art3=Number(prompt(`Ingrese valor articulo 3`))
            }
            break;
        case 4:
            art4=Number(prompt(`Ingrese valor articulo 4`))
            while(isNaN(art4)||art4<0||!Number.isInteger(art4)){
                alert("Error, Ingrese dato valido")
                art4=Number(prompt(`Ingrese valor articulo 4`))
            }
            break;
        case 5:
            art5=Number(prompt(`Ingrese valor articulo 5`))
            while(isNaN(art5)||art5<0||!Number.isInteger(art5)){
             alert("Error, Ingrese dato valido")
             art5=Number(prompt(`Ingrese valor articulo 5`))
                
            }
            break;
        default:
            break;
     }
    }
    submenu=0
    break;
    case 2:
    while(submenu!==6){
     sucursal=Number(prompt(`Ingrese sucursal que desea registrar venta
     1. Sucursal 1
     2. Sucursal 2
     3. Sucursal 3
     4. Sucursal 4
     5. Sucursal 5
     6. Salir`))
     switch(sucursal){
        case 1:
         
     }
    }
   }
}