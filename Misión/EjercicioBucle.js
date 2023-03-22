var samsung = parseInt(prompt("BIENVENIDO \n Ingrese la cantidad de telefonos SAMSUNG disponibles"));
while(isNaN(samsung)|| samsung<0){
    samsung = parseInt(prompt("ERROR, Ingrese la cantidad de telefonos SAMSUNG disponibles"));
}
var iphone = parseInt(prompt("Ingrese la cantidad de telefonos IPHONE disponibles"));
while(isNaN(iphone)|| iphone<0){
    iphone = parseInt(prompt("ERROR, Ingrese la cantidad de telefonos IPHONE disponibles"));
}
var xiaomi = parseInt(prompt("Ingrese la cantidad de telefonos XIAOMI disponibles"));
while(isNaN(xiaomi)|| xiaomi<0){
    xiaomi = parseInt(prompt("ERROR, Ingrese la cantidad de telefonos XIAOMI disponibles"));
}
var motorola = parseInt(prompt("Ingrese la cantidad de telefonos MOTOROLA disponibles"));
while(isNaN(motorola)|| motorola<0){
    motorola = parseInt(prompt("ERROR, Ingrese la cantidad de telefonos MOTOROLA disponibles"));
}
var huawei = parseInt(prompt("Ingrese la cantidad de telefonos HUAWEI disponibles"));
while(isNaN(huawei)|| huawei<0){
    huawei = parseInt(prompt("ERROR, Ingrese la cantidad de telefonos HUAWEI disponibles"));
}
var oppo = parseInt(prompt("Ingrese la cantidad de telefonos OPPO disponibles"));
while(isNaN(oppo)|| oppo<0){
    oppo = parseInt(prompt("ERROR, Ingrese la cantidad de telefonos OPPO disponibles"));
}
do{
    var opcion = parseInt(prompt("Que celular vendio \n (1) Samsung \n (2) Iphone \n (3) Xiaomi \n (4) Motorola \n (5) Huawei \n (6) Oppo"));
        while(isNaN(opcion)|| opcion<1 || opcion > 6){
            opcion = parseInt(prompt("ERROR, Que celular vendio \n (1) Samsung \n (2) Iphone \n (3) Xiaomi \n (4) Motorola \n (5) Huawei \n (6) Oppo"));
        }
            if(opcion==1){
                var costosamsung = parseFloat(prompt("Ingrese el costo del telefono Samsung"));
                while(isNaN(costosamsung)|| costosamsung<0){
                    costosamsung = parseFloat(prompt("ERROR, Ingrese el costo del telefono Samsung"));
                }
                var ventasamsung = parseInt(prompt("Cuantos telefonos Samsung vendió"));
                while(isNaN(ventasamsung)|| ventasamsung<0 && ventasamsung>samsung){
                    ventasamsung = parseInt(prompt("ERROR, Cuantos telefonos Samsung vendió"));
                }
                if(ventasamsung>=1 && ventasamsung<=samsung){
                samsung=samsung-ventasamsung;
                var totalcostosamsung = ventasamsung*costosamsung;
                console.log("Se vendieron ", ventasamsung, " dispositivos, Quedan ", samsung," telefonos Samsung")
                console.log("Los ", ventasamsung , " telefonos Samsung tienen un costo de ", totalcostosamsung, " pesos")
                }
                else{
                    alert("No hay esa cantidad de telefonos Samsung disponibles")
                }
            }if(opcion==2){
                var costoiphone = parseFloat(prompt("Ingrese el costo del telefono Iphone"));
                while(isNaN(costoiphone)|| costoiphone<0){
                    costoiphone = parseFloat(prompt("ERROR, Ingrese el costo del telefono Iphone"));
                }
                var ventaiphone = parseInt(prompt("Cuantos telefonos Iphone vendió"));
                while(isNaN(ventaiphone)|| ventaiphone<0 && ventaiphone>iphone){
                    ventaiphone = parseInt(prompt("ERROR, Cuantos telefonos Iphone vendió"));
                }
                if(ventaiphone>=1 && ventaiphone<=iphone){
                iphone=iphone-ventaiphone;
                var totalcostoiphone = ventaiphone*costoiphone;
                console.log("Se vendieron ", ventaiphone, " dispositivos, Quedan ", iphone," telefonos Iphone")
                console.log("Los ", ventaiphone, " telefonos Iphone tienen un costo de ", totalcostoiphone, " pesos")
                }
                else{
                    alert("No hay esa cantidad de telefonos Iphone disponibles")
                }
            }if(opcion==3){
                var costoxiaomi = parseFloat(prompt("Ingrese el costo del telefono Xiaomi"));
                while(isNaN(costoxiaomi)|| costoxiaomi<0){
                    costoxiaomi = parseFloat(prompt("ERROR, Ingrese el costo del telefono Xiaomi"));
                }
                var ventaxiaomi = parseInt(prompt("Cuantos telefonos Xiaomi vendió"));
                while(isNaN(ventaxiaomi)|| ventaxiaomi<0 && ventaxiaomi>xiaomi){
                    ventaxiaomi = parseInt(prompt("ERROR, Cuantos telefonos Xiaomi vendió"));
                }
                if(ventaxiaomi>=1 && ventaxiaomi<=xiaomi){
                xiaomi=xiaomi-ventaxiaomi;
                var totalcostoxiaomi = ventaxiaomi*costoxiaomi;
                console.log("Se vendieron ", ventaxiaomi, " dispositivos, Quedan ", xiaomi," telefonos Xiaomi")
                console.log("Los ", ventaxiaomi, " telefonos Xiaomi tienen un costo de ", totalcostoxiaomi, " pesos")
                }
                else{
                    alert("No hay esa cantidad de telefonos Xiaomi disponibles")
                }
            }if(opcion==4){
                var costomotorola = parseFloat(prompt("Ingrese el costo del telefono Motorola"));
                while(isNaN(costomotorola)|| costomotorola<0){
                    costoiphone = parseFloat(prompt("ERROR, Ingrese el costo del telefono Motorola"));
                }
                var ventamotorola = parseInt(prompt("Cuantos telefonos Motorola vendió"));
                while(isNaN(ventamotorola)|| ventamotorola<0 && ventamotorola>motorola){
                    ventamotorola = parseInt(prompt("ERROR, Cuantos telefonos Motorola vendió"));
                }
                if(ventamotorola>=1 && ventamotorola<=motorola){
                motorola=motorola-ventamotorola;
                var totalcostomotorola = ventamotorola*costomotorola;
                console.log("Se vendieron ", ventamotorola, " dispositivos, Quedan ", motorola," telefonos Motorola")
                console.log("Los ", ventamotorola, " telefonos Motorola tienen un costo de ", totalcostomotorola, " pesos")
                }
                else{
                    alert("No hay esa cantidad de telefonos Motorola disponibles")
                }
            }if(opcion==5){
                var costohuawei = parseFloat(prompt("Ingrese el costo del telefono Huawei"));
                while(isNaN(costohuawei)|| costohuawei<0){
                    costohuawei = parseFloat(prompt("ERROR, Ingrese el costo del telefono Huawei"));
                }
                var ventahuawei = parseInt(prompt("Cuantos telefonos Huawei vendió"));
                while(isNaN(ventahuawei)|| ventahuawei<0 && ventahuawei>huawei){
                    ventahuawei = parseInt(prompt("ERROR, Cuantos telefonos Huawei vendió"));
                }
                if(ventahuawei>=1 && ventahuawei<=huawei){
                huawei=huawei-ventahuawei;
                var totalcostohuawei = ventahuawei*costohuawei
                console.log("Se vendieron ", ventahuawei, " dispositivos, Quedan ", huawei," telefonos Huawei")
                console.log("Los ", ventahuawei, " telefonos Huawei tienen un costo de ", totalcostohuawei, " pesos")
                }
                else{
                    alert("No hay esa cantidad de telefonos Huawei disponibles")
                }
            }if(opcion==6){
                var costooppo = parseFloat(prompt("Ingrese el costo del telefono Oppo"));
                while(isNaN(costooppo)|| costooppo<0){
                    costooppo = parseFloat(prompt("ERROR, Ingrese el costo del telefono Oppo"));
                }
                var ventaoppo = parseInt(prompt("Cuantos telefonos OPPO vendió"));
                while(isNaN(ventaoppo)|| ventaoppo<0 && ventaoppo>oppo){
                    ventaoppo = parseInt(prompt("ERROR, Cuantos telefonos OPPO vendió"));
                }
                if(ventaoppo>=1 && ventaoppo<=oppo){
                oppo=oppo-ventaoppo;
                var totalcostooppo = ventaoppo*costooppo
                console.log("Se vendieron ", ventaoppo, " dispositivos, Quedan ", oppo," telefonos OPPO")
                console.log("Los ", ventaoppo, " telefonos OPPO tienen un costo de ", totalcostooppo, " pesos")
                }
                else{
                    alert("No hay esa cantidad de telefonos OPPO disponibles")
                }
            }
    var retorno = parseInt(prompt("¿Desea registrar mas ventas? \n (1) Si \n (2) No"));
            while(isNaN(retorno)|| retorno != 1 && retorno != 2){
                retorno = parseInt(prompt("ERROR ¿Desea registrar mas ventas? \n (1) Si \n (2) No"));
            }
        }
while(retorno==1)



