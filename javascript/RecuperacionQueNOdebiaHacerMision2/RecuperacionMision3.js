let nombres = ["Familiar"];
let pesos = [];
let estaturas = [];
let parentezcos = ["Parentezco"];
let imcfamiliares = ["IMC"];
let paraquemenufuncione = 0;
let paraquemenu2funcione = 0;
let nombre;
let peso;
let estatura;
let parentezco;
let imc;
let tabladeresultados;
let sumatoria=0;
while (paraquemenufuncione == 0) {
    let menu = Number(prompt("----Menu----\n1)ingresar familiares\n2)mostrar resultados\n3)Promedio imc de la familia\n4)salir"));
    while (menu != 1 && menu != 2 && menu != 3 && menu !=4) {
        alert("Por favor ingrese una opción válida");
        menu = Number(prompt("----Menu----\n1)ingresar familiares\n2)mostrar resultados\n3)Promedio imc de la familia\n4)salir"));
    }
    switch (menu) {
        case 1:
            nombre = prompt("ingrese el nombre del familiar que desea añadir");
            while (nombre==="") {
                nombre = prompt("No se puede dejar este espacio vacio, por favor ingrese un nombre");
            }
            nombres.push(nombre);
            parentezco = prompt("Indique cual es el parentezco de este familiar");
            while (parentezco === "") {
                parentezco = prompt("No se puede dejar este espacio vacio, por favor ingrese el parentezco");
            }
            parentezcos.push(parentezco);
            peso = Number(prompt("ingrese el peso de " + nombre + " por favor"));
            while (isNaN(peso) || peso === "" || peso === null || peso < 0) {
                peso = Number(prompt("por favor ingrese un peso válido"));
            }
            pesos.push(peso);
            estatura = Number(prompt("ingrese la estatura de " + nombre + " por favor"));
            while (isNaN(estatura) || estatura === "" || estatura === null || estatura < 0) {
                estatura = Number(prompt("por favor ingrese una estatura válida"));
            }
            estaturas.push(estatura);
            imc = peso / (estatura * estatura)
            imcfamiliares.push(imc.toFixed(2));
            alert("El familiar " + nombre + " se ha añadido correctamente");
            break;
        case 2:
            tabladeresultados=""
            for (var i = 0; i < nombres.length; i++) {

                if (i < nombres.length) {
                  tabladeresultados += nombres[i] + "\t";
                } else {
                  tabladeresultados += "\t";
                }
 
                if (i < parentezcos.length) {
                  tabladeresultados += parentezcos[i] + "\t";
                } else {
                  tabladeresultados += "\t";
                }
 
                if (i < imcfamiliares.length) {
                  tabladeresultados += imcfamiliares[i];
                }

                tabladeresultados += "\n";
              }

              alert(tabladeresultados);

            break;
        case 3:
            for ( var x=1 ; x <= pesos.length ; x++ ) {
                sumatoria += Number(imcfamiliares[x])
            }
            alert("el promedio de imc de su familia es "+(sumatoria/pesos.length));
            break;
        case 4:
            alert("aios <3");
            paraquemenufuncione=1;
            break;
    }

}
