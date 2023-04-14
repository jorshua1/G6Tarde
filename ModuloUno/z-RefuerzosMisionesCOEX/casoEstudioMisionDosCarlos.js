let x = 0;
let samsungt = 0;
let iphonet = 0;
let xiaomit = 0;
let motorolat = 0;
let huaweit = 0;
let oppot = 0;
let samsung;
let iphone;
let xiaomi;
let motorola;
let huawei;
let oppo;
let samsungvendidos=0;
let motorolavendidos=0;
let iphonevendidos=0;
let xiaomivendidos=0;
let huaweivendidos=0;
let oppovendidos=0;

let samsungv = Number(prompt("A que precio desea vender los samsung"));
while (isNaN(samsungv) || samsungv === "" || samsungv === null || samsungv <= 0) {
    samsungv = (prompt("Empezamos mal jorshua, ingrese algo serio"));
}
let iphonev = Number(prompt("A que precio desea vender los Iphone"));
while (isNaN(iphonev) || iphonev === "" || iphonev === null || iphonev <=0) {
    iphonev = (prompt("Empezamos mal jorshua, ingrese algo serio"));
}
let xiaomiv = Number(prompt("A que precio desea vender los Xiaomi"));
while (isNaN(xiaomiv) || xiaomiv === "" || xiaomiv === null || xiaomiv<=0) {
    xiaomiv = (prompt("Empezamos mal jorshua, ingrese algo serio"));
}
let motorolav = Number(prompt("A que precio desea vender los motorola"));
while (isNaN(motorolav) || motorolav === "" || motorolav === null || motorolav<=0) {
    motorolav = (prompt("Empezamos mal jorshua, ingrese algo serio"));
}
let huaweiv = Number(prompt("A que precio desea vender los Huawei"));
while (isNaN(huaweiv) || huaweiv === "" || huaweiv === null || huaweiv <=0) {
    huaweiv = (prompt("Empezamos mal jorshua, ingrese algo serio"));
}
let oppov = Number(prompt("A que precio desea vender los Oppo"));
while (isNaN(oppov) || oppov === "" || oppov === null || oppov <=0) {
    oppov = (prompt("Empezamos mal jorshua, ingrese algo serio"));
}

while (x === 0) {
    let x1=0;
    let x2=0;
    let menu = Number(prompt("Menu\n1)Agregar celulares\n2)Vender celulares\n3)Mostrar inventario\n4)Mostrar el total de dinero en ventas\n5)Salir"));
    while (menu != 1 && menu != 2 && menu != 3 && menu != 4 && menu != 5) {
        alert("No jorshua, ingrese una opción válida del menú, no sea bobo");
        menu = Number(prompt("Menu\n1)Agregar celulares\n2)Vender celulares\n3)Mostrar inventario\n4)Mostrar el total de dinero en ventas\n5)Salir"));
    }
    switch (menu) {
        case 1:
            while (x1 === 0) {
                alert("Por favor seleccione la marca de celular que desea añadir al inventario")
                let menu2 = Number(prompt("Menu\n1)Samsung\n2)Iphone\n3)Xiaomi\n4)Motorola\n5Huawei\n6)Oppo\n7)Salir"));
                while (menu2 !== 1 && menu2 !== 2 && menu2 !== 3 && menu2 !== 4 && menu2 !== 5 && menu2 !== 6 && menu2 !== 7) {
                    alert("No jorshua, ingrese una opción válida del menú, no sea bobo");
                    menu2 = Number(prompt("Menu\n1)Samsung\n2)Iphone\n3)Xiaomi\n4)Motorola\n5Huawei\n6)Oppo\n7)Salir"));
                }
                switch (menu2) {
                    case 1:
                        samsung = parseInt(prompt("ingrese la cantidad de celulares Samsung que desea agregar al inventario"));
                        while (isNaN(samsung) || samsung === "" || samsung === null || samsung < 0) {
                            alert("No jorshua, no, no va a pasar");
                            samsung = parseInt(prompt("ingrese un numero válido"));
                        }
                        samsungt += samsung;
                        break;
                    case 2:
                        iphone = parseInt(prompt("ingrese la cantidad de celulares Iphone que desea agregar al inventario"));
                        while (isNaN(iphone) || iphone === "" || iphone === null || iphone < 0) {
                            alert("No jorshua, no, no va a pasar");
                            iphone = parseInt(prompt("ingrese un numero válido"));
                        }
                        iphonet += iphone;
                        break;
                    case 3:
                        xiaomi = parseInt(prompt("ingrese la cantidad de celulares Xiaomi que desea agregar al inventario"));
                        while (isNaN(xiaomi) || xiaomi === "" || xiaomi === null || xiaomi < 0) {
                            alert("No jorshua, no, no va a pasar");
                            xiaomi = parseInt(prompt("ingrese un numero válido"));
                        }
                        xiaomit += xiaomi;
                        break;
                    case 4:
                        motorola = parseInt(prompt("ingrese la cantidad de celulares Motorola que desea agregar al inventario"));
                        while (isNaN(motorola) || motorola === "" || motorola === null || motorola < 0) {
                            alert("No jorshua, no, no va a pasar");
                            motorola = parseInt(prompt("ingrese un numero válido"));
                        }
                        motorolat += motorola;
                        break;
                    case 5:
                        huawei = parseInt(prompt("ingrese la cantidad de celulares Huawei que desea agregar al inventario"));
                        while (isNaN(huawei) || huawei === "" || huawei === null || huawei < 0) {
                            alert("No jorshua, no, no va a pasar");
                            huawei = parseInt(prompt("ingrese un numero válido"));
                        }
                        huaweit += huawei;
                        break;
                    case 6:
                        oppo = parseInt(prompt("ingrese la cantidad de celulares Oppo que desea agregar al inventario"));
                        while (isNaN(oppo) || oppo === "" || oppo === null || oppo < 0) {
                            alert("No jorshua, no, no va a pasar");
                            oppo = parseInt(prompt("ingrese un numero válido"));
                        }
                        oppot += oppo;
                        break;
                    case 7:
                        x1 = 1;
                        break;
                }
            }
            break;
        case 2:
            while (x2 === 0) {
                alert("Por favor seleccione la marca de celular que desea Vender")
                let menu3 = Number(prompt("Menu\n1)Samsung\n2)Iphone\n3)Xiaomi\n4)Motorola\n5Huawei\n6)Oppo\n7)Salir"));
                while (menu3 !== 1 && menu3 !== 2 && menu3 !== 3 && menu3 !== 4 && menu3 !== 5 && menu3 !== 6 && menu3 !== 7) {
                    alert("No jorshua, ingrese una opción válida del menú, no sea bobo");
                    menu3 = Number(prompt("Menu\n1)Samsung\n2)Iphone\n3)Xiaomi\n4)Motorola\n5Huawei\n6)Oppo\n7)Salir"));
                }
                switch (menu3) {
                    case 1:
                        samsung = parseInt(prompt("ingrese la cantidad de celulares Samsung que desea vender"));
                        while (isNaN(samsung) || samsung === "" || samsung === null || samsung < 0) {
                            alert("No jorshua, no, no va a pasar");
                            samsung = parseInt(prompt("ingrese un numero válido"));
                        }
                        if (samsung > samsungt) {
                            alert("No hay suficiente cantidad en el inventario, solo hay " + samsungt + " unidades disponibles");
                        } else {
                            samsungt -= samsung;
                            samsungvendidos += samsung;
                        }
                        break;
                    case 2:
                        iphone = parseInt(prompt("ingrese la cantidad de celulares Iphone que desea vender"));
                        while (isNaN(iphone) || iphone === "" || iphone === null || iphone < 0) {
                            alert("No jorshua, no, no va a pasar");
                            iphone = parseInt(prompt("ingrese un numero válido"));
                        }
                        if (iphone > iphonet) {
                            alert("No hay suficiente cantidad en el inventario, solo hay " + iphonet + " unidades disponibles");
                        } else {
                            iphonet -= iphone;
                            iphonevendidos += iphone;
                        }
                        break;
                    case 3:
                        xiaomi = parseInt(prompt("ingrese la cantidad de celulares Xiaomi que desea vender"));
                        while (isNaN(xiaomi) || xiaomi === "" || xiaomi === null || xiaomi < 0) {
                            alert("No jorshua, no, no va a pasar");
                            xiaomi = parseInt(prompt("ingrese un numero válido"));
                        }
                        if (xiaomi > xiaomit) {
                            alert("No hay suficiente cantidad en el inventario, solo hay " + xiaomit + " unidades disponibles");
                        } else {
                            xiaomit -= xiaomi;
                            xiaomivendidos += xiaomi;
                        }
                        break;
                    case 4:
                        motorola = parseInt(prompt("ingrese la cantidad de celulares Motorola que desea vender"));
                        while (isNaN(motorola) || motorola === "" || motorola === null || motorola < 0) {
                            alert("No jorshua, no, no va a pasar");
                            motorola = parseInt(prompt("ingrese un numero válido"));
                        }
                        if (motorola > motorolat) {
                            alert("No hay suficiente cantidad en el inventario, solo hay " + motorolat + " unidades disponibles");
                        } else {
                            motorolat -= motorola;
                            motorolavendidos+=motorola;
                        }
                        break;
                    case 5:
                        huawei = parseInt(prompt("ingrese la cantidad de celulares Motorola que desea vender"));
                        while (isNaN(huawei) || huawei === "" || huawei === null || huawei < 0) {
                            alert("No jorshua, no, no va a pasar");
                            huawei = parseInt(prompt("ingrese un numero válido"));
                        }
                        if (motorola > motorolat) {
                            alert("No hay suficiente cantidad en el inventario, solo hay " + huaweit + " unidades disponibles");
                        } else {
                            huaweit -= huawei;
                            huaweivendidos += huawei;
                        }
                        break;
                    case 6:
                        oppo = parseInt(prompt("ingrese la cantidad de celulares Motorola que desea vender"));
                        while (isNaN(oppo) || oppo === "" || oppo === null || oppo < 0) {
                            alert("No jorshua, no, no va a pasar");
                            oppo = parseInt(prompt("ingrese un numero válido"));
                        }
                        if (oppo > oppot) {
                            alert("No hay suficiente cantidad en el inventario, solo hay " + oppot + " unidades disponibles");
                        } else {
                            oppot -= oppo;
                            oppovendidos += oppo;
                        }
                        break;
                    case 7:
                        x2 = 1;
                        break;
                }
            }
            break;
        case 3:
            alert("inventario:\nSamsung: " + samsungt + "\nIphone: " + iphonet + "\nXiaomi: " + xiaomit + "\nMotorola: " + motorolat + "\nHuawei: " + huaweit + "\nOppo: " + oppot);
            break;
        case 4:
            let total = (samsungv * samsungvendidos) + (iphonev * iphonevendidos) + (xiaomiv * xiaomivendidos) + (motorolavendidos * motorolav) + (huaweiv * huaweivendidos) + (oppov * oppovendidos) + (huaweiv * huaweivendidos);
            alert("hasta ahora se lleva una venta con un total de dinero de: $" + total);
            break;
        case 5:
            alert("gracias, gracias, vuelva pronto xoxo");
            x = 1;
            break;

    }
}
