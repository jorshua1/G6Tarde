const inventario = {
    samsung:  {cantidad : 10 , precio: 10000} ,
    iphone: { cantidad : 20 , precio : 30000},
    oppo: { cantidad : 8 , precio : 8000},
    huawei: { cantidad : 15 , precio : 13000},
    motorola: { cantidad : 12 , precio : 9000},
    xiaomi: { cantidad : 14 , precio : 11000},


 };
    
    function vender( marca ,  cantidad){
        if (marca in inventario) {
            if (inventario [marca].cantidad >= cantidad){
                inventario [marca].cantidad -= cantidad

                let montoRecaudado = inventario [marca].cantidad * inventario [marca].precio
                return montoRecaudado
            }else{ 
                console.log(`No hay suficientes unidades de ${marca} en el inventario`)
                return 0
            }  

        }else { "la marca no existe en el inventario"
    }

    }

    let totalRecaudado = 0 
     
    // ciclo for para vender iphone y samsung
    
    for (let i = 0; i < 2 ; i++) {
        let marca = prompt("ingrese la marca del articulo (samsung o iphone)")
        if (marca !== "samsung" && marca !== "iphone") {
            console.log("La marca ingresada no es válida");
            i--;
            continue;
          }
        let cantidad = parseInt(prompt(`ingrese la cantidad de unidades de ${marca} vendidas`))

        if (isNaN (cantidad) || cantidad <= 0){
            console.log("la cantidad ingresada no es valida")
            continue
        }

        totalRecaudado += vender(marca, cantidad)


    }

    //ciclo while para vender xiaomi, motorola, oppo y huawei

    let continuarVendiendo = true

    while (continuarVendiendo){
        let marca = prompt("ingrese la marca de celular vendida (o escribe la palabra fin para detenerte)")
        if (marca === "fin"){
            continuarVendiendo = false
        
        } else if (!(marca in inventario)) {
            console.log("La marca ingresada no es válida");
            continue;
            
        }else {
            let cantidad = parseInt(prompt(`ingrese la cantidad de celulares de ${marca} vendidos`))
        if (isNaN(cantidad) || cantidad < 0) {
            console.log("error, no ingreso una cantidad valida")
            continue

        }
        totalRecaudado += vender(marca, cantidad)
    }


    }
    console.log("inventario actualizado")
    for(let marca in inventario)
    console.log(`total recaudado: ${totalRecaudado} cop `)



