let cantidaddetalentos = 0;
let menuprincipal = 0;
let menucanttalentos = 0;
let ordenarlospromedios = [];
let datosdelostalentos = [];
let notamision1 = [];
let notamision2 = [];
let notamision3 = [];
let notapuebafinal = [];
let mejornotaM1 = -Infinity;
let talentoconmejornotaM1 = -1;
let mejornotaM2 = -Infinity;
let talentoconmejornotaM2 = -1;
let mejornotaM3 = -Infinity;
let talentoconmejornotaM3 = -1;
let promediotalentos = [];
let resultado = '';
let codigo;
while (menuprincipal !== 13) {
    menuprincipal = Number(prompt("bienvenido\n elige una de las siguientes opciones\n 1.Ingresar cantidad de talentos \n 2.registar datos de los talentos\n 3.Registrar nota de Misión 1\n 4.Registrar nota de Misión 2\n 5.Registrar nota de Misión 3\n 6.Registrar prueba de nivel final\n 7.Mostrar quien obtuvo la mejor nota en la Misión 1\n 8.Mostrar quien obtuvo la mejor nota en la Misión 2\n 9.Mostrar quien obtuvo la mejor nota en la Misión 3\n 10. promedio de cada talento\n 11. Mostrar todos los datos y notas de los talentos\n 12.Nombre del talento que desarrollo el ejercicio\n 13.salir"));
    while (menuprincipal < 0 || isNaN(menuprincipal) || menuprincipal > 13) {
        alert("error dato invalido");
        menuprincipal = Number(prompt("bienvenido\n elige una de las siguientes opciones\n 1.Ingresar cantidad de talentos \n 2.registar datos de los talentos\n 3.Registrar nota de Misión 1\n 4.Registrar nota de Misión 2\n 5.Registrar nota de Misión 3\n 6.Registrar prueba de nivel final\n 7.Mostrar quien obtuvo la mejor nota en la Misión 1\n 8.Mostrar quien obtuvo la mejor nota en la Misión 2\n 9.Mostrar quien obtuvo la mejor nota en la Misión 3\n 10. promedio de cada talento\n 11. Mostrar todos los datos y notas de los talentos\n 12.Nombre del talento que desarrollo el ejercicio\n 13.salir"));
    }
    while (cantidaddetalentos == 0 && menuprincipal != 1 && menuprincipal!=13) {
        alert("primero tiene que ingresar la cantidad de talentos");
        menuprincipal = Number(prompt("bienvenido\n elige una de las siguientes opciones\n 1.Ingresar cantidad de talentos \n 2.registar datos de los talentos\n 3.Registrar nota de Misión 1\n 4.Registrar nota de Misión 2\n 5.Registrar nota de Misión 3\n 6.Registrar prueba de nivel final\n 7.Mostrar quien obtuvo la mejor nota en la Misión 1\n 8.Mostrar quien obtuvo la mejor nota en la Misión 2\n 9.Mostrar quien obtuvo la mejor nota en la Misión 3\n 10. promedio de cada talento\n 11. Mostrar todos los datos y notas de los talentos\n 12.Nombre del talento que desarrollo el ejercicio\n 13.salir"));
    }
    switch (menuprincipal) {
        case 1:
            if (cantidaddetalentos == 0) {
                menucanttalentos = Number(prompt("advertencia\n despues de que ingrese la cantidad de talentos NO se puede modificar, porfavor ingrese:\n 1.cancelar \n 2.continuar "));
                while (menucanttalentos !== 1 && menucanttalentos !== 2) {
                    alert("error, dato invalido");
                    menucanttalentos = Number(prompt("advertencia\n despues de que ingrese la cantidad de talentos NO se puede modificar, porfavor ingrese:\n 1.cancelar \n 2.continuar "));
                }
                if (menucanttalentos == 2) {
                    cantidaddetalentos = Number(prompt("ingrese la cantidad de talentos"));
                    while (cantidaddetalentos < 0 || isNaN(cantidaddetalentos)) {
                        alert("error, dato invalido");
                        cantidaddetalentos = Number(prompt("ingrese la cantidad de talentos"));
                    }
                }
                else {
                    alert("se cancelo correctamente");
                }
            }
            else {
                alert("no se puede modificar la cantidad de talentos");
            }
            break;
        case 2:
            if (datosdelostalentos != 0 && datosdelostalentos != undefined) {
                advertencia = Number(prompt("ya se han ingresado datos\n desea sobre escribirlos?\n 1.si\n 2.no"));
                switch (advertencia) {
                    case 1:
                        alert("ahora se sobre escribiran los datos nombre y codigo");
                        let contador = cantidaddetalentos;
                        for (let i = 0; i < cantidaddetalentos; i++) {
                            datosdelostalentos[i] = [];
                            for (let a = 0; a < 2; a++) {
                                if (a == 0) {
                                    datosdelostalentos[i][a] = prompt("ingrese el nombre de los talentos (faltan " + contador + ")");
                                    while (datosdelostalentos[i][a].value === "" || !isNaN(datosdelostalentos[i][a])) {
                                        alert("error, dato invalido");
                                        datosdelostalentos[i][a] = prompt("ingrese el nombre de los talentos (faltan " + contador + ")");
                                    }
                                    contador--;
                                }
                                else {
                                    let numeroRepetido = true;
                                    while (numeroRepetido) {
                                        codigo = Number(prompt("ingrese el codigo de " + datosdelostalentos[i][0]));
                                        while (isNaN(codigo) || codigo < 0) {
                                            alert("error, dato invalido");
                                            codigo = Number(prompt("ingrese el codigo de " + datosdelostalentos[i][0]));
                                        }
                                        while (datosdelostalentos.some((fila) => fila.includes(codigo)) || isNaN(codigo) || codigo < 0) {
                                            alert("no puede ingresar ese codigo\n ese dato es invalido o es un el codigo ya esta en uso");
                                            codigo = Number(prompt("ingrese el codigo de " + datosdelostalentos[i][0]));
                                        }
                                        datosdelostalentos[i][a] = codigo;
                                        numeroRepetido = false;
                                    }
                                }
                            }
                        }

                }
            }
            else {
                alert("ahora se registraran los datos nombre y codigo");
                let contador = cantidaddetalentos;
                for (let i = 0; i < cantidaddetalentos; i++) {
                    datosdelostalentos[i] = [];
                    for (let a = 0; a < 2; a++) {
                        if (a == 0) {
                            datosdelostalentos[i][a] = prompt("ingrese el nombre de los talentos (faltan " + contador + ")");
                            while (datosdelostalentos[i][a].value === "" || !isNaN(datosdelostalentos[i][a])) {
                                alert("error, dato invalido");
                                datosdelostalentos[i][a] = prompt("ingrese el nombre de los talentos (faltan " + contador + ")");
                            }
                            contador--;
                        }
                        else {
                            let numeroRepetido = true;
                            while (numeroRepetido) {
                                codigo = Number(prompt("ingrese el codigo de " + datosdelostalentos[i][0]));
                                while (isNaN(codigo) || codigo < 0) {
                                    alert("error, dato invalido");
                                    codigo = Number(prompt("ingrese el codigo de " + datosdelostalentos[i][0]));
                                }
                                while (datosdelostalentos.some((fila) => fila.includes(codigo))|| isNaN(codigo) || codigo < 0) {
                                    alert("no puede ingresar ese codigo\n ese codigo ya fue asignado");
                                    codigo = Number(prompt("ingrese el codigo de " + datosdelostalentos[i][0]));
                                }
                                    datosdelostalentos[i][a] = codigo;
                                numeroRepetido = false;
                            }
                        }
                    }
                }
            }
            break;
        case 3:
            if (datosdelostalentos != 0 && datosdelostalentos != undefined) {
                alert("se ingresaran las notas de la Mision 1");
                for (let i = 0; i < cantidaddetalentos; i++) {
                    notamision1[i] = Number(prompt("ingrese la notan de la Mision 1 de " + datosdelostalentos[i][0]));
                    while (notamision1[i] < 0 || notamision1[i] > 100 || isNaN(notamision1[i])) {
                        alert("error, dato invalido");
                        notamision1[i] = Number(prompt("ingrese la notan de la Mision 1 de " + datosdelostalentos[i][0]));
                    }
                }
            }
            else {
                alert("no se pueden ingresar notas sin antes haber diligenciado los datos de los talentos")
            }
            break;
        case 4:
            if (datosdelostalentos != 0 && datosdelostalentos != undefined) {
                alert("se ingresaran las notas de la Mision 2");
                for (let i = 0; i < cantidaddetalentos; i++) {
                    notamision2[i] = Number(prompt("ingrese la notan de la Mision 2 de " + datosdelostalentos[i][0]));
                    while (isNaN(notamision2[i]) || notamision2 < 0 || notamision2 > 100) {
                        alert("error, dato invalido");
                        notamision2[i] = Number(prompt("ingrese la notan de la Mision 2 de " + datosdelostalentos[i][0]));
                    }
                }
            }
            else {
                alert("no se pueden ingresar notas sin antes haber diligenciado los datos de los talentos")
            }
            break;
        case 5:
            if (datosdelostalentos != 0 && datosdelostalentos != undefined) {
                alert("se ingresara la nota de la mision 3");
                for (let i = 0; i < cantidaddetalentos; i++) {
                    notamision3[i] = Number(prompt("ingrese la notan de la Mision 3 de " + datosdelostalentos[i][0]));
                    while (isNaN(notamision3[i]) || notamision3 < 0 || notamision3 > 100) {
                        alert("error, dato invalido");
                        notamision3[i] = Number(prompt("ingrese la notan de la Mision 3 de " + datosdelostalentos[i][0]));
                    }
                }
            }
            else {
                alert("no se pueden ingresar notas sin antes haber diligenciado los datos de los talentos")
            }
            break;
        case 6:
            if (datosdelostalentos != 0 && datosdelostalentos != undefined) {
                alert("se ingresara la nota de la prueba final");
                for (let i = 0; i < cantidaddetalentos; i++) {
                    notapuebafinal[i] = Number(prompt("ingrese la notan de la prueba final de " + datosdelostalentos[i][0]));
                    while (isNaN(notapuebafinal[i]) || notapuebafinal < 0 || notapuebafinal > 100) {
                        alert("error, dato invalido");
                        notapuebafinal[i] = Number(prompt("ingrese la notan de la prueba final de " + datosdelostalentos[i][0]));
                    }
                }
            }
            else {
                alert("no se pueden ingresar notas sin antes haber diligenciado los datos de los talentos")
            }
            break;
        case 7:
            if (notamision1 != 0 && notamision1 != undefined) {
                for (let i = 0; i < notamision1.length; i++) {
                    if (notamision1[i] > mejornotaM1) {
                        mejornotaM1 = notamision1[i];
                        talentoconmejornotaM1 = i;
                    }
                }
                alert(datosdelostalentos[talentoconmejornotaM1][0] + " fue quien saco la mejor nota en la Mision 1, su nota fue " + mejornotaM1);
            }
            else {
                alert("primero debe ingresar la nota de la mision 1");
            }
            break;
        case 8:
            for (let i = 0; i < notamision2.length; i++) {
                if (notamision2[i] > mejornotaM2) {
                    mejornotaM2 = notamision2[i];
                    talentoconmejornotaM2 = i;
                }
            }
            alert(datosdelostalentos[talentoconmejornotaM2][0] + " fue quien saco la mejor nota en la Mision 2, su nota fue " + mejornotaM2);
            break;
        case 9:
            for (let i = 0; i < notamision3.length; i++) {
                if (notamision3[i] > mejornotaM3) {
                    mejornotaM3 = notamision3[i];
                    talentoconmejornotaM3 = i;
                }
            }
            alert(datosdelostalentos[talentoconmejornotaM3][0] + " fue quien saco la mejor nota en la Mision 3, su nota fue " + mejornotaM3);
            break;
        case 10:
            if (notamision1 != 0 && notamision1 != undefined && notamision2 != 0 && notamision2 != undefined && notamision3 != 0 && notamision3 != undefined) {
                for (let i = 0; i < cantidaddetalentos; i++) {
                    promediotalentos[i] = (notamision1[i] + notamision2[i] + notamision3[i] + notapuebafinal[i]) / 4;
                }
                for (let i = 0; i < cantidaddetalentos; i++) {
                    ordenarlospromedios[i] = [];
                    for (let a = 0; a < 2; a++) {
                        if (a == 0) {
                            ordenarlospromedios[i][a] = datosdelostalentos[i][0];
                        }
                        else {
                            ordenarlospromedios[i][a] = promediotalentos[i];
                        }
                    }
                }
                for (let i = 0; i < cantidaddetalentos; i++) {
                    resultado += `${ordenarlospromedios[i][0]} - Promedio: ${ordenarlospromedios[i][1]}\n`;
                }
                alert(resultado);
            }
            else {
                alert("no se puede dar el promedio, falta ingresar notas")
            }
            break;

        case 11:
            if (datosdelostalentos != 0 && datosdelostalentos != undefined && notamision1 != 0 && notamision1 != undefined && notamision2 != 0 && notamision2 != undefined && notamision3 != 0 && notamision3 != undefined) {
                let Mostrartodo = '';
                for (let i = 0; i < cantidaddetalentos; i++) {
                    Mostrartodo += `${datosdelostalentos[1][i]} - ${datosdelostalentos[i][0]} - Mision 1: ${notamision1[i]} - Mision 2: ${notamision2[i]} - Mision 3: ${notamision3[i]} - prueba final: ${notapuebafinal[i]}\n`;
                }
                alert(Mostrartodo);
            }
            else {
                alert("no se puede realizar la operacion porque faltan datos");
            }
            break;
        case 12:
            alert("Brayan Alejandro Santamaria Prieto\n cc.1005152164\n grupo: G6Tarde");
            break;
    }
} 
