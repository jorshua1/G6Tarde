var totalsam=0
var totaltotalsam=0
var totalcantidadsam=0
var totaliph=0
var totaltotaliph=0
var totalcantidadiph=0
var totalxia=0
var totaltotalxia=0
var totalcantidadxia=0
var totalmot=0
var totaltotalmot=0
var totalcantidadmot=0
var totalhua=0
var totaltotalhua=0
var totalcantidadhua=0
var totalopp=0
var totaltotalopp=0
var totalcantidadopp=0
var totaldefinitivo=0
var totalcelulares=0

opcion=0
while(opcion != 4){

       console.log("---MENU---");
    console.log("----1. Registrar---")
    console.log("----2. Descontar---")
    console.log("----3. Total-------")
    console.log("----4. Salir-------")

opcion= parseInt(prompt("porfavor dijite una opcion"))
while(isNaN(opcion) || opcion >=5){
    opcion= parseInt(prompt("porfavor dijite una opcion valida"))
}

    switch (opcion) {
        case 1:
            console.log("Registrar")

                marca=prompt("porfavor dijite la marca del celular: ")
                marquita= marca.toLowerCase()

                if(marquita != "samsung" || marquita != "iphone" || marquita != "xiaomi"|| marquita != "motorola" || marquita != "huawei" || marquita != "oppo"){
                    while(marquita !== "samsung" && marquita !== "iphone" && marquita !== "xiaomi"&& marquita !== "motorola" && marquita !== "huawei" && marquita !== "oppo"){

                        marca=prompt("porfavor dijite una marca valida (samsung, huawei, motorola, xiaomi, iphone, oppo): ")
                        marquita= marca.toLowerCase()
                    }
                }
                

                console.log(marquita)

                switch (marquita) {
                    case "samsung":
                        console.log("samsung")

                        cantidadsam=parseInt(prompt("porfavor dijite la cantidad de celulares SAMSUNG"))
                        while(isNaN(cantidadsam) || cantidadsam <= 0){
                            cantidadsam=parseInt(prompt("porfavor dijite una cantidad valida para celulares SAMSUNG"))
                        }

                        totalcantidadsam=totalcantidadsam+cantidadsam
                        console.log(totalcantidadsam)

                        break;
                    case "iphone":
                        console.log("iphone")

                        cantidadiph=parseInt(prompt("porfavor dijite la cantidad de celulares IPHONE"))
                        while(isNaN(cantidadiph) || cantidadiph <= 0){
                            cantidadiph=parseInt(prompt("porfavor dijite una cantidad valida para celulares IPHONE"))
                        }

                        totalcantidadiph=totalcantidadiph+cantidadiph
                        console.log(totalcantidadiph)

                        break;
                    case "xiaomi":
                        console.log("xiaomi")

                        cantidadxia=parseInt(prompt("porfavor dijite la cantidad de celulares XIAOMI"))
                        while(isNaN(cantidadxia) || cantidadxia<=0){
                            cantidadxia=parseInt(prompt("porfavor dijite una cantidad valida para celulares XIAOMI"))
                        }

                        totalcantidadxia=totalcantidadxia+cantidadxia
                        console.log(totalcantidadxia)

                        break;
                    case "motorola":
                        console.log("motorola")

                        cantidadmot=parseInt(prompt("porfavor dijite la cantidad de celulares MOTOROLA"))
                        while(isNaN(cantidadmot)|| cantidadmot<=0){
                            cantidadmot=parseInt(prompt("porfavor dijite una cantidad valida para celulares MOTOROLA"))
                        }

                        totalcantidadmot=totalcantidadmot+cantidadmot
                        console.log(totalcantidadmot)

                        break;
                    case "huawei":
                        console.log("huawei")

                        cantidadhua=parseInt(prompt("porfavor dijite la cantidad de celulares HUAWEI"))
                        while(isNaN(cantidadhua)|| cantidadhua<=0){
                            cantidadhua=parseInt(prompt("porfavor dijite una cantidad valida para celulares HUAWEI"))
                        }

                        totalcantidadhua=totalcantidadhua+cantidadhua
                        console.log(totalcantidadhua)

                        break;
                    case "oppo":

                        console.log("oppo")
                        cantidadopp=parseInt(prompt("porfavor dijite la cantidad de celulares OPPO"))
                        while(isNaN(cantidadopp)|| cantidadopp<=0){
                            cantidadopp=parseInt(prompt("porfavor dijite una cantidad valida para celulares OPPO"))
                        }

                        totalcantidadopp=totalcantidadopp+cantidadopp
                        console.log(totalcantidadopp)

                        break;
                }

            break;
        case 2:
            
        marca=prompt("porfavor dijite la marca del celular: ")
                marquita= marca.toLowerCase()

                if(marquita != "samsung" || marquita != "iphone" || marquita != "xiaomi"|| marquita != "motorola" || marquita != "huawei" || marquita != "oppo"){
                    while(marquita !== "samsung" && marquita !== "iphone" && marquita !== "xiaomi"&& marquita !== "motorola" && marquita !== "huawei" && marquita !== "oppo"){

                        marca=prompt("porfavor dijite una marca valida (samsung, huawei, motorola, xiaomi, iphone, oppo): ")
                        marquita= marca.toLowerCase()
                    }
                }

        switch (marquita) {
            case "samsung":
                console.log("samsung")

                ventasam=parseInt(prompt("cuantos dispositivos vendio de la marca SAMSUNG"))
                while(isNaN(ventasam) || ventasam <= 0 || ventasam > totalcantidadsam){
                    console.log("tiene disponibles para la venta: "+totalcantidadsam+"telefonos Samsung")
                    ventasam=parseInt(prompt("dijite un numero valido para los dispositivos vendidos de la marca SAMSUNG"))
                    
                }

                preciosam=parseInt(prompt("porfavor dijite el precio unitario del celular SAMSUNG"))
                while(isNaN(preciosam) || preciosam <= 0){
                    preciosam=parseInt(prompt("porfavor dijite un precio valido para el celular SAMSUNG"))
                }


                totalsam= totalcantidadsam-ventasam
                totaltotalsam=ventasam*preciosam

                break;
            case "iphone":
                console.log("iphone")

                ventaiph=parseInt(prompt("cuantos dispositivos vendio de la marca IPHONE"))
                while(isNaN(ventaiph) || ventaiph <= 0 || ventaiph > totalcantidadiph){
                    console.log("tiene disponibles para la venta: "+totalcantidadiph+"telefonos IPHONE")
                    ventaiph=parseInt(prompt("dijite un numero valido para los dispositivos vendidos de la marca IPHONE"))
                    
                }

                precioiph=parseInt(prompt("porfavor dijite el precio unitario del celular IPHONE"))
                while(isNaN(precioiph) || precioiph <= 0){
                    precioiph=parseInt(prompt("porfavor dijite un precio valido para el celular IPHONE"))
                }


                totaliph= totalcantidadiph-ventaiph
                totaltotaliph=ventaiph*precioiph

                break;
            case "xiaomi":
                console.log("xiaomi")

                ventaxia=parseInt(prompt("cuantos dispositivos vendio de la marca XIAOMI"))
                while(isNaN(ventaxia) || ventaxia <= 0 || ventaxia > totalcantidadxia){
                    console.log("tiene disponibles para la venta: "+totalcantidadxia+"telefonos XIAOMI")
                    ventaxia=parseInt(prompt("dijite un numero valido para los dispositivos vendidos de la marca XIAOMI"))
                    
                }

                precioxia=parseInt(prompt("porfavor dijite el precio unitario del celular XIAOMI"))
                while(isNaN(precioxia) || precioxia <= 0){
                    precioxia=parseInt(prompt("porfavor dijite un precio valido para el celular XIAOMI"))
                }


                totalxia= totalcantidadxia-ventaxia
                totaltotalxia=ventaxia*precioxia
                break;
            case "motorola":
                console.log("motorola")

                ventamot=parseInt(prompt("cuantos dispositivos vendio de la marca MOTOROLA"))
                while(isNaN(ventamot) || ventamot <= 0 || ventamot > totalcantidadmot){
                    console.log("tiene disponibles para la venta: "+totalcantidadmot+"telefonos MOTOROLA")
                    ventamot=parseInt(prompt("dijite un numero valido para los dispositivos vendidos de la marca MOTOROLA"))
                    
                }

                preciomot=parseInt(prompt("porfavor dijite el precio unitario del celular MOTOROLA"))
                while(isNaN(preciomot) || preciomot <= 0){
                    preciomot=parseInt(prompt("porfavor dijite un precio valido para el celular MOTOROLA"))
                }


                totalmot= totalcantidadmot-ventamot
                totaltotalmot=ventamot*preciomot

                break;
            case "huawei":
                console.log("huawei")

                ventahua=parseInt(prompt("cuantos dispositivos vendio de la marca HUAWEI"))
                while(isNaN(ventahua) || ventahua <= 0 || ventahua > totalcantidadhua){
                    console.log("tiene disponibles para la venta: "+totalcantidadhua+"telefonos HUAWEI")
                    ventahua=parseInt(prompt("dijite un numero valido para los dispositivos vendidos de la marca HUAWEI"))
                    
                }

                preciohua=parseInt(prompt("porfavor dijite el precio unitario del celular HUAWEI"))
                while(isNaN(preciohua) || preciohua <= 0){
                    preciohua=parseInt(prompt("porfavor dijite un precio valido para el celular HUAWEI"))
                }


                totalhua= totalcantidadhua-ventahua
                totaltotalhua=ventahua*preciohua

                break;
            case "oppo":

            ventaopp=parseInt(prompt("cuantos dispositivos vendio de la marca OPPO"))
            while(isNaN(ventaopp) || ventaopp <= 0 || ventaopp > totalcantidadopp){
                console.log("tiene disponibles para la venta: "+totalcantidadopp+"telefonos OPPO")
                ventaopp=parseInt(prompt("dijite un numero valido para los dispositivos vendidos de la marca OPPO"))
                
            }

            precioopp=parseInt(prompt("porfavor dijite el precio unitario del celular OPPO"))
            while(isNaN(precioopp) || precioopp <= 0){
                precioopp=parseInt(prompt("porfavor dijite un precio valido para el celular OPPO"))
            }


            totalopp= totalcantidadopp-ventaopp
            totaltotalopp=ventaopp*precioopp

                break;
        }

            break;
        case 3:
            console.log("Total Neto de recaudo de los telefonos vendidos: "+(totaldefinitivo=totaltotalsam+totaltotalhua+totaltotaliph+totaltotalmot+totaltotalxia+totaltotalopp))
            console.log("Usted tiene un total de "+(totalcelulares=totalsam+totaliph+totalxia+totalmot+totalhua+totalopp)+" telefonos en el inventario.")    
            break;
    
        default:
            break;
        }

}
console.log("chao")
     







    



   















