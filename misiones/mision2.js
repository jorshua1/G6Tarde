
var precio1 = 0;
var precio2 = 0;
var precio3 = 0;
var precio4 = 0;
var precio5 = 0;
var precio6 = 0;
var totalDeVentas = 0;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

do {
    var menu = Number(prompt("INGRSE LA OPCION QUE DESEA:\n 1 = Registrar telefonos. \n 2 = Venta de telefonos.\n 3 = Dinero total \n 0 = salir"));
    while (isNaN(menu) || menu < 0 || menu > 3) {
        menu = Number(prompt("INGRESE UNA OPCION VALIDA"));
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    switch (menu) {
        case 1:
            var marca1 = Number(prompt("INGRESE LA CANTIDA DE TELEFONOS SAMSUNG"));
            while (isNaN(marca1) || marca1 < 0) {
                marca1 = Number(prompt("INGRESE UNA CANTIDAD VALIDA"));
            }

            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            var marca2 = Number(prompt("INGRESE LA CANTIDA DE TELEFONOS IPHONE"));
            while (isNaN(marca2) || marca2 < 0) {
                marca2 = Number(prompt("INGRESE UNA CANTIDAD VALIDA"));
            }

            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            var marca3 = Number(prompt("INGRESE LA CANTIDA DE TELEFONOS XIAOMI"));
            while (isNaN(marca3) || marca3 < 0) {
                marca3 = Number(prompt("INGRESE UNA CANTIDAD VALIDA"));
            }
            
            
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            var marca4 = Number(prompt("INGRESE LA CANTIDA DE TELEFONOS MOTOROLA"));
            while (isNaN(marca4) || marca4 < 0) {
                marca4 = Number(prompt("INGRESE UNA CANTIDAD VALIDA"));
            }           
            
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            
            var marca5 = Number(prompt("INGRESE LA CANTIDA DE TELEFONOS HUAWEI"));
            while (isNaN(marca5) || marca5 < 0) {
                marca5 = Number(prompt("INGRESE UNA CANTIDAD VALIDA"));
            }           
            
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            
            var marca6 = Number(prompt("INGRESE LA CANTIDA DE TELEFONOS OPPO"));
            while (isNaN(marca6) || marca6 < 0) {
                marca6 = Number(prompt("INGRESE UNA CANTIDAD VALIDA"));
            }
            
            break;
            
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            
            case 2:
                var menu2 = parseInt(prompt("INGRESE LA OPCION DE LA MARCA QUE DESEA: Samsung = 1 \n Iphone = 2 \n Xiaomi = 3 \n Motorola = 4 \n Huawei = 5 \n OPPO = 6  "));
                
                switch (menu2) {
                    case 1:
                        var precioSam = Number(prompt("INGRESE EL PRECIO POR UNIDAD"));
                        while (isNaN(precioSam) || precioSam < 0) {
                            precioSam = Number(prompt("INGRESE UN PRECIO VALIDO"));
                        }
                        var SamsungVendidos = parseInt(prompt("INGRESE LA CANTIDAD DE TELEFONOS SAMSUNG VENDIDOS"));
                        while (isNaN(SamsungVendidos) || SamsungVendidos < 0) {
                            SamsungVendidos = parseInt(prompt("INGRESE LA CANTIDAD VALIDA"));
                        }
                        
                        precio1 = precioSam * SamsungVendidos;
                        marca1 = marca1 - SamsungVendidos;
                        
                        break;
                        
                        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        
                        case 2:
                            var precioIphon = Number(prompt("INGRSE EL PRECIO POR UNIDAD"));
                            while (isNaN(precioIphon) || precioIphon < 0) {
                                precioIphon = Number(prompt("INGRESE UN PRECIO VALIDO"));
                            }
                            var IphonesVendidos = parseInt(prompt("INGRESE LA CANTIDAD DE TELEFONOS IPHONES VENDIDOS"));
                            while (isNaN(IphonesVendidos) || IphonesVendidos < 0) {
                                IphonesVendidos = parseInt(prompt("INGRESE LA CANTIDAD VALIDA"));
                            }
                            precio2 = precioIphon * IphonesVendidos;
                            marca2 = marca2 - IphonesVendidos;
                            
                            
                            break;
                            
                            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                            
                            case 3:
                                var precioXia = Number(prompt("INGRSE EL PRECIO POR UNIDAD"));
                                while (isNaN(precioXia) || precioXia < 0) {
                                    precioXia = Number(prompt("INGRESE UN PRECIO VALIDO"));
                                }
                                var XiaomiVendidos = parseInt(prompt("INGRESE LA CANTIDAD DE TELEFONOS XIAOMI VENDIDOS"));
                                while (isNaN(XiaomiVendidos) || XiaomiVendidos < 0) {
                                    XiaomiVendidos = parseInt(prompt("INGRESE LA CANTIDAD VALIDA"));
                                }
                                precio3 = precioXia * XiaomiVendidos;
                                marca3 = marca3 - XiaomiVendidos;
                                
                    break;

                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                case 4:
                    var precioMot = Number(prompt("INGRSE EL PRECIO POR UNIDAD"));
                    while (isNaN(precioMot) || precioMot < 0) {
                        precioMot = Number(prompt("INGRESE UN PRECIO VALIDO"));
                    }
                    var MotorolasVendidos = parseInt(prompt("INGRESE LA CANTIDAD DE TELEFONOS MOTOROLA VENDIDOS"));
                    while (isNaN(MotorolasVendidos) || MotorolasVendidos < 0) {
                        MotorolasVendidos = parseInt(prompt("INGRESE LA CANTIDAD VALIDA"));
                    }

                    precio4 = precioMot * MotorolasVendidos;
                    marca4 = marca4 - MotorolasVendidos;

                    break;

                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                case 5:
                    var precioHua = Number(prompt("INGRSE EL PRECIO POR UNIDAD"));
                    while (isNaN(precioHua) || precioHua < 0) {
                        precioHua = Number(prompt("INGRESE UN PRECIO VALIDO"));
                    }
                    var HuaweiVendidos = parseInt(prompt("INGRESE LA CANTIDAD DE TELEFONOS HUAWEI VENDIDOS"));
                    while (isNaN(HuaweiVendidos) || HuaweiVendidos < 0) {
                        HuaweiVendidos = parseInt(prompt("INGRESE LA CANTIDAD VALIDA"));
                    }

                    precio5 = precioHua * HuaweiVendidos;
                    marca5 = marca5 - HuaweiVendidos;

                    break;

                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                case 6:
                    var precioOppo = Number(prompt("INGRSE EL PRECIO POR UNIDAD"));
                    while (isNaN(precioSam) || precioSam < 0) {
                        precioSam = Number(prompt("INGRESE UN PRECIO VALIDO"));
                    }
                    var OppoVendidos = parseInt(prompt("INGRESE LA CANTIDAD DE TELEFONOS  OPPO VENDIDOS"));
                    while (isNaN(OppoVendidos) || OppoVendidos < 0) {
                        OppoVendidos = parseInt(prompt("INGRESE LA CANTIDAD VALIDA"));
                    }

                    precio6 = precioOppo * OppoVendidos;
                    marca6 = marca6 - OppoVendidos;

                    break;

                default:
                    break;

                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


            }
        case 3:

            totalDeVentas = precio1 + precio2 + precio3 + precio4 + precio5 + precio6;
            console.log("Telefonos Samsungs disponibles: " + marca1);
            console.log("Telefonos Iphones disponibles: " + marca2);
            console.log("Telefonos Xiaomis disponibles: " + marca3);
            console.log("Telefonos Motorolas disponibles: " + marca4);
            console.log("Telefonos Huaweis disponibles: " + marca5);
            console.log("Telefonos Oppo disponibles: " + marca6);
            console.log("El total es ventas es de: " + totalDeVentas);


            break;
        default:
            break;
    }
}
while (menu !== 0) {}








