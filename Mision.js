    //Contador para cada celular
    var ct_Samsumg = 10
    var ct_Xiaomi = 5
    var ct_Motorola = 20
    var ct_Huawei = 30
    var ct_OPPO = 8
    //Stock actualizado
    var stockS=0;
    var stockX=0;
    var stockM=0;
    var stockH=0;
    var stockO=0;
    //Vendidos 
    var vendidos_Huawei =0
    var vendidos_Motorola = 0
    var vendidos_OPPO = 0
    var vendidos_Samsumg =0
    var vendidos_Xiaomi= 0
    //precio 
    var precio_Huawei = 1200000
    var precio_Motorola = 800000
    var precio_OPPO = 700000
    var precio_Samsumg = 1400000
    var precio_Xiaomi = 900000
do{
var opcion = Number(prompt("Ingrese la opcion que desea realizar:\n1.Registrar Inventario\n2.Ventas\n3.Stock Actualizado\n4.Ganancias\n5.Salir"))

if(isNaN(opcion) || opcion<0){
    alert("Ingreso valores invalidos")
}else{
switch (opcion) { //switch Menú
    case 1:
        do{ 
            var opcion2 = Number(prompt("Ingrese la opcion que desea realizar:\n1.Stock Actual\n2.Agregar Celular\n3.Volver"))
            switch(opcion2){//switch opciones de Registro Inventario
                case 1:
                      
                      alert("Lista de Stock Actual:\n*Huawei: "+ct_Huawei+"\nMotorola: "+ct_Motorola+"\nOPPO: "+ct_OPPO+"\nSamsumg: "+ct_Samsumg+"\nXiaomi: "+ct_Xiaomi)
  
                    break;
                case 2:
                    do{
                    var opcionAdd =Number(prompt("Ingrese que cantidad de celulares desea añadir al stock:\n1.Huawei\n2.Motorola\n3.OPPO\n4.Samsumg\n5.Xiaomi\n6.Volver"))
                    switch(opcionAdd){// swith opciones de registro celular
                        case 1:
                            stockH = Number(prompt("Cantidad Telefonos Huawei*"))
                            if(isNaN(stockH) || stockH<0){
                            alert("Ingrese valores validos")
                            break;
                           }else {
                               alert("Registro Exitoso")
                           }
                            break;
                        case 2:
                            stockM = Number(prompt("Cantidad Telefonos Motorola"))
                            if(isNaN(stockM)|| stockM<0 ){
                                alert("Ingrese valores validos")
                                break;
                            }else{
                                alert("Registro Exitoso")
                            }
                            break;
                        case 3:
                            stockO = Number(prompt("Cantidad Telefonos OPPO"))
                            if(isNaN(stockO)|| stockO<0 ){
                                alert("Ingrese valores validos")
                                break;
                            }else{
                                alert("Registro Exitoso")
                            }
                            break;
                        case 4:
                            stockS = Number(prompt("Cantidad Telefonos Samsumg"))
                            if(isNaN(stockS)|| stockS<0 ){
                                alert("Ingrese valores validos")
                                break;
                            }else{
                                alert("Registro Exitoso")
                            }
                            break;
                        case 5:
                            stockX = Number(prompt("Cantidad Telefonos Xiaomi"))
                            if(isNaN(stockX)|| stockX<0 ){
                                alert("Ingrese valores validos")
                                break;
                            }else{
                                alert("Registro Exitoso")
                            }
                            break;
                        case 6:
                            alert("Regresando al menú anterior")
                            break;
                        
                        default:
                            alert("Ingreso valores erroneos")
                            break;

                    }
                    }while(opcionAdd<6 || isNaN(opcionAdd))
                    break;
                case 3: 
                    break;

                default :
                    alert("ingrese valores validos")
                    break;

            }
            }while(opcion2<3 || isNaN(opcion2))
        break;
    case 2:
        do{
       var opcionV =Number(prompt("Ingrese la opcion que desea realizar:\n1.Registrar Venta\n2.Volver "))
        switch(opcionV){
            case 1:
                do{
                var opcionRV = Number(prompt("Ingrese el tipo y la cantidad de celulares vendidos:\n1.Huawei\n2.Motorola\n3.OPPO\n4.Samsumg\n5.Xiaomi\n6.Volver"))
                switch(opcionRV){
                    case 1:
                        vendidos_Huawei = parseInt(prompt("Cantidad Telefonos Huawei"))
                        if(vendidos_Huawei>(ct_Huawei+stockH) ){
                            alert("Error , No hay suficientes celulares")
                            break;
                        }else{
                        if(isNaN(vendidos_Huawei) || vendidos_Huawei<0){
                        alert("Ingrese valores validos")
                        break;
                       }else {
                           alert("Registro Exitoso")
                       }
                    }
                        break;
                    case 2:
                        vendidos_Motorola = parseInt(prompt("Cantidad Telefonos Motorola"))
                        if(vendidos_Motorola>(ct_Motorola+stockM) ){
                            alert("Error , No hay suficientes celulares")
                            break;
                        }else{
                        if(isNaN(vendidos_Motorola)|| vendidos_Motorola<0 ){
                            alert("Ingrese valores validos")
                            break;
                        }else{
                            alert("Registro Exitoso")
                        }
                    }
                        break;
                    case 3:
                        vendidos_OPPO = parseInt(prompt("Cantidad Telefonos OPPO"))
                        if(vendidos_OPPO>(ct_OPPO+stockO) ){
                            alert("Error , No hay suficientes celulares")
                            break;
                        }else{
                        if(isNaN(vendidos_OPPO)|| vendidos_OPPO<0 ){
                            alert("Ingrese valores validos")
                            break;
                        }else{
                            alert("Registro Exitoso")
                        }
                    }
                        break;
                    case 4:
                        vendidos_Samsumg = parseInt(prompt("Cantidad Telefonos Samsumg"))
                        if(vendidos_Samsumg>(ct_Samsumg+stockS) ){
                            alert("Error , No hay suficientes celulares")
                            break;
                        }else{
                        if(isNaN(vendidos_Samsumg)|| vendidos_Samsumg<0 ){
                            alert("Ingrese valores validos")
                            break;
                        }else{
                            alert("Registro Exitoso")
                        }
                    }
                        break;
                    case 5:
                        vendidos_Xiaomi = parseInt(prompt("Cantidad Telefonos Xiaomi"))
                        if(vendidos_Xiaomi>(ct_Xiaomi+stockX) ){
                            alert("Error , No hay suficientes celulares")
                            break;
                        }else{
                        if(isNaN(vendidos_Xiaomi)|| vendidos_Xiaomi<0 ){
                            alert("Ingrese valores validos")
                            break;
                        }else{
                            alert("Registro Exitoso")
                        }
                    }
                        break;
                    case 6:
                        alert("Regresando al menú anterior")
                        break;
                    
                    default:
                        alert("Ingreso valores erroneos")
                        break;

                }
                }while(opcionRV<6 || isNaN(opcionRV))
                break;
            case 2:
                break;

            default:
                alert("Ingreso valores erroneos")
                break;
        }
        }while(opcionV<2 || isNaN(opcionV))
        break;
         
    case 3:
        do{
        var opcionStock= Number(prompt("Ingrese la opcion que desea realizar:\n1.Lista de Stock Actualizada\n2.Volver"))
        switch(opcionStock){
            case 1:
                alert("Lista de stock de los celulares registrados y previos:\n*Huawei: "+ct_Huawei+stockH+"\nMotorola"+ct_Motorola+stockM+"\nOPPO"+ct_OPPO+stockO+"\nSamsumg"+ct_Samsumg+stockS+"\nXiaomi"+ct_Xiaomi+stockX)
             break;
            case 2:
                break;
            default:
                alert("Ingreso valores invalidos")
                break;
        }
                }while(opcionStock<2 || isNaN(opcionStock))
        break;
    case 4:
        do{
         var opcionG= Number(prompt("Ingrese la opcion que desea realizar:\n1.Lista de celulares vendidos\n2.Lista de celulares con sus ganancias\n3.Volver"))
         switch(opcionG){
            case 1:
                alert("Lista de celulares vendidos:\nHuawei: "+vendidos_Huawei+"\nMotorola: "+vendidos_Motorola+"\nOPPO: "+vendidos_OPPO+"\nSamsumg: "+vendidos_Samsumg+"\nXiaomi: "+vendidos_Xiaomi)
                break;
            case 2:
                let calculoTotal =vendidos_Huawei+vendidos_Motorola+vendidos_OPPO+vendidos_Samsumg+vendidos_Xiaomi
                let Ganancias = (vendidos_Huawei*precio_Huawei)+(vendidos_Motorola*precio_Motorola)+(vendidos_OPPO*precio_OPPO)+(vendidos_Samsumg*precio_Samsumg)+(vendidos_Xiaomi*precio_Xiaomi)
                alert("Lista de Ganancias:\nHuawei: "+(vendidos_Huawei*precio_Huawei)+"\nMotorola: "+(vendidos_Motorola*precio_Motorola)+"\nOPPO: "+(vendidos_OPPO*precio_OPPO)+"\nSamsumg: "+(vendidos_Samsumg*precio_Samsumg)+"\nXiaomi: "+(vendidos_Xiaomi*precio_Xiaomi)+"\nCelulares Vendidos: "+calculoTotal+"\nGanancia Total: "+Ganancias)
                break;
            default:
                alert("Los valores que ingreso son erroneos")
                break;

         }

        }while(opcionG<2 || isNaN(opcionG))
        break;
    case 5:
        alert("Hasta pronto")
        break;
    default:
        alert("Ingreso valores invalidos")

    }
} 
}while(opcion<5 || isNaN(opcion) )